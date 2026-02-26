// Gallery page

import { createLightbox, openLightbox } from '../components/lightbox.js';

export function renderGalleryPage() {
    setTimeout(() => {
        createLightbox();
        initializeGalleryImages();
    }, 100);

    return `
    <div class="page page-gallery page-transition">
      <!-- Page Hero -->
      <div class="page-hero">
        <div class="container">
          <h1 class="page-hero__title">Gallery</h1>
          <p class="page-hero__description">
            See our team in action conducting professional assessments and workplace safety services
          </p>
        </div>
      </div>
      
      <!-- Gallery Grid -->
      <section class="section">
        <div class="container">
          <div class="grid grid--3">
            <div class="gallery-item scroll-animate">
              <img src="/images/20210901_032251_resized.jpg" alt="Respirator fit testing in progress" data-gallery-image>
            </div>
            
            <div class="gallery-item scroll-animate">
              <img src="/images/20211116_130237_resized.jpg" alt="Air quality sampling equipment" data-gallery-image>
            </div>
            
            <div class="gallery-item scroll-animate">
              <img src="/images/20221117_084816_resized.jpg" alt="Industrial workplace inspection" data-gallery-image>
            </div>
            
            <div class="gallery-item scroll-animate">
              <img src="/images/20221118_165123_resized.jpg" alt="Noise exposure assessment" data-gallery-image>
            </div>
            
            <div class="gallery-item scroll-animate">
              <img src="/images/20240225_114112.jpg" alt="Confined space evaluation" data-gallery-image>
            </div>
            
            <div class="gallery-item scroll-animate">
              <img src="/images/IMG-20240808-WA0110.jpg" alt="Laboratory analysis equipment" data-gallery-image>
            </div>
            
            <div class="gallery-item scroll-animate">
              <img src="/images/Picture3.png" alt="Asbestos sampling procedure" data-gallery-image>
            </div>
            
            <div class="gallery-item scroll-animate">
              <img src="/images/Picture1.jpg" alt="Industrial hygiene assessment" data-gallery-image>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function initializeGalleryImages() {
    const galleryImages = document.querySelectorAll('[data-gallery-image]');
    galleryImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            openLightbox(img.src, img.alt);
        });
    });
}
