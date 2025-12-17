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
});
//# sourceMappingURL=main.js.map