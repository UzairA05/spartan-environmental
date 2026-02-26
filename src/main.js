// Main application entry point

import router from './router.js';
import { createHeader } from './components/header.js';
import { createFooter } from './components/footer.js';

// Import page modules
import { renderHomePage } from './pages/home.js';
import { renderAboutPage } from './pages/about.js';
import { renderOurTeamPage } from './pages/ourTeam.js';
import { renderServicesPage } from './pages/services.js';
import { renderServiceDetailPage } from './pages/serviceDetail.js';
import { renderTrainingPage } from './pages/training.js';
import { renderGalleryPage } from './pages/gallery.js';
import { renderBlogPage } from './pages/blog.js';
import { renderBlogDetailPage } from './pages/blogDetail.js';
import { renderCaseStudiesPage } from './pages/caseStudies.js';
import { renderContactPage } from './pages/contact.js';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

function createBackToTopButton() {
  if (document.getElementById('back-to-top')) {
    return;
  }

  const button = document.createElement('button');
  button.id = 'back-to-top';
  button.className = 'back-to-top';
  button.type = 'button';
  button.setAttribute('aria-label', 'Back to top');
  button.innerHTML = '↑';

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.body.appendChild(button);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      button.classList.add('is-visible');
    } else {
      button.classList.remove('is-visible');
    }
  };

  toggleVisibility();
  window.addEventListener('scroll', toggleVisibility);
}

// Initialize the application
function initApp() {
    // Create header and footer
    createHeader();
    createFooter();
  createBackToTopButton();

    // Register routes
    router.addRoute('/', () => {
        document.getElementById('main').innerHTML = renderHomePage();
    });

    router.addRoute('about', () => {
        document.getElementById('main').innerHTML = renderAboutPage();
    });

    router.addRoute('our-team', () => {
      document.getElementById('main').innerHTML = renderOurTeamPage();
    });

    router.addRoute('services', () => {
        document.getElementById('main').innerHTML = renderServicesPage();
    });

    router.addRoute('service', (serviceId) => {
        document.getElementById('main').innerHTML = renderServiceDetailPage(serviceId);
    });

    router.addRoute('training', () => {
        document.getElementById('main').innerHTML = renderTrainingPage();
    });

    router.addRoute('gallery', () => {
        document.getElementById('main').innerHTML = renderGalleryPage();
    });

    router.addRoute('blog', () => {
        document.getElementById('main').innerHTML = renderBlogPage();
    });

    router.addRoute('blog-detail', (slug) => {
        document.getElementById('main').innerHTML = renderBlogDetailPage(slug);
    });

    router.addRoute('case-studies', () => {
        document.getElementById('main').innerHTML = renderCaseStudiesPage();
    });

    router.addRoute('contact', () => {
        document.getElementById('main').innerHTML = renderContactPage();
    });

    // Placeholder routes for privacy and terms
    router.addRoute('privacy', () => {
        document.getElementById('main').innerHTML = `
      <div class="page page-transition">
        <div class="page-hero">
          <div class="container">
            <h1 class="page-hero__title">Privacy Policy</h1>
          </div>
        </div>
        <section class="section">
          <div class="container" style="max-width: 900px;">
            <p><strong>Effective Date:</strong> January 26, 2026</p>
            <p><strong>Last Updated:</strong> January 26, 2026</p>
            <p>
              This Privacy Policy explains how Spartan Environmental Consulting Ltd (“we,” “us,” or “our”) collects,
              uses, protects, and discloses information obtained from visitors to our website (“Site”). This policy
              applies to all users of the Site and to all services and content offered by Spartan Environmental
              Consulting Ltd.
            </p>
            <p>The information we collect depends on how you interact with our Site.</p>

            <h3>Information We Collect</h3>
            <h4>Non-Personal Information</h4>
            <p>We may automatically gather non-identifying information when you interact with our Site. This may include:</p>
            <ul>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Operating system</li>
              <li>Internet service provider</li>
              <li>Technical connection details</li>
              <li>General usage data and page activity</li>
            </ul>
            <p>
              This information is used solely to help us understand how visitors use our Site and to improve performance
              and usability.
            </p>

            <h4>Personal Information</h4>
            <p>We may collect personal information only when you voluntarily provide it to us. This may occur when you:</p>
            <ul>
              <li>Submit a contact form</li>
              <li>Subscribe to communications</li>
              <li>Request information or services</li>
              <li>Communicate with us directly</li>
            </ul>
            <p>
              Personal information may include your name, email address, phone number, or other contact details. You may
              browse the Site anonymously without submitting personal information.
            </p>

            <h3>How We Use Information</h3>
            <p>Information you provide is used to:</p>
            <ul>
              <li>Respond to inquiries and requests</li>
              <li>Communicate with you regarding services</li>
              <li>Improve website content and functionality</li>
              <li>Customize your experience based on prior interactions</li>
            </ul>
            <p>
              Our primary objective in collecting information is to deliver efficient, relevant, and high-quality
              services tailored to your needs.
            </p>

            <h3>Disclosure and Sharing of Information</h3>
            <p>
              If you choose to provide personal information through email or online forms, that information may be
              accessed by authorized employees or business partners of Spartan Environmental Consulting Ltd strictly for
              customer service or operational purposes.
            </p>
            <p>
              We may also compile aggregated, non-identifiable data related to website usage. Any survey responses,
              comments, or feedback you submit may be stored in a personally identifiable format but will be used
              internally only.
            </p>
            <p>We do not sell, lease, or trade personal information to third parties.</p>
            <p>Information may be disclosed:</p>
            <ul>
              <li>To comply with applicable laws or court orders</li>
              <li>When required by legal or regulatory authorities</li>
            </ul>

            <h3>Third-Party Links</h3>
            <p>
              Our Site may include links to third-party websites that are not owned or controlled by Spartan
              Environmental Consulting Ltd. We are not responsible for the privacy practices, policies, or content of
              external websites. We encourage users to review the privacy policies of any third-party sites they visit.
            </p>

            <h3>Data Security</h3>
            <p>
              We use reasonable administrative, technical, and physical safeguards to protect the information you submit.
              Secure Socket Layer (SSL) encryption is used for online forms where applicable.
            </p>
            <p>
              Please note that email communication is not guaranteed to be secure, and information sent via email may be
              subject to interception.
            </p>

            <h3>Use of Contact Information</h3>
            <p>
              Contact details published on our Site, including email addresses and phone numbers, are provided for
              legitimate business communication only. Their inclusion does not grant permission for unsolicited
              marketing, advertising, or spam communications.
            </p>

            <h3>Cookies and Tracking Technologies</h3>
            <h4>What Are Cookies</h4>
            <p>
              Cookies are small text files stored on your device that help websites function efficiently and improve user
              experience. Cookies do not access data stored on your device or retrieve personal information beyond what
              you voluntarily provide.
            </p>
            <h4>How We Use Cookies</h4>
            <p>
              Our Site may use cookies and similar tracking technologies (including pixels, tags, and web beacons) to:
            </p>
            <ul>
              <li>Ensure proper website functionality</li>
              <li>Remember user preferences</li>
              <li>Improve performance and security</li>
              <li>Analyze website usage</li>
              <li>Support customer service and communications</li>
            </ul>
            <p>
              Some cookies may remain on your device for a defined period (persistent cookies), while others are deleted
              when you close your browser (session cookies).
            </p>
            <h4>Types of Cookies We May Use</h4>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for core website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand visitor behavior and improve the Site</li>
              <li><strong>Functionality Cookies:</strong> Remember preferences and enhance usability</li>
              <li><strong>Targeting Cookies:</strong> Help tailor content and services</li>
              <li><strong>Third-Party Cookies:</strong> Set by external services such as analytics providers</li>
            </ul>
            <h4>Managing Cookies</h4>
            <p>
              When you first visit our Site, you may be notified of cookie usage. By continuing to use the Site, you
              consent to our use of cookies in accordance with this policy.
            </p>
            <p>
              You can manage or disable cookies through your browser settings. Please note that disabling cookies may
              limit functionality or negatively impact your browsing experience.
            </p>
            <p>
              More information about cookies can be found at www.allaboutcookies.org.
            </p>

            <h3>Website Analytics</h3>
            <p>
              We may use third-party analytics tools to collect anonymous information about how visitors use our Site.
              This helps us improve content, usability, and overall performance. Analytics tools use cookies but do not
              collect information that personally identifies you.
            </p>

            <h3>Changes to This Privacy Policy</h3>
            <p>
              Spartan Environmental Consulting Ltd reserves the right to update or modify this Privacy Policy at any
              time. Changes will be posted on this page with an updated effective date. Continued use of the Site after
              changes are posted constitutes acceptance of the revised policy.
            </p>

            <h3>Your Acceptance of This Policy</h3>
            <p>
              By using this Site, you confirm your acceptance of this Privacy Policy. If you do not agree with the
              terms, please discontinue use of the Site.
            </p>

            <h3>Contact Information</h3>
            <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
            <p>Spartan Environmental Consulting Ltd<br>Calgary, Alberta<br>(587) 439-0790</p>
          </div>
        </section>
      </div>
    `;
    });

    router.addRoute('terms', () => {
        document.getElementById('main').innerHTML = `
      <div class="page page-transition">
        <div class="page-hero">
          <div class="container">
            <h1 class="page-hero__title">Terms of Service</h1>
          </div>
        </div>
        <section class="section">
          <div class="container" style="max-width: 900px;">
            <h3>Acceptance and Use of Terms</h3>
            <p>
              Spartan Environmental Consulting Ltd provides access to this website and its related content, including
              information, documents, software, products (collectively, the “Content”), and any related features or
              services (the “Services”), subject to these Terms of Service (“Terms”).
            </p>
            <p>
              By accessing or using this website, you acknowledge that you have read, understood, and agree to be bound
              by these Terms. If you do not agree, you must not use this website.
            </p>
            <p>
              Spartan Environmental Consulting Ltd may update or modify these Terms at any time without prior notice.
              Any changes will take effect immediately upon being posted. Your continued use of the website after changes
              are posted constitutes acceptance of the revised Terms.
            </p>
            <p>
              Certain areas of the website or specific Services may be governed by additional rules or guidelines. Those
              additional terms are incorporated into these Terms by reference and are binding when you use the applicable
              Content or Services.
            </p>
            <p>
              If you violate any part of these Terms, your permission to use the website automatically ends, and you must
              immediately delete or destroy any materials obtained from the site, whether in electronic or printed form.
            </p>

            <h3>Accuracy of Information</h3>
            <p>
              The information on this website may contain errors, omissions, or outdated content, including technical or
              typographical inaccuracies. Spartan Environmental Consulting Ltd reserves the right to modify, update, or
              remove information, products, or services described on this website at any time without notice.
            </p>

            <h3>Submissions and Communications</h3>
            <p>
              Spartan Environmental Consulting Ltd does not seek to receive confidential, proprietary, or sensitive
              information through this website. Any materials, data, or information submitted through the site will be
              treated as non-confidential and non-proprietary.
            </p>
            <p>We will not publicly disclose your name or identify you as a contributor unless:</p>
            <ul>
              <li>you grant us permission to do so;</li>
              <li>you are notified in advance that submitted materials will be published with attribution; or</li>
              <li>disclosure is required by law or legal process.</li>
            </ul>

            <h3>Copyright and Intellectual Property</h3>
            <p>© 2026 Spartan Environmental Consulting Ltd. All rights reserved.</p>
            <p>
              All content on this website, including text, graphics, logos, and documents, is protected by copyright and
              other intellectual property laws unless explicitly labeled “Copy Freely.” All trademarks referenced remain
              the property of their respective owners.
            </p>
            <p>
              You may view, download, and print materials from this website for personal, non-commercial use only,
              provided that all copyright and proprietary notices remain intact. You may not reproduce, distribute,
              transmit, modify, or otherwise use the content for any other purpose without prior written permission from
              Spartan Environmental Consulting Ltd.
            </p>
            <p>
              Some individual documents may contain additional copyright or proprietary notices that apply specifically to
              those materials.
            </p>
            <p>
              Nothing on this website should be interpreted as granting any license or right—whether by implication,
              estoppel, or otherwise—under any patent, trademark, copyright, or other intellectual property right owned by
              Spartan Environmental Consulting Ltd or any third party. Any products, methods, or technologies described may
              be protected by intellectual property rights and are not licensed under these Terms.
            </p>

            <h3>Use of Contact Information</h3>
            <p>
              Contact details provided on this website, including email addresses, are made available solely for legitimate
              communication with Spartan Environmental Consulting Ltd. While reasonable efforts are taken to protect this
              information, its availability does not constitute permission for unsolicited communications, advertising, or
              spam.
            </p>

            <h3>External Links Disclaimer</h3>
            <p>
              This website may contain links to third-party websites that are not operated or controlled by Spartan
              Environmental Consulting Ltd. These links are provided solely for convenience and informational purposes. We
              do not endorse, monitor, or assume responsibility for the content, policies, or practices of any third-party
              websites.
            </p>
          </div>
        </section>
      </div>
    `;
    });

    // Initialize the router
    router.handleRoute();
}

// Add gallery image styles
const galleryStyles = document.createElement('style');
galleryStyles.textContent = `
  .gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: var(--radius-lg);
    aspect-ratio: 4/3;
    background-color: var(--color-bg-light);
  }
  
  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-base);
    border-radius: var(--radius-lg);
  }
  
  .gallery-item:hover img {
    transform: scale(1.05);
  }
  
  .gallery-item::after {
    content: '🔍';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    opacity: 0;
    transition: opacity var(--transition-base);
    pointer-events: none;
  }
  
  .gallery-item:hover::after {
    opacity: 0.8;
  }
`;

document.head.appendChild(galleryStyles);

const backToTopStyles = document.createElement('style');
backToTopStyles.textContent = `
  .back-to-top {
    position: fixed;
    right: var(--space-lg);
    bottom: var(--space-lg);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid var(--color-accent);
    background-color: var(--color-primary);
    color: var(--color-text-white);
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: var(--shadow-md);
    opacity: 0;
    visibility: hidden;
    transform: translateY(8px);
    transition: opacity var(--transition-base), transform var(--transition-base), visibility var(--transition-base), background-color var(--transition-fast);
    z-index: 1100;
  }

  .back-to-top.is-visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .back-to-top:hover {
    background-color: var(--color-accent);
  }

  @media (max-width: 768px) {
    .back-to-top {
      right: var(--space-md);
      bottom: var(--space-md);
      width: 40px;
      height: 40px;
    }
  }
`;

document.head.appendChild(backToTopStyles);

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
