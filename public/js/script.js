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
  langToggle: document.getElementById('lang-toggle'),
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
  },
  bn: {
    nav_home: 'হোম',
    nav_about: 'আমাদের সম্পর্কে',
    nav_services: 'সার্ভিসসমূহ',
    nav_projects: 'প্রকল্পসমূহ',
    nav_contact: 'যোগাযোগ',
    nav_highlights: 'হাইলাইটস',
    nav_industries: 'ইন্ডাস্ট্রি',
    nav_clients: 'ক্লায়েন্টস',
    nav_statistics: 'পরিসংখ্যান',
    nav_faq: 'প্রশ্নোত্তর',
    hero_title: 'জম জম ট্রেডিং – সরকারি কন্ট্রাক্টিং ও সাপ্লাইয়ের বিশ্বস্ত পার্টনার',
    hero_desc: 'আমরা গার্মেন্টসের জন্য ফিনিশিং থ্রেড, নির্মাণে স্টোন ও স্যান্ড, এবং ফিড মিলের কাঁচামাল সাপ্লাই করি—স্বচ্ছ ডকুমেন্টেশনসহ নির্ভরযোগ্য সেবা নিশ্চিত করি।',
    btn_contact: 'আজই যোগাযোগ করুন',
    btn_explore: 'সার্ভিস দেখুন',
    hero_badge_1: '২০০৯ সাল থেকে',
    hero_badge_2: 'দেশব্যাপী ডেলিভারি',
    hero_badge_3: 'গভর্নমেন্ট টেন্ডার রেডি',
    hero_badge_4: 'কোয়ালিটি‑অ্যাসিউরড সাপ্লাই',
    hero_slide_1_title: 'ফিনিশিং থ্রেড সাপ্লাই',
    hero_slide_1_desc: 'দেশজুড়ে গার্মেন্টস উৎপাদনের জন্য মানসম্মত ও ধারাবাহিক থ্রেড সাপ্লাই।',
    hero_slide_2_title: 'স্টোন ও স্যান্ড সাপ্লাই',
    hero_slide_2_desc: 'বাংলাদেশজুড়ে প্রকল্প সাইটে নির্ভরযোগ্য নির্মাণ এগ্রিগেট ডেলিভারি।',
    hero_slide_3_title: 'সরকারি কন্ট্রাক্টিং',
    hero_slide_3_desc: 'টেন্ডার অংশগ্রহণ থেকে ডেলিভারি পর্যন্ত এন্ড‑টু‑এন্ড সেবা।',
    hero_slide_4_title: 'ফিড মিল কাঁচামাল',
    hero_slide_4_desc: 'ফিড উৎপাদনের জন্য নির্ভরযোগ্য কাঁচামাল সোর্সিং।',
    hero_slide_5_title: 'দেশব্যাপী লজিস্টিকস',
    hero_slide_5_desc: 'শক্তিশালী লজিস্টিকস নেটওয়ার্কে সময়মতো ডেলিভারি।',
    about_title: 'জম জম ট্রেডিং সম্পর্কে',
    about_desc_1: 'জম জম ট্রেডিং বাংলাদেশে ১৫+ বছরের অভিজ্ঞতা সম্পন্ন একটি বিশ্বস্ত সরবরাহকারী ও সরকারি কন্ট্রাক্টর। আমরা গার্মেন্টসের ফিনিশিং থ্রেড, নির্মাণের জন্য স্টোন‑স্যান্ড এবং ফিড মিলের কাঁচামাল সরবরাহ করি। অভিজ্ঞ টিম ও দেশব্যাপী নেটওয়ার্কের মাধ্যমে আমরা সময়মতো ডেলিভারি ও নিরবচ্ছিন্ন মান নিশ্চিত করি।',
    about_desc_2: 'আমাদের টিম টেন্ডার ডকুমেন্টেশন, প্রোকিউরমেন্ট প্ল্যানিং, সাপ্লায়ার কোঅর্ডিনেশন এবং লাস্ট‑মাইল লজিস্টিকস সাপোর্ট দিয়ে সময়সূচি ও কমপ্লায়েন্স বজায় রাখতে সাহায্য করে।',
    about_highlight_1: 'সার্টিফায়েড সাপ্লায়ার থেকে মানসম্মত সোর্সিং',
    about_highlight_2: 'বাংলাদেশজুড়ে লজিস্টিকস সাপোর্ট',
    about_highlight_3: '৫০০+ সরকারি ও বেসরকারি ক্লায়েন্টের আস্থা',
    about_highlight_4: '১৫+ বছরের সরকারি কন্ট্রাক্টিং অভিজ্ঞতা',
    about_highlight_5: 'ডেডিকেটেড প্রোকিউরমেন্ট ও টেন্ডার সাপোর্ট',
    about_highlight_6: 'স্বচ্ছ ডকুমেন্টেশন ও রিপোর্টিং',
    about_card_1_title: 'মিশন',
    about_card_1_desc: 'প্রতিটি চুক্তিতে সততা, দ্রুততা ও পূর্ণ ডকুমেন্টেশনসহ নির্ভরযোগ্য সাপ্লাই সল্যুশন প্রদান।',
    about_card_2_title: 'দক্ষতা',
    about_card_2_desc: 'গার্মেন্টস, নির্মাণ ও ফিড মিলের জন্য বহুমুখী সোর্সিং এবং স্ট্রাকচার্ড ভেন্ডর পার্টনারশিপ।',
    about_card_3_title: 'অঙ্গীকার',
    about_card_3_desc: 'প্রতিটি প্রকল্পে স্থায়ী গুণমান, সময়মতো ডেলিভারি ও প্রোঅ্যাকটিভ যোগাযোগ।',
    highlights_lead: 'কমপ্লায়েন্স, স্বচ্ছতা ও পরিমাপযোগ্য ফলাফলের উপর ভিত্তি করে জটিল প্রোকিউরমেন্ট, বাল্ক সাপ্লাই ও দেশব্যাপী ডেলিভারির জন্য বিশ্বস্ত পার্টনার।',
    highlight_1_title: 'সরকারি কন্ট্রাক্টিংয়ে এন্ড‑টু‑এন্ড সাপোর্ট',
    highlight_1_desc: 'টেন্ডার প্রস্তুতি থেকে ডেলিভারি ও বিলিং পর্যন্ত পুরো লাইফ‑সাইকেল পরিচালনা করি।',
    highlight_2_title: 'বিশেষায়িত সাপ্লাই দক্ষতা',
    highlight_2_desc: 'ফিনিশিং থ্রেড, নির্মাণ এগ্রিগেট ও ফিড মিল কাঁচামালের গভীর জ্ঞান সঠিক স্পেসিফিকেশন বাছাইয়ে সহায়তা করে।',
    highlight_3_title: 'কমপ্লায়েন্স ও কোয়ালিটি অ্যাসিউরেন্স',
    highlight_3_desc: 'ভেরিফায়েড সোর্সিং, সরকারি মানদণ্ড অনুযায়ী সরবরাহ এবং প্রয়োজনীয় টেস্ট রিপোর্ট ও ডকুমেন্টেশন নিশ্চিত করি।',
    highlight_4_title: 'নির্ভরযোগ্য দেশব্যাপী লজিস্টিকস',
    highlight_4_desc: 'সমন্বিত পরিবহন ও অন‑সাইট ডেলিভারির মাধ্যমে সময়মতো সাপ্লাই নিশ্চিত করি।',
    services_title: 'আমাদের সেবাসমূহ',
    services_lead: 'ইন্ডাস্ট্রি‑ভিত্তিক প্রয়োজন অনুযায়ী সোর্সিং, কমপ্লায়েন্স চেক ও ডেলিভারি কোঅর্ডিনেশন।',
    service_1_title: 'সরকারি কন্ট্রাক্টিং',
    service_1_desc: 'বাংলাদেশজুড়ে সরকারি প্রকল্পে টেন্ডার, প্রোকিউরমেন্ট ও ডেলিভারির পূর্ণ সেবা।',
    service_1_point_1: 'প্রি‑কোয়ালিফিকেশন ও টেন্ডার ডকুমেন্টেশন',
    service_1_point_2: 'শিডিউলভিত্তিক সাপ্লাই পরিকল্পনা',
    service_1_point_3: 'কমপ্লায়েন্স‑রেডি ডেলিভারি রেকর্ড',
    service_2_title: 'গার্মেন্টস ফিনিশিং থ্রেড সাপ্লাই',
    service_2_desc: 'বিভিন্ন গার্মেন্টস উৎপাদনের জন্য নির্ভরযোগ্য ফিনিশিং থ্রেড সাপ্লাই।',
    service_2_point_1: 'কালার, স্ট্রেংথ ও ফিনিশ ম্যাচিং',
    service_2_point_2: 'বাল্ক সাপ্লাই ও ব্যাচ কনসিস্টেন্সি',
    service_2_point_3: 'ফ্যাক্টরি‑রেডি ডেলিভারি শিডিউল',
    service_3_title: 'স্টোন ও স্যান্ড সাপ্লাই',
    service_3_desc: 'বাংলাদেশজুড়ে যেকোনো স্কেলের নির্মাণ প্রকল্পে মানসম্মত এগ্রিগেট সাপ্লাই।',
    service_3_point_1: 'গ্রেডিং ও সাইজ স্পেসিফিকেশন সাপোর্ট',
    service_3_point_2: 'সাইট‑টু‑সাইট লজিস্টিকস সমন্বয়',
    service_3_point_3: 'ভলিউম‑ভিত্তিক মূল্য বিকল্প',
    service_4_title: 'ফিড মিল কাঁচামাল সাপ্লাই',
    service_4_desc: 'কৃষিভিত্তিক ফিড উৎপাদনে ধারাবাহিক গ্রেইন ও অ্যাডিটিভ সোর্সিং।',
    service_4_point_1: 'নির্ভরযোগ্য কাঁচামাল সোর্সিং',
    service_4_point_2: 'ইনটেক‑এর সময় মান যাচাই',
    service_4_point_3: 'সিজনাল সাপ্লাই কনটিনিউটি',
    statistics_lead: 'বাংলাদেশজুড়ে সরকারি ও বেসরকারি প্রতিষ্ঠানের সাথে দীর্ঘমেয়াদি সম্পর্ক এবং প্রমাণিত ডেলিভারি রেকর্ড।',
    stat_label_1: 'সরকারি চুক্তি',
    stat_label_2: 'টন ডেলিভারি',
    stat_label_3: 'সন্তুষ্ট ক্লায়েন্ট',
    stat_label_4: 'বছরের অভিজ্ঞতা',
    stat_label_5: 'জেলা কভারেজ',
    stat_label_6: 'অন‑টাইম ডেলিভারি রেট',
    projects_lead: 'সরকারি, ইন্ডাস্ট্রিয়াল ও কমার্শিয়াল সাপ্লাই প্রয়োজন পূরণে আমাদের প্রকল্প ক্যাটেগরি ও মূল পণ্যের একটি ঝলক।',
    tab_projects: 'প্রকল্প',
    tab_products: 'পণ্য',
    project_1_title: 'সরকারি অবকাঠামো',
    project_1_desc: 'বৃহৎ পরিসরের অবকাঠামো উন্নয়ন প্রকল্প',
    project_2_title: 'বিল্ডিং নির্মাণ',
    project_2_desc: 'কমার্শিয়াল ও আবাসিক নির্মাণ প্রকল্প',
    project_3_title: 'সড়ক উন্নয়ন',
    project_3_desc: 'হাইওয়ে ও সড়ক নির্মাণ উদ্যোগ',
    project_4_title: 'ব্রিজ নির্মাণ',
    project_4_desc: 'ব্রিজ ও ওভারপাস নির্মাণ প্রকল্প',
    project_5_title: 'পাবলিক ওয়ার্কস',
    project_5_desc: 'কমিউনিটি ডেভেলপমেন্ট ও পাবলিক ফ্যাসিলিটি',
    project_6_title: 'আরবান প্ল্যানিং',
    project_6_desc: 'সিটি প্ল্যানিং ও নগর উন্নয়ন প্রকল্প',
    project_7_title: 'ইনফ্রাস্ট্রাকচার ডেভেলপমেন্ট',
    project_7_desc: 'বড় অবকাঠামো ও উন্নয়ন উদ্যোগ',
    project_8_title: 'হাউজিং প্রকল্প',
    project_8_desc: 'আবাসিক ও কমিউনিটি হাউজিং উন্নয়ন',
    project_9_title: 'পরিবহন অবকাঠামো',
    project_9_desc: 'সড়ক, ব্রিজ ও পরিবহন ব্যবস্থার উন্নয়ন',
    project_10_title: 'পানি ব্যবস্থাপনা',
    project_10_desc: 'পানি সরবরাহ ও ড্রেনেজ সিস্টেম প্রকল্প',
    project_11_title: 'শিক্ষা অবকাঠামো',
    project_11_desc: 'স্কুল ও শিক্ষা প্রতিষ্ঠানের উন্নয়ন',
    project_12_title: 'স্বাস্থ্যসেবা স্থাপনা',
    project_12_desc: 'হাসপাতাল ও মেডিকেল সেন্টার নির্মাণ',
    product_1_title: 'ফিনিশিং থ্রেড',
    product_1_desc: 'গার্মেন্টস উৎপাদনের জন্য উচ্চমানের থ্রেড',
    product_2_title: 'নির্মাণ স্টোন',
    product_2_desc: 'নির্মাণ প্রকল্পের জন্য প্রিমিয়াম মানের স্টোন',
    product_3_title: 'স্যান্ড সাপ্লাই',
    product_3_desc: 'নির্মাণের জন্য ফাইন ও কোর্স স্যান্ড',
    product_4_title: 'ফিড মিল কাঁচামাল',
    product_4_desc: 'পশুখাদ্য উৎপাদনের জন্য মানসম্মত উপাদান',
    product_5_title: 'টেক্সটাইল উপকরণ',
    product_5_desc: 'বিভিন্ন টেক্সটাইল সরবরাহ ও এক্সেসরিজ',
    product_6_title: 'ইন্ডাস্ট্রিয়াল সাপ্লাই',
    product_6_desc: 'ইন্ডাস্ট্রিয়াল যন্ত্রপাতি ও উপকরণ',
    product_7_title: 'কোয়ালিটি কন্ট্রোল ম্যাটেরিয়াল',
    product_7_desc: 'টেস্টিং ও কোয়ালিটি অ্যাসিউরেন্স উপকরণ',
    product_8_title: 'কনস্ট্রাকশন এগ্রিগেট',
    product_8_desc: 'নির্মাণের জন্য হাই‑গ্রেড স্টোন ও স্যান্ড',
    product_9_title: 'বিশেষায়িত উপকরণ',
    product_9_desc: 'নির্দিষ্ট প্রয়োগের জন্য বিশেষ ম্যাটেরিয়াল',
    product_10_title: 'কৃষি উপকরণ',
    product_10_desc: 'খামার যন্ত্রপাতি ও কৃষি উপকরণ',
    product_11_title: 'ম্যানুফ্যাকচারিং টুলস',
    product_11_desc: 'উৎপাদনের জন্য টুলস ও যন্ত্রপাতি',
    product_12_title: 'সেফটি ইকুইপমেন্ট',
    product_12_desc: 'সেফটি গিয়ার ও সুরক্ষা উপকরণ',
    clients_lead: 'সরবরাহের ধারাবাহিকতা ও কন্ট্রাক্ট পারফরম্যান্সে নির্ভরশীল সংস্থা, ডেভেলপার, নির্মাতা ও প্রতিষ্ঠানগুলোর বিশ্বস্ত পার্টনার।',
    industries_lead: 'বিভিন্ন সেক্টরে প্রয়োজনভিত্তিক প্রোকিউরমেন্ট সাপোর্ট, ভলিউম হ্যান্ডলিং এবং নির্ভরযোগ্য ডেলিভারি সমন্বয়।',
    industry_1_title: 'সরকারি ও পাবলিক সেক্টর',
    industry_1_desc: 'কেন্দ্র ও স্থানীয় সরকারি প্রকল্পে নিবন্ধিত সাপ্লায়ার হিসেবে e-GP ও পাবলিক প্রোকিউরমেন্ট গাইডলাইন অনুযায়ী কাজ করি।',
    industry_2_title: 'নির্মাণ ও অবকাঠামো',
    industry_2_desc: 'রাস্তা, ব্রিজ, বিল্ডিং ও অবকাঠামো প্রকল্পে স্টোন, স্যান্ড ও সংশ্লিষ্ট নির্মাণ উপকরণ সরবরাহ।',
    industry_3_title: 'গার্মেন্টস ও টেক্সটাইল',
    industry_3_desc: 'রপ্তানিমুখী গার্মেন্টস ও টেক্সটাইল ইউনিটের জন্য ফিনিশিং থ্রেড ও সংশ্লিষ্ট সাপ্লাই।',
    industry_4_title: 'ফিড মিল ও কৃষি',
    industry_4_desc: 'দেশজুড়ে পোল্ট্রি, মাছ ও গবাদিপশুর ফিড প্রস্তুতকারকের জন্য কাঁচামাল ও অ্যাডিটিভ সরবরাহ।',
    industry_5_title: 'পাবলিক ডেভেলপমেন্ট প্রকল্প',
    industry_5_desc: 'শিক্ষা, স্বাস্থ্য ও কমিউনিটি অবকাঠামোসহ উন্নয়নমূলক উদ্যোগে সাপোর্ট।',
    industry_6_title: 'প্রাইভেট সেক্টর ক্লায়েন্ট',
    industry_6_desc: 'প্রাইভেট ডেভেলপার, ইন্ডাস্ট্রিয়াল ইউনিট ও ট্রেডিং পার্টনারদের সাথে দীর্ঘমেয়াদি সম্পর্ক।',
    faq_lead: 'প্রোকিউরমেন্ট টিম, প্রকল্প ব্যবস্থাপক ও সাপ্লায়ারদের সাধারণ প্রশ্নের স্পষ্ট উত্তর।',
    faq_q1: 'আপনারা কোন ধরনের সরকারি চুক্তি পরিচালনা করেন?',
    faq_a1: 'আমরা নির্মাণ উপকরণ, গার্মেন্টসের ফিনিশিং থ্রেড এবং ফিড মিল কাঁচামালসহ বিভিন্ন সরকারি কন্ট্রাক্ট পরিচালনা করি। সরকারি প্রোকিউরমেন্টে আমাদের ১৫+ বছরের অভিজ্ঞতা আছে।',
    faq_q2: 'আপনারা কি দেশব্যাপী ডেলিভারি দেন?',
    faq_a2: 'হ্যাঁ, বাংলাদেশজুড়ে আমরা ডেলিভারি সেবা দিই। আমাদের লজিস্টিকস নেটওয়ার্ক বড় শহর থেকে দূরবর্তী এলাকাতেও সময়মতো সরবরাহ নিশ্চিত করে।',
    faq_q3: 'কোন কোন কোয়ালিটি অ্যাসিউরেন্স মেজার অনুসরণ করেন?',
    faq_a3: 'প্রি‑ডেলিভারি ইনস্পেকশন, অনুমোদিত সাপ্লায়ার থেকে সার্টিফায়েড সোর্সিং এবং সরকারি মানদণ্ড অনুযায়ী কমপ্লায়েন্স নিশ্চিত করি।',
    faq_q4: 'বাল্ক অর্ডারের জন্য কোটেশন কীভাবে পাব?',
    faq_a4: 'ফোন বা ইমেইলের মাধ্যমে যোগাযোগ করুন। উপকরণের ধরন, পরিমাণ ও ডেলিভারি লোকেশন দিলে দ্রুত কোটেশন দেওয়া যাবে।',
    faq_q5: 'আপনাদের পেমেন্ট টার্মস কী?',
    faq_a5: 'কন্ট্রাক্টের আকার ও ক্লায়েন্ট সম্পর্ক অনুযায়ী ফ্লেক্সিবল পেমেন্ট টার্মস আছে। অ্যাডভান্স, ডেলিভারি‑বেসড পেমেন্ট এবং প্রতিষ্ঠিত ক্লায়েন্টদের জন্য ক্রেডিট সুবিধা রয়েছে।',
    faq_q6: 'জরুরি বা ধাপে ধাপে ডেলিভারি সাপোর্ট করতে পারেন?',
    faq_a6: 'হ্যাঁ। প্রকল্প শিডিউল অনুযায়ী ধাপে ধাপে ডেলিভারি প্ল্যান করা হয় এবং জরুরি প্রয়োজনের জন্য প্রাধান্যভিত্তিক লজিস্টিকস সাপোর্ট থাকে।',
    faq_q7: 'কমপ্লায়েন্স ও অডিটের জন্য ডকুমেন্টেশন দেন?',
    faq_a7: 'ডেলিভারি নোট, ম্যাটেরিয়াল স্পেসিফিকেশন এবং প্রয়োজনীয় সাপোর্টিং ডকুমেন্ট আমরা সরবরাহ করি।',
    highlights_title: 'কেন পার্টনাররা জম জম ট্রেডিংকে বেছে নেন',
    statistics_title: 'সংখ্যায় আমাদের সাফল্য',
    projects_title: 'আমাদের প্রকল্প ও পণ্যসমূহ',
    clients_title: 'বিশ্বস্ত পার্টনাররা',
    industries_title: 'যে সব ইন্ডাস্ট্রিতে আমরা কাজ করি',
    faq_title: 'সচরাচর জিজ্ঞাসা',
    contact_title: 'যোগাযোগ করুন',
    contact_lead: 'টেন্ডার, সাপ্লাই কোট বা চলমান প্রকল্পে সহায়তার জন্য আমাদের টিমের সাথে যোগাযোগ করুন।',
    contact_quote: 'কোটেশন নিন',
    contact_call: 'কল শিডিউল করুন',
    contact_mobile: '<strong>মোবাইল:</strong> <a href="tel:+8801716777787">+8801716777787</a>',
    contact_email: '<strong>ইমেইল:</strong> <a href="mailto:info@zzt.com.bd">info@zzt.com.bd</a>',
    contact_address: '<strong>ঠিকানা:</strong> হাউস#১১, রোড#২৪, সেক্টর#১০, উত্তরা, ঢাকা, বাংলাদেশ।',
    contact_hours: '<strong>সময়:</strong> শনি–বৃহস্পতি, সকাল ৯:০০ – সন্ধ্যা ৬:০০',
    contact_services: '<strong>সেবা:</strong> সরকারি কন্ট্রাক্টিং, ফিনিশিং থ্রেড, স্টোন ও স্যান্ড, ফিড মিল কাঁচামাল',
    footer_quick: 'দ্রুত লিংক',
    footer_link_home: '<i class="fas fa-home"></i>হোম',
    footer_link_about: '<i class="fas fa-info-circle"></i>আমাদের সম্পর্কে',
    footer_link_highlights: '<i class="fas fa-star"></i>হাইলাইটস',
    footer_link_services: '<i class="fas fa-cogs"></i>আমাদের সেবা',
    footer_link_statistics: '<i class="fas fa-chart-bar"></i>পরিসংখ্যান',
    footer_link_clients: '<i class="fas fa-users"></i>বিশ্বস্ত পার্টনাররা',
    footer_link_projects: '<i class="fas fa-project-diagram"></i>প্রকল্প',
    footer_link_industries: '<i class="fas fa-industry"></i>ইন্ডাস্ট্রি',
    footer_link_faq: '<i class="fas fa-question-circle"></i>প্রশ্নোত্তর',
    footer_link_contact: '<i class="fas fa-envelope"></i>যোগাযোগ',
    footer_services: 'আমাদের সেবা',
    footer_service_1: '<i class="fas fa-handshake"></i>সরকারি কন্ট্রাক্টিং',
    footer_service_2: '<i class="fas fa-cut"></i>ফিনিশিং থ্রেড সাপ্লাই',
    footer_service_3: '<i class="fas fa-building"></i>নির্মাণ উপকরণ',
    footer_service_4: '<i class="fas fa-seedling"></i>ফিড মিল কাঁচামাল',
    footer_service_5: '<i class="fas fa-truck"></i>লজিস্টিকস ও ডেলিভারি',
    footer_company: 'জম জম ট্রেডিং',
    footer_company_desc: 'বাংলাদেশে সরকারি কন্ট্রাক্টিং ও সাপ্লাইয়ের নির্ভরযোগ্য পার্টনার। ২০০৯ সাল থেকে মানসম্মত সোর্সিং ও দেশব্যাপী ডেলিভারি।',
    footer_meta_1: 'প্রোকিউরমেন্ট সাপোর্ট',
    footer_meta_2: 'বাল্ক সাপ্লাই পরিকল্পনা',
    footer_meta_3: 'দেশব্যাপী লজিস্টিকস',
    footer_copy: '© <span id="year"></span> জম জম ট্রেডিং। সর্বস্বত্ব সংরক্ষিত।',
    footer_privacy: 'প্রাইভেসি পলিসি',
    footer_terms: 'টার্মস অফ সার্ভিস'
    ,contact_back: '<i class="fas fa-arrow-left"></i> হোমে ফিরে যান',
    contact_form_title: 'যোগাযোগ করুন',
    contact_form_lead: 'আপনার প্রকল্প নিয়ে আলোচনা করতে প্রস্তুত? নিচের ফর্মটি পূরণ করুন, আমরা ২৪ ঘন্টার মধ্যে উত্তর দেব।',
    contact_success: 'ধন্যবাদ! আপনার বার্তা সফলভাবে পাঠানো হয়েছে। আমরা ২৪ ঘন্টার মধ্যে যোগাযোগ করব।',
    contact_error: 'বার্তা পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন বা সরাসরি যোগাযোগ করুন।',
    contact_first_name: 'নামের প্রথম অংশ *',
    contact_last_name: 'নামের শেষ অংশ *',
    contact_email_label: 'ইমেইল ঠিকানা *',
    contact_phone_label: 'ফোন নম্বর',
    contact_company_label: 'কোম্পানির নাম',
    contact_service_label: 'কোন সেবা প্রয়োজন *',
    contact_service_select: 'একটি সেবা নির্বাচন করুন',
    contact_service_1: 'সরকারি কন্ট্রাক্টিং',
    contact_service_2: 'ফিনিশিং থ্রেড সাপ্লাই',
    contact_service_3: 'স্টোন ও স্যান্ড সাপ্লাই',
    contact_service_4: 'ফিড মিল কাঁচামাল',
    contact_service_5: 'লজিস্টিকস ও ডেলিভারি',
    contact_service_6: 'অন্যান্য',
    contact_subject_label: 'বিষয় *',
    contact_subject_placeholder: 'আপনার জিজ্ঞাসার সংক্ষিপ্ত বিবরণ',
    contact_message_label: 'বার্তা *',
    contact_message_placeholder: 'আপনার প্রয়োজন, পরিমাণ, ডেলিভারি লোকেশন এবং সময়সূচি সম্পর্কে বিস্তারিত লিখুন...',
    contact_send: 'বার্তা পাঠান',
    contact_sending: 'পাঠানো হচ্ছে...',
    terms_back: '← হোমে ফিরে যান',
    terms_title: 'টার্মস অফ সার্ভিস',
    terms_updated: '<strong>সর্বশেষ হালনাগাদ:</strong> ফেব্রুয়ারি ১০, ২০২৬',
    terms_1_title: '১. শর্তাবলীর গ্রহণযোগ্যতা',
    terms_1_desc: 'জম জম ট্রেডিং-এর সেবা গ্রহণ বা আমাদের ওয়েবসাইট ব্যবহার করলে আপনি এই টার্মস অফ সার্ভিস এবং বাংলাদেশের প্রযোজ্য সকল আইন ও বিধিমালার সাথে সম্মত হন।',
    terms_2_title: '২. প্রদত্ত সেবা',
    terms_2_intro: 'জম জম ট্রেডিং প্রদান করে:',
    terms_2_item_1: 'সরকারি কন্ট্রাক্টিং ও টেন্ডার অংশগ্রহণ সেবা',
    terms_2_item_2: 'গার্মেন্টস শিল্পের জন্য ফিনিশিং থ্রেড সাপ্লাই',
    terms_2_item_3: 'নির্মাণ প্রকল্পের জন্য স্টোন ও স্যান্ড সাপ্লাই',
    terms_2_item_4: 'ফিড মিলের জন্য কাঁচামাল সরবরাহ',
    terms_2_item_5: 'বাংলাদেশজুড়ে লজিস্টিকস ও ডেলিভারি সেবা',
    terms_3_title: '৩. সেবা চুক্তি',
    terms_3_desc: 'সমস্ত সেবা চুক্তি আলাদা লিখিত চুক্তির অধীন। নির্দিষ্ট চুক্তিতে ভিন্ন কিছু না থাকলে এই শর্তসমূহ প্রযোজ্য থাকবে।',
    terms_4_title: '৪. মূল্য ও পেমেন্ট',
    terms_4_1: '৪.১. সকল মূল্য বাংলাদেশি টাকা (BDT) ভিত্তিতে নির্ধারিত, ভিন্নভাবে উল্লেখ না থাকলে।',
    terms_4_2: '৪.২. পেমেন্ট শর্ত প্রকল্পভেদে পরিবর্তিত হতে পারে এবং পৃথক চুক্তিতে উল্লেখ থাকবে।',
    terms_4_3: '৪.৩. সরকারি চুক্তির পেমেন্ট সময়সূচি সরকারি প্রোকিউরমেন্ট নীতিমালা অনুসারে হবে।',
    terms_4_4: '৪.৪. বিলম্বিত পেমেন্টে সেবা স্থগিত বা অতিরিক্ত চার্জ হতে পারে।',
    terms_5_title: '৫. গুণগত নিশ্চয়তা',
    terms_5_1: '৫.১. আমরা সার্টিফায়েড সাপ্লায়ার থেকে মানসম্মত সোর্সিং নিশ্চিত করি।',
    terms_5_2: '৫.২. সকল উপকরণ সরকারি ও শিল্পমানদণ্ড অনুসরণ করে।',
    terms_5_3: '৫.৩. ডেলিভারির ৭ দিনের মধ্যে মান সংক্রান্ত অভিযোগ জানাতে হবে।',
    terms_6_title: '৬. ডেলিভারি ও লজিস্টিকস',
    terms_6_1: '৬.১. ডেলিভারি সময়সূচি অনুমানভিত্তিক এবং আমাদের নিয়ন্ত্রণের বাইরে পরিস্থিতির কারণে পরিবর্তিত হতে পারে।',
    terms_6_2: '৬.২. আমরা বাংলাদেশজুড়ে ডেলিভারি প্রদান করি।',
    terms_6_3: '৬.৩. ডেলিভারির শর্তাবলি ও দায়-দায়িত্ব পৃথক চুক্তিতে উল্লেখ থাকবে।',
    terms_7_title: '৭. দায়সীমা',
    terms_7_1: '৭.১. আমাদের দায় নির্দিষ্ট সেবার চুক্তিমূল্যের মধ্যে সীমাবদ্ধ।',
    terms_7_2: '৭.২. পরোক্ষ, ফলস্বরূপ বা দণ্ডমূলক ক্ষতির জন্য আমরা দায়ী নই।',
    terms_7_3: '৭.৩. প্রাকৃতিক দুর্যোগ, সরকারি পদক্ষেপ ইত্যাদি ফোর্স মেজর ঘটনায় কার্য সম্পাদনের বিলম্ব গ্রহণযোগ্য।',
    terms_8_title: '৮. মেধাস্বত্ব',
    terms_8_desc: 'টেক্সট, গ্রাফিক্স, লোগো ও ছবি সহ আমাদের ওয়েবসাইটের সকল কনটেন্ট জম জম ট্রেডিং-এর সম্পত্তি এবং আইন দ্বারা সুরক্ষিত।',
    terms_9_title: '৯. গোপনীয়তা',
    terms_9_desc: 'গ্রাহক তথ্য, প্রকল্পের বিবরণ এবং ব্যবসায়িক সম্পর্ক বিষয়ে আমরা কঠোর গোপনীয়তা বজায় রাখি।',
    terms_10_title: '১০. তথ্য সুরক্ষা',
    terms_10_desc: 'আমরা প্রাইভেসি পলিসি ও প্রযোজ্য ডাটা প্রটেকশন নীতিমালা অনুযায়ী তথ্য প্রক্রিয়াকরণ করি। GDPR প্রযোজ্য হলে আইনগত ভিত্তি অনুসরণ করা হয়।',
    terms_11_title: '১১. সরকারি কমপ্লায়েন্স',
    terms_11_desc: 'সকল সেবা বাংলাদেশের সরকারি বিধিমালা, প্রোকিউরমেন্ট নীতি এবং প্রাসঙ্গিক শিল্পমানদণ্ড অনুসরণ করে।',
    terms_12_title: '১২. বিরোধ নিষ্পত্তি',
    terms_12_1: '১২.১. প্রাথমিক বিরোধ আলোচনার মাধ্যমে সমাধান করা হবে।',
    terms_12_2: '১২.২. সমাধান না হলে ঢাকা, বাংলাদেশে সালিশির মাধ্যমে নিষ্পত্তি হবে।',
    terms_12_3: '১২.৩. সকল চুক্তি ও বিরোধ বাংলাদেশি আইন অনুযায়ী পরিচালিত হবে।',
    terms_13_title: '১৩. চুক্তি বাতিল',
    terms_13_1: '১৩.১. যেকোনো পক্ষ নির্ধারিত নোটিশে সেবা বাতিল করতে পারে।',
    terms_13_2: '১৩.২. চুক্তি ভঙ্গ বা বকেয়া পেমেন্টে তাৎক্ষণিক বাতিল প্রযোজ্য।',
    terms_14_title: '১৪. পরিবর্তন',
    terms_14_desc: 'আমরা যেকোনো সময় এই শর্তাবলি পরিবর্তন করতে পারি। পরিবর্তন ওয়েবসাইটে প্রকাশ করা হবে।',
    terms_15_title: '১৫. যোগাযোগের তথ্য',
    terms_15_intro: 'এই শর্তাবলি বা সেবা সম্পর্কে প্রশ্ন থাকলে যোগাযোগ করুন:',
    terms_15_company: '<strong>প্রতিষ্ঠান:</strong> Zam Zam Trading',
    terms_15_email: '<strong>ইমেইল:</strong> info@zzt.com.bd',
    terms_15_phone: '<strong>ফোন:</strong> +8801716777787',
    terms_15_address: '<strong>ঠিকানা:</strong> House#11, Road#24, Sector#10, Uttara, Dhaka, Bangladesh',
    terms_15_hours: '<strong>ব্যবসার সময়:</strong> শনিবার- বৃহস্পতিবার, ৯:০০ AM - ৬:০০ PM',
    terms_16_title: '১৬. প্রযোজ্য আইন',
    terms_16_desc: 'এই শর্তাবলি বাংলাদেশের আইন অনুযায়ী পরিচালিত হবে। সকল আইনগত কার্যক্রম ঢাকার আদালতে হবে।',
    terms_17_title: '১৭. ইলেকট্রনিক যোগাযোগ',
    terms_17_desc: 'আমাদের সেবা ব্যবহার করলে আপনি ইমেইল/ফোনসহ ইলেকট্রনিক মাধ্যমে যোগাযোগে সম্মতি প্রদান করেন।',
    terms_18_title: '১৮. বিচ্ছিন্নতা ধারা',
    terms_18_desc: 'এই শর্তাবলির কোনো অংশ অকার্যকর হলে বাকি অংশ কার্যকর থাকবে।',
    privacy_back: '← হোমে ফিরে যান',
    privacy_title: 'প্রাইভেসি পলিসি',
    privacy_updated: '<strong>সর্বশেষ হালনাগাদ:</strong> ফেব্রুয়ারি ১০, ২০২৬',
    privacy_intro: 'এই নীতি দর্শক, ক্লায়েন্ট এবং ব্যবসায়িক যোগাযোগকারীদের জন্য প্রযোজ্য। আপনি EEA/UK অঞ্চলে থাকলে GDPR প্রযোজ্য হবে।',
    privacy_1_title: '১. আমরা যে তথ্য সংগ্রহ করি',
    privacy_1_desc: 'জম জম ট্রেডিং ("আমরা") আপনার প্রদানকৃত তথ্য সংগ্রহ করে, যেমন ব্যবসায়িক জিজ্ঞাসা, কোট অনুরোধ বা সেবা গ্রহণের সময়। এতে অন্তর্ভুক্ত হতে পারে:',
    privacy_1_item_1: 'যোগাযোগের তথ্য (নাম, ইমেইল, ফোন নম্বর)',
    privacy_1_item_2: 'ব্যবসায়িক তথ্য (কোম্পানির নাম, ঠিকানা, প্রয়োজনীয়তা)',
    privacy_1_item_3: 'যোগাযোগের রেকর্ড ও পত্রালাপ',
    privacy_2_title: '২. আমরা আপনার তথ্য কীভাবে ব্যবহার করি',
    privacy_2_desc: 'আমরা তথ্য ব্যবহার করি:',
    privacy_2_item_1: 'সরকারি কন্ট্রাক্টিং ও সাপ্লাই সেবা প্রদান ও উন্নয়নে',
    privacy_2_item_2: 'আপনার জিজ্ঞাসার উত্তর ও অনুরোধ পূরণে',
    privacy_2_item_3: 'আমাদের সেবা সম্পর্কে যোগাযোগে',
    privacy_2_item_4: 'আইনগত ও সরকারি প্রয়োজনীয়তা পূরণে',
    privacy_3_title: '৩. প্রক্রিয়াকরণের আইনগত ভিত্তি (GDPR)',
    privacy_3_desc: 'GDPR প্রযোজ্য হলে আমরা নিচের ভিত্তিতে তথ্য প্রক্রিয়া করি:',
    privacy_3_item_1: 'চুক্তিগত প্রয়োজনীয়তা (সেবা ও কোট প্রদান)',
    privacy_3_item_2: 'বৈধ স্বার্থ (ব্যবসায়িক যোগাযোগ ও অপারেশন ব্যবস্থাপনা)',
    privacy_3_item_3: 'আইনগত বাধ্যবাধকতা',
    privacy_3_item_4: 'প্রয়োজন হলে সম্মতি (যেমন ঐচ্ছিক মার্কেটিং)',
    privacy_4_title: '৪. তথ্য শেয়ারিং',
    privacy_4_desc: 'আমরা আপনার ব্যক্তিগত তথ্য বিক্রি বা বিনিময় করি না, তবে নিচের ক্ষেত্রে শেয়ার হতে পারে:',
    privacy_4_item_1: 'আইন বা সরকারি নির্দেশে',
    privacy_4_item_2: 'বিশ্বস্ত সেবা প্রদানকারীদের সাথে',
    privacy_4_item_3: 'আপনার স্পষ্ট সম্মতিতে',
    privacy_5_title: '৫. ডাটা সিকিউরিটি',
    privacy_5_desc: 'অননুমোদিত প্রবেশ, পরিবর্তন, প্রকাশ বা ধ্বংস থেকে সুরক্ষায় আমরা উপযুক্ত ব্যবস্থা গ্রহণ করি; তবে ইন্টারনেটে ১০০% নিরাপত্তা নিশ্চিত করা যায় না।',
    privacy_6_title: '৬. ডাটা সংরক্ষণ',
    privacy_6_desc: 'প্রয়োজনীয় সময় পর্যন্ত বা আইন অনুযায়ী আমরা তথ্য সংরক্ষণ করি।',
    privacy_7_title: '৭. আপনার অধিকার',
    privacy_7_desc: 'আপনার অধিকারসমূহ:',
    privacy_7_item_1: 'নিজের তথ্য দেখার ও আপডেটের অধিকার',
    privacy_7_item_2: 'ভুল তথ্য সংশোধনের অনুরোধ',
    privacy_7_item_3: 'আইনগত শর্তসাপেক্ষে তথ্য মুছে ফেলার অনুরোধ',
    privacy_7_item_4: 'যেখানে প্রযোজ্য, সম্মতি প্রত্যাহার',
    privacy_8_title: '৮. GDPR অধিকার (EEA/UK)',
    privacy_8_desc: 'GDPR প্রযোজ্য হলে আপনি আরও অধিকার পাবেন:',
    privacy_8_item_1: 'প্রক্রিয়াকরণে সীমাবদ্ধতা বা আপত্তি',
    privacy_8_item_2: 'ডাটা পোর্টেবিলিটি',
    privacy_8_item_3: 'সুপারভাইজরি অথরিটিতে অভিযোগ',
    privacy_8_note: 'এই অধিকার প্রয়োগে নিচের ঠিকানায় যোগাযোগ করুন।',
    privacy_9_title: '৯. কুকিজ ও ট্র্যাকিং',
    privacy_9_desc: 'ব্যবহার অভিজ্ঞতা উন্নত করতে কুকিজ ব্যবহার হতে পারে; ব্রাউজারে কুকি সেটিং নিয়ন্ত্রণ করা যায়।',
    privacy_10_title: '১০. আন্তর্জাতিক ট্রান্সফার',
    privacy_10_desc: 'অন্য দেশে অবস্থিত সেবা প্রদানকারীদের মাধ্যমে তথ্য প্রক্রিয়া হতে পারে; তখন আমরা প্রয়োজনীয় সুরক্ষা অনুসরণ করি।',
    privacy_11_title: '১১. নীতিমালার পরিবর্তন',
    privacy_11_desc: 'আমরা সময়সময়ে এই নীতি আপডেট করতে পারি এবং এই পেজে প্রকাশ করা হবে।',
    privacy_12_title: '১২. যোগাযোগের তথ্য',
    privacy_12_intro: 'এই নীতি সম্পর্কে প্রশ্ন থাকলে যোগাযোগ করুন:',
    privacy_12_email: '<strong>ইমেইল:</strong> info@zzt.com.bd',
    privacy_12_phone: '<strong>ফোন:</strong> +8801716777787',
    privacy_12_address: '<strong>ঠিকানা:</strong> House#11, Road#24, Sector#10, Uttara, Dhaka, Bangladesh',
    privacy_13_title: '১৩. প্রযোজ্য আইন',
    privacy_13_desc: 'এই নীতি বাংলাদেশের আইন ও প্রযোজ্য ডাটা প্রটেকশন বিধিমালার অধীন।',
    privacy_14_title: '১৪. ডাটা কন্ট্রোলার',
    privacy_14_desc: 'জম জম ট্রেডিং এই নীতির আওতায় ডাটা কন্ট্রোলার হিসেবে কাজ করে এবং প্রক্রিয়াকরণের উদ্দেশ্য ও পদ্ধতি নির্ধারণ করে।',
    privacy_15_title: '১৫. শিশুদের গোপনীয়তা',
    privacy_15_desc: 'আমাদের সেবা ব্যবসায়িক ব্যবহারকারীদের জন্য; ১৩ বছরের কম বয়সীদের উদ্দেশ্যে নয় এবং আমরা জেনে শিশুদের তথ্য সংগ্রহ করি না।'
  }
};
window.translations = translations;

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.en;
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = lang === 'bn' ? 'bn' : 'en';
  localStorage.setItem('lang', lang);
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

const storedLang = localStorage.getItem('lang') || 'en';
applyLanguage(storedLang);

if (elements.langToggle) {
  elements.langToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-lang') || storedLang;
    const next = current === 'bn' ? 'en' : 'bn';
    applyLanguage(next);
  });
}

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


