export function createContactForm() {
    return `
    <form class="contact-form" id="contact-form" autocomplete="off" novalidate>
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

      <button type="submit" class="btn btn-primary btn-large" id="submit-btn">Send Message</button>
      <div class="form-submit-error" id="form-submit-error" style="display:none; color: var(--color-error, #dc2626); margin-top: var(--space-sm); font-size: var(--font-size-sm);"></div>
    </form>

    <div class="form-success" id="form-success" style="display: none;">
      <p>Thank you for your message! We'll get back to you within 24 hours.</p>
    </div>
  `;
}

export function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

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
            if (field.type === 'email' && field.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    formGroup.classList.add('has-error');
                    isValid = false;
                }
            }
        });

        if (!isValid) return;

        const submitBtn = document.getElementById('submit-btn');
        const errorEl = document.getElementById('form-submit-error');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        errorEl.style.display = 'none';

        const formData = new FormData(form);
        const payload = {
            name: formData.get('name')?.toString().trim() || '',
            company: formData.get('company')?.toString().trim() || '',
            email: formData.get('email')?.toString().trim() || '',
            phone: formData.get('phone')?.toString().trim() || '',
            service: formData.get('service')?.toString().trim() || '',
            message: formData.get('message')?.toString().trim() || '',
        };

        try {
            const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
            const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

            const res = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${supabaseAnonKey}`,
                },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                throw new Error('Submission failed');
            }

            form.style.display = 'none';
            document.getElementById('form-success').style.display = 'block';

            setTimeout(() => {
                form.reset();
                form.style.display = 'block';
                document.getElementById('form-success').style.display = 'none';
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }, 5000);
        } catch {
            errorEl.textContent = 'Something went wrong. Please try again or email us directly at info@spartan-enviro.com.';
            errorEl.style.display = 'block';
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });

    const inputs = form.querySelectorAll('.form-input, .form-select, .form-textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.closest('.form-group').classList.remove('has-error');
        });
    });
}
