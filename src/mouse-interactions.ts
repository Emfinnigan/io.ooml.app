/**
 * Handles mouse interactions: 3D tilt effects and parallax
 */
export class MouseInteractions {
  private heroVisual: HTMLElement | null;
  private heroContainer: HTMLElement | null;
  private maxRotationX: number = 3;
  private maxRotationY: number = 3;

  constructor() {
    this.heroVisual = document.querySelector('.app-window');
    this.heroContainer = document.querySelector('.hero-container');
  }

  public init(): void {
    this.init3DTilt();
    this.initParallaxShapes();
  }

  /**
   * Initialize 3D tilt effect on hero visual
   */
  private init3DTilt(): void {
    if (!this.heroVisual || !this.heroContainer) {
      return;
    }

    window.addEventListener('mousemove', (e: MouseEvent) => {
      this.handle3DTilt(e);
    });
  }

  private handle3DTilt(e: MouseEvent): void {
    if (!this.heroVisual) return;

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
  private initParallaxShapes(): void {
    const shapes = document.querySelectorAll<HTMLElement>('.abstract-shape');

    if (shapes.length === 0) {
      return;
    }

    document.addEventListener('mousemove', (e: MouseEvent) => {
      this.handleParallax(e, shapes);
    });
  }

  private handleParallax(e: MouseEvent, shapes: NodeListOf<HTMLElement>): void {
    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 15;
      const xOffset = (window.innerWidth / 2 - e.clientX) / speed;
      const yOffset = (window.innerHeight / 2 - e.clientY) / speed;

      shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
  }
}

