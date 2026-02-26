// Contact Us page

import { createContactForm, initializeContactForm } from '../components/contactForm.js';

export function renderContactPage() {
  setTimeout(() => {
    initializeContactForm();
  }, 100);

  return `
    <div class="page page-contact page-transition">
      <!-- Page Hero -->
      <div class="page-hero">
        <div class="container">
          <h1 class="page-hero__title">Contact Us</h1>
          <p class="page-hero__description">
            Get in touch with our team to discuss your environmental health and safety needs
          </p>
        </div>
      </div>
      
      <!-- Contact Section -->
      <section class="section">
        <div class="container">
          <div class="grid grid--2" style="gap: var(--space-3xl);">
            <!-- Contact Form -->
            <div class="scroll-animate">
              <h2 class="mb-lg">Send Us a Message</h2>
              ${createContactForm()}
            </div>
            
            <!-- Contact Information -->
            <div class="scroll-animate">
              <h2 class="mb-lg">Get In Touch</h2>
              
              <div class="card mb-xl">
                <h3 style="color: var(--color-accent); margin-bottom: var(--space-lg);">
                  Contact Information
                </h3>
                
                <div style="margin-bottom: var(--space-lg);">
                  <h4 style="font-size: var(--font-size-lg); margin-bottom: var(--space-sm); color: var(--color-primary);">
                    📧 Email
                  </h4>
                  <a href="mailto:info@spartan-enviro.com" style="font-size: var(--font-size-lg);">
                    info@spartan-enviro.com
                  </a>
                </div>
                
                <div style="margin-bottom: var(--space-lg);">
                  <h4 style="font-size: var(--font-size-lg); margin-bottom: var(--space-sm); color: var(--color-primary);">
                    📞 Phone
                  </h4>
                  <a href="tel:+15874390790" style="font-size: var(--font-size-lg);">
                    (587) 439-0790
                  </a>
                </div>
                
                <div>
                  <h4 style="font-size: var(--font-size-lg); margin-bottom: var(--space-sm); color: var(--color-primary);">
                    📍 Service Area
                  </h4>
                  <p style="font-size: var(--font-size-lg); margin: 0;">
                    Serving clients throughout Western Canada, including British Columbia, Alberta, Saskatchewan, and Manitoba.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      <!-- Additional CTA -->
      <section class="section section--alt">
        <div class="container">
          <div class="text-center scroll-animate">
            <h2>Prefer to Talk Directly?</h2>
            <p style="font-size: var(--font-size-lg); max-width: 600px; margin: 0 auto var(--space-xl);">
              Our team is ready to answer your questions and provide expert guidance on your specific needs.
            </p>
            <a href="tel:+15874390790" class="btn btn-primary btn-large">Call (587) 439-0790</a>
          </div>
        </div>
      </section>
    </div>
  `;
}
