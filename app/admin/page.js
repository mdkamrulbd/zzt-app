"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const emptyData = {
  adminProfile: { userId: "admin", displayName: "Administrator", email: "" },
  homeSection: {
    title: "",
    description: "",
    primaryCtaLabel: "",
    primaryCtaLink: "",
    secondaryCtaLabel: "",
    secondaryCtaLink: "",
    badges: []
  },
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
  footer: {
    companyName: "",
    companyDesc: "",
    meta: [],
    quickLinks: [],
    servicesLinks: [],
    socialLinks: []
  }
};

const createSlide = () => ({
  title: "",
  description: "",
  image: "",
  alt: ""
});

const createProfile = () => ({
  userId: "admin",
  displayName: "Administrator",
  email: ""
});

const createProject = () => ({
  title: "",
  description: "",
  image: "",
  alt: ""
});

const createProduct = () => ({
  title: "",
  description: "",
  image: "",
  alt: ""
});

const createClient = () => ({
  image: "",
  alt: ""
});

const createStat = () => ({
  label: "",
  value: 0,
  icon: "",
  suffix: ""
});

const createTextItem = () => ({
  title: "",
  description: ""
});

const createHomeSection = () => ({
  title: "",
  description: "",
  primaryCtaLabel: "",
  primaryCtaLink: "",
  secondaryCtaLabel: "",
  secondaryCtaLink: "",
  badges: []
});

const createFooterLink = () => ({
  label: "",
  url: "",
  icon: ""
});

const createSocialLink = () => ({
  label: "",
  url: "",
  icon: ""
});

const createFooter = () => ({
  companyName: "",
  companyDesc: "",
  meta: [],
  quickLinks: [],
  servicesLinks: [],
  socialLinks: []
});

const joinLines = (value) => (Array.isArray(value) ? value.join("\n") : "");
const splitLines = (value) =>
  String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

export default function AdminPage() {
  const [formData, setFormData] = useState(emptyData);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");
  const [activeSection, setActiveSection] = useState("homeSection");
  const [editingIndex, setEditingIndex] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [loginPassword, setLoginPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const saved = localStorage.getItem("adminAuth") === "true";
    setIsAuthenticated(saved);
    setAuthChecked(true);
  }, []);

  useEffect(() => {
    if (!authChecked || !isAuthenticated) {
      setLoading(false);
      return;
    }
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/admin/content");
        const data = await response.json();
        setFormData({
          adminProfile: data.adminProfile || createProfile(),
          homeSection: { ...createHomeSection(), ...(data.homeSection || {}) },
          slides: Array.isArray(data.slides) ? data.slides : [],
          projects: Array.isArray(data.projects) ? data.projects : [],
          products: Array.isArray(data.products) ? data.products : [],
          clients: Array.isArray(data.clients) ? data.clients : [],
          stats: Array.isArray(data.stats) ? data.stats : [],
          about: Array.isArray(data.about) ? data.about : [],
          partnerChoice: Array.isArray(data.partnerChoice) ? data.partnerChoice : [],
          services: Array.isArray(data.services) ? data.services : [],
          industries: Array.isArray(data.industries) ? data.industries : [],
          faq: Array.isArray(data.faq) ? data.faq : [],
          contactReach: Array.isArray(data.contactReach) ? data.contactReach : [],
          footer: data.footer || createFooter()
        });
      } catch (error) {
        setStatus("Unable to load data.");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [authChecked, isAuthenticated]);

  useEffect(() => {
    if (activeSection === "homeSection" || activeSection === "footer") {
      setEditingIndex(0);
    } else {
      setEditingIndex(null);
    }
    setFieldErrors({});
  }, [activeSection]);

  useEffect(() => {
    setFieldErrors({});
  }, [editingIndex]);

  const updateItem = (section, index, field, value) => {
    setFormData((prev) => {
      if (section === "profile") {
        return { ...prev, adminProfile: { ...prev.adminProfile, [field]: value } };
      }
      if (section === "homeSection") {
        return { ...prev, homeSection: { ...prev.homeSection, [field]: value } };
      }
      const updated = [...prev[section]];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, [section]: updated };
    });
    setFieldErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const clearFieldError = (key) => {
    setFieldErrors((prev) => {
      if (!prev[key]) {
        return prev;
      }
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const updateFooterField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      footer: {
        ...prev.footer,
        [field]: value
      }
    }));
    clearFieldError(field);
  };

  const updateFooterArray = (key, updater) => {
    setFormData((prev) => ({
      ...prev,
      footer: {
        ...prev.footer,
        [key]: updater(Array.isArray(prev.footer?.[key]) ? prev.footer[key] : [])
      }
    }));
  };

  const updateFooterArrayItem = (key, index, field, value) => {
    updateFooterArray(key, (items) => {
      const updated = [...items];
      updated[index] = { ...(updated[index] || {}), [field]: value };
      return updated;
    });
    clearFieldError(`${key}.${index}.${field}`);
  };

  const addFooterArrayItem = (key, factory) => {
    updateFooterArray(key, (items) => [...items, factory()]);
  };

  const removeFooterArrayItem = async (key, index) => {
    if (!window.confirm("আপনি কি নিশ্চিতভাবে রিমুভ করতে চান?")) {
      return;
    }
    const nextFooter = {
      ...formData.footer,
      [key]: (formData.footer?.[key] || []).filter((_, itemIndex) => itemIndex !== index)
    };
    const nextData = { ...formData, footer: nextFooter };
    setFormData(nextData);
    await persistContent(nextData, { resetEditing: false, includePasswordChange: false });
  };

  const addItem = (section, itemFactory) => {
    if (section === "profile") {
      setFormData((prev) => ({
        ...prev,
        adminProfile: prev.adminProfile || createProfile()
      }));
      setActiveSection(section);
      setEditingIndex(0);
      return;
    }
    if (section === "homeSection") {
      setFormData((prev) => ({
        ...prev,
        homeSection: prev.homeSection || createHomeSection()
      }));
      setActiveSection(section);
      setEditingIndex(0);
      return;
    }
    setFormData((prev) => {
      const updated = [...prev[section], itemFactory()];
      const nextIndex = updated.length - 1;
      setEditingIndex(nextIndex);
      return { ...prev, [section]: updated };
    });
    setActiveSection(section);
  };

  const removeItem = async (section, index) => {
    if (section === "profile" || section === "homeSection" || section === "footer") {
      return;
    }
    if (!window.confirm("আপনি কি নিশ্চিতভাবে রিমুভ করতে চান?")) {
      return;
    }
    const nextData = {
      ...formData,
      [section]: (formData[section] || []).filter((_, itemIndex) => itemIndex !== index)
    };
    setFormData(nextData);
    if (section === activeSection) {
      setEditingIndex(null);
    }
    await persistContent(nextData, { resetEditing: false, includePasswordChange: false });
  };

  const handleImageUpload = (section, index, file) => {
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      updateItem(section, index, "image", result);
    };
    reader.readAsDataURL(file);
  };

  const persistContent = async (nextData, options = {}) => {
    const { resetEditing = true, includePasswordChange = true } = options;
    setSaving(true);
    setStatus("");
    try {
      const passwordChange = includePasswordChange
        ? {
            currentPassword: passwordForm.currentPassword,
            newPassword: passwordForm.newPassword
          }
        : undefined;
      const response = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...nextData,
          ...(passwordChange ? { passwordChange } : {})
        })
      });
      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error || "Save failed");
      }
      setStatus("Saved successfully.");
      if (includePasswordChange) {
        setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
      }
      if (resetEditing) {
        setEditingIndex(null);
      }
      setFieldErrors({});
    } catch (error) {
      setStatus(error?.message || "Save failed.");
    } finally {
      setSaving(false);
    }
  };

  const handleSave = async () => {
    setStatus("");
    if (!activeItem) {
      setStatus("আইটেম নির্বাচন করুন।");
      return;
    }
    const hasValue = (value) => String(value ?? "").trim() !== "";
    const hasNumber = (value) => value !== "" && value !== null && value !== undefined && Number.isFinite(Number(value));
    const nextErrors = {};
    const requireValue = (key, value, message) => {
      if (!hasValue(value)) {
        nextErrors[key] = message;
      }
    };
    const requireNumber = (key, value, message) => {
      if (!hasNumber(value)) {
        nextErrors[key] = message;
      }
    };
    const textOnlySections = ["about", "partnerChoice", "services", "industries", "faq", "contactReach"];
    if (activeSection === "profile") {
      requireValue("userId", activeItem.userId, "User ID দিন।");
      requireValue("displayName", activeItem.displayName, "Display name দিন।");
      requireValue("email", activeItem.email, "Email দিন।");
    } else if (activeSection === "clients") {
      requireValue("image", activeItem.image, "Image URL দিন।");
      requireValue("alt", activeItem.alt, "Alt text দিন।");
    } else if (activeSection === "stats") {
      requireValue("label", activeItem.label, "Label দিন।");
      requireNumber("value", activeItem.value, "Value দিন।");
      requireValue("icon", activeItem.icon, "Icon class দিন।");
      requireValue("suffix", activeItem.suffix, "Suffix দিন।");
    } else if (activeSection === "homeSection") {
      requireValue("title", activeItem.title, "Title দিন।");
      requireValue("description", activeItem.description, "Description দিন।");
      requireValue("primaryCtaLabel", activeItem.primaryCtaLabel, "Primary CTA text দিন।");
      requireValue("primaryCtaLink", activeItem.primaryCtaLink, "Primary CTA link দিন।");
      requireValue("secondaryCtaLabel", activeItem.secondaryCtaLabel, "Secondary CTA text দিন।");
      requireValue("secondaryCtaLink", activeItem.secondaryCtaLink, "Secondary CTA link দিন।");
      if (!hasValue(joinLines(activeItem.badges))) {
        nextErrors.badges = "Badge গুলো দিন।";
      }
    } else if (activeSection === "footer") {
      requireValue("companyName", activeItem.companyName, "Company name দিন।");
      requireValue("companyDesc", activeItem.companyDesc, "Company description দিন।");
      if (!hasValue(joinLines(activeItem.meta))) {
        nextErrors.meta = "Meta তথ্য দিন।";
      }
      (activeItem.quickLinks || []).forEach((item, index) => {
        requireValue(`quickLinks.${index}.label`, item.label, "Label দিন।");
        requireValue(`quickLinks.${index}.url`, item.url, "Link দিন।");
        requireValue(`quickLinks.${index}.icon`, item.icon, "Icon class দিন।");
      });
      (activeItem.servicesLinks || []).forEach((item, index) => {
        requireValue(`servicesLinks.${index}.label`, item.label, "Label দিন।");
        requireValue(`servicesLinks.${index}.url`, item.url, "Link দিন।");
        requireValue(`servicesLinks.${index}.icon`, item.icon, "Icon class দিন।");
      });
      (activeItem.socialLinks || []).forEach((item, index) => {
        requireValue(`socialLinks.${index}.label`, item.label, "Label দিন।");
        requireValue(`socialLinks.${index}.url`, item.url, "Link দিন।");
        requireValue(`socialLinks.${index}.icon`, item.icon, "Icon class দিন।");
      });
    } else if (textOnlySections.includes(activeSection)) {
      requireValue("title", activeItem.title, "Title দিন।");
      requireValue("description", activeItem.description, "Description দিন।");
    } else {
      requireValue("title", activeItem.title, "Title দিন।");
      requireValue("description", activeItem.description, "Description দিন।");
      requireValue("image", activeItem.image, "Image URL দিন।");
      requireValue("alt", activeItem.alt, "Alt text দিন।");
    }
    if (passwordForm.newPassword || passwordForm.confirmPassword || passwordForm.currentPassword) {
      requireValue("currentPassword", passwordForm.currentPassword, "Current password দিন।");
      requireValue("newPassword", passwordForm.newPassword, "New password দিন।");
      requireValue("confirmPassword", passwordForm.confirmPassword, "Confirm password দিন।");
      if (passwordForm.newPassword && passwordForm.newPassword.length < 6) {
        nextErrors.newPassword = "New password কমপক্ষে ৬ অক্ষরের হতে হবে।";
      }
      if (
        passwordForm.newPassword &&
        passwordForm.confirmPassword &&
        passwordForm.newPassword !== passwordForm.confirmPassword
      ) {
        nextErrors.confirmPassword = "নতুন পাসওয়ার্ড মিলছে না।";
      }
    }
    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors);
      setStatus("সবগুলো ঘর পূরণ করুন।");
      return;
    }
    if (!window.confirm("সেভ করতে চান?")) {
      return;
    }
    await persistContent(formData);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoginLoading(true);
    setLoginStatus("");
    try {
      const response = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: loginPassword })
      });
      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error || "Login failed");
      }
      localStorage.setItem("adminAuth", "true");
      setIsAuthenticated(true);
      setLoginPassword("");
    } catch (error) {
      setLoginStatus(error?.message || "Login failed.");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    setIsAuthenticated(false);
    setActiveSection("homeSection");
    setEditingIndex(null);
    setStatus("");
    setFieldErrors({});
    setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  const sections = [
    { key: "homeSection", label: "Home Section", addLabel: "Edit Home Section", factory: createHomeSection },
    { key: "slides", label: "Slider", addLabel: "Add Slide", factory: createSlide },
    { key: "about", label: "About Section", addLabel: "Add Item", factory: createTextItem },
    { key: "partnerChoice", label: "Why Partner Choice", addLabel: "Add Item", factory: createTextItem },
    { key: "services", label: "Our Services", addLabel: "Add Item", factory: createTextItem },
    { key: "industries", label: "Industries We Serve", addLabel: "Add Item", factory: createTextItem },
    { key: "projects", label: "Projects", addLabel: "Add Project", factory: createProject },
    { key: "products", label: "Products", addLabel: "Add Product", factory: createProduct },
    { key: "stats", label: "Our Success", addLabel: "Add Stat", factory: createStat },
    { key: "clients", label: "Clients", addLabel: "Add Client", factory: createClient },
    { key: "faq", label: "FAQ", addLabel: "Add Item", factory: createTextItem },
    { key: "contactReach", label: "Contact & Reach Us", addLabel: "Add Item", factory: createTextItem },
    { key: "footer", label: "Footer Section", addLabel: "Edit Footer", factory: createFooter },
    { key: "profile", label: "Profile", addLabel: "Edit Profile", factory: createProfile }
  ];

  const activeItems =
    activeSection === "profile"
      ? [formData.adminProfile || createProfile()]
      : activeSection === "homeSection"
      ? [formData.homeSection || createHomeSection()]
      : activeSection === "footer"
      ? [formData.footer || createFooter()]
      : formData[activeSection] || [];
  const activeItem = editingIndex !== null ? activeItems[editingIndex] : null;
  const activeConfig = sections.find((section) => section.key === activeSection);

  const getItemTitle = (sectionKey, item) => {
    if (!item) {
      return "Untitled";
    }
    if (sectionKey === "stats") {
      return item.label || "Untitled";
    }
    if (sectionKey === "profile") {
      return item.displayName || item.userId || "Untitled";
    }
    if (sectionKey === "clients") {
      return item.alt || item.image || "Untitled";
    }
    if (sectionKey === "footer") {
      return item.companyName || "Footer Section";
    }
    if (sectionKey === "homeSection") {
      return item.title || "Home Section";
    }
    return item.title || item.alt || "Untitled";
  };

  const getItemSubtitle = (sectionKey, item) => {
    if (!item) {
      return "";
    }
    if (sectionKey === "stats") {
      return `${item.value ?? 0}${item.suffix || ""}`;
    }
    if (sectionKey === "profile") {
      return item.userId || item.email || "";
    }
    if (sectionKey === "clients") {
      return item.image || "";
    }
    if (sectionKey === "footer") {
      return item.companyDesc || "";
    }
    if (sectionKey === "homeSection") {
      return item.description || "";
    }
    return item.description || item.image || "";
  };

  const getItemImage = (sectionKey, item) => {
    if (!item) {
      return "";
    }
    if (sectionKey === "stats") {
      return "";
    }
    if (sectionKey === "profile") {
      return "";
    }
    if (
      ["about", "partnerChoice", "services", "industries", "faq", "contactReach", "homeSection", "footer"].includes(
        sectionKey
      )
    ) {
      return "";
    }
    return item.image || "";
  };

  const renderEditPanel = () => {
    if (!activeItem) {
      return null;
    }
    if (activeSection === "homeSection") {
      return (
        <div className="admin-edit-panel">
          <div className="admin-edit-header">
            <h3>Home Section</h3>
            <button className="btn btn-ghost" onClick={() => setEditingIndex(null)}>
              Close
            </button>
          </div>
          <div className="admin-edit-grid">
            <div className="admin-field admin-span">
              <label>Title</label>
              <input
                value={activeItem.title}
                onChange={(event) => updateItem("homeSection", 0, "title", event.target.value)}
              />
              {fieldErrors.title && <span className="admin-field-error">{fieldErrors.title}</span>}
            </div>
            <div className="admin-field admin-span">
              <label>Description</label>
              <textarea
                value={activeItem.description}
                onChange={(event) => updateItem("homeSection", 0, "description", event.target.value)}
              />
              {fieldErrors.description && <span className="admin-field-error">{fieldErrors.description}</span>}
            </div>
            <div className="admin-field">
              <label>Primary CTA Text</label>
              <input
                value={activeItem.primaryCtaLabel}
                onChange={(event) => updateItem("homeSection", 0, "primaryCtaLabel", event.target.value)}
              />
              {fieldErrors.primaryCtaLabel && <span className="admin-field-error">{fieldErrors.primaryCtaLabel}</span>}
            </div>
            <div className="admin-field admin-span">
              <label>Primary CTA Link</label>
              <input
                value={activeItem.primaryCtaLink}
                onChange={(event) => updateItem("homeSection", 0, "primaryCtaLink", event.target.value)}
              />
              {fieldErrors.primaryCtaLink && <span className="admin-field-error">{fieldErrors.primaryCtaLink}</span>}
            </div>
            <div className="admin-field">
              <label>Secondary CTA Text</label>
              <input
                value={activeItem.secondaryCtaLabel}
                onChange={(event) => updateItem("homeSection", 0, "secondaryCtaLabel", event.target.value)}
              />
              {fieldErrors.secondaryCtaLabel && <span className="admin-field-error">{fieldErrors.secondaryCtaLabel}</span>}
            </div>
            <div className="admin-field admin-span">
              <label>Secondary CTA Link</label>
              <input
                value={activeItem.secondaryCtaLink}
                onChange={(event) => updateItem("homeSection", 0, "secondaryCtaLink", event.target.value)}
              />
              {fieldErrors.secondaryCtaLink && <span className="admin-field-error">{fieldErrors.secondaryCtaLink}</span>}
            </div>
            <div className="admin-field admin-span">
              <label>Badges (one per line)</label>
              <textarea
                value={joinLines(activeItem.badges)}
                onChange={(event) => updateItem("homeSection", 0, "badges", splitLines(event.target.value))}
              />
              {fieldErrors.badges && <span className="admin-field-error">{fieldErrors.badges}</span>}
            </div>
          </div>
          <div className="admin-inline-toolbar">
            <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </button>
            {status && <span className="admin-status">{status}</span>}
          </div>
        </div>
      );
    }
    if (activeSection === "footer") {
      return (
        <div className="admin-edit-panel">
          <div className="admin-edit-header">
            <h3>Footer Section</h3>
            <button className="btn btn-ghost" onClick={() => setEditingIndex(null)}>
              Close
            </button>
          </div>

          <div className="admin-item">
            <h4>Quick Links</h4>
            {(activeItem.quickLinks || []).map((item, index) => (
              <div key={`footer-quick-${index}`} className="admin-item">
                <div className="admin-item-grid">
                  <div className="admin-field">
                    <label>Label</label>
                    <input
                      value={item.label}
                      onChange={(event) => updateFooterArrayItem("quickLinks", index, "label", event.target.value)}
                    />
                    {fieldErrors[`quickLinks.${index}.label`] && (
                      <span className="admin-field-error">{fieldErrors[`quickLinks.${index}.label`]}</span>
                    )}
                  </div>
                  <div className="admin-field admin-span">
                    <label>Link</label>
                    <input
                      value={item.url}
                      onChange={(event) => updateFooterArrayItem("quickLinks", index, "url", event.target.value)}
                    />
                    {fieldErrors[`quickLinks.${index}.url`] && (
                      <span className="admin-field-error">{fieldErrors[`quickLinks.${index}.url`]}</span>
                    )}
                  </div>
                  <div className="admin-field">
                    <label>Icon Class</label>
                    <input
                      value={item.icon}
                      onChange={(event) => updateFooterArrayItem("quickLinks", index, "icon", event.target.value)}
                    />
                    {fieldErrors[`quickLinks.${index}.icon`] && (
                      <span className="admin-field-error">{fieldErrors[`quickLinks.${index}.icon`]}</span>
                    )}
                  </div>
                </div>
                <div className="admin-inline-toolbar">
                  <button className="btn btn-ghost admin-remove" onClick={() => removeFooterArrayItem("quickLinks", index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="admin-inline-toolbar">
              <button className="btn btn-ghost" onClick={() => addFooterArrayItem("quickLinks", createFooterLink)}>
                Add Quick Link
              </button>
            </div>
          </div>

          <div className="admin-item">
            <h4>Services Links</h4>
            {(activeItem.servicesLinks || []).map((item, index) => (
              <div key={`footer-service-${index}`} className="admin-item">
                <div className="admin-item-grid">
                  <div className="admin-field">
                    <label>Label</label>
                    <input
                      value={item.label}
                      onChange={(event) => updateFooterArrayItem("servicesLinks", index, "label", event.target.value)}
                    />
                    {fieldErrors[`servicesLinks.${index}.label`] && (
                      <span className="admin-field-error">{fieldErrors[`servicesLinks.${index}.label`]}</span>
                    )}
                  </div>
                  <div className="admin-field admin-span">
                    <label>Link</label>
                    <input
                      value={item.url}
                      onChange={(event) => updateFooterArrayItem("servicesLinks", index, "url", event.target.value)}
                    />
                    {fieldErrors[`servicesLinks.${index}.url`] && (
                      <span className="admin-field-error">{fieldErrors[`servicesLinks.${index}.url`]}</span>
                    )}
                  </div>
                  <div className="admin-field">
                    <label>Icon Class</label>
                    <input
                      value={item.icon}
                      onChange={(event) => updateFooterArrayItem("servicesLinks", index, "icon", event.target.value)}
                    />
                    {fieldErrors[`servicesLinks.${index}.icon`] && (
                      <span className="admin-field-error">{fieldErrors[`servicesLinks.${index}.icon`]}</span>
                    )}
                  </div>
                </div>
                <div className="admin-inline-toolbar">
                  <button
                    className="btn btn-ghost admin-remove"
                    onClick={() => removeFooterArrayItem("servicesLinks", index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="admin-inline-toolbar">
              <button className="btn btn-ghost" onClick={() => addFooterArrayItem("servicesLinks", createFooterLink)}>
                Add Service Link
              </button>
            </div>
          </div>

          <div className="admin-item">
            <h4>Company Info</h4>
            <div className="admin-item-grid">
              <div className="admin-field admin-span">
                <label>Company Name</label>
                <input
                  value={activeItem.companyName}
                  onChange={(event) => updateFooterField("companyName", event.target.value)}
                />
                {fieldErrors.companyName && <span className="admin-field-error">{fieldErrors.companyName}</span>}
              </div>
              <div className="admin-field admin-span">
                <label>Company Description</label>
                <textarea
                  value={activeItem.companyDesc}
                  onChange={(event) => updateFooterField("companyDesc", event.target.value)}
                />
                {fieldErrors.companyDesc && <span className="admin-field-error">{fieldErrors.companyDesc}</span>}
              </div>
              <div className="admin-field admin-span">
                <label>Meta (one per line)</label>
                <textarea
                  value={joinLines(activeItem.meta)}
                  onChange={(event) => updateFooterField("meta", splitLines(event.target.value))}
                />
                {fieldErrors.meta && <span className="admin-field-error">{fieldErrors.meta}</span>}
              </div>
            </div>
          </div>

          <div className="admin-item">
            <h4>Social Links</h4>
            {(activeItem.socialLinks || []).map((item, index) => (
              <div key={`footer-social-${index}`} className="admin-item">
                <div className="admin-item-grid">
                  <div className="admin-field">
                    <label>Label</label>
                    <input
                      value={item.label}
                      onChange={(event) => updateFooterArrayItem("socialLinks", index, "label", event.target.value)}
                    />
                    {fieldErrors[`socialLinks.${index}.label`] && (
                      <span className="admin-field-error">{fieldErrors[`socialLinks.${index}.label`]}</span>
                    )}
                  </div>
                  <div className="admin-field admin-span">
                    <label>Link</label>
                    <input
                      value={item.url}
                      onChange={(event) => updateFooterArrayItem("socialLinks", index, "url", event.target.value)}
                    />
                    {fieldErrors[`socialLinks.${index}.url`] && (
                      <span className="admin-field-error">{fieldErrors[`socialLinks.${index}.url`]}</span>
                    )}
                  </div>
                  <div className="admin-field">
                    <label>Icon Class</label>
                    <input
                      value={item.icon}
                      onChange={(event) => updateFooterArrayItem("socialLinks", index, "icon", event.target.value)}
                    />
                    {fieldErrors[`socialLinks.${index}.icon`] && (
                      <span className="admin-field-error">{fieldErrors[`socialLinks.${index}.icon`]}</span>
                    )}
                  </div>
                </div>
                <div className="admin-inline-toolbar">
                  <button className="btn btn-ghost admin-remove" onClick={() => removeFooterArrayItem("socialLinks", index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="admin-inline-toolbar">
              <button className="btn btn-ghost" onClick={() => addFooterArrayItem("socialLinks", createSocialLink)}>
                Add Social Link
              </button>
            </div>
          </div>

          <div className="admin-inline-toolbar">
            <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </button>
            {status && <span className="admin-status">{status}</span>}
          </div>
        </div>
      );
    }
    if (activeSection === "profile") {
      return (
        <div className="admin-edit-panel">
          <div className="admin-edit-header">
            <h3>Admin Profile</h3>
            <button className="btn btn-ghost" onClick={() => setEditingIndex(null)}>
              Close
            </button>
          </div>
          <div className="admin-edit-grid">
            <div className="admin-field">
              <label>User ID</label>
              <input
                value={activeItem.userId}
                onChange={(event) => updateItem("profile", 0, "userId", event.target.value)}
              />
              {fieldErrors.userId && <span className="admin-field-error">{fieldErrors.userId}</span>}
            </div>
            <div className="admin-field">
              <label>Display Name</label>
              <input
                value={activeItem.displayName}
                onChange={(event) => updateItem("profile", 0, "displayName", event.target.value)}
              />
              {fieldErrors.displayName && <span className="admin-field-error">{fieldErrors.displayName}</span>}
            </div>
            <div className="admin-field">
              <label>Email</label>
              <input
                type="email"
                value={activeItem.email}
                onChange={(event) => updateItem("profile", 0, "email", event.target.value)}
              />
              {fieldErrors.email && <span className="admin-field-error">{fieldErrors.email}</span>}
            </div>
            <div className="admin-field">
              <label>Current Password</label>
              <input
                type="password"
                value={passwordForm.currentPassword}
                onChange={(event) => {
                  const value = event.target.value;
                  setPasswordForm((prev) => ({ ...prev, currentPassword: value }));
                  setFieldErrors((prev) => {
                    if (!prev.currentPassword) {
                      return prev;
                    }
                    const next = { ...prev };
                    delete next.currentPassword;
                    return next;
                  });
                }}
              />
              {fieldErrors.currentPassword && <span className="admin-field-error">{fieldErrors.currentPassword}</span>}
            </div>
            <div className="admin-field">
              <label>New Password</label>
              <input
                type="password"
                value={passwordForm.newPassword}
                onChange={(event) => {
                  const value = event.target.value;
                  setPasswordForm((prev) => ({ ...prev, newPassword: value }));
                  setFieldErrors((prev) => {
                    if (!prev.newPassword) {
                      return prev;
                    }
                    const next = { ...prev };
                    delete next.newPassword;
                    return next;
                  });
                }}
              />
              {fieldErrors.newPassword && <span className="admin-field-error">{fieldErrors.newPassword}</span>}
            </div>
            <div className="admin-field">
              <label>Confirm New Password</label>
              <input
                type="password"
                value={passwordForm.confirmPassword}
                onChange={(event) => {
                  const value = event.target.value;
                  setPasswordForm((prev) => ({ ...prev, confirmPassword: value }));
                  setFieldErrors((prev) => {
                    if (!prev.confirmPassword) {
                      return prev;
                    }
                    const next = { ...prev };
                    delete next.confirmPassword;
                    return next;
                  });
                }}
              />
              {fieldErrors.confirmPassword && <span className="admin-field-error">{fieldErrors.confirmPassword}</span>}
            </div>
          </div>
          <div className="admin-inline-toolbar">
            <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </button>
            {status && <span className="admin-status">{status}</span>}
          </div>
        </div>
      );
    }
    if (activeSection === "stats") {
      return (
        <div className="admin-edit-panel">
          <div className="admin-edit-header">
            <h3>Edit Item</h3>
            <button className="btn btn-ghost" onClick={() => setEditingIndex(null)}>
              Close
            </button>
          </div>
          <div className="admin-edit-grid">
            <div className="admin-field">
              <label>Label</label>
              <input
                value={activeItem.label}
                onChange={(event) => updateItem(activeSection, editingIndex, "label", event.target.value)}
              />
              {fieldErrors.label && <span className="admin-field-error">{fieldErrors.label}</span>}
            </div>
            <div className="admin-field">
              <label>Value</label>
              <input
                type="number"
                value={activeItem.value}
                onChange={(event) => updateItem(activeSection, editingIndex, "value", event.target.value)}
              />
              {fieldErrors.value && <span className="admin-field-error">{fieldErrors.value}</span>}
            </div>
            <div className="admin-field">
              <label>Suffix</label>
              <input
                value={activeItem.suffix || ""}
                onChange={(event) => updateItem(activeSection, editingIndex, "suffix", event.target.value)}
              />
              {fieldErrors.suffix && <span className="admin-field-error">{fieldErrors.suffix}</span>}
            </div>
            <div className="admin-field">
              <label>Icon Class</label>
              <input
                value={activeItem.icon}
                onChange={(event) => updateItem(activeSection, editingIndex, "icon", event.target.value)}
              />
              {fieldErrors.icon && <span className="admin-field-error">{fieldErrors.icon}</span>}
            </div>
          </div>
          <div className="admin-inline-toolbar">
            <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </button>
            {status && <span className="admin-status">{status}</span>}
          </div>
        </div>
      );
    }
    if (["about", "partnerChoice", "services", "industries", "faq", "contactReach"].includes(activeSection)) {
      const titleLabel = activeSection === "faq" ? "Question" : "Title";
      const descLabel = activeSection === "faq" ? "Answer" : "Description";
      return (
        <div className="admin-edit-panel">
          <div className="admin-edit-header">
            <h3>Edit Item</h3>
            <button className="btn btn-ghost" onClick={() => setEditingIndex(null)}>
              Close
            </button>
          </div>
          <div className="admin-edit-grid">
            <div className="admin-field">
              <label>{titleLabel}</label>
              <input
                value={activeItem.title}
                onChange={(event) => updateItem(activeSection, editingIndex, "title", event.target.value)}
              />
              {fieldErrors.title && <span className="admin-field-error">{fieldErrors.title}</span>}
            </div>
            <div className="admin-field admin-span">
              <label>{descLabel}</label>
              <textarea
                value={activeItem.description}
                onChange={(event) => updateItem(activeSection, editingIndex, "description", event.target.value)}
              />
              {fieldErrors.description && <span className="admin-field-error">{fieldErrors.description}</span>}
            </div>
          </div>
          <div className="admin-inline-toolbar">
            <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </button>
            {status && <span className="admin-status">{status}</span>}
          </div>
        </div>
      );
    }
    const isClient = activeSection === "clients";
    return (
      <div className="admin-edit-panel">
        <div className="admin-edit-header">
          <h3>Edit Item</h3>
          <button className="btn btn-ghost" onClick={() => setEditingIndex(null)}>
            Close
          </button>
        </div>
        <div className="admin-edit-grid">
          {!isClient && (
            <>
              <div className="admin-field">
                <label>Title</label>
                <input
                  value={activeItem.title}
                  onChange={(event) => updateItem(activeSection, editingIndex, "title", event.target.value)}
                />
                {fieldErrors.title && <span className="admin-field-error">{fieldErrors.title}</span>}
              </div>
              <div className="admin-field admin-span">
                <label>Description</label>
                <textarea
                  value={activeItem.description}
                  onChange={(event) => updateItem(activeSection, editingIndex, "description", event.target.value)}
                />
                {fieldErrors.description && <span className="admin-field-error">{fieldErrors.description}</span>}
              </div>
            </>
          )}
          <div className="admin-field">
            <label>Image URL</label>
            <input
              value={activeItem.image}
              onChange={(event) => updateItem(activeSection, editingIndex, "image", event.target.value)}
            />
            {fieldErrors.image && <span className="admin-field-error">{fieldErrors.image}</span>}
          </div>
          <div className="admin-field">
            <label>Alt Text</label>
            <input
              value={activeItem.alt}
              onChange={(event) => updateItem(activeSection, editingIndex, "alt", event.target.value)}
            />
            {fieldErrors.alt && <span className="admin-field-error">{fieldErrors.alt}</span>}
          </div>
          <div className="admin-field admin-span">
            <label>Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => handleImageUpload(activeSection, editingIndex, event.target.files?.[0])}
            />
          </div>
          <div className="admin-field admin-span">
            {activeItem.image ? (
              <Image
                src={activeItem.image}
                alt={activeItem.alt || "Preview"}
                width={220}
                height={150}
                unoptimized
                className="admin-image-preview"
              />
            ) : (
              <div className="admin-image-placeholder">No preview</div>
            )}
          </div>
        </div>
        <div className="admin-inline-toolbar">
          <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
            {saving ? "Saving..." : "Save Changes"}
          </button>
          {status && <span className="admin-status">{status}</span>}
        </div>
      </div>
    );
  };

  if (!authChecked || loading) {
    return <div className="admin-loading">Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="admin-shell">
        <header className="site-header admin-header">
          <div className="container header-inner">
            <a href="/" className="logo" aria-label="Zam Zam Trading home">
              <Image src="/images/logo.svg" alt="Zam Zam Trading logo" width={36} height={36} priority />
              <span>Zam Zam Trading</span>
            </a>
            <nav className="desktop-nav admin-nav">
              <ul className="nav-menu">
                <li><a href="/">Home</a></li>
                <li><a href="/admin" className="active">Admin Panel</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="section admin-page">
          <div className="container">
            <h1 className="section-title admin-title">Admin Login</h1>
            <p className="section-lead admin-lead">Enter the admin password to continue.</p>
            <div className="admin-login-card">
              <form className="admin-login-form" onSubmit={handleLogin}>
                <div className="admin-field">
                  <label>Password</label>
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(event) => setLoginPassword(event.target.value)}
                  />
                </div>
                {loginStatus && <div className="admin-login-status">{loginStatus}</div>}
                <div className="admin-login-actions">
                  <button className="btn btn-primary" type="submit" disabled={loginLoading}>
                    {loginLoading ? "Signing in..." : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>

        <footer className="site-footer admin-footer">
          <div className="container footer-inner">
            <div className="footer-bottom">
              <p>© {new Date().getFullYear()} Zam Zam Trading. All rights reserved.</p>
              <div className="footer-links">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="admin-shell">
      <header className="site-header admin-header">
        <div className="container header-inner">
          <a href="/" className="logo" aria-label="Zam Zam Trading home">
            <Image src="/images/logo.svg" alt="Zam Zam Trading logo" width={36} height={36} priority />
            <span>Zam Zam Trading</span>
          </a>
          <nav className="desktop-nav admin-nav">
            <ul className="nav-menu">
              <li><a href="/">Home</a></li>
              <li><a href="/admin" className="active">Admin Panel</a></li>
            </ul>
          </nav>
          <div className="admin-header-actions">
            <button className="btn btn-ghost" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </header>

      <main className="section admin-page">
        <div className="container">
          <h1 className="section-title admin-title">Admin Panel</h1>
          <p className="section-lead admin-lead">
            Update admin profile, slider, projects, products, clients, and success stats.
          </p>

          <div className="admin-layout">
            <aside className="admin-sidebar">
              <div className="admin-menu">
                {sections.map((section) => (
                  <button
                    key={section.key}
                    className={`admin-menu-btn ${activeSection === section.key ? "active" : ""}`}
                    onClick={() => setActiveSection(section.key)}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </aside>

            <div className="admin-content">
              <section className="admin-section">
                <div className="admin-section-header">
                  <h2 className="admin-section-title">{activeConfig?.label}</h2>
                  {activeSection !== "profile" && activeSection !== "homeSection" && activeSection !== "footer" ? (
                    <button
                      className="btn btn-ghost"
                      onClick={() => addItem(activeSection, activeConfig?.factory || createProject)}
                    >
                      {activeConfig?.addLabel}
                    </button>
                  ) : (
                    <button className="btn btn-ghost" onClick={() => setEditingIndex(0)}>
                      {activeConfig?.addLabel}
                    </button>
                  )}
                </div>

                <div className="admin-list">
                  {activeItems.length === 0 && <div className="admin-empty">No items yet. Add a new item.</div>}
                  {activeItems.map((item, index) => {
                    const image = getItemImage(activeSection, item);
                    const isEditing = editingIndex === index;
                    return (
                      <div key={`list-wrap-${activeSection}-${index}`}>
                        <div className={`admin-list-item ${isEditing ? "active" : ""}`}>
                          <div className="admin-list-thumb">
                            {activeSection === "stats" ? (
                              <div className="admin-stat-icon">
                                <i className={item.icon || "fas fa-chart-line"}></i>
                              </div>
                            ) : activeSection === "profile" ? (
                              <div className="admin-stat-icon">
                                <i className="fas fa-user-shield"></i>
                              </div>
                            ) : image ? (
                              <Image src={image} alt={item.alt || "Thumbnail"} width={44} height={44} unoptimized />
                            ) : (
                              <div className="admin-thumb-empty">
                                <svg className="admin-thumb-icon" viewBox="0 0 64 64" aria-hidden="true">
                                  <path d="M38.5 10c-12 0-21.5 9.7-21.5 22s9.5 22 21.5 22c-7.9-3.8-13-11.8-13-22s5.1-18.2 13-22z" />
                                  <path d="M47.8 25.2l2.2 4.5 5 0.7-3.6 3.5 0.9 4.9-4.5-2.4-4.5 2.4 0.9-4.9-3.6-3.5 5-0.7 2.2-4.5z" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <div className="admin-list-main">
                            <div className="admin-list-title">{getItemTitle(activeSection, item)}</div>
                            <div className="admin-list-subtitle">{getItemSubtitle(activeSection, item)}</div>
                          </div>
                          <div className="admin-list-actions">
                            <button className="btn btn-ghost" onClick={() => setEditingIndex(index)}>
                              Edit
                            </button>
                            {activeSection !== "profile" && activeSection !== "homeSection" && activeSection !== "footer" && (
                              <button
                                className="btn btn-ghost admin-remove"
                                onClick={() => removeItem(activeSection, index)}
                              >
                                Remove
                              </button>
                            )}
                          </div>
                        </div>
                        {isEditing && renderEditPanel()}
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <footer className="site-footer admin-footer">
        <div className="container footer-inner">
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Zam Zam Trading. All rights reserved.</p>
            <div className="footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
