/**
 * Manages scroll reveal animations using Intersection Observer
 */
export class ScrollAnimations {
  private observer: IntersectionObserver;
  private observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  constructor() {
    this.observer = new IntersectionObserver((entries) => {
      this.handleIntersection(entries);
    }, this.observerOptions);
  }

  public init(): void {
    const elementsToAnimate = document.querySelectorAll('.scroll-reveal');
    
    elementsToAnimate.forEach(el => {
      this.observer.observe(el);
    });
  }

  private handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        this.observer.unobserve(entry.target);
      }
    });
  }
}

