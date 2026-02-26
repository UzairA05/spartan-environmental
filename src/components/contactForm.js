// Contact form component with validation

export function createContactForm() {
    return `
    <form class="contact-form" id="contact-form" action="mailto:info@spartan-enviro.com" method="POST" enctype="text/plain" autocomplete="off" novalidate>
      <div class="form-group">
        <label for="name" class="form-label">Full Name *</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          class="form-input" 
          required
          autocomplete="off"
          placeholder="John Doe"
        >
        <span class="form-error">Please enter your name</span>
      </div>
      
      <div class="form-group">
        <label for="company" class="form-label">Company</label>
        <input 
          type="text" 
          id="company" 
          name="company" 
          class="form-input"
          autocomplete="off"
          placeholder="Your Company Name"
        >
      </div>
      
      <div class="form-group">
        <label for="email" class="form-label">Email Address *</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          class="form-input" 
          required
          autocomplete="off"
          placeholder="john.doe@example.com"
        >
        <span class="form-error">Please enter a valid email address</span>
      </div>
      
      <div class="form-group">
        <label for="phone" class="form-label">Phone Number</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          class="form-input"
          autocomplete="off"
          placeholder="(587) 439-0790"
        >
      </div>
      
      <div class="form-group">
        <label for="service" class="form-label">Service of Interest</label>
        <select id="service" name="service" class="form-select">
          <option value="">Select a service...</option>
          <option value="general">General Inquiry</option>
          <option value="asbestos">Asbestos Testing</option>
          <option value="confined-space">Confined Space Hazard Assessment</option>
          <option value="exposure-control-plans">Exposure Control Plans</option>
          <option value="respirator-fit-testing">Respirator Fit Testing</option>
          <option value="fume-hood-assessment">Fume Hood Assessment</option>
          <option value="hazardous-substances">Hazardous Substances Management</option>
          <option value="indoor-air-quality">Indoor Air Quality Testing</option>
          <option value="noise-exposure">Noise Exposure Assessments</option>
          <option value="mould-assessments">Mould Exposure Assessment</option>
          <option value="ohs-compliance">OH&S Compliance Order Resolution</option>
          <option value="procedure-policy-drafting">Procedure & Policy Drafting</option>
          <option value="radon-testing">Radon Testing</option>
          <option value="silica-exposure">Silica Exposure Assessments</option>
          <option value="turnarounds-maintenance">Turnarounds & Maintenance Support</option>
          <option value="welding-fume-exposure">Welding Fume Exposure Assessments</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="message" class="form-label">Message *</label>
        <textarea 
          id="message" 
          name="message" 
          class="form-textarea" 
          required
          autocomplete="off"
          placeholder="Tell us about your project or inquiry..."
        ></textarea>
        <span class="form-error">Please enter a message</span>
      </div>
      
      <button type="submit" class="btn btn-primary btn-large">Send Message</button>
    </form>
    
    <div class="form-success" id="form-success" style="display: none;">
      <p>✓ Thank you for your message! We'll get back to you within 24 hours.</p>
    </div>
  `;
}

export function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate form
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            const formGroup = field.closest('.form-group');

            if (!field.value.trim()) {
                formGroup.classList.add('has-error');
                isValid = false;
            } else {
                formGroup.classList.remove('has-error');
            }

            // Email validation
            if (field.type === 'email' && field.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    formGroup.classList.add('has-error');
                    isValid = false;
                }
            }
        });

        if (isValid) {
          const formData = new FormData(form);
          const name = formData.get('name')?.toString().trim() || '';
          const company = formData.get('company')?.toString().trim() || '';
          const email = formData.get('email')?.toString().trim() || '';
          const phone = formData.get('phone')?.toString().trim() || '';
          const service = formData.get('service')?.toString().trim() || '';
          const message = formData.get('message')?.toString().trim() || '';

          const subject = `Website Contact: ${name || 'New Inquiry'}`;
          const bodyLines = [
            `Name: ${name}`,
            `Company: ${company}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            `Service: ${service}`,
            '',
            'Message:',
            message
          ];
          const body = bodyLines.join('\n');
          const mailtoUrl = `mailto:info@spartan-enviro.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

          window.location.href = mailtoUrl;

          form.style.display = 'none';
          document.getElementById('form-success').style.display = 'block';

          setTimeout(() => {
            form.reset();
            form.style.display = 'block';
            document.getElementById('form-success').style.display = 'none';
          }, 5000);
        }
    });

    // Remove error on input
    const inputs = form.querySelectorAll('.form-input, .form-select, .form-textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const formGroup = input.closest('.form-group');
            formGroup.classList.remove('has-error');
        });
    });
}
