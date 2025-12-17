/**
 * Manages navbar scroll effects and mobile menu
 */
export class NavbarManager {
  private navbar: HTMLElement | null;
  private menuToggle: HTMLElement | null;
  private navLinks: HTMLElement | null;
  private scrollThreshold: number = 20;

  constructor(scrollThreshold: number = 20) {
    this.scrollThreshold = scrollThreshold;
    this.navbar = document.querySelector('.navbar');
    this.menuToggle = document.querySelector('.menu-toggle');
    this.navLinks = document.querySelector('.nav-links');
  }

  public init(): void {
    if (!this.navbar) {
      console.warn('Navbar element not found');
      return;
    }

    window.addEventListener('scroll', () => {
      this.handleScroll();
    });

    // Initialize mobile menu toggle
    if (this.menuToggle && this.navLinks) {
      this.menuToggle.addEventListener('click', () => {
        this.toggleMenu();
      });

      // Close menu when clicking on a link
      const links = this.navLinks.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', () => {
          this.closeMenu();
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (this.navLinks?.classList.contains('active')) {
          const target = e.target as HTMLElement;
          if (!this.navLinks.contains(target) && !this.menuToggle?.contains(target)) {
            this.closeMenu();
          }
        }
      });
    }

    // Check initial scroll position
    this.handleScroll();
  }

  private handleScroll(): void {
    if (!this.navbar) return;

    if (window.scrollY > this.scrollThreshold) {
      this.navbar.classList.add('scrolled');
    } else {
      this.navbar.classList.remove('scrolled');
    }
  }

  private toggleMenu(): void {
    if (this.menuToggle && this.navLinks) {
      this.menuToggle.classList.toggle('active');
      this.navLinks.classList.toggle('active');
    }
  }

  private closeMenu(): void {
    if (this.menuToggle && this.navLinks) {
      this.menuToggle.classList.remove('active');
      this.navLinks.classList.remove('active');
    }
  }
}

