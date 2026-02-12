const termsHtml = `
<style>
  body { margin: 0; }
  .legal-container { max-width: 900px; margin: 40px auto 80px; background: var(--card); padding: 40px; border-radius: 12px; box-shadow: var(--shadow-light); border: 1px solid rgba(0,0,0,.08); }
  h1 { color: #1ea672; margin-bottom: 30px; }
  h2 { color: var(--text); margin-top: 30px; margin-bottom: 15px; }
  p { margin-bottom: 15px; }
  .back-link { display: inline-block; margin-bottom: 20px; color: #1ea672; text-decoration: none; }
  .back-link:hover { text-decoration: underline; }
  .legal-container p,
  .legal-container li { color: var(--muted); }
  @media (max-width: 768px) {
    .legal-container { margin: 24px 16px 60px; padding: 24px; }
    h1 { font-size: 24px; }
    h2 { font-size: 18px; }
  }
  @media (max-width: 480px) {
    .legal-container { margin: 16px 12px 50px; padding: 18px; }
    .back-link { display: block; }
  }
</style>
<header class="site-header" id="top">
  <div class="scroll-progress" id="scroll-progress"></div>
  <div class="container header-inner">
    <a href="/" class="logo" aria-label="Zam Zam Trading home">
      <img src="/images/logo.svg" alt="Zam Zam Trading logo" width="36" height="36">
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
            <li><a href="/" class="mobile-nav-link" data-i18n="nav_home">Home</a></li>
            <li><a href="/#about" class="mobile-nav-link" data-i18n="nav_about">About</a></li>
            <li><a href="/#services" class="mobile-nav-link" data-i18n="nav_services">Services</a></li>
            <li><a href="/#projects" class="mobile-nav-link" data-i18n="nav_projects">Projects</a></li>
            <li><a href="/#clients" class="mobile-nav-link" data-i18n="nav_clients">Clients</a></li>
            <li><a href="/#contact" class="mobile-nav-link" data-i18n="nav_contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="desktop-nav">
      <ul class="nav-menu">
        <li><a href="/" data-i18n="nav_home">Home</a></li>
        <li><a href="/#about" data-i18n="nav_about">About</a></li>
        <li><a href="/#services" data-i18n="nav_services">Services</a></li>
        <li><a href="/#projects" data-i18n="nav_projects">Projects</a></li>
        <li><a href="/#clients" data-i18n="nav_clients">Clients</a></li>
        <li><a href="/#contact" data-i18n="nav_contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
<div class="legal-container">
  <a href="/" class="back-link" data-i18n="terms_back">← Back to Home</a>
  <h1 data-i18n="terms_title">Terms of Service</h1>
  <p data-i18n="terms_updated"><strong>Last updated:</strong> February 10, 2026</p>
  <h2 data-i18n="terms_1_title">1. Acceptance of Terms</h2>
  <p data-i18n="terms_1_desc">By engaging Zam Zam Trading's services or accessing our website, you agree to be bound by these Terms of Service and all applicable laws and regulations of Bangladesh.</p>
  <h2 data-i18n="terms_2_title">2. Services Provided</h2>
  <p data-i18n="terms_2_intro">Zam Zam Trading provides:</p>
  <ul>
    <li data-i18n="terms_2_item_1">Government contracting and tender participation services</li>
    <li data-i18n="terms_2_item_2">Finishing thread supply for garments industry</li>
    <li data-i18n="terms_2_item_3">Stone and sand supply for construction projects</li>
    <li data-i18n="terms_2_item_4">Raw materials supply for feed mills</li>
    <li data-i18n="terms_2_item_5">Logistics and delivery services across Bangladesh</li>
  </ul>
  <h2 data-i18n="terms_3_title">3. Service Agreements</h2>
  <p data-i18n="terms_3_desc">All service agreements are subject to separate written contracts. These terms serve as general conditions unless superseded by specific contractual agreements.</p>
  <h2 data-i18n="terms_4_title">4. Pricing and Payment</h2>
  <p data-i18n="terms_4_1">4.1. All prices are quoted in Bangladeshi Taka (BDT) unless otherwise specified.</p>
  <p data-i18n="terms_4_2">4.2. Payment terms vary by project and will be specified in individual contracts.</p>
  <p data-i18n="terms_4_3">4.3. Government contracts follow official procurement payment schedules.</p>
  <p data-i18n="terms_4_4">4.4. Late payment may result in service suspension or additional charges.</p>
  <h2 data-i18n="terms_5_title">5. Quality Assurance</h2>
  <p data-i18n="terms_5_1">5.1. We guarantee quality-assured sourcing from certified suppliers.</p>
  <p data-i18n="terms_5_2">5.2. All materials meet government and industry standards.</p>
  <p data-i18n="terms_5_3">5.3. Quality disputes must be raised within 7 days of delivery.</p>
  <h2 data-i18n="terms_6_title">6. Delivery and Logistics</h2>
  <p data-i18n="terms_6_1">6.1. Delivery timeframes are estimates and may vary due to circumstances beyond our control.</p>
  <p data-i18n="terms_6_2">6.2. We provide nationwide delivery across Bangladesh.</p>
  <p data-i18n="terms_6_3">6.3. Delivery terms and responsibilities are specified in individual contracts.</p>
  <h2 data-i18n="terms_7_title">7. Limitation of Liability</h2>
  <p data-i18n="terms_7_1">7.1. Our liability is limited to the contract value of the specific service provided.</p>
  <p data-i18n="terms_7_2">7.2. We are not liable for indirect, consequential, or punitive damages.</p>
  <p data-i18n="terms_7_3">7.3. Force majeure events (natural disasters, government actions, etc.) excuse performance delays.</p>
  <h2 data-i18n="terms_8_title">8. Intellectual Property</h2>
  <p data-i18n="terms_8_desc">All content on our website, including text, graphics, logos, and images, is the property of Zam Zam Trading and protected by intellectual property laws.</p>
  <h2 data-i18n="terms_9_title">9. Confidentiality</h2>
  <p data-i18n="terms_9_desc">We maintain strict confidentiality regarding client information, project details, and business relationships in accordance with professional standards.</p>
  <h2 data-i18n="terms_10_title">10. Data Protection</h2>
  <p data-i18n="terms_10_desc">We handle personal and business data in line with our Privacy Policy and applicable data protection requirements. Where GDPR applies, we apply lawful bases for processing and honor data subject rights.</p>
  <h2 data-i18n="terms_11_title">11. Government Compliance</h2>
  <p data-i18n="terms_11_desc">All services comply with Bangladesh government regulations, procurement rules, and relevant industry standards.</p>
  <h2 data-i18n="terms_12_title">12. Dispute Resolution</h2>
  <p data-i18n="terms_12_1">12.1. Initial disputes should be addressed through direct communication.</p>
  <p data-i18n="terms_12_2">12.2. Unresolved disputes will be settled through arbitration in Dhaka, Bangladesh.</p>
  <p data-i18n="terms_12_3">12.3. Bangladesh law governs all agreements and disputes.</p>
  <h2 data-i18n="terms_13_title">13. Contract Termination</h2>
  <p data-i18n="terms_13_1">13.1. Either party may terminate services with appropriate notice as specified in individual contracts.</p>
  <p data-i18n="terms_13_2">13.2. Immediate termination is allowed for breach of contract or non-payment.</p>
  <h2 data-i18n="terms_14_title">14. Modifications</h2>
  <p data-i18n="terms_14_desc">We reserve the right to modify these terms at any time. Changes will be posted on our website with an updated effective date.</p>
  <h2 data-i18n="terms_15_title">15. Contact Information</h2>
  <p data-i18n="terms_15_intro">For questions about these terms or our services:</p>
  <ul>
    <li data-i18n="terms_15_company"><strong>Company:</strong> Zam Zam Trading</li>
    <li data-i18n="terms_15_email"><strong>Email:</strong> info@zzt.com.bd</li>
    <li data-i18n="terms_15_phone"><strong>Phone:</strong> +8801716777787</li>
    <li data-i18n="terms_15_address"><strong>Address:</strong> House#11, Road#24, Sector#10, Uttara, Dhaka, Bangladesh</li>
    <li data-i18n="terms_15_hours"><strong>Business Hours:</strong> Saturday-Thursday, 9:00 AM - 6:00 PM</li>
  </ul>
  <h2 data-i18n="terms_16_title">16. Governing Law</h2>
  <p data-i18n="terms_16_desc">These terms are governed by the laws of Bangladesh. Any legal proceedings must be conducted in the courts of Dhaka, Bangladesh.</p>
  <h2 data-i18n="terms_17_title">17. Electronic Communications</h2>
  <p data-i18n="terms_17_desc">By using our services or contacting us electronically, you consent to receive communications from us via email, phone, or other electronic means. We will communicate in accordance with applicable laws and your preferences.</p>
  <h2 data-i18n="terms_18_title">18. Severability</h2>
  <p data-i18n="terms_18_desc">If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.</p>
</div>
<footer class="site-footer">
  <div class="container footer-inner">
    <div class="footer-content">
      <div class="footer-section quick-links">
        <h4 data-i18n="footer_quick">Quick Links</h4>
        <ul>
          <li><a href="/" data-i18n="footer_link_home"><i class="fas fa-home"></i>Home</a></li>
          <li><a href="/#about" data-i18n="footer_link_about"><i class="fas fa-info-circle"></i>About Us</a></li>
          <li><a href="/#services" data-i18n="footer_link_services"><i class="fas fa-cogs"></i>Our Services</a></li>
          <li><a href="/#statistics" data-i18n="footer_link_statistics"><i class="fas fa-chart-bar"></i>Statistics</a></li>
          <li><a href="/#clients" data-i18n="footer_link_clients"><i class="fas fa-users"></i>Our Clients</a></li>
          <li><a href="/#projects" data-i18n="footer_link_projects"><i class="fas fa-project-diagram"></i>Projects</a></li>
          <li><a href="/#faq" data-i18n="footer_link_faq"><i class="fas fa-question-circle"></i>FAQ</a></li>
          <li><a href="/contact-form" data-i18n="footer_link_contact"><i class="fas fa-envelope"></i>Contact</a></li>
        </ul>
      </div>
      <div class="footer-section services-links">
        <h4 data-i18n="footer_services">Our Services</h4>
        <ul>
          <li><a href="/#services" data-i18n="footer_service_1"><i class="fas fa-handshake"></i>Government Contracting</a></li>
          <li><a href="/#services" data-i18n="footer_service_2"><i class="fas fa-cut"></i>Finishing Thread Supply</a></li>
          <li><a href="/#services" data-i18n="footer_service_3"><i class="fas fa-building"></i>Construction Materials</a></li>
          <li><a href="/#services" data-i18n="footer_service_4"><i class="fas fa-seedling"></i>Feed Mill Raw Materials</a></li>
          <li><a href="/#services" data-i18n="footer_service_5"><i class="fas fa-truck"></i>Logistics & Delivery</a></li>
        </ul>
      </div>
      <div class="footer-section company-info">
        <h3 data-i18n="footer_company">Zam Zam Trading</h3>
        <p data-i18n="footer_company_desc">Trusted Partner in Government Contracting & Supply in Bangladesh. Quality assured sourcing and nationwide delivery since 2009.</p>
        <div class="social">
          <a href="#" aria-label="Facebook" class="social-link">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="LinkedIn" class="social-link">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="#" aria-label="YouTube" class="social-link">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="#" aria-label="Twitter" class="social-link">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p data-i18n="footer_copy">© <span id="year"></span> Zam Zam Trading. All rights reserved.</p>
      <div class="footer-links">
        <a href="/privacy" data-i18n="footer_privacy">Privacy Policy</a>
        <a href="/terms" data-i18n="footer_terms">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
`;

export default function TermsPage() {
  return <div dangerouslySetInnerHTML={{ __html: termsHtml }} />;
}
