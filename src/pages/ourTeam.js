// Our Team page

export function renderOurTeamPage() {
    return `
    <div class="page page-our-team page-transition">
      <div class="page-hero">
        <div class="container">
          <h1 class="page-hero__title">Our Team</h1>
          <p class="page-hero__description">
            Meet the professional leadership behind Spartan Environmental Consulting Ltd.
          </p>
        </div>
      </div>

      <section class="section section--alt authority-bar">
        <div class="container">
          <div class="authority-intro grid grid--2">
            <div class="scroll-animate">
              <h2 class="authority-intro__title">Certified Industrial Hygienist – Mould, Asbestos &amp; Indoor Air Quality Investigations in Calgary</h2>
              <p class="authority-intro__subtitle">
                Independent environmental testing and court-defensible reports for homeowners, property managers, lawyers, and businesses across Alberta.
              </p>
            </div>

            <div class="authority-intro__profile scroll-animate">
              <img
                src="/images/photo.png"
                alt="Muhammad Khan, Certified Industrial Hygienist"
                class="authority-intro__image"
              >
              <div class="authority-intro__panel">
                <p>
                  Muhammad Khan, B.Sc., CIH, RSO, IDipNEBOSH<br>
                  Certified Industrial Hygienist<br>
                  Environmental &amp; Occupational Exposure Specialist<br>
                  Serving Calgary and surrounding areas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center mb-2xl">
            <h2 class="scroll-animate">Biography</h2>
            <p class="about-page__lead scroll-animate">
              About the Consultant
            </p>
          </div>

          <div class="grid grid--2 about-section-grid" style="align-items: start;">
            <div class="scroll-animate">
              <h3 style="color: var(--color-accent); margin-bottom: var(--space-md);">Muhammad Khan, B.Sc., CIH, RSO, IDipNEBOSH</h3>
              <p>
                Muhammad Khan is a Certified Industrial Hygienist in Calgary and an environmental consultant specializing in indoor environmental investigations. As a mould inspection expert and asbestos air testing professional, he conducts scientific assessments to determine building health conditions rather than relying on visual opinions alone.
              </p>
              <p>
                Serving as an indoor air quality consultant across Alberta, he performs detailed evaluations including third hand smoke testing, moisture and contamination assessments, and post remediation verification in Calgary. His reports provide clear, defensible conclusions trusted by homeowners, contractors, property managers, and legal professionals.
              </p>
              <p style="margin-bottom: 0;">
                All inspections and reports follow recognized industry methodologies and defensible sampling protocols.
              </p>
            </div>

            <div class="scroll-animate">
              <div class="about-panel" style="margin-bottom: var(--space-lg);">
                <h3>Education &amp; Certifications</h3>
                <ul>
                  <li>B.Sc. (Bachelor of Science) – Occupational Safety and Health</li>
                  <li>Certificate - Occupational Health and Safety</li>
                  <li>CIH – Certified Industrial Hygienist</li>
                  <li>RSO – Radiation Safety Officer</li>
                  <li>IDipNEBOSH – NEBOSH International Diploma in Occupational Health &amp; Safety</li>
                  <li>Certified Residential Mold Inspector (CRMI)</li>
                  <li>Level S: Asbestos Surveyor Safety</li>
                </ul>
              </div>

              <div class="about-panel">
                <h3>Areas of Expertise</h3>
                <ul>
                  <li>Mould and moisture investigations</li>
                  <li>Asbestos inspections &amp; clearance air testing</li>
                  <li>Indoor air quality assessments</li>
                  <li>Odour investigations (including smoke &amp; third-hand smoke)</li>
                  <li>Occupational exposure assessments</li>
                  <li>Post-remediation verification &amp; clearance testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section cta-section">
        <div class="container">
          <div class="scroll-animate">
            <h2 class="cta-section__title">Speak With Our Team</h2>
            <p class="cta-section__text">
              Contact Spartan Environmental Consulting to discuss your environmental health concerns and next steps.
            </p>
            <a href="#/contact" class="btn btn-primary btn-large">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  `;
}
