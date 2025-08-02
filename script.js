// Mobile Navigation Toggle - Moved to DOM ready
// These will be initialized in the DOMContentLoaded event

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Initialize EmailJS
(function() {
    try {
        if (typeof emailjs !== 'undefined') {
            emailjs.init("TlrodKCzAf0khyRIr");
            console.log('EmailJS initialized in script.js');
        } else {
            console.log('EmailJS not available in script.js');
        }
    } catch (error) {
        console.error('EmailJS initialization error in script.js:', error);
    }
})();

// Animation Functions
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

function animateStagger() {
    const elements = document.querySelectorAll('.stagger-animation');
    
    // Simple animation: add animated class immediately with staggered delays
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animated');
        }, index * 100);
    });
}

function addHoverAnimations() {
    // Add hover animations to cards
    const cards = document.querySelectorAll('.feature-card, .module-card, .benefit-item, .expertise-card, .country-card, .story-card, .team-member');
    cards.forEach(card => {
        card.classList.add('hover-lift');
    });
    
    // Add hover animations to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.classList.add('hover-scale');
    });
    
    // Add hover animations to icons
    const icons = document.querySelectorAll('.feature-icon, .module-header i, .expertise-icon, .member-avatar');
    icons.forEach(icon => {
        icon.classList.add('hover-rotate');
    });
}

function addPageLoadAnimations() {
    // Hero section animations
    const heroTitle = document.querySelector('.hero-content h1');
    const heroSubtitle = document.querySelector('.hero-content p');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroCard = document.querySelector('.hero-card');
    
    if (heroTitle) {
        heroTitle.classList.add('slide-in-left', 'delay-100');
    }
    if (heroSubtitle) {
        heroSubtitle.classList.add('slide-in-left', 'delay-200');
    }
    if (heroButtons) {
        heroButtons.classList.add('slide-in-left', 'delay-300');
    }
    if (heroCard) {
        heroCard.classList.add('slide-in-right', 'delay-400');
    }
    
    // About page animations
    const aboutStats = document.querySelectorAll('.stat-item');
    aboutStats.forEach((stat, index) => {
        stat.classList.add('bounce-in', `delay-${(index + 1) * 100}`);
    });
    
    // Module detail page animations
    const moduleIcon = document.querySelector('.module-icon');
    if (moduleIcon) {
        moduleIcon.classList.add('rotate-in');
    }
    
    const moduleTitle = document.querySelector('.module-detail-header h1');
    if (moduleTitle) {
        moduleTitle.classList.add('slide-in-up', 'delay-200');
    }
    
    const moduleSubtitle = document.querySelector('.module-subtitle');
    if (moduleSubtitle) {
        moduleSubtitle.classList.add('slide-in-up', 'delay-300');
    }
}

function addFloatingCTAAnimation() {
    const ctaToggle = document.querySelector('.cta-toggle');
    if (ctaToggle) {
        ctaToggle.classList.add('pulse');
    }
    
    // Enhanced floating CTA functionality
    const floatingCTA = document.querySelector('.floating-cta');
    if (floatingCTA) {
        const ctaOptions = floatingCTA.querySelector('.cta-options');
        if (ctaOptions) {
            // Force visibility on hover
            floatingCTA.addEventListener('mouseenter', () => {
                ctaOptions.style.setProperty('opacity', '1', 'important');
                ctaOptions.style.setProperty('visibility', 'visible', 'important');
                ctaOptions.style.setProperty('transform', 'translateY(-20px)', 'important');
                ctaOptions.style.setProperty('pointer-events', 'auto', 'important');
            });
            
            floatingCTA.addEventListener('mouseleave', () => {
                ctaOptions.style.setProperty('opacity', '0', 'important');
                ctaOptions.style.setProperty('visibility', 'hidden', 'important');
                ctaOptions.style.setProperty('transform', 'translateY(20px)', 'important');
                ctaOptions.style.setProperty('pointer-events', 'none', 'important');
            });
        }
    }
}

function addTypewriterEffect() {
    const typewriterElements = document.querySelectorAll('.typewriter');
    typewriterElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.width = '0';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                element.style.width = (i + 1) + 'ch';
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing after a delay
        setTimeout(typeWriter, 1000);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    animateOnScroll();
    animateStagger();
    addHoverAnimations();
    addPageLoadAnimations();
    addFloatingCTAAnimation();
    addTypewriterEffect();
    initBannerCarousel();
    initAnnouncementBar();

    // Ensure floating CTA text is visible on all pages
    const floatingCta = document.querySelector('.floating-cta');
    if (floatingCta) {
        const ctaOptions = floatingCta.querySelectorAll('.cta-option');
        ctaOptions.forEach(option => {
            option.style.opacity = '1';
            option.style.visibility = 'visible';

            const spans = option.querySelectorAll('span');
            spans.forEach(span => {
                span.style.opacity = '1';
                span.style.visibility = 'visible';
                span.style.color = 'inherit';
                span.style.fontWeight = '600';
                span.style.display = 'inline-block';
            });

            const icons = option.querySelectorAll('i');
            icons.forEach(icon => {
                icon.style.opacity = '1';
                icon.style.visibility = 'visible';
            });
        });
    }

    // Additional force visibility for specific pages
    if (document.body.classList.contains('clinical-management') || document.body.classList.contains('pharmacy-management')) {
        const ctaSpans = document.querySelectorAll('.cta-option span');
        ctaSpans.forEach(span => {
            span.style.setProperty('opacity', '1', 'important');
            span.style.setProperty('visibility', 'visible', 'important');
            span.style.setProperty('color', 'inherit', 'important');
            span.style.setProperty('font-weight', '600', 'important');
            span.style.setProperty('display', 'inline-block', 'important');
        });
    }
});

// Announcement Bar Functionality
function initAnnouncementBar() {
    const announcementBar = document.querySelector('.announcement-bar');
    if (!announcementBar) return;

    // Add click tracking for analytics (only for clickable items)
    const clickableItems = announcementBar.querySelectorAll('.announcement-item a');
    clickableItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Track click events for analytics
            const action = this.closest('.announcement-item').querySelector('i').className.includes('envelope') ? 'email_click' : 'phone_click';
            
            // You can add analytics tracking here
            console.log('Announcement CTA clicked:', action);
        });
    });

    // Add smooth scroll effect when clicking on phone numbers
    const phoneLinks = announcementBar.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add a small delay to show the click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Add hover effects for better UX (only for clickable items)
    const clickableAnnouncementItems = announcementBar.querySelectorAll('.announcement-item a');
    clickableAnnouncementItems.forEach(item => {
        const parentItem = item.closest('.announcement-item');
        parentItem.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        parentItem.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Form submission handling - Moved to contact.html to avoid conflicts
// The contact form is handled specifically in contact.html

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .module-card, .benefit-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Button click animations
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Counter animation for benefits section
function animateCounters() {
    const counters = document.querySelectorAll('.benefit-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current).toString().padStart(2, '0');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toString().padStart(2, '0');
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when benefits section is visible
const benefitsSection = document.querySelector('.benefits');
if (benefitsSection) {
    const benefitsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                benefitsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    benefitsObserver.observe(benefitsSection);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    }
});

// Touch gesture support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    const navMenu = document.querySelector('.nav-menu');
    
    if (Math.abs(diff) > swipeThreshold && navMenu) {
        if (diff > 0 && navMenu.classList.contains('active')) {
            // Swipe left - close menu
            navMenu.classList.remove('active');
        } else if (diff < 0 && !navMenu.classList.contains('active')) {
            // Swipe right - open menu
            navMenu.classList.add('active');
        }
    }
}

// Banner Carousel Functionality
function initBannerCarousel() {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.banner-dot');
    const prevBtn = document.querySelector('.banner-prev');
    const nextBtn = document.querySelector('.banner-next');
    
    // Check if carousel elements exist
    if (!slides.length || !dots.length) {
        console.log('Banner carousel elements not found, skipping initialization');
        return;
    }
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    function showSlide(index) {
        // Check if elements exist before accessing them
        if (!slides[index] || !dots[index]) {
            console.log('Carousel elements not found for index:', index);
            return;
        }
        
        // Remove active class from all slides and dots
        slides.forEach(slide => {
            if (slide) slide.classList.remove('active');
        });
        dots.forEach(dot => {
            if (dot) dot.classList.remove('active');
        });
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }
    
    // Event listeners for navigation buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        if (dot) {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        }
    });
    
    // Auto-play functionality
    let autoPlayInterval;
    
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }
    
    // Start auto-play only if carousel exists
    if (slides.length > 0) {
        startAutoPlay();
    }
    
    // Pause auto-play on hover
    const carousel = document.querySelector('.banner-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
    }
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    if (carousel) {
        carousel.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        carousel.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleCarouselSwipe();
        });
    }
    
    function handleCarouselSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                nextSlide();
            } else {
                // Swipe right - previous slide
                prevSlide();
            }
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
}

// DOM Ready Function - Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing functionality...');
    
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
    
    // Initialize all functions
    animateOnScroll();
    animateStagger();
    addHoverAnimations();
    addPageLoadAnimations();
    addFloatingCTAAnimation();
    addTypewriterEffect();
    initAnnouncementBar();
    animateCounters();
    initBannerCarousel();
    
    console.log('All functionality initialized');
}); 