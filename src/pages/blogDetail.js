// Blog detail page

import { getBlogPostBySlug, getRecentBlogPosts } from '../data/blogPosts.js';

export function renderBlogDetailPage(slug) {
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return `
      <div class="page page-transition">
        <div class="container" style="padding: var(--space-3xl) 0; text-align: center;">
          <h1>Blog Post Not Found</h1>
          <p>Sorry, we couldn't find the blog post you're looking for.</p>
          <a href="#/blog" class="btn btn-primary" style="margin-top: var(--space-xl);">Back to Blog</a>
        </div>
      </div>
    `;
  }

  const recentPosts = getRecentBlogPosts(3).filter(p => p.id !== post.id).slice(0, 2);

  return `
    <div class="page page-blog-detail page-transition">
      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <div class="container">
          <a href="#/blog" class="breadcrumb__link">Blog & Resources</a>
          <span class="breadcrumb__separator">/</span>
          <span class="breadcrumb__current">${post.title}</span>
        </div>
      </div>

      <!-- Article Header -->
      <article class="blog-article">
        <div class="blog-article__header">
          <div class="container container--narrow">
            <div class="blog-article__meta">
              <span class="blog-article__category">${post.category}</span>
              <span class="blog-article__divider">•</span>
              <span class="blog-article__date">${post.date}</span>
              <span class="blog-article__divider">•</span>
              <span class="blog-article__read-time">${post.readTime}</span>
            </div>
            <h1 class="blog-article__title">${post.title}</h1>
            <p class="blog-article__excerpt">${post.excerpt}</p>
          </div>
        </div>

        <!-- Featured Image -->
        <div class="blog-article__image-wrapper">
          <div class="container">
            <img 
              src="${post.image}" 
              alt="${post.title}"
              class="blog-article__image"
              onerror="this.style.display='none'"
            >
          </div>
        </div>

        <!-- Article Content -->
        <div class="blog-article__content">
          <div class="container container--narrow">
            ${post.content}

            <!-- Share & Contact -->
            <div class="blog-article__footer">
              <div class="blog-article__footer-cta">
                <h3>Need Expert Assistance?</h3>
                <p>Our team of certified professionals is ready to help with your specific needs.</p>
                <a href="#/contact" class="btn btn-primary">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <!-- Related Posts -->
      ${recentPosts.length > 0 ? `
        <section class="section section--alt">
          <div class="container">
            <h2 style="text-align: center; margin-bottom: var(--space-2xl);">Related Articles</h2>
            <div class="grid grid--2">
              ${recentPosts.map(relatedPost => `
                <article class="card hover-lift">
                  <img 
                    src="${relatedPost.image}" 
                    alt="${relatedPost.title}"
                    style="width: 100%; height: 200px; object-fit: cover; border-radius: var(--radius-lg) var(--radius-lg) 0 0; margin: calc(var(--space-xl) * -1) calc(var(--space-xl) * -1) var(--space-lg);"
                    onerror="this.style.display='none'"
                  >
                  <div style="padding: 0;">
                    <p style="color: var(--color-accent); font-size: var(--font-size-sm); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-sm);">
                      ${relatedPost.date}
                    </p>
                    <h3 class="card__title">${relatedPost.title}</h3>
                    <p class="card__description">${relatedPost.excerpt}</p>
                    <a href="#/blog/${relatedPost.slug}" class="card__link">Read Article</a>
                  </div>
                </article>
              `).join('')}
            </div>
          </div>
        </section>
      ` : ''}
    </div>
  `;
}
