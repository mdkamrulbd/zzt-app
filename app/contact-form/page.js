import Script from "next/script";

const contactFormHtml = `
<style>
  .contact-form-page {
    min-height: 100vh;
    padding: 100px 0 80px;
    background:
      linear-gradient(rgba(8,12,20,.84), rgba(8,12,20,.84)),
      radial-gradient(900px 600px at 70% 22%, rgba(34,197,94,.16), transparent 70%),
      radial-gradient(700px 520px at 18% 80%, rgba(34,197,94,.10), transparent 70%),
      linear-gradient(180deg,#0b1220 0%,#0d1421 60%,#0f1623 100%);
  }
  .contact-form-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: start;
  }
  .form-section {
    background: var(--card);
    border: 1px solid rgba(255,255,255,.06);
    border-radius: 16px;
    padding: 32px;
    box-shadow: var(--shadow-light);
  }
  .form-section h2 {
    color: var(--text);
    margin-bottom: 24px;
    font-size: 28px;
  }
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .form-group label {
    color: var(--text);
    font-weight: 500;
    font-size: 14px;
  }
  .form-group input,
  .form-group select,
  .form-group textarea {
    background: rgba(255,255,255,.05);
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 8px;
    padding: 12px 16px;
    color: var(--text);
    font-size: 16px;
    transition: var(--transition);
  }
  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--brand);
    box-shadow: 0 0 0 3px rgba(30,166,114,.2);
  }
  .form-group textarea {
    min-height: 120px;
    resize: vertical;
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .submit-btn {
    background: linear-gradient(135deg, var(--brand), var(--brand-600));
    color: white;
    border: none;
    border-radius: 12px;
    padding: 14px 24px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    margin-top: 16px;
  }
  .submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(30,166,114,.3);
  }
  .info-section {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .contact-info-card {
    background: var(--card);
    border: 1px solid rgba(255,255,255,.06);
    border-radius: 16px;
    padding: 24px;
    box-shadow: var(--shadow-light);
  }
  .contact-info-card h3 {
    color: var(--text);
    margin-bottom: 20px;
    font-size: 20px;
  }
  .contact-info-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .contact-info-list li {
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--muted);
  }
  .contact-info-list i {
    color: var(--brand);
    width: 20px;
    text-align: center;
  }
  .contact-info-list a {
    color: var(--brand);
    text-decoration: none;
    transition: var(--transition);
  }
  .contact-info-list a:hover {
    color: var(--accent);
    text-decoration: underline;
  }
  .map-container {
    background: var(--card);
    border: 1px solid rgba(255,255,255,.06);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--shadow-light);
    height: 400px;
  }
  .map-container iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 16px;
  }
  .back-to-home {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--brand);
    text-decoration: none;
    font-weight: 500;
    margin-bottom: 32px;
    transition: var(--transition);
  }
  .back-to-home:hover {
    color: var(--accent);
    transform: translateX(-4px);
  }
  @media (max-width: 768px) {
    .contact-form-container {
      grid-template-columns: 1fr;
      gap: 24px;
    }
    .form-section,
    .contact-info-card {
      padding: 24px;
    }
    .form-row {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .contact-form-page {
      padding: 80px 0 60px;
    }
  }
  @media (max-width: 480px) {
    .contact-form-page {
      padding: 72px 0 50px;
    }
    .contact-form-container {
      padding: 0 12px;
    }
    .form-section,
    .contact-info-card {
      padding: 20px;
    }
    .form-section h2 {
      font-size: 22px;
    }
    .submit-btn {
      width: 100%;
    }
    .contact-info-list li {
      align-items: flex-start;
    }
    .map-container {
      height: 260px;
    }
    .back-to-home {
      margin-bottom: 20px;
    }
  }
  .success-message {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    padding: 16px 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    display: none;
    align-items: center;
    gap: 8px;
  }
  .success-message.show {
    display: flex;
  }
  .error-message {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: white;
    padding: 16px 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    display: none;
    align-items: center;
    gap: 8px;
  }
  .error-message.show {
    display: flex;
  }
</style>
<div id="loading-screen" class="loading-screen">
  <div class="loading-spinner">
    <div class="spinner"></div>
    <p>Loading...</p>
  </div>
</div>
<header class="site-header" id="top">
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
            <li><a href="/#home" class="mobile-nav-link" data-i18n="nav_home">Home</a></li>
            <li><a href="/#about" class="mobile-nav-link" data-i18n="nav_about">About</a></li>
            <li><a href="/#services" class="mobile-nav-link" data-i18n="nav_services">Services</a></li>
            <li><a href="/#projects" class="mobile-nav-link" data-i18n="nav_projects">Projects</a></li>
            <li><a href="/#clients" class="mobile-nav-link" data-i18n="nav_clients">Clients</a></li>
            <li><a href="/contact-form" class="mobile-nav-link" data-i18n="nav_contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="desktop-nav">
      <ul class="nav-menu">
        <li><a href="/#home" data-i18n="nav_home">Home</a></li>
        <li><a href="/#about" data-i18n="nav_about">About</a></li>
        <li><a href="/#services" data-i18n="nav_services">Services</a></li>
        <li><a href="/#projects" data-i18n="nav_projects">Projects</a></li>
        <li><a href="/#clients" data-i18n="nav_clients">Clients</a></li>
        <li><a href="/contact-form" data-i18n="nav_contact">Contact</a></li>
      </ul>
    </nav>
    <button id="lang-toggle" class="lang-toggle" aria-label="Toggle language">
      <span class="toggle-label left">BN</span>
      <span class="toggle-separator">|</span>
      <span class="toggle-label right">EN</span>
    </button>
  </div>
</header>
<main class="contact-form-page">
  <div class="container">
    <a href="/" class="back-to-home" data-i18n="contact_back">
      <i class="fas fa-arrow-left"></i>
      Back to Home
    </a>
    <div class="contact-form-container">
      <div class="form-section">
        <h2 data-i18n="contact_form_title">Get In Touch</h2>
        <p style="color: var(--muted); margin-bottom: 32px;" data-i18n="contact_form_lead">Ready to discuss your project? Fill out the form below and we'll get back to you within 24 hours.</p>
        <div class="success-message" id="success-message">
          <i class="fas fa-check-circle"></i>
          <span data-i18n="contact_success">Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</span>
        </div>
        <div class="error-message" id="error-message">
          <i class="fas fa-exclamation-circle"></i>
          <span data-i18n="contact_error">There was an error sending your message. Please try again or contact us directly.</span>
        </div>
        <form class="contact-form" id="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label for="firstName" data-i18n="contact_first_name">First Name *</label>
              <input type="text" id="firstName" name="firstName" required>
            </div>
            <div class="form-group">
              <label for="lastName" data-i18n="contact_last_name">Last Name *</label>
              <input type="text" id="lastName" name="lastName" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="email" data-i18n="contact_email_label">Email Address *</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="phone" data-i18n="contact_phone_label">Phone Number</label>
              <input type="tel" id="phone" name="phone">
            </div>
          </div>
          <div class="form-group">
            <label for="company" data-i18n="contact_company_label">Company Name</label>
            <input type="text" id="company" name="company">
          </div>
          <div class="form-group">
            <label for="service" data-i18n="contact_service_label">Service Interest *</label>
            <select id="service" name="service" required>
              <option value="" data-i18n="contact_service_select">Select a service</option>
              <option value="government-contracting" data-i18n="contact_service_1">Government Contracting</option>
              <option value="finishing-thread" data-i18n="contact_service_2">Finishing Thread Supply</option>
              <option value="construction-materials" data-i18n="contact_service_3">Stone & Sand Supply</option>
              <option value="feed-mill-materials" data-i18n="contact_service_4">Feed Mill Raw Materials</option>
              <option value="logistics" data-i18n="contact_service_5">Logistics & Delivery</option>
              <option value="other" data-i18n="contact_service_6">Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="subject" data-i18n="contact_subject_label">Subject *</label>
            <input type="text" id="subject" name="subject" placeholder="Brief description of your inquiry" data-i18n-placeholder="contact_subject_placeholder" required>
          </div>
          <div class="form-group">
            <label for="message" data-i18n="contact_message_label">Message *</label>
            <textarea id="message" name="message" placeholder="Please provide details about your requirements, quantities, delivery location, and timeline..." data-i18n-placeholder="contact_message_placeholder" required></textarea>
          </div>
          <button type="submit" class="submit-btn">
            <i class="fas fa-paper-plane"></i>
            <span data-i18n="contact_send">Send Message</span>
          </button>
        </form>
      </div>
      <div class="info-section">
        <div class="contact-info-card">
          <h3>Contact Information</h3>
          <ul class="contact-info-list">
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <span>House#11, Road#24, Sector#10, Uttara, Dhaka, Bangladesh</span>
            </li>
            <li>
              <i class="fas fa-phone"></i>
              <a href="tel:+8801716777787">+8801716777787</a>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <a href="mailto:info@zzt.com.bd">info@zzt.com.bd</a>
            </li>
            <li>
              <i class="fas fa-clock"></i>
              <span>Saturday - Thursday: 9:00 AM - 6:00 PM</span>
            </li>
            <li>
              <i class="fas fa-calendar-times"></i>
              <span>Closed on Fridays</span>
            </li>
          </ul>
        </div>
        <div class="map-container">
          <iframe 
            title="Zam Zam Trading Location" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.8550452590453!2d90.38196217479636!3d23.89475828322006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c53a337590e3%3A0xb3313243220486ee!2sZam%20Zam%20Trading!5e0!3m2!1sen!2sbd!4v1755855816292!5m2!1sen!2sbd" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</main>
<footer class="site-footer">
  <div class="container footer-inner">
    <div class="footer-content">
      <div class="footer-section quick-links">
        <h4 data-i18n="footer_quick">Quick Links</h4>
        <ul>
          <li><a href="/#home" data-i18n="footer_link_home"><i class="fas fa-home"></i>Home</a></li>
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
<button id="scroll-to-top" class="scroll-to-top" aria-label="Scroll to top">
  <i class="fas fa-chevron-up"></i>
</button>
`;

const contactFormScript = `
  const ensureEmailJsReady = (callback, attempts = 0) => {
    if (window.emailjs && typeof window.emailjs.init === 'function') {
      callback(window.emailjs);
      return;
    }
    if (attempts > 20) {
      const errorMessage = document.getElementById('error-message');
      if (errorMessage) {
        errorMessage.classList.add('show');
      }
      return;
    }
    setTimeout(() => ensureEmailJsReady(callback, attempts + 1), 300);
  };

  const setupContactForm = (emailClient) => {
    emailClient.init('W1SVKGEB7-RvkoBd3');

    window.addEventListener('scroll', () => {
      const scrollToTopBtn = document.getElementById('scroll-to-top');
      if (!scrollToTopBtn) return;
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
      } else {
        scrollToTopBtn.classList.remove('show');
      }
    });

    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (scrollToTopBtn) {
      scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    const translations = window.translations || {};
    const getMessage = (key, fallback) => {
      const lang = localStorage.getItem('language') || 'en';
      return (translations[lang] && translations[lang][key]) || fallback;
    };

    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const sendingLabel = getMessage('contact_sending', 'Sending...');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + sendingLabel;
        submitBtn.disabled = true;

        const formData = new FormData(form);
        const templateParams = {
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          email: formData.get('email'),
          phone: formData.get('phone') || 'Not provided',
          company: formData.get('company') || 'Not provided',
          service: formData.get('service'),
          subject: formData.get('subject'),
          message: formData.get('message'),
          to_email: 'info@zzt.com.bd',
          to_name: 'Zam Zam Trading'
        };

        emailClient.send('service_qf4nwrk', 'template_2fke75n', templateParams)
          .then(() => {
            if (successMessage) {
              successMessage.classList.add('show');
              errorMessage && errorMessage.classList.remove('show');
            }
            form.reset();
            setTimeout(() => {
              if (successMessage) {
                successMessage.classList.remove('show');
              }
            }, 5000);
          })
          .catch(() => {
            if (errorMessage) {
              errorMessage.classList.add('show');
              successMessage && successMessage.classList.remove('show');
            }
            setTimeout(() => {
              if (errorMessage) {
                errorMessage.classList.remove('show');
              }
            }, 5000);
          })
          .finally(() => {
            const sendLabel = getMessage('contact_send', 'Send Message');
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> ' + sendLabel;
            submitBtn.disabled = false;
          });
      });
    }

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      if (successMessage) {
        successMessage.classList.add('show');
      }
      setTimeout(() => {
        if (successMessage) {
          successMessage.classList.remove('show');
        }
      }, 5000);
    }
  };

  ensureEmailJsReady(setupContactForm);
`;

export default function ContactFormPage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: contactFormHtml }} />
      <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js" strategy="afterInteractive" />
      <Script id="contact-form-script" strategy="afterInteractive">{contactFormScript}</Script>
    </>
  );
}
