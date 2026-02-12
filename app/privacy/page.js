const privacyHtml = `
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
  <a href="/" class="back-link" data-i18n="privacy_back">← Back to Home</a>
  <h1 data-i18n="privacy_title">Privacy Policy</h1>
  <p data-i18n="privacy_updated"><strong>Last updated:</strong> February 10, 2026</p>
  <p data-i18n="privacy_intro">This policy applies to visitors, clients, and business contacts. If you are located in the EEA/UK, GDPR standards apply to your personal data when we process it.</p>
  <h2 data-i18n="privacy_1_title">1. Information We Collect</h2>
  <p data-i18n="privacy_1_desc">Zam Zam Trading ("we," "our," or "us") collects information you provide directly to us, such as when you contact us for business inquiries, request quotes, or engage our services. This may include:</p>
  <ul>
    <li data-i18n="privacy_1_item_1">Contact information (name, email address, phone number)</li>
    <li data-i18n="privacy_1_item_2">Business information (company name, address, requirements)</li>
    <li data-i18n="privacy_1_item_3">Communication records and correspondence</li>
  </ul>
  <h2 data-i18n="privacy_2_title">2. How We Use Your Information</h2>
  <p data-i18n="privacy_2_desc">We use the information we collect to:</p>
  <ul>
    <li data-i18n="privacy_2_item_1">Provide and improve our government contracting and supply services</li>
    <li data-i18n="privacy_2_item_2">Respond to your inquiries and fulfill your requests</li>
    <li data-i18n="privacy_2_item_3">Communicate with you about our services</li>
    <li data-i18n="privacy_2_item_4">Comply with legal obligations and government requirements</li>
  </ul>
  <h2 data-i18n="privacy_3_title">3. Legal Basis for Processing (GDPR)</h2>
  <p data-i18n="privacy_3_desc">Where GDPR applies, we process personal data under the following legal bases:</p>
  <ul>
    <li data-i18n="privacy_3_item_1">Contractual necessity to provide requested services and quotations</li>
    <li data-i18n="privacy_3_item_2">Legitimate interests to manage business communications and operations</li>
    <li data-i18n="privacy_3_item_3">Legal obligations related to regulatory or government requirements</li>
    <li data-i18n="privacy_3_item_4">Consent where required (e.g., optional marketing communications)</li>
  </ul>
  <h2 data-i18n="privacy_4_title">4. Information Sharing</h2>
  <p data-i18n="privacy_4_desc">We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
  <ul>
    <li data-i18n="privacy_4_item_1">When required by law or government authorities</li>
    <li data-i18n="privacy_4_item_2">To trusted service providers who assist in our business operations</li>
    <li data-i18n="privacy_4_item_3">With your explicit consent</li>
  </ul>
  <h2 data-i18n="privacy_5_title">5. Data Security</h2>
  <p data-i18n="privacy_5_desc">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
  <h2 data-i18n="privacy_6_title">6. Data Retention</h2>
  <p data-i18n="privacy_6_desc">We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by Bangladesh law and government regulations.</p>
  <h2 data-i18n="privacy_7_title">7. Your Rights</h2>
  <p data-i18n="privacy_7_desc">You have the right to:</p>
  <ul>
    <li data-i18n="privacy_7_item_1">Access and update your personal information</li>
    <li data-i18n="privacy_7_item_2">Request correction of inaccurate information</li>
    <li data-i18n="privacy_7_item_3">Request deletion of your information (subject to legal requirements)</li>
    <li data-i18n="privacy_7_item_4">Withdraw consent where applicable</li>
  </ul>
  <h2 data-i18n="privacy_8_title">8. GDPR Rights (EEA/UK)</h2>
  <p data-i18n="privacy_8_desc">If GDPR applies, you also have the right to:</p>
  <ul>
    <li data-i18n="privacy_8_item_1">Request restriction or objection to processing</li>
    <li data-i18n="privacy_8_item_2">Data portability for information you provided to us</li>
    <li data-i18n="privacy_8_item_3">Lodge a complaint with a supervisory authority</li>
  </ul>
  <p data-i18n="privacy_8_note">To exercise these rights, contact us using the details below.</p>
  <h2 data-i18n="privacy_9_title">9. Cookies and Tracking</h2>
  <p data-i18n="privacy_9_desc">Our website may use cookies and similar technologies to enhance user experience. You can control cookie settings through your browser preferences.</p>
  <h2 data-i18n="privacy_10_title">10. International Transfers</h2>
  <p data-i18n="privacy_10_desc">We may process or store information using service providers that operate in other countries. When international transfers occur, we apply appropriate safeguards in line with applicable data protection laws.</p>
  <h2 data-i18n="privacy_11_title">11. Changes to This Policy</h2>
  <p data-i18n="privacy_11_desc">We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.</p>
  <h2 data-i18n="privacy_12_title">12. Contact Information</h2>
  <p data-i18n="privacy_12_intro">For questions about this privacy policy or our data practices, please contact us:</p>
  <ul>
    <li data-i18n="privacy_12_email"><strong>Email:</strong> info@zzt.com.bd</li>
    <li data-i18n="privacy_12_phone"><strong>Phone:</strong> +8801716777787</li>
    <li data-i18n="privacy_12_address"><strong>Address:</strong> House#11, Road#24, Sector#10, Uttara, Dhaka, Bangladesh</li>
  </ul>
  <h2 data-i18n="privacy_13_title">13. Governing Law</h2>
  <p data-i18n="privacy_13_desc">This privacy policy is governed by the laws of Bangladesh and any applicable data protection regulations.</p>
  <h2 data-i18n="privacy_14_title">14. Data Controller</h2>
  <p data-i18n="privacy_14_desc">Zam Zam Trading acts as the data controller for personal information processed under this policy. We determine the purposes and means of processing personal data for our business operations.</p>
  <h2 data-i18n="privacy_15_title">15. Children’s Privacy</h2>
  <p data-i18n="privacy_15_desc">Our services are intended for business users and are not directed to children under 13. We do not knowingly collect personal information from children.</p>
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

export default function PrivacyPage() {
  return <div dangerouslySetInnerHTML={{ __html: privacyHtml }} />;
}
