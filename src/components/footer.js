// Footer component

export function createFooter() {
    const footer = document.getElementById('footer');

    footer.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer__content">
          <div class="footer__section footer__about">
            <h3 class="footer__title">Spartan Environmental Consulting Ltd.</h3>
            <p class="footer__description">
              Professional environmental health and workplace safety consulting services. 
              Ensuring regulatory compliance and protecting your most valuable asset—your people.
            </p>
            <p class="footer__tagline">
              <strong>Expertise. Compliance. Safety.</strong>
            </p>
          </div>
          
          <div class="footer__section footer__links">
            <h4 class="footer__heading">Quick Links</h4>
            <ul class="footer__list">
              <li><a href="#/">Home</a></li>
              <li><a href="#/about">About Us</a></li>
              <li><a href="#/services">Services</a></li>
              <li><a href="#/training">Training</a></li>
              <li><a href="#/case-studies">Case Studies</a></li>
              <li><a href="#/contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div class="footer__section footer__services">
            <h4 class="footer__heading">Services</h4>
            <ul class="footer__list">
              <li><a href="#/service/asbestos">Asbestos Testing</a></li>
              <li><a href="#/service/respirator-fit-testing">Respirator Fit Testing</a></li>
              <li><a href="#/service/noise-exposure">Noise Exposure Assessments</a></li>
              <li><a href="#/service/indoor-air-quality">Indoor Air Quality</a></li>
              <li><a href="#/service/confined-space">Confined Space Hazard Assessment</a></li>
              <li><a href="#/services">View All Services →</a></li>
            </ul>
          </div>
          
          <div class="footer__section footer__contact">
            <h4 class="footer__heading">Contact Information</h4>
            <ul class="footer__contact-list">
              <li>
                <span class="contact-icon">📧</span>
                <a href="mailto:info@spartan-enviro.com">info@spartan-enviro.com</a>
              </li>
              <li>
                <span class="contact-icon">📞</span>
                <a href="tel:+15874390790">(587) 439-0790</a>
              </li>
              <li>
                <span class="contact-icon">📍</span>
                <span>Serving Western Canada</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="footer__bottom">
          <p class="footer__copyright">
            &copy; ${new Date().getFullYear()} Spartan Environmental Consulting Ltd. All rights reserved.
          </p>
          <div class="footer__legal">
            <a href="#/privacy">Privacy Policy</a>
            <span class="separator">|</span>
            <a href="#/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// Add footer styles
const footerStyles = document.createElement('style');
footerStyles.textContent = `
  .footer {
    background-color: var(--color-primary);
    color: var(--color-bg-light);
    padding: var(--space-4xl) 0 var(--space-xl);
    margin-top: var(--space-5xl);
  }
  
  .footer__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-2xl);
    margin-bottom: var(--space-2xl);
  }
  
  .footer__title {
    color: var(--color-text-white);
    font-size: var(--font-size-xl);
    margin-bottom: var(--space-md);
  }
  
  .footer__description {
    color: var(--color-bg-light);
    line-height: var(--line-height-relaxed);
    margin-bottom: var(--space-md);
  }
  
  .footer__tagline {
    color: var(--color-accent);
    font-size: var(--font-size-lg);
  }
  
  .footer__heading {
    color: var(--color-text-white);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    margin-bottom: var(--space-lg);
  }
  
  .footer__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer__list li {
    margin-bottom: var(--space-sm);
  }
  
  .footer__list a {
    color: var(--color-bg-light);
    transition: color var(--transition-fast);
    font-size: var(--font-size-base);
  }
  
  .footer__list a:hover {
    color: var(--color-accent);
  }
  
  .footer__contact-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer__contact-list li {
    display: flex;
    align-items: start;
    gap: var(--space-sm);
    margin-bottom: var(--space-md);
  }
  
  .contact-icon {
    font-size: 1.2em;
  }
  
  .footer__contact-list a,
  .footer__contact-list span {
    color: var(--color-bg-light);
    font-size: var(--font-size-base);
  }
  
  .footer__contact-list a:hover {
    color: var(--color-accent);
  }
  
  .footer__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--space-xl);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    flex-wrap: wrap;
    gap: var(--space-md);
  }
  
  .footer__copyright {
    margin: 0;
    color: var(--color-bg-light);
    font-size: var(--font-size-sm);
  }
  
  .footer__legal {
    display: flex;
    gap: var(--space-md);
    align-items: center;
  }
  
  .footer__legal a {
    color: var(--color-bg-light);
    font-size: var(--font-size-sm);
  }
  
  .footer__legal a:hover {
    color: var(--color-accent);
  }
  
  .separator {
    color: var(--color-bg-light);
  }
  
  @media (max-width: 768px) {
    .footer {
      padding: var(--space-3xl) 0 var(--space-lg);
    }
    
    .footer__content {
      grid-template-columns: 1fr;
      gap: var(--space-xl);
    }
    
    .footer__bottom {
      flex-direction: column;
      text-align: center;
    }
  }
`;

document.head.appendChild(footerStyles);
