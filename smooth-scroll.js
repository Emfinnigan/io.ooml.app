/**
 * Handles smooth scrolling for anchor links
 */
export class SmoothScroll {
    init() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                this.handleAnchorClick(e, anchor);
            });
        });
    }
    handleAnchorClick(e, anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') {
            return;
        }
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}
//# sourceMappingURL=smooth-scroll.js.map