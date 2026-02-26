// Training page

export function renderTrainingPage() {
    return `
    <div class="page page-training page-transition">
      <!-- Page Hero -->
      <div class="page-hero">
        <div class="container">
          <h1 class="page-hero__title">Training & Education</h1>
          <p class="page-hero__description">
            Professional training programs to build workplace safety competence
          </p>
        </div>
      </div>
      
      <!-- Training Overview -->
      <section class="section">
        <div class="container">
          <div class="grid grid--2" style="align-items: center;">
            <div class="scroll-animate">
              <h2>Invest in Your Team's Safety Knowledge</h2>
              <p style="font-size: var(--font-size-lg); line-height: var(--line-height-relaxed);">
                Effective training is the foundation of a strong safety culture. Our professional training programs 
                combine regulatory compliance with practical, hands-on learning that employees can immediately apply 
                in their workplaces.
              </p>
              <p>
                Led by experienced occupational hygiene and safety professionals, our courses are tailored to your 
                industry and specific workplace hazards. We offer both on-site training at your facility and public 
                courses at our training center.
              </p>
            </div>
            
            <div class="scroll-animate" style="text-align: center;">
              <img 
                src="/images/training-session.jpg" 
                alt="Safety training in progress" 
                style="border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);"
              >
            </div>
          </div>
        </div>
      </section>
      
      <!-- Training Programs -->
      <section class="section section--alt">
        <div class="container">
          <div class="text-center mb-2xl">
            <h2 class="scroll-animate">Our Training Programs</h2>
          </div>
          
          <div class="grid grid--3">
            <div class="card scroll-animate">
              <div class="card__icon">📚</div>
              <h3 class="card__title">WHMIS Training</h3>
              <p class="card__description">
                Comprehensive Workplace Hazardous Materials Information System training covering classification, 
                labeling, safety data sheets, and safe handling procedures.
              </p>
            </div>
            
            <div class="card scroll-animate">
              <div class="card__icon">😷</div>
              <h3 class="card__title">Respiratory Protection</h3>
              <p class="card__description">
                Training on respirator selection, use, maintenance, and limitations. Includes fit testing protocols 
                and program administration.
              </p>
            </div>
            
            <div class="card scroll-animate">
              <div class="card__icon">🔒</div>
              <h3 class="card__title">Confined Space Entry</h3>
              <p class="card__description">
                Hazard recognition, entry procedures, atmospheric testing, rescue planning, and competent person 
                designation for confined space operations.
              </p>
            </div>
            
            <div class="card scroll-animate">
              <div class="card__icon">⚠️</div>
              <h3 class="card__title">Hazard Recognition</h3>
              <p class="card__description">
                Identifying physical, chemical, biological, and ergonomic hazards in the workplace. Risk assessment 
                and control hierarchy implementation.
              </p>
            </div>
            
            <div class="card scroll-animate">
              <div class="card__icon">🎯</div>
              <h3 class="card__title">Safety Leadership</h3>
              <p class="card__description">
                Building safety culture, incident investigation, effective communication, and leading safety meetings 
                for supervisors and managers.
              </p>
            </div>
            
            <div class="card scroll-animate">
              <div class="card__icon">🔧</div>
              <h3 class="card__title">Custom Training</h3>
              <p class="card__description">
                Tailored training programs designed for your specific workplace hazards, procedures, and regulatory 
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- AISP Training -->
      <section class="section" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);">
        <div class="container">
          <div class="grid grid--2" style="align-items: start; gap: var(--space-3xl);">
            <!-- AISP Branding -->
            <div class="scroll-animate" style="text-align: center; padding: var(--space-xl);">
              <div style="display: inline-block; padding: var(--space-lg); background: rgba(255,255,255,0.05); border-radius: var(--radius-lg); backdrop-filter: blur(10px);">
                <img
                  src="/images/ATP%20LOGO%20American%20Institute%20of%20Safety%20Professionals%20(1).png"
                  alt="AISP Authorized Training Provider"
                  style="max-width: 280px; width: 100%; height: auto; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));"
                >
              </div>
              <div style="margin-top: var(--space-xl); padding: var(--space-md); background: var(--color-accent); border-radius: var(--radius-md); box-shadow: 0 4px 12px rgba(90, 122, 77, 0.4);">
                <div style="font-weight: var(--font-weight-bold); font-size: var(--font-size-sm); letter-spacing: 0.5px; color: var(--color-text-white);">
                  AUTHORIZED TRAINING PROVIDER
                </div>
              </div>
            </div>

            <!-- Course Information -->
            <div class="scroll-animate">
              <h2 style="margin-bottom: var(--space-sm); color: var(--color-text-white);">American Institute of Safety Professionals</h2>
              <p style="color: var(--color-bg-lighter); font-size: var(--font-size-lg); line-height: var(--line-height-relaxed); margin-bottom: var(--space-xl);">
                As an Authorized Training Provider, we deliver official AISP programs with experienced instructors.
              </p>
              
              <h3 style="color: var(--color-accent); margin-bottom: var(--space-md); font-size: var(--font-size-xl);">Available Courses</h3>
              <div style="background: var(--color-primary-light); border-radius: var(--radius-md); padding: var(--space-lg); margin-bottom: var(--space-xl); border: 1px solid rgba(90, 122, 77, 0.3);">
                <ul style="line-height: 2; margin: 0; color: var(--color-text-white);">
                  <li style="margin-bottom: var(--space-sm);">
                    <strong>AISP 30-Hour</strong> General Industry Safety &amp; Health Training
                  </li>
                  <li style="margin-bottom: var(--space-sm);">
                    <strong>AISP 30-Hour</strong> Construction Industry Safety &amp; Health Training
                  </li>
                  <li>
                    <strong>AISP 48-Hour</strong> Occupational Safety and Health Manager for General Industry
                  </li>
                </ul>
              </div>
              
              <div style="background: rgba(90, 122, 77, 0.15); border-radius: var(--radius-md); padding: var(--space-lg); border: 1px solid var(--color-accent);">
                <h4 style="color: var(--color-accent); margin-bottom: var(--space-sm); display: flex; align-items: center; gap: var(--space-sm);">
                  <span style="font-size: 1.5em;">✓</span> Credential Verification
                </h4>
                <p style="color: var(--color-bg-lighter); margin-bottom: var(--space-md);">
                  All course completions can be verified through the official AISP student verification portal.
                </p>
                <a href="https://amiosp.com/student-verifications" target="_blank" class="btn btn-primary">
                  Verify Credentials →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Benefits -->
      <section class="section">
        <div class="container">
          <div class="text-center mb-2xl">
            <h2 class="scroll-animate">Benefits of Professional Training</h2>
          </div>
          
          <div class="grid grid--2">
            <div class="scroll-animate">
              <div class="card" style="border-left: 4px solid var(--color-accent);">
                <h3 style="color: var(--color-accent);">✓ Regulatory Compliance</h3>
                <p>
                  Supports organizations across Alberta, British Columbia, and Saskatchewan by ensuring workers meet applicable regulatory training requirements under WorkSafeBC, Alberta OHS, and Saskatchewan OHS legislation, while maintaining clear, defensible documentation of training to support inspections, audits, and due-diligence compliance.
                </p>
              </div>
            </div>
            
            <div class="scroll-animate">
              <div class="card" style="border-left: 4px solid var(--color-accent);">
                <h3 style="color: var(--color-accent);">✓ Reduced Incidents</h3>
                <p>
                  Well-trained workers recognize and control hazards more effectively, leading to fewer injuries, 
                  illnesses, and near-misses.
                </p>
              </div>
            </div>
            
            <div class="scroll-animate">
              <div class="card" style="border-left: 4px solid var(--color-accent);">
                <h3 style="color: var(--color-accent);">✓ Improved Culture</h3>
                <p>
                  Training demonstrates organizational commitment to safety, fostering a culture where workers 
                  actively participate in hazard control.
                </p>
              </div>
            </div>
            
            <div class="scroll-animate">
              <div class="card" style="border-left: 4px solid var(--color-accent);">
                <h3 style="color: var(--color-accent);">✓ Cost Savings</h3>
                <p>
                  Prevent costly incidents, reduce insurance premiums, avoid regulatory fines, and minimize 
                  productivity losses from preventable injuries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- CTA Section -->
      <section class="section cta-section">
        <div class="container">
          <div class="scroll-animate">
            <h2 class="cta-section__title">Schedule Training for Your Team</h2>
            <p class="cta-section__text">
              Contact us to discuss your training needs and receive a customized training plan and quote.
            </p>
            <a href="#/contact" class="btn btn-primary btn-large">Inquire About Training</a>
          </div>
        </div>
      </section>
    </div>
  `;
}
