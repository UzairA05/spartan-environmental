// About Us page

export function renderAboutPage() {
    return `
    <div class="page page-about page-transition">
      <div class="page-hero">
        <div class="container">
          <h1 class="page-hero__title">About Spartan Environmental Consulting Ltd.</h1>
          <p class="page-hero__description">
            Independent, science-based environmental health and safety consulting in Calgary, Alberta.
          </p>
          <div style="margin-top: var(--space-xl);">
            <a href="#/our-team" class="btn btn-primary btn-large">Our Team</a>
          </div>
        </div>
      </div>

      <section class="section">
        <div class="container">
          <div class="text-center mb-2xl">
            <h2 class="scroll-animate">Who We Are</h2>
            <p class="about-page__lead scroll-animate">
              Spartan Environmental Consulting Ltd. is an independent environmental health and safety consulting firm based in Calgary, Alberta. We specialize in professional assessment, investigation, and reporting of mould, asbestos, indoor air quality, and other environmental exposures that affect the health and wellbeing of occupants in residential, commercial, and industrial settings.
            </p>
            <p class="about-page__lead scroll-animate">
              We provide objective, science-based environmental testing and evaluation that clients can rely on for clarity, compliance, and decision-making — whether for regulatory requirements, property transactions, workplace safety, insurance documentation, litigation support, or peace of mind.
            </p>
          </div>

          <div class="about-highlight scroll-animate">
            <h3>Our Mission</h3>
            <p>
              Our mission is to protect people, properties, and communities by delivering rigorous environmental assessments and clear recommendations grounded in professional industrial hygiene practices. We combine technical expertise with practical communication to help clients understand potential hazards and make informed decisions.
            </p>
          </div>
        </div>
      </section>

      <section class="section section--alt">
        <div class="container">
          <div class="grid grid--2 about-section-grid">
            <div class="scroll-animate">
              <h2>Our Expertise &amp; Experience</h2>
              <p>
                Our lead consultant, Muhammad Khan, B.Sc., CIH, RSO, IDipNEBOSH, brings advanced qualifications and hands-on experience in environmental and occupational exposure assessment. As a Certified Industrial Hygienist (CIH), he applies recognized methods and scientific rigor to every investigation, ensuring results are accurate, defensible, and relevant.
              </p>
              <p>
                We follow industry-recognized sampling methodologies and partner with accredited laboratories to deliver reports that meet regulatory and legal expectations. Every assessment is performed with the highest professional standards to ensure clients receive trustworthy, actionable information.
              </p>
            </div>

            <div class="scroll-animate">
              <div class="about-panel">
                <h3>Professional Credentials &amp; Partnerships</h3>
                <ul>
                  <li>Certified Industrial Hygienist (CIH)</li>
                  <li>Registered Safety Officer (RSO)</li>
                  <li>International Diploma in Occupational Health and Safety (IDipNEBOSH)</li>
                  <li>Fully insured consulting services</li>
                  <li>Accredited laboratory partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section mission-values">
        <div class="container">
          <div class="text-center mb-2xl">
            <h2 class="scroll-animate">What Sets Us Apart</h2>
          </div>

          <div class="grid grid--2 about-cards-grid">
            <div class="card scroll-animate">
              <h3 class="card__title">Independent &amp; Unbiased</h3>
              <p class="card__description">
                We do not perform remediation. This ensures our findings are completely objective, free from conflict of interest, and fully focused on protecting the health and safety of building occupants.
              </p>
            </div>

            <div class="card scroll-animate">
              <h3 class="card__title">Scientific and Regulatory Integrity</h3>
              <p class="card__description">
                Our work follows proven sampling strategies and analytical methods aligned with professional standards. Assessments are interpreted by trained industrial hygiene professionals to provide accurate and reliable results.
              </p>
            </div>

            <div class="card scroll-animate">
              <h3 class="card__title">Clear, Actionable Reporting</h3>
              <p class="card__description">
                We provide reports written in clear, accessible language, with structured findings and recommendations. Whether for homeowners, property managers, businesses, or legal professionals, our documentation supports informed decision-making.
              </p>
            </div>

            <div class="card scroll-animate">
              <h3 class="card__title">Dedicated Client Support</h3>
              <p class="card__description">
                We communicate proactively and respond quickly to questions, guiding clients through each stage of the investigation — from initial inquiry to the final report.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="grid grid--2 about-section-grid">
            <div class="scroll-animate">
              <h2>Industries &amp; Clients We Serve</h2>
              <p>
                Spartan provides environmental consulting and industrial hygiene services for a wide range of clients, including:
              </p>
              <ul class="about-list">
                <li>Homeowners concerned about mould or indoor air quality</li>
                <li>Property managers and landlords assessing health risks</li>
                <li>Businesses seeking environmental compliance</li>
                <li>Legal and insurance professionals requiring defensible reports</li>
                <li>Real estate professionals during property transactions</li>
              </ul>
              <p>
                We provide tailored solutions for both residential and commercial environments, ensuring recommendations match the specific needs of each client.
              </p>
            </div>

            <div class="scroll-animate">
              <h2>Our Commitment to Quality</h2>
              <p>We are committed to:</p>
              <ul class="about-list">
                <li>Using accredited laboratory analysis for precise and reliable results</li>
                <li>Delivering reports suitable for regulatory, insurance, and legal purposes</li>
                <li>Educating clients on findings and implications</li>
                <li>Explaining the why behind the what, so clients understand both the problem and the recommended solution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="section section--alt mission-values">
        <div class="container">
          <div class="text-center mb-2xl">
            <h2 class="scroll-animate">Our Values</h2>
          </div>

          <div class="grid grid--2 about-cards-grid">
            <div class="card scroll-animate">
              <h3 class="card__title">Integrity</h3>
              <p class="card__description">Factual, transparent, and unbiased investigations.</p>
            </div>
            <div class="card scroll-animate">
              <h3 class="card__title">Excellence</h3>
              <p class="card__description">Professional processes and high-quality documentation.</p>
            </div>
            <div class="card scroll-animate">
              <h3 class="card__title">Clarity</h3>
              <p class="card__description">Communication that demystifies technical results.</p>
            </div>
            <div class="card scroll-animate">
              <h3 class="card__title">Service</h3>
              <p class="card__description">Putting clients’ needs and concerns first.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="about-highlight scroll-animate">
            <h2>Why Clients Choose Spartan</h2>
            <p>Clients trust Spartan because we provide:</p>
            <ul class="about-list about-list--tight">
              <li>Expertise in environmental health and exposure assessment</li>
              <li>Independent evaluations with no commercial bias</li>
              <li>Court-defensible reports with scientific validity</li>
              <li>Professional service from initial contact to final recommendations</li>
            </ul>
            <p style="margin-bottom: 0;">
              Whether addressing a suspected environmental issue or planning a proactive assessment, Spartan provides the information and confidence clients need to move forward safely.
            </p>
          </div>
        </div>
      </section>

      <section class="section cta-section">
        <div class="container">
          <div class="scroll-animate">
            <h2 class="cta-section__title">Contact Us</h2>
            <p class="cta-section__text">
              Speak directly with a Certified Industrial Hygienist about your situation. We’ll help determine whether testing is necessary and guide you through the next steps with expert support.
            </p>
            <a href="#/contact" class="btn btn-primary btn-large">Get Expert Support</a>
          </div>
        </div>
      </section>
    </div>
  `;
}
