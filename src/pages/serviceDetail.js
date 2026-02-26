// Service detail page template

import { services } from '../data/services.js';

export function renderServiceDetailPage(serviceId) {
    const service = services.find(s => s.id === serviceId);

    if (!service) {
        return `
      <div class="page page-transition">
        <div class="section">
          <div class="container text-center">
            <h1>Service Not Found</h1>
            <p>The service you're looking for doesn't exist.</p>
            <a href="#/services" class="btn btn-primary">View All Services</a>
          </div>
        </div>
      </div>
    `;
    }

    let overviewHtml;

    if (service.id === 'asbestos') {
        overviewHtml = `
            <div class="service-overview">
              <h2>Asbestos Consulting &amp; Testing Services — Spartan Environmental Consulting Ltd.</h2>
              <p class="service-overview__lead">Professional Asbestos Consulting, Testing, and Air Monitoring in Calgary</p>

              <p class="service-overview__text">
                Asbestos is a hazardous material that was commonly used in building products for its durability and heat resistance. When materials containing asbestos are disturbed — during renovation, demolition, maintenance, or aging — microscopic fibres can become airborne and pose serious health risks if inhaled.
              </p>
              <p class="service-overview__text">
                At Spartan Environmental Consulting, we provide comprehensive asbestos assessments that help homeowners, property managers, businesses, and legal or insurance professionals understand and manage asbestos risks safely and effectively.
              </p>

              <div class="card service-overview__callout">
                <h3 class="service-overview__subheading">Why Professional Asbestos Assessment Matters</h3>
                <p class="service-overview__text">
                  Asbestos may be present in many building materials, especially in structures built before the 1980s. This includes ceiling tiles, insulation, floor coverings, wall finishes, pipe insulation, and textured surfaces.
                </p>
                <p class="service-overview__text">Professional asbestos assessment is critical to:</p>
                <ul class="service-overview__list">
                  <li>Identify materials containing asbestos</li>
                  <li>Measure airborne fibre concentrations</li>
                  <li>Protect the health of occupants and workers</li>
                  <li>Ensure compliance with legal, insurance, and regulatory requirements</li>
                  <li>Provide defensible documentation for property transactions or litigation</li>
                </ul>
              </div>

              <h3 class="service-overview__subheading" style="margin-top: var(--space-2xl);">Our Asbestos Services</h3>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">1. Asbestos Inspection &amp; Survey</h4>
                <p class="service-overview__text">
                  We perform thorough site inspections to identify and document materials that may contain asbestos. Inspections include visual assessment, risk evaluation, and strategic sample collection. Findings are compiled into a clear, professional report.
                </p>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  Applications include: pre-renovation surveys, pre-demolition surveys, real estate due diligence, or assessment following water or fire damage.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">2. Bulk Material Sampling</h4>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  Representative samples of suspected asbestos-containing materials are collected safely and sent to accredited laboratories for analysis. Materials may include floor tiles, pipe insulation, ceiling sprays, plaster, adhesives, and textured surfaces. Results are scientifically validated to ensure accuracy.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">3. Asbestos Air Monitoring</h4>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  Air monitoring is conducted to quantify asbestos fibres in the air before, during, and after work that may disturb materials. This includes baseline measurements and post-abatement clearance testing. Monitoring protects occupants and workers and ensures spaces are safe for re-occupancy.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">4. Post-Abatement Evaluation</h4>
                <p class="service-overview__text">After asbestos handling or removal, we provide:</p>
                <ul class="service-overview__list">
                  <li>Final visual inspection</li>
                  <li>Clearance air testing</li>
                  <li>Formal clearance report</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  This confirms whether the area is safe to re-occupy and provides documentation suitable for insurance, regulatory, or legal purposes.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">5. Risk Interpretation &amp; Reporting</h4>
                <p class="service-overview__text">All findings are interpreted by a Certified Industrial Hygienist (CIH) and presented in clear, actionable reports. Each report includes:</p>
                <ul class="service-overview__list">
                  <li>Inspection and laboratory results</li>
                  <li>Professional interpretation of exposure risks</li>
                  <li>Recommendations for next steps</li>
                  <li>Documentation suitable for insurance, regulatory, or legal use</li>
                </ul>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Who Needs Asbestos Assessment?</h3>
                <p class="service-overview__text">Professional asbestos consulting is recommended for:</p>
                <ul class="service-overview__list service-overview__list--columns">
                  <li>Homeowners planning renovations or maintenance</li>
                  <li>Property managers and landlords assessing building safety</li>
                  <li>Businesses addressing regulatory compliance</li>
                  <li>Legal or insurance professionals requiring independent, defensible reports</li>
                  <li>Real estate transactions involving older buildings</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  Our services are tailored to both residential and commercial environments, providing practical and reliable recommendations for every client.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Our Approach &amp; Professional Standards</h3>
                <p class="service-overview__text">At Spartan Environmental Consulting, all asbestos assessments are conducted by trained industrial hygiene professionals following recognized professional standards.</p>
                <p class="service-overview__text">We emphasize:</p>
                <ul class="service-overview__list">
                  <li>Independent evaluations — we do not perform remediation, ensuring unbiased results</li>
                  <li>Accredited laboratory analysis for reliable, defensible results</li>
                  <li>Clear, understandable reporting by a Certified Industrial Hygienist</li>
                  <li>Guidance throughout the assessment process</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  Our goal is to provide accurate, actionable, and trustworthy information that clients can rely on for health, safety, compliance, and decision-making.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">What You Can Expect During an Asbestos Assessment</h3>
                <div class="service-overview__steps">
                  <div class="service-overview__step"><strong>Initial Consultation and Site Walkthrough:</strong> Discuss concerns and review building history.</div>
                  <div class="service-overview__step"><strong>Targeted Inspection and Sampling:</strong> Identify suspect materials and safely collect samples as needed.</div>
                  <div class="service-overview__step"><strong>Laboratory Analysis:</strong> Accredited labs test all samples using recognized methods.</div>
                  <div class="service-overview__step"><strong>Detailed Report and Consultation:</strong> Receive clear findings, professional interpretation, and next steps.</div>
                  <div class="service-overview__step"><strong>Ongoing Support:</strong> Guidance on interpreting results and planning further actions if necessary.</div>
                </div>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Frequently Asked Questions</h3>
                <div class="service-overview__faq">
                  <div class="service-overview__faq-item"><strong>Do I need asbestos testing before renovation?</strong><p>Yes — if materials suspected of containing asbestos will be disturbed, testing ensures safety and compliance.</p></div>
                  <div class="service-overview__faq-item"><strong>How reliable are your results?</strong><p>All procedures follow strict professional standards, and all interpretations are completed by a Certified Industrial Hygienist.</p></div>
                  <div class="service-overview__faq-item"><strong>Can testing be done while people are present?</strong><p>Yes — our methods are designed to ensure safety and minimize disruption during the assessment.</p></div>
                  <div class="service-overview__faq-item"><strong>How long does testing take?</strong><p>Most inspections can be completed in a few hours, with lab results and reports delivered promptly after analysis.</p></div>
                  <div class="service-overview__faq-item"><strong>Will the report help me meet insurance or regulatory requirements?</strong><p>Absolutely — our reports are written to meet industry standards and are suitable for regulatory, legal, and insurance purposes.</p></div>
                </div>
              </div>

              <div class="card service-overview__callout" style="margin-top: var(--space-2xl);">
                <h3 class="service-overview__subheading">Protect Health, Safety, and Your Property</h3>
                <p class="service-overview__text">
                  Whether you are a homeowner, property manager, business, or professional advisor, Spartan Environmental Consulting provides dependable asbestos consulting services to protect occupants and properties. Our professional assessments remove uncertainty and give you confidence in next steps.
                </p>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  <strong>Contact Spartan Environmental Consulting Today:</strong> Speak directly with a Certified Industrial Hygienist about your property or planned project. We’ll help determine whether asbestos testing is necessary and guide you through a safe, professional, and scientifically validated process.
                </p>
              </div>
            </div>
          `;
    } else if (service.id === 'respirator-fit-testing') {
        overviewHtml = `
            <div class="service-overview">
              <h2>Respirator Fit Testing Services — Spartan Environmental Consulting Ltd.</h2>
              <p class="service-overview__lead">Professional Respirator Fit Testing in Calgary &amp; Alberta</p>

              <p class="service-overview__text">
                Respirator fit testing is a critical component of any respiratory protection program. A respirator that does not fit properly cannot protect the wearer, even if it is the correct type and quality. Spartan Environmental Consulting provides reliable, independent respirator fit testing services led by qualified professionals to ensure your employees are safe, compliant, and properly protected against airborne hazards.
              </p>
              <p class="service-overview__text">
                We perform fit testing in accordance with recognized standards and provide clear documentation suitable for workplace safety programs and regulatory requirements.
              </p>

              <div class="card service-overview__callout">
                <h3 class="service-overview__subheading">Why Respirator Fit Testing Matters</h3>
                <p class="service-overview__text">
                  Respirators are used to protect workers from airborne hazards such as dust, fumes, vapours, biological agents, and other contaminants. However, a respirator must fit the individual wearer’s face correctly to be effective. Improper fit can lead to:
                </p>
                <ul class="service-overview__list">
                  <li>Inward leakage of hazardous air contaminants</li>
                  <li>Reduced respiratory protection</li>
                  <li>Increased risk of exposure and health effects</li>
                  <li>Non-compliance with occupational health and safety regulations</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  Professional respirator fit testing ensures that the selected respirator forms an adequate seal with the wearer’s face — an essential step in protecting workers and meeting employer obligations.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">What is Respirator Fit Testing?</h3>
                <p class="service-overview__text">
                  Respirator fit testing measures how well a specific make, model, and size of respirator fits an individual. The goal is to determine that the respirator forms a proper seal to prevent contaminated air from bypassing the mask and entering the breathing zone.
                </p>
                <p class="service-overview__text">There are two main recognized methods of fit testing:</p>
                <ul class="service-overview__list">
                  <li><strong>Qualitative Fit Testing (QLFT):</strong> A pass/fail test that uses sensory detection of a challenge agent (e.g., taste or smell) to determine whether leakage exists.</li>
                  <li><strong>Quantitative Fit Testing (QNFT):</strong> A numerical measurement that uses instrumentation to calculate a fit factor and provides a precise assessment of respirator fit.</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  Spartan offers both qualitative and quantitative fit testing based on your program requirements and regulatory standards.
                </p>
              </div>

              <h3 class="service-overview__subheading" style="margin-top: var(--space-2xl);">Our Respirator Fit Testing Services</h3>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">1. On-Site Fit Testing Services in Calgary</h4>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  We come to your workplace or designated facility to perform respirator fit testing on employees. This minimizes downtime and ensures compliance without disrupting operations.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">2. Qualitative and Quantitative Fit Testing</h4>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  We conduct fit testing using accepted methods to determine the correct respirator fit for each individual, depending on the respirator type and program needs.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">3. Comprehensive Fit Test Documentation</h4>
                <p class="service-overview__text">After testing, we provide clear, professional documentation that includes:</p>
                <ul class="service-overview__list">
                  <li>Employee name and ID</li>
                  <li>Respirator make, model, and size tested</li>
                  <li>Test method used (qualitative or quantitative)</li>
                  <li>Test results and fit factors (where applicable)</li>
                  <li>Date of testing and tester identification</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  This documentation can be retained in your safety program files and used as evidence of compliance.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">4. Respiratory Protection Program Support</h4>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  Beyond fit testing, we can help align your respirator use with your written respiratory protection program, and provide guidance on reuse, storage, and selection of appropriate respirators.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Who Needs Respirator Fit Testing?</h3>
                <p class="service-overview__text">Respirator fit testing is recommended for:</p>
                <ul class="service-overview__list service-overview__list--columns">
                  <li>Employers with workers required to use tight-fitting respirators</li>
                  <li>Workers involved in construction, maintenance, industrial, or environmental tasks</li>
                  <li>Occupational settings with airborne hazards (dust, vapours, biological contaminants, chemical exposures)</li>
                  <li>Safety and compliance officers responsible for workplace health programs</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  Fit testing is essential for workplaces that follow occupational health and safety regulations and want to ensure effective respiratory protection.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Our Approach &amp; Professional Standards</h3>
                <p class="service-overview__text">At Spartan Environmental Consulting, our respirator fit testing services follow recognized standards and best practices for safety and compliance. The process emphasizes:</p>
                <ul class="service-overview__list">
                  <li>Professional administration by trained technicians</li>
                  <li>Use of calibrated and accepted testing protocols</li>
                  <li>Independent evaluation and documentation</li>
                  <li>Clear interpretation and reporting</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  We work with your team to ensure that your respiratory protection components fit properly, reducing worker risk and supporting compliance with workplace health and safety requirements.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">What to Expect During Respirator Fit Testing</h3>
                <div class="service-overview__steps">
                  <div class="service-overview__step"><strong>Scheduling and Preparation:</strong> We confirm your requirements and ensure employees are ready for testing (e.g., clean shaven where required).</div>
                  <div class="service-overview__step"><strong>Selection of Test Method:</strong> Based on your safety program and respirator type, we use either qualitative or quantitative fit testing.</div>
                  <div class="service-overview__step"><strong>Fit Testing:</strong> Each employee undergoes individual fit testing with selected respirator models and sizes.</div>
                  <div class="service-overview__step"><strong>Documentation and Reporting:</strong> We provide professional reports with test results, notes, and documentation for your safety program records.</div>
                  <div class="service-overview__step"><strong>Program Guidance:</strong> Optional additional support to integrate fit test results into your respiratory protection program.</div>
                </div>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Frequently Asked Questions</h3>
                <div class="service-overview__faq">
                  <div class="service-overview__faq-item"><strong>Is fit testing required by law?</strong><p>Yes — in many occupational safety regulations, fit testing is required for employees who use tight-fitting respirators as part of their respiratory protection program.</p></div>
                  <div class="service-overview__faq-item"><strong>How often should fit testing be performed?</strong><p>Fit testing is typically required annually or whenever an individual’s facial features change or a different respirator model is used.</p></div>
                  <div class="service-overview__faq-item"><strong>What if an employee cannot pass a fit test?</strong><p>We work with you to try alternate respirator models, sizes, and configurations to achieve acceptable fit.</p></div>
                  <div class="service-overview__faq-item"><strong>Does fit testing take long?</strong><p>Individual testing usually takes a short period, but scheduling varies with the number of employees and test method.</p></div>
                </div>
              </div>

              <div class="card service-overview__callout" style="margin-top: var(--space-2xl);">
                <h3 class="service-overview__subheading">Protect Your Workers with Professional Fit Testing</h3>
                <p class="service-overview__text">
                  Effective respiratory protection begins with proper fit. Spartan Environmental Consulting provides professional respirator fit testing services designed to protect workers, meet compliance needs, and ensure your respiratory protection program functions as intended.
                </p>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  <strong>Contact Us Today:</strong> Speak with a Certified Industrial Hygienist to schedule respirator fit testing for your team. We will help you establish reliable fit testing practices and integrate them into your workplace safety program.
                </p>
              </div>
            </div>
          `;
    } else if (service.id === 'fume-hood-assessment') {
        overviewHtml = `
            <div class="service-overview">
              <h2>Laboratory Fume Hood Assessment Services — Spartan Environmental Consulting Ltd.</h2>
              <p class="service-overview__lead">Professional Fume Hood Performance Testing &amp; Evaluation in Calgary &amp; Alberta</p>

              <p class="service-overview__text">
                Fume hoods and ventilation systems are essential safety controls in laboratories, research facilities, industrial spaces, and educational institutions. When fume hoods are not performing properly, harmful vapours, gases, and particulate contaminants can escape into the breathing zone, putting workers and occupants at risk.
              </p>
              <p class="service-overview__text">
                Spartan Environmental Consulting provides comprehensive fume hood assessments, airflow performance testing, and laboratory ventilation evaluation services in Calgary and across Alberta. Our assessments are performed by experienced industrial hygiene professionals, and the results support workplace safety, compliance, and risk reduction.
              </p>

              <div class="card service-overview__callout">
                <h3 class="service-overview__subheading">Why Fume Hood Assessment Matters</h3>
                <p class="service-overview__text">Fume hoods are designed to capture and remove hazardous airborne contaminants at the source. However, improper airflow, poor maintenance, or incorrect usage can reduce their effectiveness. Key reasons for professional fume hood assessment include:</p>
                <ul class="service-overview__list">
                  <li>Protecting workers from chemical vapours and particulates</li>
                  <li>Verifying ventilation performance and containment effectiveness</li>
                  <li>Supporting health and safety compliance programs</li>
                  <li>Identifying maintenance or design deficiencies before incidents occur</li>
                  <li>Reducing liability and preventing exposure</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  Without proper assessment, a fume hood may give a false sense of security, even when hazards are present.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">What We Assess</h3>
                <ul class="service-overview__list">
                  <li><strong>Containment Effectiveness:</strong> How well the fume hood confines and controls airflow to prevent escape of contaminants.</li>
                  <li><strong>Face Velocity and Airflow Patterns:</strong> Measurement of air movement across the hood opening to ensure design specifications are met.</li>
                  <li><strong>Tracer Gas or Smoke Visualization:</strong> Evaluation of airflow behaviour using safe tracer methods.</li>
                  <li><strong>Work Practice Observation:</strong> Assessment of sash position, work placement, and operator habits.</li>
                  <li><strong>Documentation of Findings:</strong> Professional reporting of performance data and recommendations.</li>
                </ul>
              </div>

              <h3 class="service-overview__subheading" style="margin-top: var(--space-2xl);">Our Fume Hood Assessment Services</h3>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">1. Laboratory Fume Hood Performance Evaluation</h4>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  We conduct a full performance assessment of fume hoods to verify that they provide adequate containment and airflow consistent with safety expectations. This includes measurements of face velocity and observation of airflow patterns.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">2. Airflow &amp; Face Velocity Measurements</h4>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  Accurate measurement of airflow and face velocity ensures that hoods operate within recommended criteria. Proper airflow is critical to maintaining safe conditions for workers.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">3. Tracer Visualization Techniques</h4>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  We use tracer techniques — such as smoke testing — to visualize airflow and identify turbulence, improper capture, or leakage that might compromise containment.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">4. Work Practice &amp; Usage Review</h4>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  Assessment of how the hood is used in daily operations helps identify behavioural and procedural issues that may impact safety, such as sash positioning or improper placement of equipment inside the hood.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">5. Written Report with Recommendations</h4>
                <p class="service-overview__text">Every assessment includes a professional report that includes:</p>
                <ul class="service-overview__list">
                  <li>Observed performance data</li>
                  <li>Measurement results</li>
                  <li>Interpretation by an industrial hygiene professional</li>
                  <li>Recommended corrective actions</li>
                  <li>Suggested maintenance or training improvements</li>
                </ul>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Who Needs Fume Hood Assessment?</h3>
                <p class="service-overview__text">Fume hood assessment services are valuable for:</p>
                <ul class="service-overview__list service-overview__list--columns">
                  <li>Laboratory managers and safety officers</li>
                  <li>Universities and research institutions</li>
                  <li>Industrial process facilities</li>
                  <li>Healthcare and pharmaceutical settings</li>
                  <li>Environmental testing laboratories</li>
                  <li>Facilities with chemical handling or potential exposure risks</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  These services support internal safety programs, regulatory compliance, and proactive risk management, especially for facilities that rely on ventilation to control hazardous emissions.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Our Approach &amp; Professional Standards</h3>
                <p class="service-overview__text">Spartan Environmental Consulting conducts fume hood assessments using recognized industrial hygiene principles, calibrated measurement instruments, and professional data interpretation. Our approach includes:</p>
                <ul class="service-overview__list">
                  <li>Independent evaluation — objective performance verification</li>
                  <li>Scientific measurement — accurate airflow and velocity data</li>
                  <li>Professional interpretation — expert analysis by trained professionals</li>
                  <li>Clear reporting — understandable and actionable documentation</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  All assessments are performed with the health and safety of occupants in mind, and reports are suitable for internal risk communication, regulatory records, facility maintenance planning, or compliance documentation.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">What to Expect During a Fume Hood Assessment</h3>
                <div class="service-overview__steps">
                  <div class="service-overview__step"><strong>Initial Consultation &amp; Site Review:</strong> Discuss your facility, hood types, and specific concerns.</div>
                  <div class="service-overview__step"><strong>On-Site Evaluation:</strong> Our team conducts visual and performance assessments.</div>
                  <div class="service-overview__step"><strong>Airflow &amp; Containment Testing:</strong> We measure face velocity and airflow patterns.</div>
                  <div class="service-overview__step"><strong>Tracer Visualization Techniques:</strong> Methods such as smoke testing help confirm containment.</div>
                  <div class="service-overview__step"><strong>Report Delivery &amp; Interpretation:</strong> You receive a detailed report with findings and recommendations.</div>
                  <div class="service-overview__step"><strong>Follow-Up Guidance:</strong> Optional assistance implementing recommendations or re-testing after corrective actions.</div>
                </div>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Frequently Asked Questions</h3>
                <div class="service-overview__faq">
                  <div class="service-overview__faq-item"><strong>What is a fume hood assessment?</strong><p>A fume hood assessment evaluates whether a laboratory hood effectively removes hazardous vapours and gases from the work area.</p></div>
                  <div class="service-overview__faq-item"><strong>Why is face velocity important?</strong><p>Face velocity is the speed of air entering the hood — correct velocity helps ensure contaminants are captured and exhausted.</p></div>
                  <div class="service-overview__faq-item"><strong>Can an assessment identify maintenance issues?</strong><p>Yes — assessments often reveal airflow imbalances, sash issues, or other functional deficiencies.</p></div>
                  <div class="service-overview__faq-item"><strong>Is assessment required for compliance?</strong><p>Many safety and occupational health programs require routine ventilation performance evaluations to ensure worker protection.</p></div>
                </div>
              </div>

              <div class="card service-overview__callout" style="margin-top: var(--space-2xl);">
                <h3 class="service-overview__subheading">Protect Your Workers &amp; Improve Laboratory Safety</h3>
                <p class="service-overview__text">
                  Fume hood performance directly influences the safety of anyone working with hazardous chemicals or airborne contaminants. Professional assessment ensures that your engineering controls are functioning as intended, reducing risk and supporting compliance.
                </p>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  <strong>Contact Spartan Environmental Consulting Today:</strong> To schedule a fume hood assessment or learn more about how we can help improve safety and ventilation performance in your facility, speak with a Certified Industrial Hygienist who can explain the process and outcomes.
                </p>
              </div>
            </div>
          `;
    } else if (service.id === 'hazardous-substances') {
        overviewHtml = `
            <div class="service-overview">
              <h2>Chemical Control Solutions</h2>

              <p class="service-overview__text">
                Spartan Environmental Consulting provides expert support in managing hazardous substances in the workplace.
              </p>

              <p class="service-overview__text">
                Certified Industrial Hygiene Consultants develop tailored, cost-effective chemical management programs
                aligned with regulatory requirements and industry best practices.
              </p>

              <div class="card service-overview__callout">
                <h3 class="service-overview__subheading">Chemical and Materials Services</h3>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  Services include WHMIS-compliant identification, evaluation, and control of hazardous materials,
                  delivered in-class or online.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h3 class="service-overview__subheading">Services Offered</h3>

                <ul class="service-overview__list service-overview__list--columns">
                  <li>Labelling compliance</li>
                  <li>Chemical risk profiling</li>
                  <li>Risk assessments and control strategies</li>
                  <li>Worker training and induction</li>
                  <li>Air quality monitoring</li>
                  <li>Fire and flammable materials assessments</li>
                  <li>Emergency response planning</li>
                  <li>Ventilation assessments</li>
                  <li>Chemical registers and manifests</li>
                  <li>PPE guidance</li>
                  <li>Health surveillance</li>
                  <li>Audits and regulatory reporting</li>
                  <li>Placarding and signage compliance</li>
                  <li>Site-specific emergency plans</li>
                  <li>Chemical-specific training</li>
                </ul>

                <p class="service-overview__text" style="margin-top: var(--space-lg); margin-bottom: 0;">
                  All services comply with Canadian health and safety regulations, ensuring your workplace remains compliant, efficient, and safe.
                </p>
              </div>
            </div>
          `;
    } else if (service.id === 'radon-testing') {
        overviewHtml = `
            <div class="service-overview">
              <h2>Radon Testing Services — Spartan Environmental Consulting Ltd.</h2>
              <p class="service-overview__lead">Professional Radon Testing in Calgary &amp; Alberta</p>

              <p class="service-overview__text">
                Radon is a naturally occurring radioactive gas that can accumulate in indoor environments and pose serious long-term health risks. As an odorless, colorless gas, radon cannot be detected without proper testing. Spartan Environmental Consulting provides professional radon testing and assessment services to help homeowners, property managers, and businesses understand indoor radon levels and take action when necessary.
              </p>
              <p class="service-overview__text">
                Our radon testing services are conducted using scientifically sound methods and calibrated instruments, with results interpreted by trained professionals to provide clear, actionable recommendations.
              </p>

              <div class="card service-overview__callout" style="margin-top: var(--space-2xl);">
                <h3 class="service-overview__subheading">Why Radon Testing Matters</h3>
                <p class="service-overview__text">
                  Radon is produced by the natural breakdown of uranium in soil, rock, and water. It can migrate into buildings through foundation cracks, gaps around pipes, or other openings in the building envelope. Long-term exposure to elevated radon levels is a leading cause of lung cancer among non-smokers and a significant health concern across Canada.
                </p>
                <p class="service-overview__text">
                  Because radon cannot be seen, smelled, or tasted, testing is the only way to know if dangerous levels are present. Professional radon testing provides reliable measurements that can guide mitigation strategies to protect occupant health.
                </p>
              </div>

              <h3 class="service-overview__subheading" style="margin-top: var(--space-2xl);">Our Radon Testing Services</h3>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">1. Short-Term Radon Testing</h4>
                <p class="service-overview__text">
                  Short-term testing provides an initial indication of radon levels over a period of 2–7 days using calibrated radon monitors or detectors. This is a useful first step when evaluating current indoor air quality or screening a property for elevated radon.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">2. Long-Term Radon Testing</h4>
                <p class="service-overview__text">
                  Long-term testing (90 days or more) provides a more accurate picture of radon levels over seasonal variations. Long-term measurements are generally recommended for more reliable risk evaluation, especially in residential settings.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">3. Basement &amp; Lower Level Radon Assessment</h4>
                <p class="service-overview__text">
                  Radon levels are typically highest in lower levels of buildings, such as basements, crawlspaces, or ground floors. We conduct targeted testing in these areas to identify potential accumulation zones.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">4. Radon Test Result Interpretation &amp; Reporting</h4>
                <p class="service-overview__text">After testing, we provide clear, professional reporting that includes:</p>
                <ul class="service-overview__list">
                  <li>Measured radon concentration (Bq/m³)</li>
                  <li>Comparison to Health Canada guidelines</li>
                  <li>Explanation of potential health risks</li>
                  <li>Recommendations for mitigation if necessary</li>
                </ul>
                <p class="service-overview__text">
                  Reports are written to be easily understood by homeowners and professionals alike and can be used for real estate transactions, insurance documentation, or safety planning.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">5. Mitigation Guidance &amp; Next Steps</h4>
                <p class="service-overview__text">If measured radon levels are elevated, we provide guidance on mitigation options such as:</p>
                <ul class="service-overview__list">
                  <li>Sub-slab depressurization systems</li>
                  <li>Improved ventilation strategies</li>
                  <li>Sealing of foundation penetrations</li>
                  <li>Passive and active radon reduction methods</li>
                </ul>
                <p class="service-overview__text">
                  Our guidance helps you understand costs, timelines, and expected outcomes for mitigation efforts.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Who Needs Radon Testing?</h3>
                <p class="service-overview__text">Radon testing is recommended for:</p>
                <ul class="service-overview__list">
                  <li>Homeowners concerned about indoor air quality</li>
                  <li>Buyers and sellers in real estate transactions</li>
                  <li>Property managers of residential or commercial buildings</li>
                  <li>Schools, daycare centres, and multi-unit residential properties</li>
                  <li>Employers wanting to protect workers in occupied buildings</li>
                </ul>
                <p class="service-overview__text">
                  Testing is especially important in areas known for elevated soil uranium, in homes with basements or crawlspaces, or when occupants experience unexplained health symptoms potentially linked to air quality.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Our Approach &amp; Professional Standards</h3>
                <p class="service-overview__text">Spartan Environmental Consulting conducts radon testing in accordance with recognized industry practices and Health Canada guidelines. Our approach emphasizes:</p>
                <ul class="service-overview__list">
                  <li>Independent, unbiased testing</li>
                  <li>Use of calibrated instruments</li>
                  <li>Statistically valid testing durations</li>
                  <li>Professional interpretation of results</li>
                  <li>Clear, actionable reporting</li>
                </ul>
                <p class="service-overview__text">We help clients understand their radon levels and options for reducing exposure where necessary.</p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">How Radon Testing Works</h3>
                <div class="service-overview__steps">
                  <div class="service-overview__step"><strong>Initial Consultation &amp; Test Placement:</strong> We discuss your building layout and select appropriate testing locations, typically in lowest occupied levels.</div>
                  <div class="service-overview__step"><strong>Deployment of Radon Monitors:</strong> Calibrated devices are placed and run for the designated short- or long-term period.</div>
                  <div class="service-overview__step"><strong>Data Collection &amp; Analysis:</strong> Devices are retrieved and data is analyzed according to recognized standards.</div>
                  <div class="service-overview__step"><strong>Report Delivery &amp; Consultation:</strong> You receive a report with results, interpretation, and recommendations.</div>
                  <div class="service-overview__step"><strong>Follow-Up Guidance:</strong> Optional guidance on mitigation strategies if radon levels exceed guidelines.</div>
                </div>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Frequently Asked Questions</h3>
                <div class="service-overview__faq">
                  <div class="service-overview__faq-item"><strong>What level of radon is considered dangerous?</strong><p>Health Canada recommends action when indoor radon levels exceed 200 Bq/m³, though lower recommendations may be considered based on occupant health and risk.</p></div>
                  <div class="service-overview__faq-item"><strong>How long does radon testing take?</strong><p>Short-term testing runs 2–7 days, while long-term testing runs 90 days or more to account for seasonal variations.</p></div>
                  <div class="service-overview__faq-item"><strong>Can I test radon myself?</strong><p>Do-it-yourself kits exist, but professional testing by trained consultants ensures accurate placement, monitoring, calibration, and interpretation.</p></div>
                  <div class="service-overview__faq-item"><strong>Why are basement levels tested first?</strong><p>Radon enters buildings from the ground. Basements and lower levels typically have higher concentrations and are key indicator areas.</p></div>
                </div>
              </div>

              <div class="card service-overview__callout" style="margin-top: var(--space-2xl);">
                <h3 class="service-overview__subheading">Protect Your Health &amp; Indoor Air Quality</h3>
                <p class="service-overview__text">
                  Radon exposure is a real health concern, but it can only be identified through proper testing. Spartan Environmental Consulting provides trusted, independent radon testing services that help you understand your environment and take action when needed.
                </p>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  <strong>Contact Spartan Environmental Consulting Today:</strong> Schedule professional radon testing or learn more about how we evaluate indoor radon levels in Calgary and Alberta. Speak with a Certified Industrial Hygienist who can explain results, risks, and next steps for your property.
                </p>
              </div>
            </div>
          `;
    } else if (service.id === 'indoor-air-quality') {
        overviewHtml = `
            <div class="service-overview">
              <h2>Indoor Air Quality (IAQ) Testing Services — Spartan Environmental Consulting Ltd.</h2>
              <p class="service-overview__lead">Professional Indoor Air Quality Testing in Calgary &amp; Alberta</p>

              <p class="service-overview__text">
                Indoor air quality has a direct impact on human health, comfort, and productivity. Poor indoor air quality can contribute to symptoms such as headaches, irritation of the eyes or throat, fatigue, allergic reactions, and more serious respiratory issues.
              </p>
              <p class="service-overview__text">
                Spartan Environmental Consulting provides comprehensive indoor air quality testing and assessment services to help homeowners, building managers, employers, and professionals understand and manage air quality concerns in residential, commercial, and institutional environments.
              </p>
              <p class="service-overview__text">
                Our services use scientific methods, calibrated instruments, and professional interpretation to deliver accurate results and clear recommendations.
              </p>

              <div class="card service-overview__callout">
                <h3 class="service-overview__subheading">Why Indoor Air Quality Testing Matters</h3>
                <p class="service-overview__text">Indoor environments can contain a wide range of pollutants, including:</p>
                <ul class="service-overview__list service-overview__list--columns">
                  <li>Volatile Organic Compounds (VOCs)</li>
                  <li>Particulate matter (dust, smoke, PM2.5/PM10)</li>
                  <li>Biological contaminants (mould, bacteria, allergens)</li>
                  <li>Carbon monoxide and other combustion by-products</li>
                  <li>Poor ventilation and air exchange imbalances</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  Many of these pollutants are invisible and can only be detected through professional air testing. Poor indoor air quality may affect occupants over short or long periods, especially in sensitive populations such as children, older adults, and individuals with respiratory conditions.
                </p>
              </div>

              <h3 class="service-overview__subheading" style="margin-top: var(--space-2xl);">Our Indoor Air Quality Testing Services</h3>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">1. Comprehensive Air Sampling &amp; Analysis</h4>
                <p class="service-overview__text">
                  We collect air samples using calibrated instruments to measure concentrations of particulate matter, VOCs, carbon dioxide, carbon monoxide, humidity, temperature, and other relevant parameters. Samples are analyzed on-site or sent to accredited laboratories when necessary, providing scientifically credible data.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">2. Biological Contaminant Identification</h4>
                <p class="service-overview__text">
                  Testing for mould spores, allergens, and other biological agents helps identify potential sources of irritation or health complaints. We evaluate airborne biological contaminants to provide clear insights and help determine whether remediation or further investigation is required.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">3. Ventilation &amp; Air Exchange Assessment</h4>
                <p class="service-overview__text">
                  Proper ventilation is essential for healthy indoor air. We assess airflow patterns, air exchange rates, and ventilation effectiveness to determine whether mechanical systems are contributing to poor air quality.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">4. Source Identification &amp; Investigation</h4>
                <p class="service-overview__text">
                  We help locate potential sources of air quality issues, including occupant activities, HVAC systems, moisture intrusion, building materials, or external sources. Identifying the cause is essential to developing effective corrective actions.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">5. Clear Reporting &amp; Professional Interpretation</h4>
                <p class="service-overview__text">After analysis, we provide a professional report that includes:</p>
                <ul class="service-overview__list">
                  <li>Measured results and their interpretation</li>
                  <li>Comparisons against recognized health or comfort guidelines</li>
                  <li>Clear explanations of potential impacts</li>
                  <li>Practical recommendations for mitigation</li>
                </ul>
                <p class="service-overview__text">Our reports are suitable for internal documentation, health and safety programs, regulatory purposes, insurance support, and risk communication.</p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Who Needs Indoor Air Quality Testing?</h3>
                <p class="service-overview__text">Indoor air quality testing is beneficial for a wide range of clients, including:</p>
                <ul class="service-overview__list service-overview__list--columns">
                  <li>Homeowners experiencing unexplained symptoms</li>
                  <li>Property managers with tenant complaints</li>
                  <li>Employers concerned about workplace comfort and safety</li>
                  <li>Schools, daycares, or healthcare facilities</li>
                  <li>Real estate clients during property inspections</li>
                  <li>Organizations preparing for occupancy or renovation</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  Whether you suspect a problem or want baseline confirmation of healthy air, IAQ testing provides clarity and direction.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Our Approach &amp; Professional Standards</h3>
                <p class="service-overview__text">Our indoor air quality testing services are carried out using recognized industrial hygiene methods and calibrated instruments. We emphasize:</p>
                <ul class="service-overview__list">
                  <li>Independent and unbiased evaluation</li>
                  <li>Scientific measurement and analysis</li>
                  <li>Clear explanation of findings</li>
                  <li>Actionable recommendations for improvement</li>
                </ul>
                <p class="service-overview__text">Assessments are conducted or overseen by trained professionals who understand air quality dynamics and health impacts, ensuring you receive accurate, reliable information.</p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">What to Expect During an IAQ Assessment</h3>
                <div class="service-overview__steps">
                  <div class="service-overview__step"><strong>Initial Consultation &amp; History Gathering:</strong> Discuss symptoms, occupant concerns, building history, and suspected issues.</div>
                  <div class="service-overview__step"><strong>On-Site Air Sampling:</strong> We deploy calibrated instruments to collect representative air samples.</div>
                  <div class="service-overview__step"><strong>Laboratory or Field Analysis:</strong> Analysis is completed on-site or by accredited laboratory depending on testing needs.</div>
                  <div class="service-overview__step"><strong>Report Delivery &amp; Interpretation:</strong> You receive a detailed report with results, interpretation, and recommendations.</div>
                  <div class="service-overview__step"><strong>Follow-Up Guidance:</strong> We help you understand your results, next steps, and mitigation options.</div>
                </div>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Frequently Asked Questions</h3>
                <div class="service-overview__faq">
                  <div class="service-overview__faq-item"><strong>What pollutants do you test for?</strong><p>We test for particulate matter (PM2.5/PM10), VOCs, carbon monoxide, carbon dioxide, biological contaminants, humidity imbalances, and ventilation issues as appropriate.</p></div>
                  <div class="service-overview__faq-item"><strong>How long does an IAQ assessment take?</strong><p>Assessment time depends on the size of the space and the complexity of testing, but many evaluations can be completed in a few hours.</p></div>
                  <div class="service-overview__faq-item"><strong>Will the report help with insurance or regulatory documentation?</strong><p>Yes — our reports are professionally written and include interpretation that supports decision-making, regulatory compliance, and insurance review.</p></div>
                  <div class="service-overview__faq-item"><strong>Can IAQ testing identify mould or chemical sources?</strong><p>Yes — both airborne biological agents and chemical contaminants can be evaluated, and we assist in identifying likely sources when possible.</p></div>
                </div>
              </div>

              <div class="card service-overview__callout" style="margin-top: var(--space-2xl);">
                <h3 class="service-overview__subheading">Protect Your Health, Comfort &amp; Occupants</h3>
                <p class="service-overview__text">
                  Indoor air quality affects comfort, productivity, and long-term health. Professional indoor air quality testing by Spartan Environmental Consulting helps you understand current conditions, confirm concerns, and make informed decisions about improvements.
                </p>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  <strong>Contact Spartan Environmental Consulting Today:</strong> Speak with a Certified Industrial Hygienist about your indoor air quality concerns. We’ll help determine the right testing approach and provide clear, dependable results.
                </p>
              </div>
            </div>
          `;
    } else if (service.id === 'mould-assessments') {
        overviewHtml = `
            <div class="service-overview">
              <h2>Mould Exposure Assessment Services — Spartan Environmental Consulting Ltd.</h2>
              <p class="service-overview__lead">Professional Mould Exposure Assessments &amp; Testing in Calgary &amp; Alberta</p>

              <p class="service-overview__text">
                Indoor mould growth can cause unpleasant odours, structural damage, and health concerns for building occupants. If you notice visible mould, musty smells, or unexplained health symptoms, a professional mould exposure assessment is the best way to determine whether there is a mould problem, how extensive it is, and what actions are needed.
              </p>
              <p class="service-overview__text">
                Spartan Environmental Consulting provides comprehensive, science-based mould inspections, sampling, and exposure assessments. Our methods follow recognized professional practices, and our reports are written clearly by trained professionals, so you understand what is present, what it means, and what to do next.
              </p>

              <div class="card service-overview__callout">
                <h3 class="service-overview__subheading">Why Mould Exposure Assessment Matters</h3>
                <p class="service-overview__text">Mould grows where moisture is present. Common causes include:</p>
                <ul class="service-overview__list service-overview__list--columns">
                  <li>Water leaks or plumbing failures</li>
                  <li>Flooding, seepage, or foundation dampness</li>
                  <li>High indoor humidity or condensation</li>
                  <li>Poor ventilation</li>
                  <li>Roofing or window leaks</li>
                </ul>
                <p class="service-overview__text">Mould can release spores and fragments into the air, potentially leading to:</p>
                <ul class="service-overview__list">
                  <li>Nasal and sinus irritation</li>
                  <li>Respiratory symptoms</li>
                  <li>Allergic reactions</li>
                  <li>Headaches, cough, or fatigue</li>
                </ul>
                <p class="service-overview__text">
                  Visible mould does not always convey the full extent of contamination. A professional assessment reveals both visible and hidden conditions, helping you make informed decisions about your health, building integrity, and occupancy.
                </p>
              </div>

              <h3 class="service-overview__subheading" style="margin-top: var(--space-2xl);">Our Mould Exposure Assessment Services</h3>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">1. Detailed Visual Inspection</h4>
                <p class="service-overview__text">
                  We conduct a thorough, systematic inspection of the interior and exterior of the building to identify areas of visible mould growth and moisture intrusion. We look beyond obvious signs to find hidden sources of mould risk.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">2. Air Sampling for Mould Spores</h4>
                <p class="service-overview__text">
                  Air samples are taken from selected indoor locations and compared to outdoor baseline levels. Analyses by accredited laboratories determine the concentration and types of airborne mould spores.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">3. Surface Sampling (Tape Lifts &amp; Swabs)</h4>
                <p class="service-overview__text">
                  When appropriate, surface samples are collected from walls, ceilings, HVAC components, or other areas likely to harbour hidden mould. These are analyzed to confirm the presence and species of mould.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">4. Moisture Assessment &amp; Hygrometer Readings</h4>
                <p class="service-overview__text">
                  Moisture measurements (including relative humidity and moisture content behind surfaces) are taken to identify conditions that support mould growth. Moisture mapping helps pinpoint hidden leaks and dampness.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">5. Laboratory Analysis by Accredited Labs</h4>
                <p class="service-overview__text">
                  All collected samples are analyzed by independent, accredited laboratories for reliable, defensible results. Laboratory analysis identifies the types and concentrations of mould present.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">6. Professional Mould Exposure Report</h4>
                <p class="service-overview__text">You receive a comprehensive written report that includes:</p>
                <ul class="service-overview__list">
                  <li>Visual inspection findings</li>
                  <li>Air and surface sampling results</li>
                  <li>Interpretation of results relative to outdoor baselines</li>
                  <li>Moisture condition analysis</li>
                  <li>Clear recommendations for next steps</li>
                  <li>Priority actions for remediation or further investigation</li>
                </ul>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Who Needs a Mould Exposure Assessment?</h3>
                <p class="service-overview__text">Mould exposure assessments are recommended for:</p>
                <ul class="service-overview__list service-overview__list--columns">
                  <li>Homeowners noticing visible mould or persistent odours</li>
                  <li>Property managers responding to tenant complaints</li>
                  <li>Businesses concerned about indoor air quality</li>
                  <li>Schools, daycare centres, and healthcare facilities</li>
                  <li>Real estate transactions requiring environmental verification</li>
                  <li>Insurance claims and property damage documentation</li>
                </ul>
                <p class="service-overview__text">
                  Professional assessment helps clarify whether a perceived problem is real and what actions will reduce risk.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Our Approach &amp; Professional Standards</h3>
                <p class="service-overview__text">At Spartan Environmental Consulting, every mould exposure assessment is conducted using established industrial hygiene practices and calibrated instruments. Our approach emphasizes:</p>
                <ul class="service-overview__list">
                  <li>Independent and unbiased evaluation</li>
                  <li>Scientific sampling protocols</li>
                  <li>Accredited laboratory analysis</li>
                  <li>Clear reporting and interpretation</li>
                  <li>Actionable recommendations</li>
                </ul>
                <p class="service-overview__text">Assessments are overseen or performed by trained professionals with expertise in environmental exposure and indoor air quality.</p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">What to Expect During a Mould Exposure Assessment</h3>
                <div class="service-overview__steps">
                  <div class="service-overview__step"><strong>Initial Consultation &amp; History Review:</strong> We discuss your concerns, building history, and observed issues.</div>
                  <div class="service-overview__step"><strong>On-Site Inspection:</strong> A systematic walkthrough identifies visible and hidden problem areas.</div>
                  <div class="service-overview__step"><strong>Air &amp; Surface Sample Collection:</strong> Representative samples are collected for laboratory analysis.</div>
                  <div class="service-overview__step"><strong>Moisture and Environmental Measurements:</strong> Moisture readings and relative humidity measurements are recorded.</div>
                  <div class="service-overview__step"><strong>Analysis and Report Preparation:</strong> Accredited labs analyze samples, and we interpret results in a written report.</div>
                  <div class="service-overview__step"><strong>Report Delivery &amp; Discussion:</strong> You receive the report and a clear explanation of findings and recommendations.</div>
                </div>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Frequently Asked Questions</h3>
                <div class="service-overview__faq">
                  <div class="service-overview__faq-item"><strong>Do I need mould testing if I see mould?</strong><p>Yes — visible mould may indicate a larger problem not immediately obvious. Testing helps determine the extent and type of contamination.</p></div>
                  <div class="service-overview__faq-item"><strong>How long does mould sampling take?</strong><p>Most mould inspections and sampling can be completed within a few hours. Laboratory analysis timing varies by test type.</p></div>
                  <div class="service-overview__faq-item"><strong>Can mould grow without visible signs?</strong><p>Yes — hidden mould can grow behind wallboards, under flooring, or in HVAC systems. Assessments detect these hidden issues.</p></div>
                  <div class="service-overview__faq-item"><strong>Will the report help with insurance or real estate needs?</strong><p>Yes — professional assessment reports can be used for insurance documentation or real estate due diligence.</p></div>
                  <div class="service-overview__faq-item"><strong>Is air sampling necessary in every case?</strong><p>Not always. A visual inspection may be sufficient in some situations, but sampling provides objective data to confirm conditions when symptoms, odours, or hidden moisture are present.</p></div>
                </div>
              </div>

              <div class="card service-overview__callout" style="margin-top: var(--space-2xl);">
                <h3 class="service-overview__subheading">Protect Your Health, Property &amp; Peace of Mind</h3>
                <p class="service-overview__text">
                  Indoor mould exposure is a common concern but requires professional evaluation to determine whether a health or safety issue truly exists. Spartan Environmental Consulting provides trusted, independent mould exposure assessments that help you understand current conditions and guide your next steps.
                </p>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  <strong>Contact Spartan Environmental Consulting Today:</strong> Speak with a Certified Industrial Hygienist to schedule a mould exposure assessment or learn more about our indoor environmental services. We will help you determine the appropriate testing strategy and provide a clear, professional report.
                </p>
              </div>
            </div>
          `;
    } else if (service.id === 'noise-exposure') {
        overviewHtml = `
            <div class="service-overview">
              <h2>Noise Exposure Assessment Services — Spartan Environmental Consulting Ltd.</h2>
              <p class="service-overview__lead">Professional Noise Exposure Assessment in Calgary &amp; Alberta</p>

              <p class="service-overview__text">
                Workplace noise can have serious long-term health impacts if not properly measured and controlled. Excessive noise exposure can lead to permanent hearing loss, increased stress, communication difficulties, and workplace safety hazards.
              </p>
              <p class="service-overview__text">
                Spartan Environmental Consulting provides reliable noise exposure assessment and measurement services for workplaces, construction sites, industrial facilities, and other environments where noise is a concern.
              </p>
              <p class="service-overview__text">
                Our services are conducted by trained professionals using recognized measurement standards and provide clear, actionable reports that support compliance, health and safety planning, and risk reduction.
              </p>

              <div class="card service-overview__callout">
                <h3 class="service-overview__subheading">Why Noise Exposure Assessments Matter</h3>
                <p class="service-overview__text">Noise is one of the most common occupational hazards. If noise levels exceed safe limits over time, workers can suffer irreversible hearing damage. Well-conducted noise assessments help:</p>
                <ul class="service-overview__list">
                  <li>Identify areas and tasks with hazardous noise levels</li>
                  <li>Protect employees from hearing loss and other health effects</li>
                  <li>Support compliance with occupational health and safety regulations</li>
                  <li>Provide data for hearing conservation programs</li>
                  <li>Inform noise control strategies and engineering solutions</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  Professional noise exposure assessment ensures you have accurate, defensible data on which to make health and safety decisions.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">What We Assess</h3>
                <p class="service-overview__text">Spartan Environmental Consulting uses calibrated instruments and professional protocols to evaluate:</p>
                <ul class="service-overview__list">
                  <li>Personal noise exposure levels for individual employees</li>
                  <li>Area noise levels in work zones or equipment areas</li>
                  <li>Time-weighted average (TWA) noise exposures based on worker activities</li>
                  <li>Peak sound pressure levels and impulsive noises</li>
                  <li>Noise sources and patterns that contribute to exposure</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  Measurements help determine whether noise levels exceed safe thresholds and what actions may be needed to control exposure.
                </p>
              </div>

              <h3 class="service-overview__subheading" style="margin-top: var(--space-2xl);">Our Noise Exposure Assessment Services</h3>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">1. Personal Noise Dosimetry</h4>
                <p class="service-overview__text">
                  We conduct personal noise dosimetry where a worker wears a noise dosimeter during their typical work shift. This provides an individualized measurement of exposure based on actual work patterns and activities.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">2. Area Noise Level Surveys</h4>
                <p class="service-overview__text">
                  Area noise level measurements provide data on sound pressure levels across various locations within a facility. These measurements help identify specific high-noise zones and inform control planning.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">3. Time-Weighted Average (TWA) Calculations</h4>
                <p class="service-overview__text">
                  We calculate TWA noise exposures over the span of work activities to determine average noise exposure and compare it against accepted occupational limits.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">4. Noise Source Identification</h4>
                <p class="service-overview__text">
                  Our assessments identify specific sources of hazardous noise, including machinery, process equipment, tools, or workflow patterns, so appropriate control measures can be implemented.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">5. Report Preparation &amp; Interpretation</h4>
                <p class="service-overview__text">We provide professional, clear reports that include:</p>
                <ul class="service-overview__list">
                  <li>Measurement results and noise exposure levels</li>
                  <li>Interpretation relative to regulatory criteria</li>
                  <li>Identification of hazardous areas and tasks</li>
                  <li>Recommended corrective actions and controls</li>
                </ul>
                <p class="service-overview__text">Reports are suitable for HSE records, regulatory compliance, and hearing conservation programs.</p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Who Needs Noise Exposure Assessment?</h3>
                <p class="service-overview__text">Noise exposure assessment is recommended for:</p>
                <ul class="service-overview__list">
                  <li>Employers in industrial, manufacturing, and construction sectors</li>
                  <li>Facility managers concerned with worker safety</li>
                  <li>Occupational health and safety professionals</li>
                  <li>Organizations developing hearing conservation programs</li>
                  <li>Clients requiring documentation for compliance or insurance</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  Noise is a common hazard in many workplaces — especially on job sites with heavy equipment, mechanical operations, woodworking, metal fabrication, and production environments.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Our Approach &amp; Professional Standards</h3>
                <p class="service-overview__text">Spartan Environmental Consulting conducts noise exposure assessments using recognized industrial hygiene standards, calibrated measurement instruments, and systematic data collection protocols. Our approach emphasizes:</p>
                <ul class="service-overview__list">
                  <li>Independent and unbiased evaluation</li>
                  <li>Accurate and calibrated sound measurement</li>
                  <li>Professional data interpretation</li>
                  <li>Clear and actionable reporting</li>
                </ul>
                <p class="service-overview__text">Noise exposure assessments are performed by trained professionals who understand both the science of acoustics and the regulatory context of occupational exposure.</p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">What to Expect During an Assessment</h3>
                <div class="service-overview__steps">
                  <div class="service-overview__step"><strong>Initial Consultation &amp; Background Review:</strong> Discuss your workplace, tasks, and noise concerns.</div>
                  <div class="service-overview__step"><strong>On-Site Noise Measurements:</strong> We deploy dosimeters and sound level meters to collect representative noise data.</div>
                  <div class="service-overview__step"><strong>Data Analysis &amp; Calculation:</strong> Noise exposures are quantified and compared against regulatory thresholds.</div>
                  <div class="service-overview__step"><strong>Report Delivery &amp; Interpretation:</strong> You receive a detailed report summarizing findings, interpretation, and recommendations.</div>
                  <div class="service-overview__step"><strong>Follow-Up Guidance:</strong> Help understanding results and planning next steps for control or training, if needed.</div>
                </div>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Frequently Asked Questions</h3>
                <div class="service-overview__faq">
                  <div class="service-overview__faq-item"><strong>What noise levels are considered hazardous?</strong><p>Noise levels above 85 decibels (dB) averaged over an 8-hour period are generally considered hazardous and require intervention.</p></div>
                  <div class="service-overview__faq-item"><strong>Do employees need to be dosimeter-equipped for the entire shift?</strong><p>Yes — personal dosimetry is most effective when worn throughout normal work activities to capture true exposure.</p></div>
                  <div class="service-overview__faq-item"><strong>Can noise testing help with compliance?</strong><p>Yes — professional noise exposure reports are accepted documentation for occupational health and safety compliance and hearing conservation programs.</p></div>
                  <div class="service-overview__faq-item"><strong>How often should assessments be repeated?</strong><p>Assessments should be repeated whenever work conditions change — new equipment, processes, or roles — or at regular intervals to verify ongoing compliance.</p></div>
                </div>
              </div>

              <div class="card service-overview__callout" style="margin-top: var(--space-2xl);">
                <h3 class="service-overview__subheading">Protect Hearing, Safety &amp; Compliance</h3>
                <p class="service-overview__text">
                  Noise exposure can lead to irreversible damage if not managed effectively. Professional assessments by Spartan Environmental Consulting provide the data, interpretation, and recommendations you need to protect workers, comply with safety standards, and develop effective hearing conservation strategies.
                </p>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  <strong>Contact Spartan Environmental Consulting Today:</strong> Speak with a Certified Industrial Hygienist to schedule a noise exposure assessment for your workplace. We will help you understand your noise risks and provide professional guidance for safe and compliant operations.
                </p>
              </div>
            </div>
          `;
    } else if (service.id === 'confined-space') {
        overviewHtml = `
            <div class="service-overview">
              <h2>Confined Space Hazard Assessment Services — Spartan Environmental Consulting Ltd.</h2>
              <p class="service-overview__lead">Professional Confined Space Hazard Assessment in Calgary &amp; Alberta</p>

              <p class="service-overview__text">
                Confined spaces pose serious health and safety risks for workers if hazards are not properly identified and controlled. A confined space hazard assessment evaluates atmospheric and physical dangers before any work begins, helping organizations protect employees, ensure compliance, and prevent injuries or fatalities.
              </p>
              <p class="service-overview__text">
                At Spartan Environmental Consulting, we provide independent, expert confined space hazard assessments led by a Certified Industrial Hygienist (CIH). Our assessments give clients the information they need to understand hazards and implement effective safety controls.
              </p>

              <div class="card service-overview__callout">
                <h3 class="service-overview__subheading">Why Confined Space Hazard Assessments Are Critical</h3>
                <p class="service-overview__text">Confined spaces can contain hidden dangers that are not obvious at first glance. Common hazards include:</p>
                <ul class="service-overview__list">
                  <li>Oxygen deficiency or enrichment</li>
                  <li>Toxic or asphyxiating gases</li>
                  <li>Flammable or explosive atmospheres</li>
                  <li>Physical or mechanical entrapment</li>
                  <li>Ergonomic, thermal, or chemical risks</li>
                  <li>Limited access and emergency egress</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  Professional hazard assessments ensure risks are identified, quantified, and controlled, reducing the chance of injury or exposure. These evaluations are essential for regulatory compliance, workplace safety, and operational planning.
                </p>
              </div>

              <h3 class="service-overview__subheading" style="margin-top: var(--space-2xl);">Our Confined Space Hazard Assessment Services</h3>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">1. Pre-Entry Hazard Identification</h4>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  We conduct on-site evaluations to identify potential physical and atmospheric hazards. This includes reviewing building plans, inspecting confined spaces, and noting conditions that may affect worker safety.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">2. Atmospheric Monitoring &amp; Sampling</h4>
                <p class="service-overview__text">Air quality testing is critical for detecting hazards such as oxygen imbalance, toxic gases, and flammable atmospheres. Our team uses calibrated instruments to measure:</p>
                <ul class="service-overview__list service-overview__list--columns">
                  <li>Oxygen concentration</li>
                  <li>Combustible gas levels</li>
                  <li>Carbon monoxide</li>
                  <li>Hydrogen sulfide</li>
                  <li>Site-specific contaminants</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">Accurate air monitoring ensures that workers can safely enter confined spaces.</p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">3. Risk Evaluation &amp; Control Recommendations</h4>
                <p class="service-overview__text">We provide actionable guidance to reduce hazards, including:</p>
                <ul class="service-overview__list">
                  <li>Ventilation and air circulation recommendations</li>
                  <li>Lockout/tagout procedures</li>
                  <li>Personal protective equipment (PPE) requirements</li>
                  <li>Safe work practices and entry protocols</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">All recommendations are tailored to your specific worksite and operations.</p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">4. Confined Space Permit Support</h4>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  We help prepare and review confined space permits to ensure compliance with Alberta Occupational Health and Safety requirements. Our support includes hazard documentation, atmospheric testing results, and safety protocols.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">5. Detailed Written Hazard Assessment Report</h4>
                <p class="service-overview__text">You receive a professional report that includes:</p>
                <ul class="service-overview__list">
                  <li>Identified hazards and atmospheric conditions</li>
                  <li>Monitoring data and professional interpretation</li>
                  <li>Recommended controls and procedures</li>
                  <li>Diagrams and photographs where applicable</li>
                  <li>Guidance for compliance, training, and future assessments</li>
                </ul>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Who Needs a Confined Space Hazard Assessment?</h3>
                <p class="service-overview__text">Confined space hazard assessments are recommended for:</p>
                <ul class="service-overview__list">
                  <li>Employers with operations involving tanks, vessels, silos, pits, or tunnels</li>
                  <li>Facility managers responsible for worker safety</li>
                  <li>Contractors performing maintenance or repairs in confined spaces</li>
                  <li>Safety, risk, and compliance professionals</li>
                  <li>Industrial, manufacturing, utility, and environmental service operations</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  These assessments support workplace safety programs, regulatory compliance, and operational planning.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Our Approach &amp; Professional Standards</h3>
                <p class="service-overview__text">Spartan Environmental Consulting follows systematic, evidence-based methods for all confined space assessments. Our process emphasizes:</p>
                <ul class="service-overview__list">
                  <li>Independent evaluation — no conflicts of interest</li>
                  <li>Professional atmospheric monitoring — accurate and calibrated testing</li>
                  <li>Clear, actionable reporting — easy-to-understand recommendations</li>
                  <li>Regulatory alignment — assessments meet Alberta Occupational Health and Safety standards</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  All assessments are conducted or overseen by a Certified Industrial Hygienist (CIH) with extensive experience in exposure assessment and hazard evaluation.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">What You Can Expect</h3>
                <div class="service-overview__steps">
                  <div class="service-overview__step"><strong>Initial Consultation and Site Review:</strong> We discuss your work plans and confined space concerns.</div>
                  <div class="service-overview__step"><strong>On-Site Evaluation:</strong> Our team inspects physical conditions and identifies potential hazards.</div>
                  <div class="service-overview__step"><strong>Atmospheric Monitoring:</strong> We measure oxygen levels, toxic gases, and flammable atmospheres.</div>
                  <div class="service-overview__step"><strong>Risk Analysis:</strong> We interpret monitoring results and identify safety risks.</div>
                  <div class="service-overview__step"><strong>Detailed Written Report:</strong> Professional documentation with findings, recommendations, and next steps.</div>
                  <div class="service-overview__step"><strong>Ongoing Support:</strong> Guidance on implementing controls, safety planning, and regulatory compliance.</div>
                </div>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Frequently Asked Questions</h3>
                <div class="service-overview__faq">
                  <div class="service-overview__faq-item"><strong>Do all confined spaces require a hazard assessment?</strong><p>Yes — any space that meets the regulatory definition of a confined space should be evaluated before entry.</p></div>
                  <div class="service-overview__faq-item"><strong>Can assessments be combined with other industrial hygiene services?</strong><p>Yes — we integrate confined space assessments with air monitoring, exposure testing, and safety program evaluations.</p></div>
                  <div class="service-overview__faq-item"><strong>What is included in the assessment report?</strong><p>Reports include hazard observations, atmospheric monitoring results, recommendations, and diagrams or photographs if needed.</p></div>
                  <div class="service-overview__faq-item"><strong>How long does an assessment take?</strong><p>Most inspections can be completed within a few hours, with reports delivered promptly after analysis.</p></div>
                  <div class="service-overview__faq-item"><strong>Will this assessment support regulatory compliance?</strong><p>Absolutely — our reports are designed to meet Alberta OHS requirements and are suitable for internal or regulatory use.</p></div>
                </div>
              </div>

              <div class="card service-overview__callout" style="margin-top: var(--space-2xl);">
                <h3 class="service-overview__subheading">Protect Your Workers and Your Workplace</h3>
                <p class="service-overview__text">
                  Confined spaces present hazards that are not always obvious without professional evaluation. Spartan Environmental Consulting provides reliable, independent, and expert confined space hazard assessments that protect employees, support compliance, and provide actionable guidance for safe operations.
                </p>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  <strong>Contact Spartan Environmental Consulting Today:</strong> Speak directly with a Certified Industrial Hygienist to discuss your confined space hazard assessment needs. We will help identify risks and provide professional guidance to keep your workers safe and your workplace compliant.
                </p>
              </div>
            </div>
          `;
    } else if (service.id === 'exposure-control-plans') {
        overviewHtml = `
            <div class="service-overview">
              <h2>Managing Hazardous Exposures</h2>

              <p class="service-overview__text">
                Exposure control plans protect workers from hazardous substances, including cancer-causing agents,
                reproductive hazards, and sensitizers. Each plan is hazard-specific and outlines organizational
                responsibilities, risk identification, control measures, education and training requirements, and written
                procedures.
              </p>

              <p class="service-overview__text">
                Substances requiring exposure control plans exist across all industries, and employers are responsible for
                demonstrating workforce protection.
              </p>

              <div class="card service-overview__callout">
                <h3 class="service-overview__subheading">Developing ECPs for a Variety of Substances</h3>
                <p class="service-overview__text">We assist with developing ECPs for:</p>

                <ul class="service-overview__list service-overview__list--columns">
                  <li>Asbestos</li>
                  <li>Benzene, Toluene, and other aromatic hydrocarbons</li>
                  <li>Biological Agents</li>
                  <li>COVID-19</li>
                  <li>Formaldehyde</li>
                  <li>Heat and Cold Stress</li>
                  <li>Laboratory Chemicals</li>
                  <li>Lead</li>
                  <li>Noise</li>
                  <li>Silica</li>
                  <li>Toxic process gases such as H2S and SO2</li>
                  <li>Welding gases and fumes</li>
                  <li>Other designated substances</li>
                </ul>

                <p class="service-overview__text" style="margin-top: var(--space-lg); margin-bottom: 0;">
                  Prevention begins with organizational commitment. Let Spartan Environmental Consulting build practical
                  and effective exposure control plans for your organization.
                </p>
              </div>
            </div>
          `;
    } else if (service.id === 'turnarounds-maintenance') {
        overviewHtml = `
            <div class="service-overview">
              <h2>Turnarounds and Maintenance Support</h2>

              <p class="service-overview__text">
                Facility turnarounds and maintenance outages are intensive, complex, and often operate around the clock. Factors that complicate health risk control include the large number of contracted workers, the temporary
                nature of work, and frequent breaking of containment for systems carrying hazardous chemicals.
              </p>

              <p class="service-overview__text">
                Approximately 70 percent of major accidents occur during these non-routine operations.
              </p>

              <div class="card service-overview__callout">
                <h3 class="service-overview__subheading">Planning Stage Support</h3>
                <ul class="service-overview__list">
                  <li>Health hazard risk assessments to identify potential exposures in advance</li>
                  <li>Exposure control plans for regulated and high-risk hazards</li>
                  <li>Chemical approval processes for contractor-supplied substances</li>
                  <li>Confined space hazard assessments</li>
                  <li>Training and awareness programs to improve hazard recognition and mitigation</li>
                </ul>
              </div>

              <div class="card service-overview__callout">
                <h3 class="service-overview__subheading">Execution Phase Support</h3>
                <ul class="service-overview__list">
                  <li>Identify and control all workplace health risks through exposure monitoring</li>
                  <li>Inform workers of chemical, physical, and biological hazards during maintenance</li>
                  <li>Inspect worksites and ensure contractors follow safety measures for all tasks</li>
                  <li>Offer quantitative respirator fit testing at a discounted rate, at your office or ours</li>
                </ul>
              </div>

              <div class="card service-overview__callout">
                <h3 class="service-overview__subheading">Turnaround Safety, Turnaround Value</h3>
                <ul class="service-overview__list">
                  <li>Preventing workplace injury and illness</li>
                  <li>Reducing schedule delays due to improper health and safety planning</li>
                  <li>Reducing budget overruns due to unforeseen health risks or emergencies</li>
                  <li>Improving workplace conditions for temporary workers</li>
                  <li>Building a culture of safety sought after by your industry peers</li>
                </ul>
              </div>

              <div style="margin-top: var(--space-2xl);">
                <h3 class="service-overview__subheading">We Can Help</h3>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  Spartan Environmental Consulting can ensure that your facility’s health hazards are managed effectively so that your turnaround or maintenance outage is on time and budget.
                </p>
              </div>
            </div>
          `;
    } else if (service.id === 'procedure-policy-drafting') {
        overviewHtml = `
            <div class="service-overview">
              <h2>Procedure &amp; Policy Drafting Services — Spartan Environmental Consulting Ltd.</h2>
              <p class="service-overview__lead">Professional Health &amp; Safety Procedure and Policy Drafting in Calgary &amp; Alberta</p>

              <p class="service-overview__text">
                Effective workplace health and safety systems begin with clear, practical, and compliant procedures and policies. Spartan Environmental Consulting provides professional procedure and policy drafting services that help employers meet regulatory requirements, reduce risk, and strengthen workplace safety culture. Our approach ensures your written programs are accurate, actionable, and aligned with Alberta Occupational Health and Safety (OHS) standards.
              </p>
              <p class="service-overview__text">
                Whether you need a respiratory protection policy, confined space entry procedures, hazardous substances management protocols, or comprehensive safety manuals, we tailor content to your operations, industry, and regulatory obligations.
              </p>

              <div class="card service-overview__callout" style="margin-top: var(--space-2xl);">
                <h3 class="service-overview__subheading">Why Procedure and Policy Drafting Matters</h3>
                <p class="service-overview__text">Clear and well-written procedures and policies are essential for:</p>
                <ul class="service-overview__list">
                  <li>Demonstrating compliance with occupational health and safety regulations</li>
                  <li>Providing consistent direction for employees and supervisors</li>
                  <li>Reducing workplace injuries and exposures</li>
                  <li>Supporting training, audits, and enforcement readiness</li>
                  <li>Improving organizational communication and safety culture</li>
                </ul>
                <p class="service-overview__text">
                  Whether you operate in a construction, industrial, environmental, or commercial setting, having well-defined procedures and policies helps protect your workforce and support legal compliance.
                </p>
              </div>

              <h3 class="service-overview__subheading" style="margin-top: var(--space-2xl);">Our Procedure &amp; Policy Drafting Services</h3>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">1. Customized Safety Policy Development</h4>
                <p class="service-overview__text">We draft tailored safety policies that are specific to your organization's structure, hazards, and regulatory requirements. Policies may include:</p>
                <ul class="service-overview__list service-overview__list--columns">
                  <li>Respiratory Protection Program</li>
                  <li>Hazard Communication Program</li>
                  <li>Indoor Air Quality Policy</li>
                  <li>Hearing Conservation Policy</li>
                  <li>Hazardous Substances Management Policy</li>
                </ul>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">2. Procedure Writing &amp; Documentation</h4>
                <p class="service-overview__text">We create clear, step-by-step procedures that help employees perform tasks safely and consistently. Procedures may include:</p>
                <ul class="service-overview__list service-overview__list--columns">
                  <li>Confined Space Entry Procedures</li>
                  <li>Respirator Fit Testing Procedures</li>
                  <li>Permit-Required Work Procedures</li>
                  <li>Incident Reporting Procedures</li>
                  <li>Job-Specific Safe Work Procedures</li>
                </ul>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">3. Compliance and Regulatory Alignment</h4>
                <p class="service-overview__text">
                  All procedures and policies are drafted with Alberta OHS requirements in mind and can be aligned with applicable federal guidelines or industry best practices. This ensures your documentation supports compliance and is defensible in audits or enforcement scenarios.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">4. Review and Update of Existing Documentation</h4>
                <p class="service-overview__text">If you already have safety policies or procedures, we can review and revise them to ensure they:</p>
                <ul class="service-overview__list">
                  <li>Match current regulations</li>
                  <li>Reflect actual workplace practices</li>
                  <li>Address observed hazards accurately</li>
                  <li>Communicate requirements clearly</li>
                </ul>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">5. Integration with Training and Implementation</h4>
                <p class="service-overview__text">Once policies and procedures are drafted, we help integrate them into your training programs or safety management systems. This may include supporting:</p>
                <ul class="service-overview__list">
                  <li>Worker orientation materials</li>
                  <li>Supervisor training guides</li>
                  <li>Job task training checklists</li>
                </ul>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Who Needs Procedure &amp; Policy Drafting Services?</h3>
                <p class="service-overview__text">Procedure and policy drafting services are valuable for:</p>
                <ul class="service-overview__list">
                  <li>Employers establishing new safety programs</li>
                  <li>Organizations updating safety documentation for compliance</li>
                  <li>Facilities with high-risk operations</li>
                  <li>Businesses preparing for inspections, audits, or certifications</li>
                  <li>Workplaces seeking clearer communication of expectations</li>
                </ul>
                <p class="service-overview__text">
                  Well-documented policies and procedures reinforce roles, reduce confusion, and strengthen accountability across your organization.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Our Approach &amp; Professional Standards</h3>
                <p class="service-overview__text">Spartan Environmental Consulting uses a systematic, evidence-based approach to drafting procedures and policies. Our process emphasizes:</p>
                <ul class="service-overview__list">
                  <li>Clarity and usability: documents that are easy to understand and implement</li>
                  <li>Compliance orientation: aligned with Alberta OHS and applicable standards</li>
                  <li>Consistency with workplace practice: accurate and practical documentation</li>
                  <li>Professional credibility: structured by trained industrial hygiene and safety professionals</li>
                </ul>
                <p class="service-overview__text">We work collaboratively with your team to ensure the content reflects your operations and supports practical application.</p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">What to Expect During the Drafting Process</h3>
                <div class="service-overview__steps">
                  <div class="service-overview__step"><strong>Initial Consultation &amp; Document Review:</strong> We discuss your needs, goals, and existing materials if any.</div>
                  <div class="service-overview__step"><strong>Hazard and Context Analysis:</strong> We evaluate your workplace hazards and regulatory requirements.</div>
                  <div class="service-overview__step"><strong>Drafting of Policies &amp; Procedures:</strong> We prepare initial drafts tailored to your organization.</div>
                  <div class="service-overview__step"><strong>Review and Refinement:</strong> You review content and provide feedback for revision.</div>
                  <div class="service-overview__step"><strong>Final Delivery &amp; Support:</strong> We deliver final documents and support implementation as needed.</div>
                </div>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Frequently Asked Questions</h3>
                <div class="service-overview__faq">
                  <div class="service-overview__faq-item"><strong>Why do I need written procedures and policies?</strong><p>Written procedures and policies provide clear expectations, support compliance, and protect your organization in inspections and audits.</p></div>
                  <div class="service-overview__faq-item"><strong>Can you tailor documents to my specific workplace?</strong><p>Yes — every document is customized to your operations, hazards, and regulatory context.</p></div>
                  <div class="service-overview__faq-item"><strong>Do you help implement the policies after drafting?</strong><p>Yes — we can support integration into training and safety management systems.</p></div>
                  <div class="service-overview__faq-item"><strong>Are these documents compliant with Alberta OHS regulations?</strong><p>Yes — all content is drafted with applicable provincial standards and best practices in mind.</p></div>
                </div>
              </div>

              <div class="card service-overview__callout" style="margin-top: var(--space-2xl);">
                <h3 class="service-overview__subheading">Strengthen Your Safety Management System</h3>
                <p class="service-overview__text">
                  Whether you are building safety documentation for the first time, updating outdated materials, or integrating procedures into a formal safety system, Spartan Environmental Consulting provides professional procedure and policy drafting services that help you reduce risk, improve consistency, and meet regulatory expectations.
                </p>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  <strong>Contact Spartan Environmental Consulting Today:</strong> Speak with a Certified Industrial Hygienist about your procedure and policy drafting needs. We will help develop clear, compliant, and practical documentation to support your safety program and organizational goals.
                </p>
              </div>
            </div>
          `;
    } else if (service.id === 'silica-exposure') {
        overviewHtml = `
            <div class="service-overview">
              <h2>Silica Exposure Assessment Services — Spartan Environmental Consulting Ltd.</h2>
              <p class="service-overview__lead">Professional Silica Exposure Assessment &amp; Testing in Calgary &amp; Alberta</p>

              <p class="service-overview__text">
                Crystalline silica is a common mineral found in dust generated from activities such as cutting, grinding, sanding, drilling, or crushing concrete, stone, brick, and other silica-containing materials. When inhaled, silica dust can cause serious health effects, including silicosis, lung cancer, and other respiratory diseases. To protect workers and ensure regulatory compliance, professional silica exposure assessment and monitoring is essential.
              </p>
              <p class="service-overview__text">
                Spartan Environmental Consulting provides reliable, science-based silica exposure assessments using recognized industrial hygiene methods and calibrated instruments. Our services deliver accurate measurement results, clear interpretation, and actionable recommendations for exposure control.
              </p>

              <div class="card service-overview__callout" style="margin-top: var(--space-2xl);">
                <h3 class="service-overview__subheading">Why Silica Exposure Assessment Matters</h3>
                <p class="service-overview__text">Exposure to respirable crystalline silica (RCS) is a serious occupational health concern in construction, manufacturing, and industrial settings. Common tasks that may generate silica dust include:</p>
                <ul class="service-overview__list service-overview__list--columns">
                  <li>Concrete cutting and drilling</li>
                  <li>Masonry and brickwork</li>
                  <li>Sandblasting</li>
                  <li>Grinding and polishing stone or tile</li>
                  <li>Excavation and demolition</li>
                </ul>
                <p class="service-overview__text">
                  Without proper measurement and control, workers can be exposed to harmful levels of silica. Professional exposure assessment helps identify tasks and areas where airborne silica levels exceed safe limits so effective control strategies can be implemented.
                </p>
              </div>

              <h3 class="service-overview__subheading" style="margin-top: var(--space-2xl);">Our Silica Exposure Assessment Services</h3>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">1. Air Monitoring for Respirable Crystalline Silica</h4>
                <p class="service-overview__text">
                  We perform personal and area air monitoring using calibrated sampling pumps and filters to collect respirable dust. Samples are analyzed by accredited laboratories to determine silica concentrations. Results show whether exposures exceed occupational exposure limits.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">2. Personal Exposure Assessment</h4>
                <p class="service-overview__text">
                  Personal monitoring measures actual silica dust exposure experienced by individual workers during their normal work shift. This provides a realistic understanding of occupational risk and supports targeted controls.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">3. Area Noise &amp; Dust Surveys</h4>
                <p class="service-overview__text">
                  Area surveys identify where high dust levels exist in the workplace. These surveys highlight specific job tasks or work zones contributing to respirable silica exposure and help prioritize control measures.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">4. Sampling Plan Development</h4>
                <p class="service-overview__text">
                  We design sampling plans tailored to your workplace and task-specific activities. This ensures representative data collection and supports defensible conclusions regarding exposure levels.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">5. Interpretation and Documentation</h4>
                <p class="service-overview__text">All collected samples are analyzed by accredited laboratories, and we provide clear, professional reports that include:</p>
                <ul class="service-overview__list">
                  <li>Measurement data</li>
                  <li>Interpretation relative to occupational exposure limits</li>
                  <li>Identification of high-risk activities</li>
                  <li>Recommended control measures</li>
                </ul>
                <p class="service-overview__text">Our documentation supports compliance reporting, safety planning, and risk communication.</p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Who Needs Silica Exposure Assessment?</h3>
                <p class="service-overview__text">Silica exposure assessment is recommended for employers and safety professionals in industries that generate silica dust, including:</p>
                <ul class="service-overview__list service-overview__list--columns">
                  <li>Construction and demolition</li>
                  <li>Concrete cutting and paving</li>
                  <li>Masonry and stone fabrication</li>
                  <li>Manufacturing facilities working with silica-containing materials</li>
                  <li>Utilities and infrastructure maintenance</li>
                  <li>Contractors overseeing renovation and excavation work</li>
                </ul>
                <p class="service-overview__text">
                  Assessments help protect workers, support hearing and respiratory conservation programs, and demonstrate compliance with occupational health regulations.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Our Approach &amp; Professional Standards</h3>
                <p class="service-overview__text">Spartan Environmental Consulting conducts silica exposure assessments using recognized industrial hygiene standards and calibrated instrumentation. Our approach emphasizes:</p>
                <ul class="service-overview__list">
                  <li>Independent evaluation — unbiased and data-driven</li>
                  <li>Accurate monitoring and sampling — representative of typical work conditions</li>
                  <li>Professional interpretation — clear explanation of results and risks</li>
                  <li>Actionable recommendations — feasible and practical exposure controls</li>
                </ul>
                <p class="service-overview__text">Our assessments are conducted by trained professionals with experience in exposure assessment and occupational hazard evaluation.</p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">What to Expect During a Silica Exposure Assessment</h3>
                <div class="service-overview__steps">
                  <div class="service-overview__step"><strong>Initial Consultation &amp; Task Review:</strong> We discuss your operations, job tasks, and potential silica sources.</div>
                  <div class="service-overview__step"><strong>Sampling Plan &amp; On-Site Monitoring:</strong> Silica dust sampling is performed using calibrated pumps and filters.</div>
                  <div class="service-overview__step"><strong>Laboratory Analysis:</strong> Samples are analyzed by accredited laboratories for respirable crystalline silica.</div>
                  <div class="service-overview__step"><strong>Report Delivery &amp; Interpretation:</strong> You receive a detailed report with measured results, interpretation, and recommendations.</div>
                  <div class="service-overview__step"><strong>Follow-Up Guidance:</strong> We help you understand results and identify appropriate exposure controls.</div>
                </div>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Frequently Asked Questions</h3>
                <div class="service-overview__faq">
                  <div class="service-overview__faq-item"><strong>What are the health risks of silica exposure?</strong><p>Inhalation of respirable crystalline silica can lead to silicosis, lung cancer, chronic obstructive pulmonary disease (COPD), and other respiratory impairments.</p></div>
                  <div class="service-overview__faq-item"><strong>What is a safe level of silica exposure?</strong><p>Occupational exposure limits vary, but most jurisdictions (including Alberta) have strict limits — professional testing determines whether your exposures exceed these limits.</p></div>
                  <div class="service-overview__faq-item"><strong>Do I need laboratory analysis?</strong><p>Yes — accurate assessment requires laboratory analysis of collected respirable dust samples.</p></div>
                  <div class="service-overview__faq-item"><strong>How often should exposure assessments be done?</strong><p>Assessments should be conducted when work conditions or tasks change, new equipment is introduced, or periodically as part of a safety program.</p></div>
                </div>
              </div>

              <div class="card service-overview__callout" style="margin-top: var(--space-2xl);">
                <h3 class="service-overview__subheading">Protect Worker Health &amp; Compliance with Professional Assessment</h3>
                <p class="service-overview__text">
                  Silica exposure is a serious occupational health concern, but it can be effectively managed when identified and controlled. Spartan Environmental Consulting provides trusted, independent silica exposure assessment services that help you understand risks and implement protective measures.
                </p>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  <strong>Contact Spartan Environmental Consulting Today:</strong> Speak with a Certified Industrial Hygienist to schedule a silica exposure assessment or learn more about how we evaluate workplace dust hazards across Calgary and Alberta. We'll help you understand your risks and recommend practical solutions.
                </p>
              </div>
            </div>
          `;
    } else if (service.id === 'welding-fume-exposure') {
        overviewHtml = `
            <div class="service-overview">
              <h2>Welding Fume Exposure Assessment Services — Spartan Environmental Consulting Ltd.</h2>
              <p class="service-overview__lead">Professional Welding Fume Exposure Assessment in Calgary &amp; Alberta</p>

              <p class="service-overview__text">
                Welding operations are essential in many industrial, fabrication, and construction environments — but they can generate hazardous airborne contaminants. Welding fume exposure assessment helps identify and quantify airborne metal particles and gases produced during welding processes, ensuring workers are protected and regulatory requirements are met.
              </p>
              <p class="service-overview__text">
                Spartan Environmental Consulting provides expert welding fume exposure assessment services using recognized industrial hygiene methods, calibrated instruments, and professional interpretation of results. Our services support health and safety programs, compliance, and targeted exposure controls.
              </p>

              <div class="card service-overview__callout" style="margin-top: var(--space-2xl);">
                <h3 class="service-overview__subheading">Why Welding Fume Exposure Assessment Matters</h3>
                <p class="service-overview__text">Welding fume consists of tiny particles and gases formed when metals are heated, vaporized, and condensed during welding, cutting, or brazing. Common elements found in welding fumes can include:</p>
                <ul class="service-overview__list service-overview__list--columns">
                  <li>Iron oxide</li>
                  <li>Manganese</li>
                  <li>Chromium (including hexavalent chromium)</li>
                  <li>Nickel</li>
                  <li>Lead and other trace metals</li>
                </ul>
                <p class="service-overview__text">
                  Long-term or repeated exposure to welding fume can contribute to respiratory irritation, neurological effects, metal fume fever, and other occupational illnesses. Without proper exposure measurement and controls, workers may be unknowingly exposed to harmful levels.
                </p>
              </div>

              <h3 class="service-overview__subheading" style="margin-top: var(--space-2xl);">Our Welding Fume Exposure Assessment Services</h3>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">1. Personal Fume Exposure Monitoring</h4>
                <p class="service-overview__text">
                  We conduct personal welding fume monitoring by placing sampling equipment in the breathing zone of welders during work tasks. This provides a realistic assessment of individual exposure throughout a shift.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">2. Area Weld Fume Air Sampling</h4>
                <p class="service-overview__text">
                  Area sampling assesses airborne fume concentrations at fixed locations within the workspace. This helps identify hotspots, evaluate ventilation, and quantify environmental airborne contaminants.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">3. Task-Specific Exposure Evaluation</h4>
                <p class="service-overview__text">
                  Different welding processes generate variable fume profiles. We evaluate exposures relating to specific tasks such as MIG, TIG, stick welding, and oxy-fuel welding to identify differences in exposure and potential risk.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">4. Metal Fume Component Analysis</h4>
                <p class="service-overview__text">Collected samples are analyzed by accredited laboratories to determine concentrations of specific metal components and hazardous constituents, such as:</p>
                <ul class="service-overview__list">
                  <li>Hexavalent chromium</li>
                  <li>Manganese</li>
                  <li>Nickel</li>
                  <li>Lead</li>
                </ul>
                <p class="service-overview__text">This component-specific analysis helps refine risk assessments and control strategies.</p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">5. Professional Reporting &amp; Interpretation</h4>
                <p class="service-overview__text">We deliver clear, professional reports that include:</p>
                <ul class="service-overview__list">
                  <li>Results of welding fume measurements</li>
                  <li>Comparison to occupational exposure limits (OELs)</li>
                  <li>Identification of high-risk tasks and locations</li>
                  <li>Recommended engineering and administrative controls</li>
                </ul>
                <p class="service-overview__text">These reports support compliance, safety planning, and risk communication.</p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Who Needs Welding Fume Exposure Assessment?</h3>
                <p class="service-overview__text">Welding fume exposure assessments are recommended for:</p>
                <ul class="service-overview__list">
                  <li>Employers with welding operations</li>
                  <li>Occupational health and safety professionals</li>
                  <li>Industrial and fabrication facilities</li>
                  <li>Construction and maintenance contractors</li>
                  <li>Safety managers responsible for hazard controls</li>
                  <li>Organizations preparing for regulatory inspections or audits</li>
                </ul>
                <p class="service-overview__text">
                  Assessments help ensure workplace safety programs accurately identify exposure risks and implement effective controls to protect workers.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Our Approach &amp; Professional Standards</h3>
                <p class="service-overview__text">Spartan Environmental Consulting delivers welding fume exposure assessment services using recognized industrial hygiene standards and calibrated measurement equipment. Our approach includes:</p>
                <ul class="service-overview__list">
                  <li>Independent evaluation — unbiased, data-driven risk assessment</li>
                  <li>Representative sampling methods — personal and area monitoring</li>
                  <li>Accredited laboratory analysis — accurate identification of contaminants</li>
                  <li>Actionable recommendations — focused on control strategies and safety improvement</li>
                </ul>
                <p class="service-overview__text">Our assessments are conducted or overseen by trained professionals experienced in exposure science and occupational health.</p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">What to Expect During a Welding Fume Assessment</h3>
                <div class="service-overview__steps">
                  <div class="service-overview__step"><strong>Initial Consultation &amp; Work Review:</strong> Discuss your welding processes, materials, and exposure concerns.</div>
                  <div class="service-overview__step"><strong>On-Site Exposure Monitoring:</strong> Personal and area sampling conducted using calibrated instruments.</div>
                  <div class="service-overview__step"><strong>Sample Analysis by Laboratory:</strong> Samples are processed by accredited labs and quantified.</div>
                  <div class="service-overview__step"><strong>Report Preparation &amp; Delivery:</strong> You receive a detailed results report with interpretation and recommendations.</div>
                  <div class="service-overview__step"><strong>Follow-Up Support &amp; Controls Guidance:</strong> We provide guidance on exposure control options and next steps.</div>
                </div>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Frequently Asked Questions</h3>
                <div class="service-overview__faq">
                  <div class="service-overview__faq-item"><strong>What is welding fume?</strong><p>Welding fume is a complex mix of metal particles and gases produced when metals are heated during welding. It can pose serious health risks if inhaled.</p></div>
                  <div class="service-overview__faq-item"><strong>Why is professional testing necessary?</strong><p>Professional testing provides accurate, calibrated measurements reflective of real airborne exposures and enables defensible conclusions about risk and controls.</p></div>
                  <div class="service-overview__faq-item"><strong>What exposure limits are used?</strong><p>We interpret results relative to applicable occupational exposure limits (OELs) such as Alberta OHS criteria and other recognized standards.</p></div>
                  <div class="service-overview__faq-item"><strong>How often should welding fume assessments be conducted?</strong><p>Assessments should be repeated when processes, materials, equipment, or work conditions change, or as part of a routine safety program.</p></div>
                </div>
              </div>

              <div class="card service-overview__callout" style="margin-top: var(--space-2xl);">
                <h3 class="service-overview__subheading">Protect Worker Health &amp; Regulatory Compliance</h3>
                <p class="service-overview__text">
                  Welding fume exposure assessment is essential for protecting workers from hazardous airborne contaminants and supporting compliance with occupational health and safety regulations. Spartan Environmental Consulting provides trusted, independent assessment services with clear results and practical recommendations for safer workplaces.
                </p>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  <strong>Contact Spartan Environmental Consulting Today:</strong> Speak with a Certified Industrial Hygienist to schedule a welding fume exposure assessment or learn more about how we evaluate airborne contaminants in your facility. We will help you understand your exposure risks and recommend effective control strategies.
                </p>
              </div>
            </div>
          `;
    } else if (service.id === 'ohs-compliance') {
        overviewHtml = `
            <div class="service-overview">
              <h2>OH&amp;S Compliance Order Resolution Services — Spartan Environmental Consulting Ltd.</h2>
              <p class="service-overview__lead">Professional OH&amp;S Compliance Order Support &amp; Resolution in Calgary &amp; Alberta</p>

              <p class="service-overview__text">
                Workplace health and safety compliance is a legal obligation for employers in Alberta. When an OH&amp;S compliance order is issued by a regulator, it signals that corrective action is required to address a hazard or deficiency identified in your workplace. Spartan Environmental Consulting provides expert guidance and professional support for compliance order resolution, helping employers understand the issues, correct them effectively, and demonstrate compliance with Alberta Occupational Health and Safety (OHS) requirements.
              </p>
              <p class="service-overview__text">
                Our services are delivered by experienced industrial hygiene and safety professionals who understand regulatory expectations and can assist in resolving orders in a defensible, timely, and practical manner.
              </p>

              <div class="card service-overview__callout">
                <h3 class="service-overview__subheading">Why OH&amp;S Compliance Order Resolution Services Matter</h3>
                <p class="service-overview__text">
                  An OH&amp;S compliance order may arise from inspections, incident investigations, or complaints. These orders often require technical corrective actions, documentation, and evidence that hazards have been properly addressed. Failure to resolve a compliance order can result in:
                </p>
                <ul class="service-overview__list">
                  <li>Fines or administrative penalties</li>
                  <li>Increased scrutiny in future inspections</li>
                  <li>Workplace incidents due to unresolved hazards</li>
                  <li>Reputational risk and legal exposure</li>
                </ul>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  Professional compliance order resolution ensures you meet regulatory expectations, protect workers, and reduce liability.
                </p>
              </div>

              <h3 class="service-overview__subheading" style="margin-top: var(--space-2xl);">Our OH&amp;S Compliance Order Resolution Services</h3>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">1. Compliance Order Evaluation &amp; Interpretation</h4>
                <p class="service-overview__text">
                  We review your compliance order to identify the specific requirements, timelines, and regulatory context. Our team interprets the order and explains what corrective actions are required in clear, practical terms.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">2. Hazard Assessment &amp; Documentation</h4>
                <p class="service-overview__text">
                  We conduct site assessments, hazard evaluations, and exposure measurements to address the conditions cited in the compliance order. This may include air monitoring, noise exposure assessment, confined space evaluation, or other professional services as required.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">3. Corrective Action Planning</h4>
                <p class="service-overview__text">
                  Based on identified hazards and regulatory requirements, we develop corrective action plans that outline what needs to be done, how it will be done, and by whom. Plans are designed to satisfy regulatory criteria and improve workplace safety.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">4. Implementation Support</h4>
                <p class="service-overview__text">
                  We provide hands-on support or guidance during the implementation of corrective actions to ensure they are executed properly and efficiently. Our goal is not only to resolve the order but also to improve your overall safety performance.
                </p>
              </div>

              <div class="card service-overview__callout">
                <h4 class="service-overview__mini-title">5. Follow-Up Verification &amp; Reporting</h4>
                <p class="service-overview__text">
                  Once corrective actions are complete, we perform follow-up assessments to verify that deficiencies have been corrected. We then prepare professional documentation demonstrating compliance that you can provide to regulatory authorities.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Who Needs OH&amp;S Compliance Order Resolution Services?</h3>
                <p class="service-overview__text">Compliance order resolution support is valuable for:</p>
                <ul class="service-overview__list">
                  <li>Employers issued an OH&amp;S compliance order</li>
                  <li>Safety managers responsible for regulatory requirements</li>
                  <li>Workplaces with complex hazards or technical challenges</li>
                  <li>Organizations preparing for return-to-work or operational continuity</li>
                  <li>Businesses needing defensible documentation for audits or enforcement</li>
                </ul>
                <p class="service-overview__text">
                  Whether your order involves exposure limits, engineering controls, work practices, or documentation requirements, Spartan’s team provides the expertise to help resolve it effectively.
                </p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Our Approach &amp; Professional Standards</h3>
                <p class="service-overview__text">At Spartan Environmental Consulting, we handle OH&amp;S compliance orders with technical accuracy, regulatory awareness, and practical solutions. Our approach includes:</p>
                <ul class="service-overview__list">
                  <li>Independent evaluation — objective review of hazards and order requirements</li>
                  <li>Professional hazard assessment — data-driven identification of risk</li>
                  <li>Clear corrective action planning — evidence-based recommendations</li>
                  <li>Verification &amp; reporting — professional documentation for regulatory review</li>
                </ul>
                <p class="service-overview__text">Our services are designed to help you meet legal obligations, protect workers, and improve safety systems.</p>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">What to Expect During the Compliance Order Resolution Process</h3>
                <div class="service-overview__steps">
                  <div class="service-overview__step"><strong>Initial Review &amp; Consultation:</strong> We analyze the compliance order and discuss your concerns.</div>
                  <div class="service-overview__step"><strong>Site Assessment &amp; Hazard Evaluation:</strong> Our team conducts inspections and data collection related to the order.</div>
                  <div class="service-overview__step"><strong>Corrective Action Plan Development:</strong> We prepare a structured plan to address regulatory requirements.</div>
                  <div class="service-overview__step"><strong>Implementation Guidance:</strong> Support to ensure corrective measures are properly executed.</div>
                  <div class="service-overview__step"><strong>Verification &amp; Documentation:</strong> Follow-up evaluation and preparation of professional reports demonstrating compliance.</div>
                  <div class="service-overview__step"><strong>Submission Assistance (if requested):</strong> We can help prepare materials for submission to regulatory authorities to close the order.</div>
                </div>
              </div>

              <div class="service-overview__section">
                <h3 class="service-overview__subheading">Frequently Asked Questions</h3>
                <div class="service-overview__faq">
                  <div class="service-overview__faq-item"><strong>What is an OH&amp;S compliance order?</strong><p>An OH&amp;S compliance order is a directive from a regulator that requires a workplace to correct specific hazards or non-compliant conditions within a defined timeline.</p></div>
                  <div class="service-overview__faq-item"><strong>How urgent is it to resolve a compliance order?</strong><p>Compliance orders often have legal deadlines. Prompt resolution helps avoid penalties and supports safer work environments.</p></div>
                  <div class="service-overview__faq-item"><strong>Can Spartan help with complex cases?</strong><p>Yes — we provide technical evaluations and documentation for complex hazards, including industrial hygiene issues, exposure assessments, and engineering controls.</p></div>
                  <div class="service-overview__faq-item"><strong>Do I need professional documentation to satisfy an order?</strong><p>In many cases, regulatory authorities expect data, analysis, and professional interpretation to verify corrective action.</p></div>
                  <div class="service-overview__faq-item"><strong>Can Spartan help prepare corrective plans even if we implement them ourselves?</strong><p>Yes — we can provide planning and verification support even if you choose to execute corrective actions internally.</p></div>
                </div>
              </div>

              <div class="card service-overview__callout" style="margin-top: var(--space-2xl);">
                <h3 class="service-overview__subheading">Resolve Compliance Orders with Confidence</h3>
                <p class="service-overview__text">
                  OH&amp;S compliance order resolution is about more than just meeting regulatory requirements — it’s about ensuring long-term workplace safety and legal defensibility. Spartan Environmental Consulting provides professional support to take you from order receipt to verified compliance with confidence.
                </p>
                <p class="service-overview__text" style="margin-bottom: 0;">
                  <strong>Contact Spartan Environmental Consulting Today:</strong> If you've received an OH&amp;S compliance order and need expert assistance, contact Spartan Environmental Consulting. Speak directly with a Certified Industrial Hygienist about your situation and get professional support to resolve your compliance requirements.
                </p>
              </div>
            </div>
          `;
    } else {
        overviewHtml = `
            <h2>Overview</h2>
            <p style="font-size: var(--font-size-lg); line-height: var(--line-height-relaxed);">
              ${service.fullDescription}
            </p>
          `;
    }

    overviewHtml = overviewHtml.replace(
      /<p[^>]*>\s*<strong>\s*Keywords:\s*<\/strong>[\s\S]*?<\/p>\s*/gi,
      ''
    );

    return `
    <div class="page page-service-detail page-transition">
      <!-- Page Hero -->
      <div class="page-hero">
        <div class="container">
          <div style="font-size: 3rem; margin-bottom: var(--space-md);">${service.icon}</div>
          <h1 class="page-hero__title">${service.title}</h1>
          <p class="page-hero__description">${service.shortDescription}</p>
        </div>
      </div>
      
      <!-- Service Overview -->
      <section class="section section--service-overview">
        <div class="container">
          <div style="max-width: 900px; margin: 0 auto;">
            ${overviewHtml}
          </div>
        </div>
      </section>
      
      <!-- Why It Matters -->
      <section class="section section--alt">
        <div class="container">
          <div class="grid grid--2" style="align-items: center;">
            <div class="scroll-animate">
              <h2>Why It Matters</h2>
              <p style="font-size: var(--font-size-lg); line-height: var(--line-height-relaxed);">
                ${service.whyItMatters}
              </p>
            </div>
            
            <div class="scroll-animate">
              <div class="card" style="background: linear-gradient(135deg, var(--color-accent), var(--color-accent-hover)); color: white; text-align: center; padding: var(--space-2xl);">
                <div style="font-size: 4rem; margin-bottom: var(--space-lg);">⚡</div>
                <h3 style="color: white; margin-bottom: var(--space-md);">Compliance & Safety</h3>
                <p style="color: white; font-size: var(--font-size-lg);">
                  Protect your workers and meet regulatory requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- How We Deliver -->
      <section class="section">
        <div class="container">
          <div class="scroll-animate" style="max-width: 900px; margin: 0 auto;">
            <h2>How We Deliver This Service</h2>
            <p style="font-size: var(--font-size-lg); line-height: var(--line-height-relaxed); margin-bottom: var(--space-xl);">
              ${service.howWeDeliver}
            </p>
            
            <div class="card" style="background-color: var(--color-bg-light); border-left: 4px solid var(--color-accent);">
              <h3 style="color: var(--color-accent); margin-bottom: var(--space-md);">
                Who This Service Is For
              </h3>
              <p style="font-size: var(--font-size-lg); margin: 0;">
                ${service.whoItsFor}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- CTA Section -->
      <section class="section cta-section">
        <div class="container">
          <div class="scroll-animate">
            <h2 class="cta-section__title">Ready to Get Started with ${service.title}?</h2>
            <p class="cta-section__text">
              Contact our team to discuss your specific needs and receive a customized quote.
            </p>
            <div style="display: flex; gap: var(--space-lg); justify-content: center; flex-wrap: wrap;">
              <a href="#/contact" class="btn btn-primary btn-large">Request This Service</a>
              <a href="#/services" class="btn btn-secondary btn-large">View All Services</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
