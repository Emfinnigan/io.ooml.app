/**
 * Manages scroll reveal animations using Intersection Observer
 */
export class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };
        this.observer = new IntersectionObserver((entries) => {
            this.handleIntersection(entries);
        }, this.observerOptions);
    }
    init() {
        const elementsToAnimate = document.querySelectorAll('.scroll-reveal');
        elementsToAnimate.forEach(el => {
            this.observer.observe(el);
        });
    }
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                this.observer.unobserve(entry.target);
            }
        });
    }
}
//# sourceMappingURL=scroll-animations.js.map