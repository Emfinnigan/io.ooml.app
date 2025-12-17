/**
 * Handles smooth scrolling for anchor links
 */
export class SmoothScroll {
  public init(): void {
    const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        this.handleAnchorClick(e, anchor);
      });
    });
  }

  private handleAnchorClick(e: MouseEvent, anchor: HTMLAnchorElement): void {
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

