// Loading screen with single, reliable method
function hideLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.style.opacity = '0';
    loadingScreen.style.visibility = 'hidden';
    loadingScreen.style.pointerEvents = 'none';
  }
}

function handleDomReady() {
  setTimeout(hideLoadingScreen, 800);
  document.body.style.overflowX = 'hidden';
  document.documentElement.style.overflowX = 'hidden';
  initScrollAnimations();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', handleDomReady);
} else {
  handleDomReady();
}

// Cache DOM selectors
const elements = {
  scrollToTopBtn: document.getElementById('scroll-to-top'),
  scrollProgress: document.getElementById('scroll-progress'),
  mobileNavToggle: document.getElementById('mobile-nav-toggle'),
  mobileNavMenu: document.getElementById('mobile-nav-menu'),
  mobileNavOverlay: document.getElementById('mobile-nav-overlay'),
  statsSection: document.querySelector('.statistics'),
  heroSlider: document.querySelector('.hero-slider')
};

const translations = {
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    nav_highlights: 'Highlights',
    nav_industries: 'Industries',
    nav_clients: 'Clients',
    nav_statistics: 'Statistics',
    nav_faq: 'FAQ',
    hero_title: 'Zam Zam Trading – Trusted Partner in Government Contracting & Supply',
    hero_desc: 'We specialize in finishing thread supply, stone & sand for construction, and raw material supply for feed mills across Bangladesh, delivering dependable service with transparent documentation.',
    btn_contact: 'Contact Us Today',
    btn_explore: 'Explore Services',
    hero_badge_1: 'Since 2009',
    hero_badge_2: 'Nationwide Delivery',
    hero_badge_3: 'Government Tender Ready',
    hero_badge_4: 'Quality-Assured Supply',
    hero_slide_1_title: 'Finishing Thread Supply',
    hero_slide_1_desc: 'Consistent, quality-assured threads for garments production nationwide.',
    hero_slide_2_title: 'Stone & Sand Supply',
    hero_slide_2_desc: 'Trusted construction aggregates delivered to project sites across Bangladesh.',
    hero_slide_3_title: 'Government Contracting',
    hero_slide_3_desc: 'End-to-end tender participation and project fulfillment services.',
    hero_slide_4_title: 'Feed Mill Raw Materials',
    hero_slide_4_desc: 'Reliable sourcing of quality materials to power feed production.',
    hero_slide_5_title: 'Nationwide Logistics',
    hero_slide_5_desc: 'On-time delivery backed by strong logistics network.',
    about_title: 'About Zam Zam Trading',
    about_desc_1: 'Zam Zam Trading is a trusted supplier and government contractor in Bangladesh with over 15 years of experience. We supply finishing thread for garments, stone and sand for construction, and raw materials for feed mills. With extensive industry experience and a reliable nationwide network, we ensure on-time delivery and consistent quality for all our clients.',
    about_desc_2: 'Our teams support tender documentation, procurement planning, supplier coordination, and last-mile logistics, helping organizations meet project timelines and compliance requirements with confidence.',
    about_highlight_1: 'Quality-assured sourcing from certified suppliers',
    about_highlight_2: 'Nationwide logistics support across Bangladesh',
    about_highlight_3: 'Trusted by 500+ public and private sector clients',
    about_highlight_4: '15+ years of government contracting experience',
    about_highlight_5: 'Dedicated procurement and tender support',
    about_highlight_6: 'Transparent documentation and reporting',
    about_card_1_title: 'Mission',
    about_card_1_desc: 'Deliver dependable supply solutions with integrity, speed, and complete documentation for every contract.',
    about_card_2_title: 'Capability',
    about_card_2_desc: 'Multi-category sourcing for garments, construction, and feed mills, supported by structured vendor partnerships.',
    about_card_3_title: 'Commitment',
    about_card_3_desc: 'Consistent quality, on-time delivery, and proactive communication across every project and client.',
    highlights_lead: 'A dependable partner for complex procurement, bulk supply, and nationwide project delivery with a focus on compliance, transparency, and measurable results.',
    highlight_1_title: 'End-to-End Government Contracting Support',
    highlight_1_desc: 'From tender document preparation to final delivery and billing, we manage the full lifecycle of government supply contracts with clear communication and documented processes.',
    highlight_2_title: 'Specialized Supply Expertise',
    highlight_2_desc: 'Deep operational understanding of finishing thread, construction aggregates, and feed mill raw materials helps us recommend the right specification for each project requirement.',
    highlight_3_title: 'Compliance & Quality Assurance',
    highlight_3_desc: 'Materials are sourced from vetted partners, aligned with government standards, and supported with test reports and delivery documentation where required.',
    highlight_4_title: 'Reliable Nationwide Logistics',
    highlight_4_desc: 'Coordinated transport and on-site delivery across Bangladesh ensure that projects receive materials on time, reducing downtime and cost overruns.',
    services_title: 'Our Services',
    services_lead: 'Focused service lines with dedicated sourcing, compliance checks, and delivery coordination tailored to each industry requirement.',
    service_1_title: 'Government Contracting',
    service_1_desc: 'End-to-end tender participation, procurement, and fulfillment for government projects across Bangladesh.',
    service_1_point_1: 'Pre-qualification and tender documentation',
    service_1_point_2: 'Schedule-based supply planning',
    service_1_point_3: 'Compliance-ready delivery records',
    service_2_title: 'Garments Finishing Thread Supply',
    service_2_desc: 'Reliable supply of finishing threads tailored to diverse garments manufacturing needs nationwide.',
    service_2_point_1: 'Color, strength, and finish matching',
    service_2_point_2: 'Bulk supply with batch consistency',
    service_2_point_3: 'Factory-ready delivery schedules',
    service_3_title: 'Stone & Sand Supply',
    service_3_desc: 'High-quality aggregates sourced and delivered for construction projects of any scale across Bangladesh.',
    service_3_point_1: 'Grading and size specification support',
    service_3_point_2: 'Site-to-site logistics coordination',
    service_3_point_3: 'Volume-based pricing options',
    service_4_title: 'Feed Mill Raw Materials Supply',
    service_4_desc: 'Consistent sourcing of grains and additives ensuring optimal feed production for agricultural industry.',
    service_4_point_1: 'Reliable raw material sourcing',
    service_4_point_2: 'Quality checks on intake',
    service_4_point_3: 'Seasonal supply continuity',
    statistics_lead: 'Proven delivery record and long-term relationships with public and private sector organizations across Bangladesh.',
    stat_label_1: 'Government Contracts',
    stat_label_2: 'Tons Delivered',
    stat_label_3: 'Happy Clients',
    stat_label_4: 'Years Experience',
    stat_label_5: 'District Coverage',
    stat_label_6: 'On-Time Delivery Rate',
    projects_lead: 'A snapshot of our project categories and core products that support government, industrial, and commercial supply needs.',
    tab_projects: 'Projects',
    tab_products: 'Products',
    project_1_title: 'Government Infrastructure',
    project_1_desc: 'Large-scale infrastructure development projects',
    project_2_title: 'Building Construction',
    project_2_desc: 'Commercial and residential construction projects',
    project_3_title: 'Road Development',
    project_3_desc: 'Highway and road construction initiatives',
    project_4_title: 'Bridge Construction',
    project_4_desc: 'Major bridge and overpass construction',
    project_5_title: 'Public Works',
    project_5_desc: 'Community development and public facilities',
    project_6_title: 'Urban Planning',
    project_6_desc: 'City planning and urban development projects',
    project_7_title: 'Infrastructure Development',
    project_7_desc: 'Major infrastructure and development initiatives',
    project_8_title: 'Housing Projects',
    project_8_desc: 'Residential and community housing developments',
    project_9_title: 'Transport Infrastructure',
    project_9_desc: 'Roads, bridges and transport system development',
    project_10_title: 'Water Management',
    project_10_desc: 'Water supply and drainage system projects',
    project_11_title: 'Educational Infrastructure',
    project_11_desc: 'Schools and educational facility development',
    project_12_title: 'Healthcare Facilities',
    project_12_desc: 'Hospital and medical center construction',
    product_1_title: 'Finishing Thread',
    product_1_desc: 'High-quality threads for garment manufacturing',
    product_2_title: 'Construction Stone',
    product_2_desc: 'Premium quality stone for construction projects',
    product_3_title: 'Sand Supply',
    product_3_desc: 'Fine and coarse sand for construction needs',
    product_4_title: 'Feed Mill Raw Materials',
    product_4_desc: 'Quality ingredients for animal feed production',
    product_5_title: 'Textile Materials',
    product_5_desc: 'Various textile supplies and accessories',
    product_6_title: 'Industrial Supplies',
    product_6_desc: 'Industrial equipment and materials',
    product_7_title: 'Quality Control Materials',
    product_7_desc: 'Testing and quality assurance materials',
    product_8_title: 'Construction Aggregates',
    product_8_desc: 'High-grade stone and sand for construction',
    product_9_title: 'Specialty Materials',
    product_9_desc: 'Specialized materials for specific applications',
    product_10_title: 'Agricultural Supplies',
    product_10_desc: 'Farm equipment and agricultural materials',
    product_11_title: 'Manufacturing Tools',
    product_11_desc: 'Tools and equipment for manufacturing',
    product_12_title: 'Safety Equipment',
    product_12_desc: 'Safety gear and protective equipment',
    clients_lead: 'Trusted by agencies, developers, manufacturers, and institutions that rely on consistent supply and contract performance.',
    industries_lead: 'Serving multiple sectors with tailored procurement support, volume handling, and dependable delivery coordination.',
    industry_1_title: 'Government & Public Sector',
    industry_1_desc: 'Registered supplier for central and local government projects, working within e-GP and public procurement guidelines.',
    industry_2_title: 'Construction & Infrastructure',
    industry_2_desc: 'Stone, sand, and related construction materials supplied to roads, bridges, buildings, and infrastructure projects.',
    industry_3_title: 'Garments & Textiles',
    industry_3_desc: 'Finishing threads and related supplies for export-oriented garments and textile manufacturing units.',
    industry_4_title: 'Feed Mills & Agriculture',
    industry_4_desc: 'Raw materials and additives for poultry, fish, and cattle feed producers across the country.',
    industry_5_title: 'Public Development Projects',
    industry_5_desc: 'Support for development-focused initiatives, including education, healthcare, and community infrastructure.',
    industry_6_title: 'Private Sector Clients',
    industry_6_desc: 'Long-term relationships with private developers, industrial units, and trading partners.',
    faq_lead: 'Clear answers for procurement teams, project managers, and suppliers working with Zam Zam Trading.',
    faq_q1: 'What types of government contracts do you handle?',
    faq_a1: 'We handle various government contracts including construction material supply, finishing thread supply for garments, and raw materials for feed mills. Our experience spans over 15 years in government procurement.',
    faq_q2: 'Do you provide nationwide delivery?',
    faq_a2: 'Yes, we provide nationwide delivery across Bangladesh. Our logistics network ensures timely delivery to all major cities and remote areas throughout the country.',
    faq_q3: 'What quality assurance measures do you follow?',
    faq_a3: 'We follow strict quality control measures including pre-delivery inspections, certified sourcing from approved suppliers, and compliance with government quality standards.',
    faq_q4: 'How can I request a quote for bulk orders?',
    faq_a4: 'You can request a quote by contacting us directly through phone or email. Please provide details about the materials needed, quantity, and delivery location for an accurate quote.',
    faq_q5: 'What are your payment terms?',
    faq_a5: 'We offer flexible payment terms depending on the contract size and client relationship. Standard terms include advance payment, delivery-based payments, and credit facilities for established clients.',
    faq_q6: 'Can you support urgent or phased deliveries?',
    faq_a6: 'Yes. We plan phased deliveries based on project schedules, with priority logistics support for urgent requirements and critical project milestones.',
    faq_q7: 'Do you provide documentation for compliance and audits?',
    faq_a7: 'We provide delivery notes, material specifications, and supporting documents required for internal reviews and procurement audits.',
    highlights_title: 'Why Partners Choose Zam Zam Trading',
    statistics_title: 'Our Success in Numbers',
    projects_title: 'Our Projects & Products',
    clients_title: 'Trusted Partners',
    industries_title: 'Industries We Serve',
    faq_title: 'Frequently Asked Questions',
    contact_title: 'Contact & Reach Us',
    contact_lead: 'Connect with our team for tenders, supply quotes, or ongoing project support across Bangladesh.',
    contact_quote: 'Request a Quote',
    contact_call: 'Schedule a Call',
    contact_mobile: '<strong>Mobile:</strong> <a href="tel:+8801716777787">+8801716777787</a>',
    contact_email: '<strong>Email:</strong> <a href="mailto:info@zzt.com.bd">info@zzt.com.bd</a>',
    contact_address: '<strong>Address:</strong> House#11, Road#24, Sector#10, Uttara, Dhaka, Bangladesh.',
    contact_hours: '<strong>Hours:</strong> Sat–Thu, 9:00 AM – 6:00 PM',
    contact_services: '<strong>Services:</strong> Government contracting, finishing thread, stone & sand, feed mill raw materials',
    footer_quick: 'Quick Links',
    footer_link_home: '<i class="fas fa-home"></i>Home',
    footer_link_about: '<i class="fas fa-info-circle"></i>About Us',
    footer_link_highlights: '<i class="fas fa-star"></i>Highlights',
    footer_link_services: '<i class="fas fa-cogs"></i>Our Services',
    footer_link_statistics: '<i class="fas fa-chart-bar"></i>Statistics',
    footer_link_clients: '<i class="fas fa-users"></i>Trusted Partners',
    footer_link_projects: '<i class="fas fa-project-diagram"></i>Projects',
    footer_link_industries: '<i class="fas fa-industry"></i>Industries',
    footer_link_faq: '<i class="fas fa-question-circle"></i>FAQ',
    footer_link_contact: '<i class="fas fa-envelope"></i>Contact',
    footer_services: 'Our Services',
    footer_service_1: '<i class="fas fa-handshake"></i>Government Contracting',
    footer_service_2: '<i class="fas fa-cut"></i>Finishing Thread Supply',
    footer_service_3: '<i class="fas fa-building"></i>Construction Materials',
    footer_service_4: '<i class="fas fa-seedling"></i>Feed Mill Raw Materials',
    footer_service_5: '<i class="fas fa-truck"></i>Logistics & Delivery',
    footer_company: 'Zam Zam Trading',
    footer_company_desc: 'Trusted Partner in Government Contracting & Supply in Bangladesh. Quality assured sourcing and nationwide delivery since 2009.',
    footer_meta_1: 'Procurement Support',
    footer_meta_2: 'Bulk Supply Planning',
    footer_meta_3: 'Nationwide Logistics',
    footer_copy: '© <span id="year"></span> Zam Zam Trading. All rights reserved.',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Service'
    ,contact_back: '<i class="fas fa-arrow-left"></i> Back to Home',
    contact_form_title: 'Get In Touch',
    contact_form_lead: "Ready to discuss your project? Fill out the form below and we'll get back to you within 24 hours.",
    contact_success: "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
    contact_error: 'There was an error sending your message. Please try again or contact us directly.',
    contact_first_name: 'First Name *',
    contact_last_name: 'Last Name *',
    contact_email_label: 'Email Address *',
    contact_phone_label: 'Phone Number',
    contact_company_label: 'Company Name',
    contact_service_label: 'Service Interest *',
    contact_service_select: 'Select a service',
    contact_service_1: 'Government Contracting',
    contact_service_2: 'Finishing Thread Supply',
    contact_service_3: 'Stone & Sand Supply',
    contact_service_4: 'Feed Mill Raw Materials',
    contact_service_5: 'Logistics & Delivery',
    contact_service_6: 'Other',
    contact_subject_label: 'Subject *',
    contact_subject_placeholder: 'Brief description of your inquiry',
    contact_message_label: 'Message *',
    contact_message_placeholder: 'Please provide details about your requirements, quantities, delivery location, and timeline...',
    contact_send: 'Send Message',
    contact_sending: 'Sending...',
    terms_back: '← Back to Home',
    terms_title: 'Terms of Service',
    terms_updated: '<strong>Last updated:</strong> February 10, 2026',
    terms_1_title: '1. Acceptance of Terms',
    terms_1_desc: "By engaging Zam Zam Trading's services or accessing our website, you agree to be bound by these Terms of Service and all applicable laws and regulations of Bangladesh.",
    terms_2_title: '2. Services Provided',
    terms_2_intro: 'Zam Zam Trading provides:',
    terms_2_item_1: 'Government contracting and tender participation services',
    terms_2_item_2: 'Finishing thread supply for garments industry',
    terms_2_item_3: 'Stone and sand supply for construction projects',
    terms_2_item_4: 'Raw materials supply for feed mills',
    terms_2_item_5: 'Logistics and delivery services across Bangladesh',
    terms_3_title: '3. Service Agreements',
    terms_3_desc: 'All service agreements are subject to separate written contracts. These terms serve as general conditions unless superseded by specific contractual agreements.',
    terms_4_title: '4. Pricing and Payment',
    terms_4_1: '4.1. All prices are quoted in Bangladeshi Taka (BDT) unless otherwise specified.',
    terms_4_2: '4.2. Payment terms vary by project and will be specified in individual contracts.',
    terms_4_3: '4.3. Government contracts follow official procurement payment schedules.',
    terms_4_4: '4.4. Late payment may result in service suspension or additional charges.',
    terms_5_title: '5. Quality Assurance',
    terms_5_1: '5.1. We guarantee quality-assured sourcing from certified suppliers.',
    terms_5_2: '5.2. All materials meet government and industry standards.',
    terms_5_3: '5.3. Quality disputes must be raised within 7 days of delivery.',
    terms_6_title: '6. Delivery and Logistics',
    terms_6_1: '6.1. Delivery timeframes are estimates and may vary due to circumstances beyond our control.',
    terms_6_2: '6.2. We provide nationwide delivery across Bangladesh.',
    terms_6_3: '6.3. Delivery terms and responsibilities are specified in individual contracts.',
    terms_7_title: '7. Limitation of Liability',
    terms_7_1: '7.1. Our liability is limited to the contract value of the specific service provided.',
    terms_7_2: '7.2. We are not liable for indirect, consequential, or punitive damages.',
    terms_7_3: '7.3. Force majeure events (natural disasters, government actions, etc.) excuse performance delays.',
    terms_8_title: '8. Intellectual Property',
    terms_8_desc: 'All content on our website, including text, graphics, logos, and images, is the property of Zam Zam Trading and protected by intellectual property laws.',
    terms_9_title: '9. Confidentiality',
    terms_9_desc: 'We maintain strict confidentiality regarding client information, project details, and business relationships in accordance with professional standards.',
    terms_10_title: '10. Data Protection',
    terms_10_desc: 'We handle personal and business data in line with our Privacy Policy and applicable data protection requirements. Where GDPR applies, we apply lawful bases for processing and honor data subject rights.',
    terms_11_title: '11. Government Compliance',
    terms_11_desc: 'All services comply with Bangladesh government regulations, procurement rules, and relevant industry standards.',
    terms_12_title: '12. Dispute Resolution',
    terms_12_1: '12.1. Initial disputes should be addressed through direct communication.',
    terms_12_2: '12.2. Unresolved disputes will be settled through arbitration in Dhaka, Bangladesh.',
    terms_12_3: '12.3. Bangladesh law governs all agreements and disputes.',
    terms_13_title: '13. Contract Termination',
    terms_13_1: '13.1. Either party may terminate services with appropriate notice as specified in individual contracts.',
    terms_13_2: '13.2. Immediate termination is allowed for breach of contract or non-payment.',
    terms_14_title: '14. Modifications',
    terms_14_desc: 'We reserve the right to modify these terms at any time. Changes will be posted on our website with an updated effective date.',
    terms_15_title: '15. Contact Information',
    terms_15_intro: 'For questions about these terms or our services:',
    terms_15_company: '<strong>Company:</strong> Zam Zam Trading',
    terms_15_email: '<strong>Email:</strong> info@zzt.com.bd',
    terms_15_phone: '<strong>Phone:</strong> +8801716777787',
    terms_15_address: '<strong>Address:</strong> House#11, Road#24, Sector#10, Uttara, Dhaka, Bangladesh',
    terms_15_hours: '<strong>Business Hours:</strong> Saturday-Thursday, 9:00 AM - 6:00 PM',
    terms_16_title: '16. Governing Law',
    terms_16_desc: 'These terms are governed by the laws of Bangladesh. Any legal proceedings must be conducted in the courts of Dhaka, Bangladesh.',
    terms_17_title: '17. Electronic Communications',
    terms_17_desc: 'By using our services or contacting us electronically, you consent to receive communications from us via email, phone, or other electronic means. We will communicate in accordance with applicable laws and your preferences.',
    terms_18_title: '18. Severability',
    terms_18_desc: 'If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.',
    privacy_back: '← Back to Home',
    privacy_title: 'Privacy Policy',
    privacy_updated: '<strong>Last updated:</strong> February 10, 2026',
    privacy_intro: 'This policy applies to visitors, clients, and business contacts. If you are located in the EEA/UK, GDPR standards apply to your personal data when we process it.',
    privacy_1_title: '1. Information We Collect',
    privacy_1_desc: 'Zam Zam Trading ("we," "our," or "us") collects information you provide directly to us, such as when you contact us for business inquiries, request quotes, or engage our services. This may include:',
    privacy_1_item_1: 'Contact information (name, email address, phone number)',
    privacy_1_item_2: 'Business information (company name, address, requirements)',
    privacy_1_item_3: 'Communication records and correspondence',
    privacy_2_title: '2. How We Use Your Information',
    privacy_2_desc: 'We use the information we collect to:',
    privacy_2_item_1: 'Provide and improve our government contracting and supply services',
    privacy_2_item_2: 'Respond to your inquiries and fulfill your requests',
    privacy_2_item_3: 'Communicate with you about our services',
    privacy_2_item_4: 'Comply with legal obligations and government requirements',
    privacy_3_title: '3. Legal Basis for Processing (GDPR)',
    privacy_3_desc: 'Where GDPR applies, we process personal data under the following legal bases:',
    privacy_3_item_1: 'Contractual necessity to provide requested services and quotations',
    privacy_3_item_2: 'Legitimate interests to manage business communications and operations',
    privacy_3_item_3: 'Legal obligations related to regulatory or government requirements',
    privacy_3_item_4: 'Consent where required (e.g., optional marketing communications)',
    privacy_4_title: '4. Information Sharing',
    privacy_4_desc: 'We do not sell, trade, or otherwise transfer your personal information to third parties except:',
    privacy_4_item_1: 'When required by law or government authorities',
    privacy_4_item_2: 'To trusted service providers who assist in our business operations',
    privacy_4_item_3: 'With your explicit consent',
    privacy_5_title: '5. Data Security',
    privacy_5_desc: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.',
    privacy_6_title: '6. Data Retention',
    privacy_6_desc: 'We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by Bangladesh law and government regulations.',
    privacy_7_title: '7. Your Rights',
    privacy_7_desc: 'You have the right to:',
    privacy_7_item_1: 'Access and update your personal information',
    privacy_7_item_2: 'Request correction of inaccurate information',
    privacy_7_item_3: 'Request deletion of your information (subject to legal requirements)',
    privacy_7_item_4: 'Withdraw consent where applicable',
    privacy_8_title: '8. GDPR Rights (EEA/UK)',
    privacy_8_desc: 'If GDPR applies, you also have the right to:',
    privacy_8_item_1: 'Request restriction or objection to processing',
    privacy_8_item_2: 'Data portability for information you provided to us',
    privacy_8_item_3: 'Lodge a complaint with a supervisory authority',
    privacy_8_note: 'To exercise these rights, contact us using the details below.',
    privacy_9_title: '9. Cookies and Tracking',
    privacy_9_desc: 'Our website may use cookies and similar technologies to enhance user experience. You can control cookie settings through your browser preferences.',
    privacy_10_title: '10. International Transfers',
    privacy_10_desc: 'We may process or store information using service providers that operate in other countries. When international transfers occur, we apply appropriate safeguards in line with applicable data protection laws.',
    privacy_11_title: '11. Changes to This Policy',
    privacy_11_desc: 'We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.',
    privacy_12_title: '12. Contact Information',
    privacy_12_intro: 'For questions about this privacy policy or our data practices, please contact us:',
    privacy_12_email: '<strong>Email:</strong> info@zzt.com.bd',
    privacy_12_phone: '<strong>Phone:</strong> +8801716777787',
    privacy_12_address: '<strong>Address:</strong> House#11, Road#24, Sector#10, Uttara, Dhaka, Bangladesh',
    privacy_13_title: '13. Governing Law',
    privacy_13_desc: 'This privacy policy is governed by the laws of Bangladesh and any applicable data protection regulations.',
    privacy_14_title: '14. Data Controller',
    privacy_14_desc: 'Zam Zam Trading acts as the data controller for personal information processed under this policy. We determine the purposes and means of processing personal data for our business operations.',
    privacy_15_title: '15. Children’s Privacy',
    privacy_15_desc: 'Our services are intended for business users and are not directed to children under 13. We do not knowingly collect personal information from children.'
  }
};
window.translations = translations;

function applyLanguage() {
  const dictionary = translations.en;
  document.documentElement.setAttribute('data-lang', 'en');
  document.documentElement.lang = 'en';
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const value = dictionary[key];
    if (value !== undefined) {
      element.innerHTML = value;
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    const value = dictionary[key];
    if (value !== undefined) {
      element.setAttribute('placeholder', value);
    }
  });
}

applyLanguage();


// Scroll to top button
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    elements.scrollToTopBtn?.classList.add('visible');
  } else {
    elements.scrollToTopBtn?.classList.remove('visible');
  }
  if (elements.scrollProgress) {
    const doc = document.documentElement;
    const total = doc.scrollHeight - doc.clientHeight;
    const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
    elements.scrollProgress.style.width = `${progress}%`;
  }
});

if (elements.scrollToTopBtn) {
  elements.scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Statistics counter animation
const animateCounter = (element, target) => {
  let current = 0;
  const increment = target / 100;
  const suffix = element.getAttribute('data-suffix') || '';
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current).toLocaleString() + suffix;
  }, 20);
};

const observeStats = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll('.stat-number');
      statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        animateCounter(stat, target);
      });
      observeStats.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsSection = elements.statsSection;
if (statsSection) {
  observeStats.observe(statsSection);
}



// FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  
  question.addEventListener('click', () => {
    const isOpen = question.getAttribute('aria-expanded') === 'true';
    
    // Close all other items
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      }
    });
    
    // Toggle current item
    if (!isOpen) {
      item.classList.add('active');
      question.setAttribute('aria-expanded', 'true');
    } else {
      item.classList.remove('active');
      question.setAttribute('aria-expanded', 'false');
    }
  });
});

// Scroll animations function
function initScrollAnimations() {
  const observeAnimations = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  const animatedElements = document.querySelectorAll('.service-card, .stat-card, .faq-item, .info-card, .industry-card, .about-card');
  animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    el.style.transitionDelay = `${index * 0.1}s`;
    observeAnimations.observe(el);
  });
}

// Projects tab switching with carousel functionality
const projectTabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Projects and Products carousel state
let projectsCurrentIndex = 0;
let productsCurrentIndex = 0;
let clientsCurrentIndex = 0;

// Function to get items per view for projects/products carousels
function getProjectsItemsPerView() {
  // Always show exactly 6 items on desktop (3 columns × 2 rows)
  // Mobile shows 2 items for projects (1 col × 2 rows), 4 items for products (2 cols × 2 rows)
  if (window.innerWidth <= 768) {
    return { projects: 2, products: 4 };
  }
  // Desktop and tablet: Both show exactly 6 items (3×2 grid)
  return { projects: 6, products: 6 };
}

// Function to get responsive items per view for clients
function getClientsItemsPerView() {
  if (window.innerWidth <= 480) return 2;
  if (window.innerWidth <= 768) return 2;
  if (window.innerWidth <= 1024) return 3;
  return 4;
}

function updateProjectsCarouselPosition(trackId, currentIndex, totalItems, tabType) {
  const track = document.getElementById(trackId);
  const prevBtn = document.getElementById(trackId.replace('-track', '-prev'));
  const nextBtn = document.getElementById(trackId.replace('-track', '-next'));
  
  if (!track || totalItems === 0) return;
  
  const itemsPerView = getProjectsItemsPerView();
  const currentItemsPerView = tabType === 'projects' ? itemsPerView.projects : itemsPerView.products;
  
  // Hide all items first
  const allItems = track.querySelectorAll('.project-item');
  allItems.forEach(item => {
    item.style.display = 'none';
    item.style.visibility = 'hidden';
  });
  
  // Show only the items for current page - ensure exactly the right number
  const startIndex = currentIndex * currentItemsPerView;
  const endIndex = Math.min(startIndex + currentItemsPerView, totalItems);
  
  for (let i = startIndex; i < endIndex; i++) {
    if (allItems[i]) {
      allItems[i].style.display = 'block';
      allItems[i].style.visibility = 'visible';
    }
  }
  
  // Update button states
  const totalPages = Math.ceil(totalItems / currentItemsPerView);
  const maxIndex = totalPages - 1;
  
  if (prevBtn) {
    prevBtn.disabled = currentIndex === 0;
    prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
  }
  if (nextBtn) {
    nextBtn.disabled = currentIndex >= maxIndex;
    nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
  }
}

// Function to update clients carousel position
function updateClientsCarouselPosition(currentIndex, totalItems) {
  const track = document.getElementById('clients-track');
  const prevBtn = document.getElementById('clients-prev');
  const nextBtn = document.getElementById('clients-next');
  
  if (!track) return;
  
  const itemsPerView = getClientsItemsPerView();
  
  // Calculate the transform percentage
  const itemWidth = 100 / itemsPerView;
  const translateX = -(currentIndex * itemWidth);
  
  track.style.transform = `translateX(${translateX}%)`;
  
  // Update button states
  if (prevBtn) {
    prevBtn.disabled = currentIndex === 0;
  }
  if (nextBtn) {
    nextBtn.disabled = currentIndex >= totalItems - itemsPerView;
  }
}



function initializeCarousels() {
  // Reset carousel positions on initialization
  projectsCurrentIndex = 0;
  productsCurrentIndex = 0;
  
  const projectsTrack = document.getElementById('projects-track');
  const productsTrack = document.getElementById('products-track');
  const clientsTrack = document.getElementById('clients-track');
  
  if (projectsTrack) {
    const projectItems = projectsTrack.querySelectorAll('.project-item');
    updateProjectsCarouselPosition('projects-track', projectsCurrentIndex, projectItems.length, 'projects');
  }
  
  if (productsTrack) {
    const productItems = productsTrack.querySelectorAll('.project-item');
    updateProjectsCarouselPosition('products-track', productsCurrentIndex, productItems.length, 'products');
  }
  
  if (clientsTrack) {
    const clientItems = clientsTrack.querySelectorAll('.client-item');
    updateClientsCarouselPosition(clientsCurrentIndex, clientItems.length);
  }
}

// Projects carousel navigation
const projectsPrevBtn = document.getElementById('projects-prev');
const projectsNextBtn = document.getElementById('projects-next');
const productsPrevBtn = document.getElementById('products-prev');
const productsNextBtn = document.getElementById('products-next');
const clientsPrevBtn = document.getElementById('clients-prev');
const clientsNextBtn = document.getElementById('clients-next');

if (projectsPrevBtn && projectsNextBtn) {
  projectsPrevBtn.addEventListener('click', () => {
    if (projectsCurrentIndex > 0) {
      projectsCurrentIndex--;
      const projectsTrack = document.getElementById('projects-track');
      const projectItems = projectsTrack.querySelectorAll('.project-item');
      updateProjectsCarouselPosition('projects-track', projectsCurrentIndex, projectItems.length, 'projects');
    }
  });
  
  projectsNextBtn.addEventListener('click', () => {
    const projectsTrack = document.getElementById('projects-track');
    const projectItems = projectsTrack.querySelectorAll('.project-item');
    const itemsPerView = getProjectsItemsPerView().projects;
    const totalSets = Math.ceil(projectItems.length / itemsPerView);
    const maxIndex = totalSets - 1;
    
    if (projectsCurrentIndex < maxIndex) {
      projectsCurrentIndex++;
      updateProjectsCarouselPosition('projects-track', projectsCurrentIndex, projectItems.length, 'projects');
    }
  });
}

if (productsPrevBtn && productsNextBtn) {
  productsPrevBtn.addEventListener('click', () => {
    if (productsCurrentIndex > 0) {
      productsCurrentIndex--;
      const productsTrack = document.getElementById('products-track');
      const productItems = productsTrack.querySelectorAll('.project-item');
      updateProjectsCarouselPosition('products-track', productsCurrentIndex, productItems.length, 'products');
    }
  });
  
  productsNextBtn.addEventListener('click', () => {
    const productsTrack = document.getElementById('products-track');
    const productItems = productsTrack.querySelectorAll('.project-item');
    const itemsPerView = getProjectsItemsPerView().products;
    const totalSets = Math.ceil(productItems.length / itemsPerView);
    const maxIndex = totalSets - 1;
    
    if (productsCurrentIndex < maxIndex) {
      productsCurrentIndex++;
      updateProjectsCarouselPosition('products-track', productsCurrentIndex, productItems.length, 'products');
    }
  });
}

// Clients carousel navigation
if (clientsPrevBtn && clientsNextBtn) {
  clientsPrevBtn.addEventListener('click', () => {
    if (clientsCurrentIndex > 0) {
      clientsCurrentIndex--;
      const clientsTrack = document.getElementById('clients-track');
      const clientItems = clientsTrack.querySelectorAll('.client-item');
      updateClientsCarouselPosition(clientsCurrentIndex, clientItems.length);
    }
  });
  
  clientsNextBtn.addEventListener('click', () => {
    const clientsTrack = document.getElementById('clients-track');
    const clientItems = clientsTrack.querySelectorAll('.client-item');
    const maxIndex = Math.max(0, clientItems.length - getClientsItemsPerView());
    
    if (clientsCurrentIndex < maxIndex) {
      clientsCurrentIndex++;
      updateClientsCarouselPosition(clientsCurrentIndex, clientItems.length);
    }
  });
}

// Tab switching
projectTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetTab = tab.getAttribute('data-tab');
    
    // Stop auto-scroll for currently active tab
    const currentActiveTab = document.querySelector('.tab-content.active');
    if (currentActiveTab) {
      if (currentActiveTab.id === 'projects-tab') {
        stopProjectsAutoScroll();
      } else if (currentActiveTab.id === 'products-tab') {
        stopProductsAutoScroll();
      }
    }
    
    projectTabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    tab.classList.add('active');
    document.getElementById(targetTab + '-tab').classList.add('active');
    
    // Reset positions when switching tabs
    projectsCurrentIndex = 0;
    productsCurrentIndex = 0;
    
    // Start auto-scroll for new active tab
    if (targetTab === 'projects') {
      startProjectsAutoScroll();
    } else if (targetTab === 'products') {
      startProductsAutoScroll();
    }
    
    // Reinitialize carousels when switching tabs with delay for DOM update
    setTimeout(() => {
      initializeCarousels();
    }, 100);
  });
});

// Handle window resize
window.addEventListener('resize', () => {
  // Reset positions on resize to ensure proper display
  projectsCurrentIndex = 0;
  productsCurrentIndex = 0;
  clientsCurrentIndex = 0;
  
  // Reinitialize carousels after a brief delay to ensure CSS has updated
  setTimeout(() => {
    initializeCarousels();
  }, 150);
});

// Auto-scrolling for carousels
let projectsAutoScroll;
let productsAutoScroll;
let clientsAutoScroll;

// Projects auto-scroll functions
function startProjectsAutoScroll() {
  projectsAutoScroll = setInterval(() => {
    const projectsTrack = document.getElementById('projects-track');
    if (!projectsTrack) return;
    
    const projectItems = projectsTrack.querySelectorAll('.project-item');
    const itemsPerView = getProjectsItemsPerView().projects;
    const totalSets = Math.ceil(projectItems.length / itemsPerView);
    const maxIndex = totalSets - 1;
    
    if (projectsCurrentIndex < maxIndex) {
      projectsCurrentIndex++;
    } else {
      projectsCurrentIndex = 0;
    }
    
    updateProjectsCarouselPosition('projects-track', projectsCurrentIndex, projectItems.length, 'projects');
  }, 4000); // Auto-scroll every 4 seconds
}

function stopProjectsAutoScroll() {
  if (projectsAutoScroll) {
    clearInterval(projectsAutoScroll);
  }
}

// Products auto-scroll functions
function startProductsAutoScroll() {
  productsAutoScroll = setInterval(() => {
    const productsTrack = document.getElementById('products-track');
    if (!productsTrack) return;
    
    const productItems = productsTrack.querySelectorAll('.project-item');
    const itemsPerView = getProjectsItemsPerView().products;
    const totalSets = Math.ceil(productItems.length / itemsPerView);
    const maxIndex = totalSets - 1;
    
    if (productsCurrentIndex < maxIndex) {
      productsCurrentIndex++;
    } else {
      productsCurrentIndex = 0;
    }
    
    updateProjectsCarouselPosition('products-track', productsCurrentIndex, productItems.length, 'products');
  }, 4000); // Auto-scroll every 4 seconds
}

function stopProductsAutoScroll() {
  if (productsAutoScroll) {
    clearInterval(productsAutoScroll);
  }
}

// Clients auto-scroll functions
function startClientsAutoScroll() {
  clientsAutoScroll = setInterval(() => {
    const clientsTrack = document.getElementById('clients-track');
    if (!clientsTrack) return;
    
    const clientItems = clientsTrack.querySelectorAll('.client-item');
    const maxIndex = Math.max(0, clientItems.length - getClientsItemsPerView());
    
    if (clientsCurrentIndex < maxIndex) {
      clientsCurrentIndex++;
    } else {
      clientsCurrentIndex = 0;
    }
    
    updateClientsCarouselPosition(clientsCurrentIndex, clientItems.length);
  }, 3000); // Auto-scroll every 3 seconds
}

function stopClientsAutoScroll() {
  if (clientsAutoScroll) {
    clearInterval(clientsAutoScroll);
  }
}

// Start auto-scroll and handle pause on hover for all carousels
const projectsCarouselContainer = document.querySelector('#projects-tab .projects-carousel-container');
if (projectsCarouselContainer) {
  startProjectsAutoScroll();
  
  projectsCarouselContainer.addEventListener('mouseenter', stopProjectsAutoScroll);
  projectsCarouselContainer.addEventListener('mouseleave', startProjectsAutoScroll);
}

const productsCarouselContainer = document.querySelector('#products-tab .projects-carousel-container');
if (productsCarouselContainer) {
  productsCarouselContainer.addEventListener('mouseenter', stopProductsAutoScroll);
  productsCarouselContainer.addEventListener('mouseleave', startProductsAutoScroll);
}

const clientsCarouselContainer = document.querySelector('.clients-carousel-container');
if (clientsCarouselContainer) {
  startClientsAutoScroll();
  
  clientsCarouselContainer.addEventListener('mouseenter', stopClientsAutoScroll);
  clientsCarouselContainer.addEventListener('mouseleave', startClientsAutoScroll);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Ensure projects tab is initially active
  const projectsTab = document.querySelector('.tab-btn[data-tab="projects"]');
  const projectsTabContent = document.getElementById('projects-tab');
  
  if (projectsTab && projectsTabContent) {
    projectsTab.classList.add('active');
    projectsTabContent.classList.add('active');
  }
  
  // Initialize carousels with delay to ensure DOM is ready
  setTimeout(() => {
    initializeCarousels();
    
    // Start auto-scroll for projects tab (default active)
    startProjectsAutoScroll();
  }, 200);
});

// Hero full-width slider
const heroSlider = elements.heroSlider;
if (heroSlider) {
  const heroTrack = heroSlider.querySelector('.hero-track');
  const heroPrev = heroSlider.querySelector('.prev');
  const heroNext = heroSlider.querySelector('.next');
  if (heroTrack && heroPrev && heroNext) {
    const slides = Array.from(heroTrack.querySelectorAll('.hero-slide'));
    let index = 0;
    const goTo = (i) => {
      index = (i + slides.length) % slides.length;
      heroTrack.scrollTo({ left: heroTrack.clientWidth * index, behavior: 'smooth' });
    };
    const onPrev = () => goTo(index - 1);
    const onNext = () => goTo(index + 1);
    heroPrev.addEventListener('click', onPrev);
    heroNext.addEventListener('click', onNext);

    let timer = setInterval(onNext, 4000);
    const pause = () => clearInterval(timer);
    const resume = () => { timer = setInterval(onNext, 4000); };
    heroSlider.addEventListener('mouseenter', pause);
    heroSlider.addEventListener('mouseleave', resume);

    // Keep index in sync on resize
    window.addEventListener('resize', () => goTo(index));
  }
}

// Smooth scroll for internal links
document.addEventListener('click', (e) => {
  const target = e.target.closest('a[href^="#"]');
  if (!target) return;
  const href = target.getAttribute('href');
  const el = document.querySelector(href);
  if (el) {
    e.preventDefault();
    const header = document.querySelector('.site-header');
    const offset = header ? header.getBoundingClientRect().height + 8 : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
});

// Simple Mobile Navigation
if (elements.mobileNavToggle && elements.mobileNavMenu) {
  let isMenuOpen = false;
  
  function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
      // Open menu
      elements.mobileNavToggle.classList.add('active');
      elements.mobileNavMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      // Close menu
      elements.mobileNavToggle.classList.remove('active');
      elements.mobileNavMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
  
  function closeMobileMenu() {
    if (isMenuOpen) {
      isMenuOpen = false;
      elements.mobileNavToggle.classList.remove('active');
      elements.mobileNavMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
  
  // Toggle button click
  elements.mobileNavToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleMobileMenu();
  });
  
  // Overlay click to close
  if (elements.mobileNavOverlay) {
    elements.mobileNavOverlay.addEventListener('click', function() {
      closeMobileMenu();
    });
  }
  
  // Menu link clicks
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      // Close menu after a short delay to allow navigation
      setTimeout(function() {
        closeMobileMenu();
      }, 100);
    });
  });
  
  // Close on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isMenuOpen) {
      closeMobileMenu();
    }
  });
  
  // Close on window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && isMenuOpen) {
      closeMobileMenu();
    }
  });
}

// Active section highlighting in navbar
const sections = Array.from(document.querySelectorAll('section[id]'));
const desktopNavLinks = Array.from(document.querySelectorAll('.nav-menu a[href^="#"]'));
const mobileNavLinks = Array.from(document.querySelectorAll('.mobile-nav-link[href^="#"]'));
const allNavLinks = [...desktopNavLinks, ...mobileNavLinks];

const activateLink = (id) => {
  allNavLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
};

const navigationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) activateLink(entry.target.id);
  });
}, { rootMargin: '0px 0px -55% 0px', threshold: 0.35 });

sections.forEach((sec) => navigationObserver.observe(sec));


