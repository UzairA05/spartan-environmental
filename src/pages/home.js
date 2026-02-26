// Home page

export function renderHomePage() {
    return `
    <div class="page page-home page-transition">
      <!-- Hero Section -->
      <section class="hero" style="background-image: url('/images/hero-industrial.jpg');">
        <div class="container">
          <div class="hero__content scroll-animate">
            <h1 class="hero__title">Protecting Workplaces, Empowering Businesses</h1>
            <p class="hero__subtitle">
              Expert environmental health and workplace safety consulting.
              Ensuring regulatory compliance and safeguarding your most valuable asset—your people.
            </p>
            <div class="hero__actions">
              <a href="#/contact" class="btn btn-primary btn-large">Request a Consultation</a>
              <a href="#/services" class="btn btn-secondary btn-large">View Our Services</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Authority Bar -->
      <section class="section section--alt authority-bar">
        <div class="container">
          <div class="authority-intro grid grid--2 scroll-animate">
            <div>
              <h2 class="authority-intro__title">Certified Industrial Hygienist – Mould, Asbestos &amp; Indoor Air Quality Investigations in Calgary</h2>
              <p class="authority-intro__subtitle">
                Independent environmental testing and court-defensible reports for homeowners, property managers, lawyers, and businesses across Alberta.
              </p>
            </div>

            <div class="authority-intro__profile">
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

          <div class="text-center mb-xl">
            <h2 class="scroll-animate">Professional Credentials &amp; Accountability</h2>
            <p class="authority-bar__description scroll-animate">
              Spartan Environmental Consulting provides independent assessments following recognized professional standards. We do not perform remediation, ensuring unbiased results.
            </p>
          </div>

          <ul class="authority-bar__list scroll-animate">
            <li>Certified Industrial Hygienist (CIH)</li>
            <li>Fully Insured Consulting Services</li>
            <li>Independent — No Conflict of Interest</li>
            <li>Accredited Laboratory Analysis</li>
            <li>Standards-Based Sampling Methods</li>
            <li>Serving Residential &amp; Commercial Clients</li>
            <li>BBB A+ Accredited Business (when available)</li>
          </ul>

          <p class="authority-bar__caption scroll-animate">
            Independent &amp; Certified – Trusted by Homeowners and Businesses Across Calgary
          </p>

          <div class="authority-bar__badges scroll-animate" aria-label="Professional badges and trust indicators">
            <div class="authority-badge">
              <img src="/images/CIH.png" alt="Certified Industrial Hygienist badge">
            </div>
            <div class="authority-badge">
              <img src="/images/TrustedPros.png" alt="TrustedPros badge">
            </div>
            <div class="authority-badge authority-badge--houzz">
              <table style="width: 96px" cellpadding="0" cellspacing="0"><tr><td><a href="https://pro.houzz.com/pro/webuser-993165656/spartan-environmental-consulting-ltd" target="_blank" rel="noopener noreferrer"><img src="https://st.hzcdn.com/static/badge96_96@2x.png" alt="Spartan Environmental Consulting Ltd in Calgary, Alberta, Canada on Houzz" width="96" height="96" border="0" /></a></td></tr></table>
            </div>
            <div class="authority-badge">
              <img src="/images/CRMI.png" alt="Certified Residential Mold Inspector badge">
            </div>
            <div class="authority-badge authority-badge--text" aria-label="BBB A+ Accredited Business">
              <span>BBB A+</span>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Trust & Credibility Section -->
      <section class="section">
        <div class="container">
          <div class="grid grid--4 industries-grid">
            <div class="icon-box scroll-animate">
              <div class="icon-box__icon">✓</div>
              <h3 class="icon-box__title">Regulatory Compliance</h3>
              <p class="icon-box__text">
                Expert knowledge of WorkSafeBC, WHMIS, and environmental regulations
              </p>
            </div>
            
            <div class="icon-box scroll-animate">
              <div class="icon-box__icon">🎯</div>
              <h3 class="icon-box__title">Industry Expertise</h3>
              <p class="icon-box__text">
                Decades of experience across manufacturing, construction, and industrial sectors
              </p>
            </div>
            
            <div class="icon-box scroll-animate">
              <div class="icon-box__icon">📊</div>
              <h3 class="icon-box__title">Professional Assessments</h3>
              <p class="icon-box__text">
                Comprehensive testing and analysis using state-of-the-art equipment
              </p>
            </div>
            
            <div class="icon-box scroll-animate">
              <div class="icon-box__icon">🤝</div>
              <h3 class="icon-box__title">Trusted Partner</h3>
              <p class="icon-box__text">
                Relied upon by businesses throughout Western Canada for excellence
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Services Overview -->
      <section class="section section--alt">
        <div class="container">
          <div class="text-center mb-2xl">
            <h2 class="scroll-animate">Our Core Services</h2>
            <p class="scroll-animate" style="max-width: 700px; margin: 0 auto; color: var(--color-text-secondary); font-size: var(--font-size-lg);">
              Comprehensive environmental health and safety consulting tailored to your industry's unique challenges
            </p>
          </div>
          
          <div class="grid grid--3">
            <div class="service-card scroll-animate">
              <div class="service-card__icon">⚠️</div>
              <h3 class="service-card__title">Asbestos Testing</h3>
              <p class="service-card__description">
                Comprehensive testing, assessment, and management plans to ensure workplace safety and compliance.
              </p>
              <a href="#/service/asbestos" class="card__link">Learn More</a>
            </div>
            
            <div class="service-card scroll-animate">
              <div class="service-card__icon">😷</div>
              <h3 class="service-card__title">Respirator Fit Testing</h3>
              <p class="service-card__description">
                Quantitative and qualitative testing to ensure proper respiratory protection for your workers.
              </p>
              <a href="#/service/respirator-fit-testing" class="card__link">Learn More</a>
            </div>
            
            <div class="service-card scroll-animate">
              <div class="service-card__icon">🔊</div>
              <h3 class="service-card__title">Noise Exposure Assessments</h3>
              <p class="service-card__description">
                Professional noise monitoring and hearing conservation program development.
              </p>
              <a href="#/service/noise-exposure" class="card__link">Learn More</a>
            </div>
            
            <div class="service-card scroll-animate">
              <div class="service-card__icon">🏭</div>
              <h3 class="service-card__title">Indoor Air Quality</h3>
              <p class="service-card__description">
                Comprehensive investigations to identify and resolve air quality concerns.
              </p>
              <a href="#/service/indoor-air-quality" class="card__link">Learn More</a>
            </div>
            
            <div class="service-card scroll-animate">
              <div class="service-card__icon">🔒</div>
              <h3 class="service-card__title">Confined Space Hazard Assessment</h3>
              <p class="service-card__description">
                Detailed hazard assessments and safe entry procedures for confined spaces.
              </p>
              <a href="#/service/confined-space" class="card__link">Learn More</a>
            </div>
            
            <div class="service-card scroll-animate">
              <div class="service-card__icon">📋</div>
              <h3 class="service-card__title">Exposure Control Plans</h3>
              <p class="service-card__description">
                Customized plans for chemical, biological, and physical hazards compliance.
              </p>
              <a href="#/service/exposure-control-plans" class="card__link">Learn More</a>
            </div>
          </div>
          
          <div class="text-center mt-2xl scroll-animate">
            <a href="#/services" class="btn btn-outline btn-large">View All 15 Services</a>
          </div>
        </div>
      </section>
      
      <!-- Why Choose Spartan -->
      <section class="section">
        <div class="container">
          <div class="grid grid--2" style="align-items: center;">
            <div class="scroll-animate">
              <h2>Why Choose Spartan Environmental Consulting?</h2>
              <p style="font-size: var(--font-size-lg); margin-bottom: var(--space-xl);">
                We bring unparalleled expertise, technical precision, and a commitment to excellence 
                that protects both your people and your business.
              </p>
              
              <div class="mb-lg">
                <h4 style="color: var(--color-accent); margin-bottom: var(--space-sm);">
                  ✓ Experience You Can Trust
                </h4>
                <p>
                  Our team of certified professionals brings decades of combined experience in 
                  occupational hygiene, workplace safety, and environmental consulting.
                </p>
              </div>
              
              <div class="mb-lg">
                <h4 style="color: var(--color-accent); margin-bottom: var(--space-sm);">
                  ✓ Accuracy & Precision
                </h4>
                <p>
                  We use state-of-the-art equipment and accredited laboratory analysis to deliver 
                  reliable, defensible results every time.
                </p>
              </div>
              
              <div class="mb-lg">
                <h4 style="color: var(--color-accent); margin-bottom: var(--space-sm);">
                  ✓ Compliance Knowledge
                </h4>
                <p>
                  Stay ahead of evolving regulations with our deep understanding of WorkSafeBC, 
                  WHMIS, and environmental legislation.
                </p>
              </div>
              
              <div>
                <h4 style="color: var(--color-accent); margin-bottom: var(--space-sm);">
                  ✓ Client-Focused Service
                </h4>
                <p>
                  We deliver clear, actionable reports and practical recommendations that fit 
                  your operational realities and budget.
                </p>
              </div>
            </div>
            
            <div class="scroll-animate" style="text-align: center;">
              <img 
                src="/images/expertise-illustration.jpg" 
                alt="Safety professional conducting workplace assessment" 
                style="border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);"
              >
            </div>
          </div>
        </div>
      </section>
      
      <!-- Industries Served -->
      <section class="section section--alt">
        <div class="container">
          <div class="text-center mb-2xl">
            <h2 class="scroll-animate">Industries We Serve</h2>
            <p class="scroll-animate" style="max-width: 600px; margin: 0 auto; color: var(--color-text-secondary); font-size: var(--font-size-lg);">
              Trusted by organizations across diverse sectors
            </p>
          </div>
          
          <div class="grid grid--4 industries-grid">
            <div class="icon-box scroll-animate">
              <div class="icon-box__icon">🏗️</div>
              <h3 class="icon-box__title">Construction</h3>
              <p class="icon-box__text">
                Commercial, residential, and industrial construction projects
              </p>
            </div>
            
            <div class="icon-box scroll-animate">
              <div class="icon-box__icon">🏭</div>
              <h3 class="icon-box__title">Manufacturing</h3>
              <p class="icon-box__text">
                Metal fabrication, food processing, and industrial production
              </p>
            </div>
            
            <div class="icon-box scroll-animate">
              <div class="icon-box__icon">⚕️</div>
              <h3 class="icon-box__title">Healthcare</h3>
              <p class="icon-box__text">
                Hospitals, clinics, laboratories, and long-term care facilities
              </p>
            </div>
            
            <div class="icon-box scroll-animate">
              <div class="icon-box__icon">🏢</div>
              <h3 class="icon-box__title">Commercial Facilities</h3>
              <p class="icon-box__text">
                Office buildings, retail, and property management
              </p>
            </div>
            
            <div class="icon-box scroll-animate">
              <div class="icon-box__icon">⚙️</div>
              <h3 class="icon-box__title">Industrial Operations</h3>
              <p class="icon-box__text">
                Refineries, pulp & paper, mining, and heavy industry
              </p>
            </div>
            
            <div class="icon-box scroll-animate">
              <div class="icon-box__icon">🎓</div>
              <h3 class="icon-box__title">Education</h3>
              <p class="icon-box__text">
                Universities, colleges, schools, and research institutions
              </p>
            </div>
            
            <div class="icon-box scroll-animate">
              <div class="icon-box__icon">🔧</div>
              <h3 class="icon-box__title">Utilities</h3>
              <p class="icon-box__text">
                Water treatment, power generation, and infrastructure
              </p>
            </div>
            
            <div class="icon-box scroll-animate">
              <div class="icon-box__icon">🌲</div>
              <h3 class="icon-box__title">Forestry & Mining</h3>
              <p class="icon-box__text">
                Natural resource extraction and processing operations
              </p>
            </div>

            <div class="icon-box scroll-animate">
              <div class="icon-box__icon">🛢️</div>
              <h3 class="icon-box__title">Oil & Gas</h3>
              <p class="icon-box__text">
                Upstream, midstream, and downstream operations
              </p>
            </div>

            <div class="icon-box scroll-animate">
              <div class="icon-box__icon">⚡</div>
              <h3 class="icon-box__title">Energy</h3>
              <p class="icon-box__text">
                Power generation, renewables, and energy infrastructure
              </p>
            </div>

            <div class="icon-box scroll-animate">
              <div class="icon-box__icon">🏛️</div>
              <h3 class="icon-box__title">Government</h3>
              <p class="icon-box__text">
                Public sector facilities and regulatory agencies
              </p>
            </div>

            <div class="icon-box scroll-animate">
              <div class="icon-box__icon">💻</div>
              <h3 class="icon-box__title">Technology</h3>
              <p class="icon-box__text">
                Data centers, labs, and tech campuses
              </p>
            </div>

            <div class="icon-box scroll-animate">
              <div class="icon-box__icon">🏘️</div>
              <h3 class="icon-box__title">Real Estate</h3>
              <p class="icon-box__text">
                Property owners, developers, and REITs
              </p>
            </div>

            <div class="icon-box scroll-animate">
              <div class="icon-box__icon">🌾</div>
              <h3 class="icon-box__title">Agriculture</h3>
              <p class="icon-box__text">
                Farming operations, processing, and agri‑business
              </p>
            </div>

            <div class="icon-box scroll-animate">
              <div class="icon-box__icon">⛏️</div>
              <h3 class="icon-box__title">Mining</h3>
              <p class="icon-box__text">
                Exploration, extraction, and processing sites
              </p>
            </div>

            <div class="icon-box scroll-animate">
              <div class="icon-box__icon">🛡️</div>
              <h3 class="icon-box__title">Insurance</h3>
              <p class="icon-box__text">
                Risk management, claims, and loss prevention
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- CTA Section -->
      <section class="section cta-section">
        <div class="container">
          <div class="scroll-animate">
            <h2 class="cta-section__title">Ready to Protect Your Workplace?</h2>
            <p class="cta-section__text">
              Connect with our team to discuss your environmental health and safety needs. 
              We're here to help you achieve compliance, reduce risk, and create safer workplaces.
            </p>
            <a href="#/contact" class="btn btn-primary btn-large pulse">Get Started Today</a>
          </div>
        </div>
      </section>
    </div>
  `;
}
