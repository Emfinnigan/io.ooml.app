document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });

    // Hero 3D Tilt Effect - Adjusted for Centered Layout
    const heroVisual = document.querySelector('.app-window');
    const heroContainer = document.querySelector('.hero-container');

    if (heroVisual && heroContainer) {
        // Use window for mouse move to make it more responsive across the whole screen
        window.addEventListener('mousemove', (e) => {
            // Calculate center of the screen
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // Calculate distance from center
            const x = e.clientX - centerX;
            const y = e.clientY - centerY;

            // Gentler rotation for the larger visual
            const rotateX = (y / centerY) * -3; // Max 3 deg rotation
            const rotateY = (x / centerX) * 3;

            heroVisual.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    }

    // Parallax effect for floating elements
    document.addEventListener('mousemove', (e) => {
        const shapes = document.querySelectorAll('.abstract-shape');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 15;
            const xOffset = (window.innerWidth / 2 - e.clientX) / speed;
            const yOffset = (window.innerHeight / 2 - e.clientY) / speed;

            shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
});
