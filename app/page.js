import fs from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Zam Zam Trading – Government Contracting & Supply | Bangladesh",
  description:
    "Zam Zam Trading is Bangladesh's leading government contractor specializing in finishing thread supply for garments, stone & sand for construction, and raw materials for feed mills. 15+ years experience, 500+ satisfied clients. Professional tender participation, quality assured sourcing, nationwide delivery across Bangladesh. Contact +8801716777787 for all your supply needs.",
  keywords:
    "government contracting Bangladesh, public procurement Bangladesh, e-GP Bangladesh, government tender, tender participation, tender support, procurement documentation, procurement planning, supply contract, contract fulfillment, vendor registration, compliance documentation, finishing thread supply, garment thread supplier, RMG thread supplier, embroidery thread, sewing thread, construction materials Bangladesh, stone and sand supply, construction aggregates, river sand, stone chips, broken stone, aggregate stone supplier, ready-mix aggregates, feed mill raw materials, animal feed ingredients, poultry feed materials, fish feed ingredients, cattle feed supplements, industrial raw materials, B2B supplier Bangladesh, bulk supply, wholesale distribution, nationwide logistics, site delivery, Dhaka supplier, Uttara supplier, Bangladesh logistics, government contractor Bangladesh, Zam Zam Trading",
  alternates: {
    canonical: "https://www.zzt.com.bd/",
    languages: {
      en: "https://www.zzt.com.bd/",
      bn: "https://www.zzt.com.bd/bn/",
      "x-default": "https://www.zzt.com.bd/"
    }
  },
  openGraph: {
    type: "website",
    url: "https://www.zzt.com.bd/",
    title: "Zam Zam Trading – Government Contracting & Supply | Bangladesh",
    description:
      "Trusted government contractor specializing in finishing thread, construction materials & feed mill supplies. 15+ years experience, 500+ satisfied clients.",
    images: [
      {
        url: "https://www.zzt.com.bd/images/logo.svg",
        width: 1200,
        height: 630
      }
    ],
    siteName: "Zam Zam Trading",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Zam Zam Trading – Government Contracting & Supply",
    description:
      "Trusted government contractor in Bangladesh. Specializing in finishing thread, construction materials & feed mill supplies.",
    images: ["https://www.zzt.com.bd/images/logo.svg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },
  other: {
    author: "Zam Zam Trading",
    language: "English",
    "geo.region": "BD-13",
    "geo.placename": "Dhaka, Bangladesh",
    "geo.position": "23.8103;90.4125",
    ICBM: "23.8103, 90.4125",
    "business.category": "Government Contractor, Supply Chain, Construction Materials, Textile Supplies",
    "business.services":
      "Government Contracting, Finishing Thread Supply, Stone Sand Supply, Feed Mill Raw Materials, Logistics",
    coverage: "Bangladesh",
    distribution: "national",
    "business.industry": "Manufacturing, Construction, Agriculture, Textiles",
    "business.type": "B2B, Government Contractor, Wholesale Supplier",
    "target.audience": "Government Agencies, Construction Companies, Garment Manufacturers, Feed Mills",
    "service.area":
      "Dhaka, Chittagong, Sylhet, Rajshahi, Khulna, Barisal, Rangpur, Mymensingh",
    "business.hours": "Saturday-Thursday 9:00AM-6:00PM",
    "payment.methods": "Bank Transfer, Letter of Credit, Cash on Delivery"
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zam Zam Trading",
  url: "https://www.zzt.com.bd",
  logo: "https://www.zzt.com.bd/assets/logo.svg",
  description:
    "Government contracting and supply company in Bangladesh specializing in finishing thread, construction materials, and feed mill supplies",
  foundingDate: "2009",
  numberOfEmployees: "50-100",
  address: {
    "@type": "PostalAddress",
    streetAddress: "House#11, Road#24, Sector#10",
    addressLocality: "Uttara",
    addressRegion: "Dhaka",
    postalCode: "1230",
    addressCountry: "Bangladesh"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+8801716777787",
    contactType: "customer service",
    email: "info@zzt.com.bd",
    availableLanguage: ["English", "Bengali"]
  },
  areaServed: {
    "@type": "Country",
    name: "Bangladesh"
  },
  serviceType: [
    "Government Contracting",
    "Finishing Thread Supply",
    "Construction Materials Supply",
    "Feed Mill Raw Materials",
    "Logistics Services"
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1"
  },
  sameAs: [
    "https://www.facebook.com/zamzamtrading",
    "https://www.linkedin.com/company/zamzamtrading"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Zam Zam Trading",
  image: "https://www.zzt.com.bd/assets/logo.svg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "House#11, Road#24, Sector#10",
    addressLocality: "Uttara",
    addressRegion: "Dhaka",
    postalCode: "1230",
    addressCountry: "BD"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.8759,
    longitude: 90.3795
  },
  telephone: "+8801716777787",
  email: "info@zzt.com.bd",
  url: "https://www.zzt.com.bd",
  openingHours: "Mo-Sa 09:00-18:00",
  priceRange: "$$"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.zzt.com.bd/"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://www.zzt.com.bd/#about"
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Services",
      item: "https://www.zzt.com.bd/#services"
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Projects",
      item: "https://www.zzt.com.bd/#projects"
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Contact",
      item: "https://www.zzt.com.bd/#contact"
    }
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Zam Zam Trading",
  url: "https://www.zzt.com.bd",
  description: "Government contracting and supply services in Bangladesh",
  publisher: {
    "@type": "Organization",
    name: "Zam Zam Trading"
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.zzt.com.bd/?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Government Contracting",
  provider: {
    "@type": "Organization",
    name: "Zam Zam Trading",
    url: "https://www.zzt.com.bd"
  },
  areaServed: {
    "@type": "Country",
    name: "Bangladesh"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Supply Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Finishing Thread Supply",
          description: "Quality finishing threads for garments industry"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Construction Materials Supply",
          description: "Stone and sand supply for construction projects"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Feed Mill Raw Materials",
          description: "Raw materials for animal feed production"
        }
      }
    ]
  }
};

const defaultContent = {
  slides: [
    {
      title: "Finishing Thread Supply",
      description: "Consistent, quality-assured threads for garments production nationwide.",
      image: "/images/home/home_1.jpg",
      alt: "Finishing thread supply for garments manufacturing"
    },
    {
      title: "Stone & Sand Supply",
      description: "Trusted construction aggregates delivered to project sites across Bangladesh.",
      image: "/images/home/home_2.jpg",
      alt: "High-quality stone and sand for construction projects"
    },
    {
      title: "Government Contracting",
      description: "End-to-end tender participation and project fulfillment services.",
      image: "/images/home/home_3.jpg",
      alt: "Government contracting and tender services"
    },
    {
      title: "Feed Mill Raw Materials",
      description: "Reliable sourcing of quality materials to power feed production.",
      image: "/images/home/home_4.jpg",
      alt: "Raw materials supply for feed mill operations"
    },
    {
      title: "Nationwide Logistics",
      description: "On-time delivery backed by strong logistics network.",
      image: "/images/home/home_5.jpg",
      alt: "Nationwide logistics and delivery services"
    }
  ],
  projects: [
    {
      title: "Government Infrastructure",
      description: "Large-scale infrastructure development projects",
      image: "/images/projects/home_1.jpg",
      alt: "Government Contract Project"
    },
    {
      title: "Building Construction",
      description: "Commercial and residential construction projects",
      image: "/images/projects/home_2.jpg",
      alt: "Construction Project"
    },
    {
      title: "Road Development",
      description: "Highway and road construction initiatives",
      image: "/images/projects/home_3.jpg",
      alt: "Road Construction"
    },
    {
      title: "Bridge Construction",
      description: "Major bridge and overpass construction",
      image: "/images/projects/home_4.jpg",
      alt: "Bridge Project"
    },
    {
      title: "Public Works",
      description: "Community development and public facilities",
      image: "/images/projects/home_5.jpg",
      alt: "Public Works"
    },
    {
      title: "Urban Planning",
      description: "City planning and urban development projects",
      image: "/images/projects/home_6.jpg",
      alt: "Urban Development"
    },
    {
      title: "Infrastructure Development",
      description: "Major infrastructure and development initiatives",
      image: "/images/projects/home_1.jpg",
      alt: "Infrastructure Development"
    },
    {
      title: "Housing Projects",
      description: "Residential and community housing developments",
      image: "/images/projects/home_2.jpg",
      alt: "Housing Projects"
    },
    {
      title: "Transport Infrastructure",
      description: "Roads, bridges and transport system development",
      image: "/images/projects/home_3.jpg",
      alt: "Transport Infrastructure"
    },
    {
      title: "Water Management",
      description: "Water supply and drainage system projects",
      image: "/images/projects/home_4.jpg",
      alt: "Water Management"
    },
    {
      title: "Educational Infrastructure",
      description: "Schools and educational facility development",
      image: "/images/projects/home_5.jpg",
      alt: "Educational Infrastructure"
    },
    {
      title: "Healthcare Facilities",
      description: "Hospital and medical center construction",
      image: "/images/projects/home_6.jpg",
      alt: "Healthcare Facilities"
    }
  ],
  products: [
    {
      title: "Finishing Thread",
      description: "High-quality threads for garment manufacturing",
      image: "/images/products/home_1.jpg",
      alt: "Finishing Thread"
    },
    {
      title: "Construction Stone",
      description: "Premium quality stone for construction projects",
      image: "/images/products/home_2.jpg",
      alt: "Construction Stone"
    },
    {
      title: "Sand Supply",
      description: "Fine and coarse sand for construction needs",
      image: "/images/products/home_3.jpg",
      alt: "Sand Supply"
    },
    {
      title: "Feed Mill Raw Materials",
      description: "Quality ingredients for animal feed production",
      image: "/images/products/home_4.jpg",
      alt: "Feed Mill Materials"
    },
    {
      title: "Textile Materials",
      description: "Various textile supplies and accessories",
      image: "/images/products/home_5.jpg",
      alt: "Textile Materials"
    },
    {
      title: "Industrial Supplies",
      description: "Industrial equipment and materials",
      image: "/images/products/home_6.jpg",
      alt: "Industrial Supplies"
    },
    {
      title: "Quality Control Materials",
      description: "Testing and quality assurance materials",
      image: "/images/products/home_1.jpg",
      alt: "Quality Control Materials"
    },
    {
      title: "Construction Aggregates",
      description: "High-grade stone and sand for construction",
      image: "/images/products/home_2.jpg",
      alt: "Construction Aggregates"
    },
    {
      title: "Specialty Materials",
      description: "Specialized materials for specific applications",
      image: "/images/products/home_3.jpg",
      alt: "Specialty Materials"
    },
    {
      title: "Agricultural Supplies",
      description: "Farm equipment and agricultural materials",
      image: "/images/products/home_4.jpg",
      alt: "Agricultural Supplies"
    },
    {
      title: "Manufacturing Tools",
      description: "Tools and equipment for manufacturing",
      image: "/images/products/home_5.jpg",
      alt: "Manufacturing Tools"
    },
    {
      title: "Safety Equipment",
      description: "Safety gear and protective equipment",
      image: "/images/products/home_6.jpg",
      alt: "Safety Equipment"
    }
  ],
  clients: [
    { image: "/images/clients/zzt_bwdb1.png", alt: "Client logo 1" },
    { image: "/images/clients/zzt_hed2.png", alt: "Client logo 2" },
    { image: "/images/clients/zzt_pwd3.png", alt: "Client logo 3" },
    { image: "/images/clients/zzt_lged4.png", alt: "Client logo 4" },
    { image: "/images/clients/zzt_rhd5.png", alt: "Client logo 5" },
    { image: "/images/clients/zzt_abc.png", alt: "Client logo 6" },
    { image: "/images/clients/zzt_aftab.png", alt: "Client logo 7" },
    { image: "/images/clients/zzt_apfeed.png", alt: "Client logo 8" },
    { image: "/images/clients/zzt_cp.png", alt: "Client logo 9" },
    { image: "/images/clients/zzt_labibgroup.png", alt: "Client logo 10" },
    { image: "/images/clients/zzt_newhope.png", alt: "Client logo 11" },
    { image: "/images/clients/zzt_nourish.png", alt: "Client logo 12" }
  ],
  stats: [
    { label: "Government Contracts", value: 250, icon: "fas fa-handshake" },
    { label: "Tons Delivered", value: 10000, icon: "fas fa-truck" },
    { label: "Happy Clients", value: 500, icon: "fas fa-users" },
    { label: "Years Experience", value: 15, icon: "fas fa-calendar-alt" },
    { label: "District Coverage", value: 64, icon: "fas fa-map-marked-alt", suffix: "+" },
    { label: "On-Time Delivery Rate", value: 98, icon: "fas fa-stopwatch", suffix: "%" }
  ]
};

const loadContentData = async () => {
  try {
    const filePath = path.join(process.cwd(), "data", "content.json");
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(raw);
    return {
      homeSection: parsed.homeSection || {},
      slides: Array.isArray(parsed.slides) ? parsed.slides : defaultContent.slides,
      projects: Array.isArray(parsed.projects) ? parsed.projects : defaultContent.projects,
      products: Array.isArray(parsed.products) ? parsed.products : defaultContent.products,
      clients: Array.isArray(parsed.clients) ? parsed.clients : defaultContent.clients,
      stats: Array.isArray(parsed.stats) ? parsed.stats : defaultContent.stats,
      footer: parsed.footer || {}
    };
  } catch (error) {
    return defaultContent;
  }
};

const homeHtml = `
<div id="loading-screen" class="loading-screen">
  <div class="loading-spinner">
    <div class="spinner"></div>
    <p>Loading...</p>
  </div>
</div>
<header class="site-header" id="top">
  <div class="scroll-progress" id="scroll-progress"></div>
  <div class="container header-inner">
    <a href="#top" class="logo" aria-label="Zam Zam Trading home">
      <img src="images/logo.svg" alt="Zam Zam Trading logo" width="36" height="36">
      <span>Zam Zam Trading</span>
    </a>
    <nav class="mobile-nav">
      <button class="mobile-nav-toggle" id="mobile-nav-toggle" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="mobile-nav-menu" id="mobile-nav-menu">
        <div class="mobile-nav-overlay" id="mobile-nav-overlay"></div>
        <div class="mobile-nav-content">
          <ul class="mobile-nav-list">
            <li><a href="#home" class="mobile-nav-link" data-i18n="nav_home">Home</a></li>
            <li><a href="#about" class="mobile-nav-link" data-i18n="nav_about">About</a></li>
            <li><a href="#services" class="mobile-nav-link" data-i18n="nav_services">Services</a></li>
            <li><a href="#projects" class="mobile-nav-link" data-i18n="nav_projects">Projects</a></li>
            <li><a href="#clients" class="mobile-nav-link" data-i18n="nav_clients">Clients</a></li>
            <li><a href="#contact" class="mobile-nav-link" data-i18n="nav_contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="desktop-nav">
      <ul class="nav-menu">
        <li><a href="#home" data-i18n="nav_home">Home</a></li>
        <li><a href="#about" data-i18n="nav_about">About</a></li>
        <li><a href="#services" data-i18n="nav_services">Services</a></li>
        <li><a href="#projects" data-i18n="nav_projects">Projects</a></li>
        <li><a href="#clients" data-i18n="nav_clients">Clients</a></li>
        <li><a href="#contact" data-i18n="nav_contact">Contact</a></li>
      </ul>
    </nav>
    <button id="lang-toggle" class="lang-toggle" aria-label="Toggle language">
      <span class="toggle-label left">BN</span>
      <span class="toggle-separator">|</span>
      <span class="toggle-label right">EN</span>
    </button>
  </div>
</header>
<main>
  <section id="home" class="hero" aria-label="Hero">
    <div class="container hero-content">
      <h1>{{HERO_TITLE}}</h1>
      <p id="contact-info">{{HERO_DESC}}</p>
      <div class="hero-actions">
        <a href="{{HERO_PRIMARY_LINK}}" class="btn btn-primary">
          <span class="btn-text">{{HERO_PRIMARY_LABEL}}</span>
        </a>
        <a href="{{HERO_SECONDARY_LINK}}" class="btn btn-ghost">{{HERO_SECONDARY_LABEL}}</a>
      </div>
      <div class="hero-badges">
        {{HERO_BADGES}}
      </div>
      <div class="hero-slider" data-carousel>
        <button class="carousel-btn prev" aria-label="Previous slide">&#10094;</button>
        <div class="hero-track" role="group">
          {{SLIDE_ITEMS}}
        </div>
        <button class="carousel-btn next" aria-label="Next slide">&#10095;</button>
      </div>
    </div>
  </section>
</main>
<section id="about" class="about section" role="region" aria-labelledby="about-heading">
  <div class="container about-grid">
    <div class="about-text">
      <h2 id="about-heading" class="section-title" data-i18n="about_title">About Zam Zam Trading</h2>
      <p class="section-lead" data-i18n="about_desc_1">
        Zam Zam Trading is a trusted supplier and government contractor in Bangladesh with over 15 years of experience. We supply finishing thread for garments, stone and sand for construction, and raw materials for feed mills. With extensive industry experience and a reliable nationwide network, we ensure on-time delivery and consistent quality for all our clients.
      </p>
      <p data-i18n="about_desc_2">
        Our teams support tender documentation, procurement planning, supplier coordination, and last-mile logistics, helping organizations meet project timelines and compliance requirements with confidence.
      </p>
      <ul class="about-highlights" role="list">
        <li data-i18n="about_highlight_1">Quality-assured sourcing from certified suppliers</li>
        <li data-i18n="about_highlight_2">Nationwide logistics support across Bangladesh</li>
        <li data-i18n="about_highlight_3">Trusted by 500+ public and private sector clients</li>
        <li data-i18n="about_highlight_4">15+ years of government contracting experience</li>
        <li data-i18n="about_highlight_5">Dedicated procurement and tender support</li>
        <li data-i18n="about_highlight_6">Transparent documentation and reporting</li>
      </ul>
      <div class="about-cards">
        <article class="about-card">
          <h3 data-i18n="about_card_1_title">Mission</h3>
          <p data-i18n="about_card_1_desc">Deliver dependable supply solutions with integrity, speed, and complete documentation for every contract.</p>
        </article>
        <article class="about-card">
          <h3 data-i18n="about_card_2_title">Capability</h3>
          <p data-i18n="about_card_2_desc">Multi-category sourcing for garments, construction, and feed mills, supported by structured vendor partnerships.</p>
        </article>
        <article class="about-card">
          <h3 data-i18n="about_card_3_title">Commitment</h3>
          <p data-i18n="about_card_3_desc">Consistent quality, on-time delivery, and proactive communication across every project and client.</p>
        </article>
      </div>
    </div>
  </div>
</section>
<section id="highlights" class="highlights section" aria-label="Key strengths and value propositions">
  <div class="container">
    <h2 class="section-title" data-i18n="highlights_title">Why Partners Choose Zam Zam Trading</h2>
    <p class="section-lead" data-i18n="highlights_lead">A dependable partner for complex procurement, bulk supply, and nationwide project delivery with a focus on compliance, transparency, and measurable results.</p>
    <div class="highlights-grid">
      <article class="info-card">
        <h3 data-i18n="highlight_1_title">End-to-End Government Contracting Support</h3>
        <p data-i18n="highlight_1_desc">From tender document preparation to final delivery and billing, we manage the full lifecycle of government supply contracts with clear communication and documented processes.</p>
      </article>
      <article class="info-card">
        <h3 data-i18n="highlight_2_title">Specialized Supply Expertise</h3>
        <p data-i18n="highlight_2_desc">Deep operational understanding of finishing thread, construction aggregates, and feed mill raw materials helps us recommend the right specification for each project requirement.</p>
      </article>
      <article class="info-card">
        <h3 data-i18n="highlight_3_title">Compliance & Quality Assurance</h3>
        <p data-i18n="highlight_3_desc">Materials are sourced from vetted partners, aligned with government standards, and supported with test reports and delivery documentation where required.</p>
      </article>
      <article class="info-card">
        <h3 data-i18n="highlight_4_title">Reliable Nationwide Logistics</h3>
        <p data-i18n="highlight_4_desc">Coordinated transport and on-site delivery across Bangladesh ensure that projects receive materials on time, reducing downtime and cost overruns.</p>
      </article>
    </div>
  </div>
</section>
<section id="services" class="services section" itemscope itemtype="https://schema.org/Service">
  <div class="container">
    <h2 class="section-title" data-i18n="services_title">Our Services</h2>
    <p class="section-lead" data-i18n="services_lead">Focused service lines with dedicated sourcing, compliance checks, and delivery coordination tailored to each industry requirement.</p>
    <div class="services-grid">
      <article class="service-card" itemscope itemtype="https://schema.org/Service">
        <div class="icon-wrap">
          <i class="fas fa-handshake" style="font-size:24px;color:#1ea672;"></i>
        </div>
        <h3 itemprop="name" data-i18n="service_1_title">Government Contracting</h3>
        <p itemprop="description" data-i18n="service_1_desc">End-to-end tender participation, procurement, and fulfillment for government projects across Bangladesh.</p>
        <ul class="service-points">
          <li data-i18n="service_1_point_1">Pre-qualification and tender documentation</li>
          <li data-i18n="service_1_point_2">Schedule-based supply planning</li>
          <li data-i18n="service_1_point_3">Compliance-ready delivery records</li>
        </ul>
        <meta itemprop="serviceType" content="Government Contracting">
        <meta itemprop="areaServed" content="Bangladesh">
      </article>
      <article class="service-card" itemscope itemtype="https://schema.org/Service">
        <div class="icon-wrap">
          <i class="fas fa-cut" style="font-size:24px;color:#1ea672;"></i>
        </div>
        <h3 itemprop="name" data-i18n="service_2_title">Garments Finishing Thread Supply</h3>
        <p itemprop="description" data-i18n="service_2_desc">Reliable supply of finishing threads tailored to diverse garments manufacturing needs nationwide.</p>
        <ul class="service-points">
          <li data-i18n="service_2_point_1">Color, strength, and finish matching</li>
          <li data-i18n="service_2_point_2">Bulk supply with batch consistency</li>
          <li data-i18n="service_2_point_3">Factory-ready delivery schedules</li>
        </ul>
        <meta itemprop="serviceType" content="Thread Supply">
        <meta itemprop="areaServed" content="Bangladesh">
      </article>
      <article class="service-card" itemscope itemtype="https://schema.org/Service">
        <div class="icon-wrap">
          <i class="fas fa-building" style="font-size:24px;color:#1ea672;"></i>
        </div>
        <h3 itemprop="name" data-i18n="service_3_title">Stone & Sand Supply</h3>
        <p itemprop="description" data-i18n="service_3_desc">High-quality aggregates sourced and delivered for construction projects of any scale across Bangladesh.</p>
        <ul class="service-points">
          <li data-i18n="service_3_point_1">Grading and size specification support</li>
          <li data-i18n="service_3_point_2">Site-to-site logistics coordination</li>
          <li data-i18n="service_3_point_3">Volume-based pricing options</li>
        </ul>
        <meta itemprop="serviceType" content="Construction Materials">
        <meta itemprop="areaServed" content="Bangladesh">
      </article>
      <article class="service-card" itemscope itemtype="https://schema.org/Service">
        <div class="icon-wrap">
          <i class="fas fa-seedling" style="font-size:24px;color:#1ea672;"></i>
        </div>
        <h3 itemprop="name" data-i18n="service_4_title">Feed Mill Raw Materials Supply</h3>
        <p itemprop="description" data-i18n="service_4_desc">Consistent sourcing of grains and additives ensuring optimal feed production for agricultural industry.</p>
        <ul class="service-points">
          <li data-i18n="service_4_point_1">Reliable raw material sourcing</li>
          <li data-i18n="service_4_point_2">Quality checks on intake</li>
          <li data-i18n="service_4_point_3">Seasonal supply continuity</li>
        </ul>
        <meta itemprop="serviceType" content="Agricultural Supplies">
        <meta itemprop="areaServed" content="Bangladesh">
      </article>
    </div>
  </div>
</section>
<section id="projects" class="projects section">
  <div class="container">
    <h2 class="section-title" data-i18n="projects_title">Our Projects & Products</h2>
    <p class="section-lead" data-i18n="projects_lead">A snapshot of our project categories and core products that support government, industrial, and commercial supply needs.</p>
    <div class="project-tabs">
      <button class="tab-btn active" data-tab="projects" data-i18n="tab_projects">Projects</button>
      <button class="tab-btn" data-tab="products" data-i18n="tab_products">Products</button>
    </div>
    <div class="tab-content active" id="projects-tab">
      <div class="projects-carousel-container">
        <button class="carousel-btn prev" id="projects-prev" aria-label="Previous projects">&#10094;</button>
        <div class="projects-carousel-track" id="projects-track">
          {{PROJECT_ITEMS}}
        </div>
        <button class="carousel-btn next" id="projects-next" aria-label="Next projects">&#10095;</button>
      </div>
    </div>
    <div class="tab-content" id="products-tab">
      <div class="projects-carousel-container">
        <button class="carousel-btn prev" id="products-prev" aria-label="Previous products">&#10094;</button>
        <div class="projects-carousel-track" id="products-track">
          {{PRODUCT_ITEMS}}
        </div>
        <button class="carousel-btn next" id="products-next" aria-label="Next products">&#10095;</button>
      </div>
    </div>
  </div>
</section>
<section id="statistics" class="statistics section">
  <div class="container">
    <h2 class="section-title" data-i18n="statistics_title">Our Success in Numbers</h2>
    <p class="section-lead" data-i18n="statistics_lead">Proven delivery record and long-term relationships with public and private sector organizations across Bangladesh.</p>
    <div class="stats-grid">
      {{STATS_ITEMS}}
    </div>
  </div>
</section>
<section id="industries" class="industries section" aria-label="Industries served by Zam Zam Trading">
  <div class="container">
    <h2 class="section-title" data-i18n="industries_title">Industries We Serve</h2>
    <p class="section-lead" data-i18n="industries_lead">Serving multiple sectors with tailored procurement support, volume handling, and dependable delivery coordination.</p>
    <div class="industries-grid">
      <article class="industry-card">
        <div class="industry-icon">
          <img src="images/clients/govt.svg" alt="Government agencies icon" loading="lazy" width="64" height="64">
        </div>
        <h3 data-i18n="industry_1_title">Government & Public Sector</h3>
        <p data-i18n="industry_1_desc">Registered supplier for central and local government projects, working within e-GP and public procurement guidelines.</p>
      </article>
      <article class="industry-card">
        <div class="industry-icon">
          <img src="images/clients/construction.svg" alt="Construction sector icon" loading="lazy" width="64" height="64">
        </div>
        <h3 data-i18n="industry_2_title">Construction & Infrastructure</h3>
        <p data-i18n="industry_2_desc">Stone, sand, and related construction materials supplied to roads, bridges, buildings, and infrastructure projects.</p>
      </article>
      <article class="industry-card">
        <div class="industry-icon">
          <img src="images/clients/garments.svg" alt="Garments sector icon" loading="lazy" width="64" height="64">
        </div>
        <h3 data-i18n="industry_3_title">Garments & Textiles</h3>
        <p data-i18n="industry_3_desc">Finishing threads and related supplies for export-oriented garments and textile manufacturing units.</p>
      </article>
      <article class="industry-card">
        <div class="industry-icon">
          <img src="images/clients/feed.svg" alt="Feed mill sector icon" loading="lazy" width="64" height="64">
        </div>
        <h3 data-i18n="industry_4_title">Feed Mills & Agriculture</h3>
        <p data-i18n="industry_4_desc">Raw materials and additives for poultry, fish, and cattle feed producers across the country.</p>
      </article>
      <article class="industry-card">
        <div class="industry-icon">
          <img src="images/clients/public.svg" alt="Public projects icon" loading="lazy" width="64" height="64">
        </div>
        <h3 data-i18n="industry_5_title">Public Development Projects</h3>
        <p data-i18n="industry_5_desc">Support for development-focused initiatives, including education, healthcare, and community infrastructure.</p>
      </article>
      <article class="industry-card">
        <div class="industry-icon">
          <img src="images/clients/private.svg" alt="Private sector icon" loading="lazy" width="64" height="64">
        </div>
        <h3 data-i18n="industry_6_title">Private Sector Clients</h3>
        <p data-i18n="industry_6_desc">Long-term relationships with private developers, industrial units, and trading partners.</p>
      </article>
    </div>
  </div>
</section>
<section id="clients" class="clients section">
  <div class="container">
    <h2 class="section-title" data-i18n="clients_title">Trusted Partners</h2>
    <p class="section-lead" data-i18n="clients_lead">Trusted by agencies, developers, manufacturers, and institutions that rely on consistent supply and contract performance.</p>
    <div class="clients-carousel-container">
      <button class="carousel-btn prev" id="clients-prev" aria-label="Previous clients">&#10094;</button>
      <div class="clients-carousel-track" id="clients-track">
        {{CLIENT_ITEMS}}
      </div>
      <button class="carousel-btn next" id="clients-next" aria-label="Next clients">&#10095;</button>
    </div>
  </div>
</section>
<section id="faq" class="faq section" itemscope itemtype="https://schema.org/FAQPage">
  <div class="container">
    <h2 class="section-title" data-i18n="faq_title">Frequently Asked Questions</h2>
    <p class="section-lead" data-i18n="faq_lead">Clear answers for procurement teams, project managers, and suppliers working with Zam Zam Trading.</p>
    <div class="faq-container">
      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <button class="faq-question" aria-expanded="false" itemprop="name">
          <span data-i18n="faq_q1">What types of government contracts do you handle?</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text" data-i18n="faq_a1">We handle various government contracts including construction material supply, finishing thread supply for garments, and raw materials for feed mills. Our experience spans over 15 years in government procurement.</p>
        </div>
      </div>
      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <button class="faq-question" aria-expanded="false" itemprop="name">
          <span data-i18n="faq_q2">Do you provide nationwide delivery?</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text" data-i18n="faq_a2">Yes, we provide nationwide delivery across Bangladesh. Our logistics network ensures timely delivery to all major cities and remote areas throughout the country.</p>
        </div>
      </div>
      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <button class="faq-question" aria-expanded="false" itemprop="name">
          <span data-i18n="faq_q3">What quality assurance measures do you follow?</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text" data-i18n="faq_a3">We follow strict quality control measures including pre-delivery inspections, certified sourcing from approved suppliers, and compliance with government quality standards.</p>
        </div>
      </div>
      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <button class="faq-question" aria-expanded="false" itemprop="name">
          <span data-i18n="faq_q4">How can I request a quote for bulk orders?</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text" data-i18n="faq_a4">You can request a quote by contacting us directly through phone or email. Please provide details about the materials needed, quantity, and delivery location for an accurate quote.</p>
        </div>
      </div>
      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <button class="faq-question" aria-expanded="false" itemprop="name">
          <span data-i18n="faq_q5">What are your payment terms?</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text" data-i18n="faq_a5">We offer flexible payment terms depending on the contract size and client relationship. Standard terms include advance payment, delivery-based payments, and credit facilities for established clients.</p>
        </div>
      </div>
      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <button class="faq-question" aria-expanded="false" itemprop="name">
          <span data-i18n="faq_q6">Can you support urgent or phased deliveries?</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text" data-i18n="faq_a6">Yes. We plan phased deliveries based on project schedules, with priority logistics support for urgent requirements and critical project milestones.</p>
        </div>
      </div>
      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <button class="faq-question" aria-expanded="false" itemprop="name">
          <span data-i18n="faq_q7">Do you provide documentation for compliance and audits?</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text" data-i18n="faq_a7">We provide delivery notes, material specifications, and supporting documents required for internal reviews and procurement audits.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="contact" class="contact section">
  <div class="container contact-grid">
    <div class="contact-form-wrap">
      <h2 class="section-title" data-i18n="contact_title">Contact</h2>
      <p class="section-lead section-lead-left" data-i18n="contact_lead">Share your requirements for quote, tender support, or delivery planning.</p>
      <div class="contact-details">
        <ul>
          <li data-i18n="contact_mobile"><strong>Mobile:</strong> <a href="tel:+8801716777787">+8801716777787</a></li>
          <li data-i18n="contact_email"><strong>Email:</strong> <a href="mailto:info@zzt.com.bd">info@zzt.com.bd</a></li>
          <li data-i18n="contact_address"><strong>Address:</strong> House#11, Road#24, Sector#10, Uttara, Dhaka, Bangladesh.</li>
          <li data-i18n="contact_hours"><strong>Hours:</strong> Sat–Thu, 9:00 AM – 6:00 PM</li>
          <li data-i18n="contact_services"><strong>Services:</strong> Government contracting, finishing thread, stone & sand, feed mill raw materials</li>
        </ul>
      </div>
      <div class="contact-actions">
        <a href="/contact-form" class="btn btn-primary">
          <span class="btn-text" data-i18n="contact_quote">Request a Quote</span>
        </a>
        <a href="tel:+8801716777787" class="btn btn-ghost" data-i18n="contact_call">Schedule a Call</a>
      </div>
    </div>
    <div class="map-wrap">
      <div class="map-embed">
        <iframe title="Company Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.8550452590453!2d90.38196217479636!3d23.89475828322006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c53a337590e3%3A0xb3313243220486ee!2sZam%20Zam%20Trading!5e0!3m2!1sen!2sbd!4v1755855816292!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</section>
<footer class="site-footer">
  <div class="container footer-inner">
    <div class="footer-content">
      <div class="footer-section quick-links">
        <h4>Quick Links</h4>
        <ul>
          {{FOOTER_QUICK_LINKS}}
        </ul>
      </div>
      <div class="footer-section services-links">
        <h4>Our Services</h4>
        <ul>
          {{FOOTER_SERVICE_LINKS}}
        </ul>
      </div>
      <div class="footer-section company-info">
        <h3>{{FOOTER_COMPANY_NAME}}</h3>
        <p>{{FOOTER_COMPANY_DESC}}</p>
        <div class="footer-meta">
          {{FOOTER_META}}
        </div>
        <div class="social">
          {{FOOTER_SOCIAL_LINKS}}
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© <span id="year"></span> Zam Zam Trading. All rights reserved.</p>
      <div class="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
<button id="scroll-to-top" class="scroll-to-top" aria-label="Scroll to top">
  <i class="fas fa-chevron-up"></i>
</button>
`;

const renderSlideItems = (slides) =>
  slides
    .map(
      (slide) => `
          <div class="hero-slide">
            <img src="${slide.image}" alt="${slide.alt}" loading="lazy" width="800" height="400">
            <div class="hero-overlay"></div>
            <div class="hero-caption">
              <h3>${slide.title}</h3>
              <p>${slide.description}</p>
            </div>
          </div>
        `
    )
    .join("");

const renderProjectItems = (projects) =>
  projects
    .map(
      (project) => `
          <div class="project-item">
            <img src="${project.image}" alt="${project.alt}" loading="lazy">
            <div class="project-overlay">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
            </div>
          </div>
        `
    )
    .join("");

const renderProductItems = (products) =>
  products
    .map(
      (product) => `
          <div class="project-item">
            <img src="${product.image}" alt="${product.alt}" loading="lazy">
            <div class="project-overlay">
              <h3>${product.title}</h3>
              <p>${product.description}</p>
            </div>
          </div>
        `
    )
    .join("");

const renderStatsItems = (stats) =>
  stats
    .map((stat) => {
      const suffix = stat.suffix ? ` data-suffix="${stat.suffix}"` : "";
      const value = Number.isFinite(Number(stat.value)) ? Number(stat.value) : 0;
      return `
          <div class="stat-card">
            <div class="stat-icon">
              <i class="${stat.icon}"></i>
            </div>
            <div class="stat-number" data-target="${value}"${suffix}>0</div>
            <div class="stat-label">${stat.label}</div>
          </div>
        `;
    })
    .join("");

const renderClientItems = (clients) =>
  clients
    .map(
      (client) => `
          <div class="client-item">
            <img src="${client.image}" alt="${client.alt}" loading="lazy">
          </div>
        `
    )
    .join("");

const renderFooterLinks = (links) =>
  links
    .map(
      (link) => `
          <li><a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a></li>
        `
    )
    .join("");

const renderFooterMeta = (meta) =>
  meta
    .map(
      (item) => `
          <span>${item}</span>
        `
    )
    .join("");

const renderFooterSocialLinks = (links) =>
  links
    .map(
      (link) => `
          <a href="${link.url}" aria-label="${link.label}" class="social-link">
            <i class="${link.icon}"></i>
          </a>
        `
    )
    .join("");

export default async function HomePage() {
  const content = await loadContentData();
  const defaultFooter = {
    companyName: "Zam Zam Trading",
    companyDesc:
      "Trusted Partner in Government Contracting & Supply in Bangladesh. Quality assured sourcing and nationwide delivery since 2009.",
    meta: ["Procurement Support", "Bulk Supply Planning", "Nationwide Logistics"],
    quickLinks: [
      { label: "Home", url: "#home", icon: "fas fa-home" },
      { label: "About Us", url: "#about", icon: "fas fa-info-circle" },
      { label: "Highlights", url: "#highlights", icon: "fas fa-star" },
      { label: "Our Services", url: "#services", icon: "fas fa-cogs" },
      { label: "Statistics", url: "#statistics", icon: "fas fa-chart-bar" },
      { label: "Trusted Partners", url: "#clients", icon: "fas fa-users" },
      { label: "Projects", url: "#projects", icon: "fas fa-project-diagram" },
      { label: "Industries", url: "#industries", icon: "fas fa-industry" },
      { label: "FAQ", url: "#faq", icon: "fas fa-question-circle" },
      { label: "Contact", url: "/contact-form", icon: "fas fa-envelope" }
    ],
    servicesLinks: [
      { label: "Government Contracting", url: "#services", icon: "fas fa-handshake" },
      { label: "Finishing Thread Supply", url: "#services", icon: "fas fa-cut" },
      { label: "Construction Materials", url: "#services", icon: "fas fa-building" },
      { label: "Feed Mill Raw Materials", url: "#services", icon: "fas fa-seedling" },
      { label: "Logistics & Delivery", url: "#services", icon: "fas fa-truck" }
    ],
    socialLinks: [
      { label: "Facebook", url: "#", icon: "fab fa-facebook-f" },
      { label: "LinkedIn", url: "#", icon: "fab fa-linkedin-in" },
      { label: "YouTube", url: "#", icon: "fab fa-youtube" },
      { label: "Twitter", url: "#", icon: "fab fa-twitter" }
    ]
  };
  const homeSection = content.homeSection || {};
  const footer = content.footer || {};
  const footerQuickLinks =
    Array.isArray(footer.quickLinks) && footer.quickLinks.length ? footer.quickLinks : defaultFooter.quickLinks;
  const footerServicesLinks =
    Array.isArray(footer.servicesLinks) && footer.servicesLinks.length ? footer.servicesLinks : defaultFooter.servicesLinks;
  const footerSocialLinks =
    Array.isArray(footer.socialLinks) && footer.socialLinks.length ? footer.socialLinks : defaultFooter.socialLinks;
  const footerMeta = Array.isArray(footer.meta) && footer.meta.length ? footer.meta : defaultFooter.meta;
  const defaultBadges = ["Since 2009", "Nationwide Delivery", "Government Tender Ready", "Quality-Assured Supply"];
  const heroBadges = Array.isArray(homeSection.badges) && homeSection.badges.length ? homeSection.badges : defaultBadges;
  const heroBadgesHtml = heroBadges.map((badge) => `<span class="hero-badge">${badge}</span>`).join("");
  const populatedHomeHtml = homeHtml
    .replace(
      "{{HERO_TITLE}}",
      homeSection.title || "Zam Zam Trading – Trusted Partner in Government Contracting & Supply"
    )
    .replace(
      "{{HERO_DESC}}",
      homeSection.description ||
        "We specialize in finishing thread supply, stone & sand for construction, and raw material supply for feed mills across Bangladesh, delivering dependable service with transparent documentation."
    )
    .replace("{{HERO_PRIMARY_LABEL}}", homeSection.primaryCtaLabel || "Contact Us Today")
    .replace("{{HERO_PRIMARY_LINK}}", homeSection.primaryCtaLink || "/contact-form")
    .replace("{{HERO_SECONDARY_LABEL}}", homeSection.secondaryCtaLabel || "Explore Services")
    .replace("{{HERO_SECONDARY_LINK}}", homeSection.secondaryCtaLink || "#services")
    .replace("{{HERO_BADGES}}", heroBadgesHtml)
    .replace("{{FOOTER_QUICK_LINKS}}", renderFooterLinks(footerQuickLinks))
    .replace("{{FOOTER_SERVICE_LINKS}}", renderFooterLinks(footerServicesLinks))
    .replace("{{FOOTER_COMPANY_NAME}}", footer.companyName || defaultFooter.companyName)
    .replace("{{FOOTER_COMPANY_DESC}}", footer.companyDesc || defaultFooter.companyDesc)
    .replace("{{FOOTER_META}}", renderFooterMeta(footerMeta))
    .replace("{{FOOTER_SOCIAL_LINKS}}", renderFooterSocialLinks(footerSocialLinks))
    .replace("{{SLIDE_ITEMS}}", renderSlideItems(content.slides))
    .replace("{{PROJECT_ITEMS}}", renderProjectItems(content.projects))
    .replace("{{PRODUCT_ITEMS}}", renderProductItems(content.products))
    .replace("{{STATS_ITEMS}}", renderStatsItems(content.stats))
    .replace("{{CLIENT_ITEMS}}", renderClientItems(content.clients));
  const resolvedHomeHtml = populatedHomeHtml.replaceAll('src="images/', 'src="/images/');
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: resolvedHomeHtml }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
