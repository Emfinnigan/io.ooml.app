/**
 * Handles mouse interactions: 3D tilt effects and parallax
 */
export class MouseInteractions {
    constructor() {
        this.maxRotationX = 3;
        this.maxRotationY = 3;
        this.heroVisual = document.querySelector('.app-window');
        this.heroContainer = document.querySelector('.hero-container');
    }
    init() {
        this.init3DTilt();
        this.initParallaxShapes();
    }
    /**
     * Initialize 3D tilt effect on hero visual
     */
    init3DTilt() {
        if (!this.heroVisual || !this.heroContainer) {
            return;
        }
        window.addEventListener('mousemove', (e) => {
            this.handle3DTilt(e);
        });
    }
    handle3DTilt(e) {
        if (!this.heroVisual)
            return;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const x = e.clientX - centerX;
        const y = e.clientY - centerY;
        const rotateX = (y / centerY) * -this.maxRotationX;
        const rotateY = (x / centerX) * this.maxRotationY;
        this.heroVisual.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
    /**
     * Initialize parallax effect for floating shapes
     */
    initParallaxShapes() {
        const shapes = document.querySelectorAll('.abstract-shape');
        if (shapes.length === 0) {
            return;
        }
        document.addEventListener('mousemove', (e) => {
            this.handleParallax(e, shapes);
        });
    }
    handleParallax(e, shapes) {
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 15;
            const xOffset = (window.innerWidth / 2 - e.clientX) / speed;
            const yOffset = (window.innerHeight / 2 - e.clientY) / speed;
            shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    }
}
//# sourceMappingURL=mouse-interactions.js.map