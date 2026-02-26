// Lightbox component for gallery images

export function createLightbox() {
    // Check if lightbox already exists
    if (document.getElementById('lightbox')) return;

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
    <div class="lightbox__content">
      <button class="lightbox__close" aria-label="Close lightbox">&times;</button>
      <img src="" alt="" class="lightbox__image" id="lightbox-image">
    </div>
  `;

    document.body.appendChild(lightbox);

    // Close lightbox functionality
    const closeBtn = lightbox.querySelector('.lightbox__close');
    closeBtn.addEventListener('click', () => closeLightbox());

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('is-active')) {
            closeLightbox();
        }
    });
}

export function openLightbox(imageSrc, imageAlt = '') {
    const lightbox = document.getElementById('lightbox');
    const image = document.getElementById('lightbox-image');

    if (lightbox && image) {
        image.src = imageSrc;
        image.alt = imageAlt;
        lightbox.classList.add('is-active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

export function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('is-active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}
