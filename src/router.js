// Simple hash-based router for the application

class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;

        // Listen to hash changes
        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('load', () => this.handleRoute());
    }

    // Register a route
    addRoute(path, handler) {
        this.routes[path] = handler;
    }

    // Handle route changes
    async handleRoute() {
        const hash = window.location.hash.slice(1) || '/';
        const [path, ...params] = hash.split('/').filter(Boolean);
        const fullPath = path || '/';

        // Check for dynamic routes (e.g., service detail pages, blog posts)
        if (fullPath === 'service' && params[0]) {
            this.currentRoute = 'service';
            if (this.routes['service']) {
                await this.routes['service'](params[0]);
            }
        } else if (fullPath === 'blog' && params[0]) {
            this.currentRoute = 'blog-detail';
            if (this.routes['blog-detail']) {
                await this.routes['blog-detail'](params[0]);
            }
        } else if (this.routes[fullPath]) {
            this.currentRoute = fullPath;
            await this.routes[fullPath]();
        } else {
            // 404 - redirect to home
            window.location.hash = '#/';
        }

        // Scroll to top on route change
        window.scrollTo(0, 0);

        // Update active navigation
        this.updateActiveNav();

        // Initialize scroll animations for new page content
        this.initScrollAnimations();
    }

    // Update active navigation state
    updateActiveNav() {
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${window.location.hash.slice(1)}` ||
                (window.location.hash === '' && href === '#/')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Initialize scroll animations
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        // Observe all elements with scroll-animate class
        document.querySelectorAll('.scroll-animate').forEach(el => {
            observer.observe(el);
        });
    }

    // Navigate to a specific route
    navigate(path) {
        window.location.hash = `#${path}`;
    }
}

export default new Router();
