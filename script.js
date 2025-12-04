document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isActive = mobileMenu.classList.contains('active');
            if (isActive) {
                mobileMenu.classList.remove('active');
                mobileMenu.style.display = 'none';
            } else {
                mobileMenu.classList.add('active');
                mobileMenu.style.display = 'flex';
            }
        });
    }

    // Close mobile menu when a link is clicked
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenu.style.display = 'none';
        });
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Typing Effect
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const words = ["Computer Science Student", "Front-end Developer", "Programmer"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typingText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 2000); // Wait before deleting
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500); // Wait before typing next word
            } else {
                const speed = isDeleting ? 100 : 200;
                setTimeout(type, speed);
            }
        }

        type();
    }

    // Particle Network Animation
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray;

        // Mouse position
        let mouse = {
            x: null,
            y: null,
            radius: (canvas.height / 80) * (canvas.width / 80)
        }

        window.addEventListener('mousemove', (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        });

        // Create Particle Class
        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            // Method to draw individual particle
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = '#818cf8'; // Primary color (Lighter for dark mode)
                ctx.fill();
            }

            // Check particle position, check mouse position, move the particle, draw the particle
            update() {
                // Check if particle is still within canvas
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }

                // Check collision detection - mouse position / particle position
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius + this.size) {
                    if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                        this.x += 10;
                    }
                    if (mouse.x > this.x && this.x > this.size * 10) {
                        this.x -= 10;
                    }
                    if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                        this.y += 10;
                    }
                    if (mouse.y > this.y && this.y > this.size * 10) {
                        this.y -= 10;
                    }
                }

                // Move particle
                this.x += this.directionX;
                this.y += this.directionY;

                // Draw particle
                this.draw();
            }
        }

        // Create particle array
        function init() {
            particlesArray = [];
            let numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 3) + 1; // Smaller particles
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 0.4) - 0.2; // Slower speed
                let directionY = (Math.random() * 0.4) - 0.2; // Slower speed
                let color = '#818cf8';

                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        // Animation Loop
        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, innerWidth, innerHeight);

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
        }

        // Resize event
        window.addEventListener('resize', () => {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            mouse.radius = ((canvas.height / 80) * (canvas.height / 80));
            init();
        });

        // Mouse out event
        window.addEventListener('mouseout', () => {
            mouse.x = undefined;
            mouse.y = undefined;
        });

        init();
        animate();
    }
});
