// Blog page

import { blogPosts } from '../data/blogPosts.js';

export function renderBlogPage() {
  const blogCards = blogPosts.map(post => `
    <article class="card hover-lift scroll-animate">
      <div class="blog-card__image-wrapper">
        <img 
          src="${post.image}" 
          alt="${post.title}"
          class="blog-card__image"
          onerror="this.style.display='none'"
        >
        <div class="blog-card__category-badge">${post.category}</div>
      </div>
      <div class="blog-card__content">
        <div class="blog-card__meta">
          <span class="blog-card__date">${post.date}</span>
          <span class="blog-card__divider">•</span>
          <span class="blog-card__read-time">${post.readTime}</span>
        </div>
        <h3 class="card__title">${post.title}</h3>
        <p class="card__description">${post.excerpt}</p>
        <a href="#/blog/${post.slug}" class="card__link">
          Read Full Article
        </a>
      </div>
    </article>
  `).join('');

  return `
    <div class="page page-blog page-transition">
      <!-- Page Hero -->
      <div class="page-hero">
        <div class="container">
          <h1 class="page-hero__title">Blog & Resources</h1>
          <p class="page-hero__description">
            Expert insights on workplace safety, environmental health, and regulatory compliance
          </p>
        </div>
      </div>
      
      <!-- Blog Grid -->
      <section class="section">
        <div class="container">
          <div class="grid grid--2">
            ${blogCards}
          </div>
        </div>
      </section>
      
      <!-- Contact CTA -->
      <section class="section section--alt">
        <div class="container">
          <div class="scroll-animate" style="max-width: 600px; margin: 0 auto; text-align: center;">
            <h2>Have a Question?</h2>
            <p style="font-size: var(--font-size-lg); margin-bottom: var(--space-xl);">
              Get in touch through our contact form and we’ll respond within 24 hours.
            </p>
            <a href="#/contact" class="btn btn-primary btn-large">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  `;
}
