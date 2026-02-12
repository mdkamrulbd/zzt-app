import crypto from "crypto";
import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

const dataFilePath = path.join(process.cwd(), "data", "content.json");
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 25;
const RATE_LIMIT_LOGIN_MAX = 10;

const getClientIp = (request) => {
  const forwarded = request.headers.get("x-forwarded-for") || "";
  const ip = forwarded.split(",")[0]?.trim();
  return ip || request.headers.get("x-real-ip") || "unknown";
};

const checkRateLimit = (key, limit) => {
  const now = Date.now();
  const entry = rateLimitStore.get(key);
  if (!entry || now - entry.start >= RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(key, { start: now, count: 1 });
    return true;
  }
  if (entry.count >= limit) {
    return false;
  }
  entry.count += 1;
  return true;
};

const validatePasswordPolicy = (password) => {
  if (password.length < 8) {
    return "New password must be at least 8 characters.";
  }
  const hasLetter = /[A-Za-z]/.test(password);
  const hasNumber = /\d/.test(password);
  if (!hasLetter || !hasNumber) {
    return "New password must include letters and numbers.";
  }
  return "";
};

const normalizeSlide = (slide) => ({
  title: String(slide?.title || ""),
  description: String(slide?.description || ""),
  image: String(slide?.image || ""),
  alt: String(slide?.alt || "")
});

const normalizeProfile = (profile) => ({
  userId: String(profile?.userId || "admin"),
  displayName: String(profile?.displayName || "Administrator"),
  email: String(profile?.email || "")
});

const normalizeProject = (project) => ({
  title: String(project?.title || ""),
  description: String(project?.description || ""),
  image: String(project?.image || ""),
  alt: String(project?.alt || "")
});

const normalizeProduct = (product) => ({
  title: String(product?.title || ""),
  description: String(product?.description || ""),
  image: String(product?.image || ""),
  alt: String(product?.alt || "")
});

const normalizeClient = (client) => ({
  image: String(client?.image || ""),
  alt: String(client?.alt || "")
});

const normalizeStat = (stat) => ({
  label: String(stat?.label || ""),
  value: Number.isFinite(Number(stat?.value)) ? Number(stat?.value) : 0,
  icon: String(stat?.icon || ""),
  suffix: stat?.suffix ? String(stat.suffix) : ""
});

const normalizeTextItem = (item) => ({
  title: String(item?.title || ""),
  description: String(item?.description || "")
});

const normalizeHomeSection = (section) => ({
  title: String(section?.title || ""),
  description: String(section?.description || ""),
  primaryCtaLabel: String(section?.primaryCtaLabel || ""),
  primaryCtaLink: String(section?.primaryCtaLink || ""),
  secondaryCtaLabel: String(section?.secondaryCtaLabel || ""),
  secondaryCtaLink: String(section?.secondaryCtaLink || ""),
  badges: Array.isArray(section?.badges) ? section.badges.map((item) => String(item || "")) : []
});

const normalizeFooterLink = (item) => ({
  label: String(item?.label || ""),
  url: String(item?.url || ""),
  icon: String(item?.icon || "")
});

const normalizeFooter = (footer) => ({
  companyName: String(footer?.companyName || ""),
  companyDesc: String(footer?.companyDesc || ""),
  meta: Array.isArray(footer?.meta) ? footer.meta.map((item) => String(item || "")) : [],
  quickLinks: Array.isArray(footer?.quickLinks) ? footer.quickLinks.map(normalizeFooterLink) : [],
  servicesLinks: Array.isArray(footer?.servicesLinks) ? footer.servicesLinks.map(normalizeFooterLink) : [],
  socialLinks: Array.isArray(footer?.socialLinks) ? footer.socialLinks.map(normalizeFooterLink) : []
});

const mapFooterItemsToFooter = (items) => {
  const safeItems = Array.isArray(items) ? items : [];
  return normalizeFooter({
    quickLinks: safeItems.filter((item) => item?.group === "quick"),
    servicesLinks: safeItems.filter((item) => item?.group === "services")
  });
};

const normalizeContent = (payload) => ({
  homeSection: normalizeHomeSection(payload?.homeSection || {}),
  slides: Array.isArray(payload?.slides) ? payload.slides.map(normalizeSlide) : [],
  projects: Array.isArray(payload?.projects) ? payload.projects.map(normalizeProject) : [],
  products: Array.isArray(payload?.products) ? payload.products.map(normalizeProduct) : [],
  clients: Array.isArray(payload?.clients) ? payload.clients.map(normalizeClient) : [],
  stats: Array.isArray(payload?.stats) ? payload.stats.map(normalizeStat) : [],
  about: Array.isArray(payload?.about) ? payload.about.map(normalizeTextItem) : [],
  partnerChoice: Array.isArray(payload?.partnerChoice) ? payload.partnerChoice.map(normalizeTextItem) : [],
  services: Array.isArray(payload?.services) ? payload.services.map(normalizeTextItem) : [],
  industries: Array.isArray(payload?.industries) ? payload.industries.map(normalizeTextItem) : [],
  faq: Array.isArray(payload?.faq) ? payload.faq.map(normalizeTextItem) : [],
  contactReach: Array.isArray(payload?.contactReach) ? payload.contactReach.map(normalizeTextItem) : [],
  footer: normalizeFooter(payload?.footer || mapFooterItemsToFooter(payload?.footerItems))
});

const hashPassword = (password, salt) => {
  const usedSalt = salt || crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, usedSalt, 100000, 64, "sha512").toString("hex");
  return { hash, salt: usedSalt };
};

const verifyPassword = (password, salt, hash) => {
  if (!salt || !hash) {
    return false;
  }
  const computed = crypto.pbkdf2Sync(password, salt, 100000, 64, "sha512").toString("hex");
  return crypto.timingSafeEqual(Buffer.from(computed, "hex"), Buffer.from(hash, "hex"));
};

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const raw = await fs.readFile(dataFilePath, "utf8");
    const parsed = JSON.parse(raw);
    const profileSafe = normalizeProfile(parsed?.adminProfile || {});
    const normalized = normalizeContent(parsed);
    return NextResponse.json({ ...parsed, ...normalized, adminProfile: profileSafe });
  } catch (error) {
    if (error?.code === "ENOENT") {
      return NextResponse.json(
        {
          adminProfile: normalizeProfile({}),
          homeSection: normalizeHomeSection({}),
          slides: [],
          projects: [],
          products: [],
          clients: [],
          stats: [],
          about: [],
          partnerChoice: [],
          services: [],
          industries: [],
          faq: [],
          contactReach: [],
          footer: normalizeFooter({})
        },
        { status: 200 }
      );
    }
    return NextResponse.json({ error: "Failed to load content" }, { status: 500 });
  }
}

export async function PUT(request) {
  const ip = getClientIp(request);
  if (!checkRateLimit(`put:${ip}`, RATE_LIMIT_MAX)) {
    return NextResponse.json({ error: "Too many requests. Try again later." }, { status: 429 });
  }
  try {
    const payload = await request.json();
    const normalized = normalizeContent(payload);
    const normalizedProfile = normalizeProfile(payload?.adminProfile || {});
    let existingProfile = {};
    try {
      const existingRaw = await fs.readFile(dataFilePath, "utf8");
      const existing = JSON.parse(existingRaw);
      existingProfile = existing?.adminProfile || {};
    } catch (error) {
      if (error?.code !== "ENOENT") {
        throw error;
      }
    }
    let passwordHash = String(existingProfile?.passwordHash || "");
    let passwordSalt = String(existingProfile?.passwordSalt || "");
    const passwordChange = payload?.passwordChange || {};
    const newPassword = typeof passwordChange?.newPassword === "string" ? passwordChange.newPassword : "";
    const currentPassword =
      typeof passwordChange?.currentPassword === "string" ? passwordChange.currentPassword : "";

    if (newPassword) {
      const passwordIssue = validatePasswordPolicy(newPassword);
      if (passwordIssue) {
        return NextResponse.json({ error: passwordIssue }, { status: 400 });
      }
      if (passwordHash) {
        if (!currentPassword || !verifyPassword(currentPassword, passwordSalt, passwordHash)) {
          console.warn("Admin password change failed", { ip });
          return NextResponse.json({ error: "Current password is incorrect." }, { status: 400 });
        }
      }
      const hashed = hashPassword(newPassword);
      passwordHash = hashed.hash;
      passwordSalt = hashed.salt;
    }

    const adminProfile = {
      ...normalizedProfile,
      passwordHash,
      passwordSalt
    };
    await fs.mkdir(path.dirname(dataFilePath), { recursive: true });
    await fs.writeFile(
      dataFilePath,
      JSON.stringify({ ...normalized, adminProfile }, null, 2),
      "utf8"
    );
    console.info("Admin content updated", { ip });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin save failed", { ip, error: error?.message || error });
    return NextResponse.json({ error: "Failed to save content" }, { status: 500 });
  }
}

export async function POST(request) {
  const ip = getClientIp(request);
  if (!checkRateLimit(`login:${ip}`, RATE_LIMIT_LOGIN_MAX)) {
    return NextResponse.json({ error: "Too many login attempts. Try again later." }, { status: 429 });
  }
  try {
    const payload = await request.json();
    const password = typeof payload?.password === "string" ? payload.password : "";
    if (!password) {
      return NextResponse.json({ error: "Password is required." }, { status: 400 });
    }
    const raw = await fs.readFile(dataFilePath, "utf8");
    const parsed = JSON.parse(raw);
    const profile = parsed?.adminProfile || {};
    const passwordHash = String(profile?.passwordHash || "");
    const passwordSalt = String(profile?.passwordSalt || "");
    if (!passwordHash || !passwordSalt) {
      return NextResponse.json({ error: "Admin password is not set." }, { status: 400 });
    }
    if (!verifyPassword(password, passwordSalt, passwordHash)) {
      console.warn("Admin login failed", { ip });
      return NextResponse.json({ error: "Invalid password." }, { status: 401 });
    }
    console.info("Admin login success", { ip });
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error?.code === "ENOENT") {
      return NextResponse.json({ error: "Admin password is not set." }, { status: 400 });
    }
    console.error("Admin login error", { ip, error: error?.message || error });
    return NextResponse.json({ error: "Login failed." }, { status: 500 });
  }
}
