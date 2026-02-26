// Header component with sticky navigation

export function createHeader() {
  const header = document.getElementById('header');

  header.innerHTML = `
    <header class="header" id="main-header">
      <div class="container">
        <div class="header__inner">
          <div class="header__logo">
            <a href="#/">
              <img src="/images/logo.jpg" alt="Spartan Environmental Consulting Ltd. logo" class="logo-image">
              <span class="logo-text-group">
                <span class="logo-text">Spartan Environmental</span>
                <span class="logo-subtext">Consulting Ltd.</span>
              </span>
            </a>
          </div>
          
          <nav class="header__nav" id="main-nav">
            <ul class="nav-list">
              <li><a href="#/">Home</a></li>
              <li><a href="#/about">About Us</a></li>
              <li class="has-dropdown">
                <a href="#/services" class="dropdown-toggle">Services</a>
                <ul class="dropdown-menu">
                  <li><a href="#/service/asbestos">Asbestos</a></li>
                  <li><a href="#/service/confined-space">Confined Space Hazard Assessment</a></li>
                  <li><a href="#/service/exposure-control-plans">Exposure Control Plans</a></li>
                  <li><a href="#/service/respirator-fit-testing">Respirator Fit Testing</a></li>
                  <li><a href="#/service/fume-hood-assessment">Fume Hood Assessment</a></li>
                  <li><a href="#/service/hazardous-substances">Hazardous Substances Management</a></li>
                  <li><a href="#/service/indoor-air-quality">Indoor Air Quality Testing</a></li>
                  <li><a href="#/service/noise-exposure">Noise Exposure Assessments</a></li>
                  <li><a href="#/service/mould-assessments">Mould Exposure Assessment</a></li>
                  <li><a href="#/service/ohs-compliance">OH&S Compliance Order Resolution</a></li>
                  <li><a href="#/service/procedure-policy-drafting">Procedure & Policy Drafting</a></li>
                  <li><a href="#/service/radon-testing">Radon Testing</a></li>
                  <li><a href="#/service/silica-exposure">Silica Exposure Assessments</a></li>
                  <li><a href="#/service/turnarounds-maintenance">Turnarounds & Maintenance Support</a></li>
                  <li><a href="#/service/welding-fume-exposure">Welding Fume Exposure Assessments</a></li>
                </ul>
              </li>
              <li><a href="#/training">Training</a></li>
              <li><a href="#/gallery">Gallery</a></li>
              <li><a href="#/blog">Blog</a></li>
              <li><a href="#/case-studies">Case Studies</a></li>
              <li><a href="#/contact">Contact Us</a></li>
            </ul>
          </nav>
          
          <div class="header__cta">
            <a href="#/contact" class="btn btn-primary">Request a Consultation</a>
          </div>
          
          <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  `;

  // Add sticky header behavior
  window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
      header.classList.add('is-sticky');
    } else {
      header.classList.remove('is-sticky');
    }
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');

  mobileToggle.addEventListener('click', () => {
    mainNav.classList.toggle('is-active');
    mobileToggle.classList.toggle('is-active');
  });

  // Close mobile menu when clicking a link
  const navLinks = mainNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-active');
      mobileToggle.classList.remove('is-active');
    });
  });

  // Dropdown functionality for desktop
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      const dropdownParent = toggle.closest('.has-dropdown');
      const dropdownMenu = dropdownParent?.querySelector('.dropdown-menu');
      if (window.innerWidth > 768) {
        e.preventDefault();
      } else if (dropdownParent) {
        e.preventDefault();
        dropdownParent.classList.toggle('is-active');
        if (dropdownMenu) {
          dropdownMenu.scrollTop = 0;
        }
      }
    });
  });

  const dropdownParents = document.querySelectorAll('.has-dropdown');
  dropdownParents.forEach(parent => {
    const dropdownMenu = parent.querySelector('.dropdown-menu');
    parent.addEventListener('mouseenter', () => {
      if (dropdownMenu) {
        dropdownMenu.scrollTop = 0;
      }
    });
  });
}

// Add header styles
const headerStyles = document.createElement('style');
headerStyles.textContent = `
  .header {
    background-color: var(--color-bg-white);
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: box-shadow var(--transition-base);
  }
  
  .header.is-sticky {
    box-shadow: var(--shadow-md);
  }
  
  .header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-md) 0;
  }
  
  .header__logo {
    flex-shrink: 0;
    padding-right: var(--space-md);
  }
  
  .header__logo a {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    text-decoration: none;
  }

  .logo-image {
    width: 44px;
    height: 44px;
    object-fit: contain;
  }

  .logo-text-group {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
  }
  
  .logo-text {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-primary);
  }
  
  .logo-subtext {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    font-weight: var(--font-weight-medium);
  }
  
  .header__nav {
      margin-left: auto;
      margin-right: var(--space-lg);
  }

  .header__nav .nav-list {
    display: flex;
    gap: var(--space-md);
    align-items: center;
  }
  
  .header__nav a {
    color: var(--color-text-primary);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-sm);
    transition: color var(--transition-fast);
    white-space: nowrap;
  }
  
  .header__nav a:hover,
  .header__nav a.active {
    color: var(--color-accent);
  }

  .header__cta .btn {
    white-space: nowrap;
  }
  
  .has-dropdown {
    position: relative;
  }
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--color-bg-white);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-lg);
    min-width: 280px;
    padding: var(--space-sm) 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all var(--transition-base);
    max-height: 400px;
    overflow-y: auto;
  }
  
  .has-dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  .dropdown-menu li {
    margin: 0;
  }
  
  .dropdown-menu a {
    display: block;
    padding: var(--space-sm) var(--space-lg);
    color: var(--color-text-secondary);
  }
  
  .dropdown-menu a:hover {
    background-color: var(--color-bg-light);
    color: var(--color-accent);
  }
  
  .mobile-menu-toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--space-sm);
  }
  
  .mobile-menu-toggle span {
    display: block;
    width: 24px;
    height: 3px;
    background-color: var(--color-primary);
    transition: all var(--transition-fast);
  }
  
  .mobile-menu-toggle.is-active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .mobile-menu-toggle.is-active span:nth-child(2) {
    opacity: 0;
  }
  
  .mobile-menu-toggle.is-active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
  
  @media (max-width: 1200px) {
    .header__cta {
      display: none;
    }
  }
  
  @media (max-width: 1024px) {
    .mobile-menu-toggle {
      display: flex;
    }
    
    .header__nav {
      position: fixed;
      top: 61px;
      left: 0;
      right: 0;
      background-color: var(--color-bg-white);
      border-bottom: 1px solid var(--color-border);
      max-height: 0;
      overflow: hidden;
      transition: max-height var(--transition-base);
      margin: 0;
      width: 100%;
    }
    
    .header__nav.is-active {
      max-height: calc(100vh - 61px);
      overflow-y: auto;
    }
    
    .header__nav .nav-list {
      flex-direction: column;
      gap: 0;
      align-items: stretch;
      padding: var(--space-md) 0;
    }
    
    .header__nav a {
      padding: var(--space-md) var(--space-lg);
      display: block;
      border-bottom: 1px solid var(--color-border-light);
    }
    
    .dropdown-menu {
      position: static;
      opacity: 1;
      visibility: visible;
      transform: none;
      border: none;
      box-shadow: none;
      padding-left: var(--space-lg);
      background-color: var(--color-bg-light);
      max-height: none;
    }
    
    .has-dropdown .dropdown-menu {
      display: none;
    }
    
    .has-dropdown.is-active .dropdown-menu {
      display: block;
    }
  }
`;

document.head.appendChild(headerStyles);
