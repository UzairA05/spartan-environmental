// Services landing page

import { services } from '../data/services.js';

export function renderServicesPage() {
    const serviceCards = services.map(service => `
    <a href="#/service/${service.id}" class="service-card scroll-animate">
      <div class="service-card__icon">${service.icon}</div>
      <h3 class="service-card__title">${service.title}</h3>
      <p class="service-card__description">${service.shortDescription}</p>
    </a>
  `).join('');

    return `
    <div class="page page-services page-transition">
      <!-- Page Hero -->
      <div class="page-hero">
        <div class="container">
          <h1 class="page-hero__title">Our Services</h1>
          <p class="page-hero__description">
            Comprehensive environmental health and workplace safety solutions tailored to your needs
          </p>
        </div>
      </div>
      
      <!-- Services Grid -->
      <section class="section">
        <div class="container">
          <div class="grid grid--3">
            ${serviceCards}
          </div>
        </div>
      </section>
      
      <!-- CTA Section -->
      <section class="section section--dark">
        <div class="container">
          <div class="text-center scroll-animate">
            <h2 style="color: white;">Need Help Choosing the Right Service?</h2>
            <p style="font-size: var(--font-size-lg); color: var(--color-bg-light); margin-bottom: var(--space-2xl); max-width: 600px; margin-left: auto; margin-right: auto;">
              Our team can help you identify the assessments and programs your organization needs.
            </p>
            <a href="#/contact" class="btn btn-primary btn-large">Contact Us for Guidance</a>
          </div>
        </div>
      </section>
    </div>
  `;
}
