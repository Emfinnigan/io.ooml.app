import { NavbarManager } from './navbar';
import { ScrollAnimations } from './scroll-animations';
import { SmoothScroll } from './smooth-scroll';
import { MouseInteractions } from './mouse-interactions';
/**
 * Main application entry point
 */
class App {
    constructor() {
        this.navbarManager = new NavbarManager();
        this.scrollAnimations = new ScrollAnimations();
        this.smoothScroll = new SmoothScroll();
        this.mouseInteractions = new MouseInteractions();
    }
    init() {
        this.navbarManager.init();
        this.scrollAnimations.init();
        this.smoothScroll.init();
        this.mouseInteractions.init();
    }
}
// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
    
    // Handle video autoplay on scroll
    const video = document.querySelector('.demo-video');
    if (video) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.play().catch(() => {
                        // Autoplay was prevented, ignore
                    });
                } else {
                    entry.target.pause();
                }
            });
        }, { threshold: 0.5 });
        
        videoObserver.observe(video);
    }
});
//# sourceMappingURL=main.js.map