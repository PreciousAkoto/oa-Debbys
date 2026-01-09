// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // 1. Navbar Scroll Effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '10px 10%';
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        } else {
            nav.style.padding = '20px 10%';
            nav.style.backgroundColor = '#fff';
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // 2. Card Interaction
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const pastryName = card.querySelector('h3').textContent;
            alert(`You clicked on our ${pastryName}! Check our Menu page for pricing and availability.`);
        });
        
        // Add a pointer cursor to let users know they can click
        card.style.cursor = 'pointer';
    });

    // 3. Simple Fade-in Animation for Cards
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        // Initial state for animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});



// --- OA Debbys About Page Logic ---

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navigation Shadow on Scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            nav.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // 2. Scroll Reveal for Mission & Vision Cards
    const cards = document.querySelectorAll('.card, .story');
    
    // Set initial hidden state via JS so it still works if JS is disabled
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s ease-out';
    });

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Run on scroll and once on load
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); 
});




document.addEventListener('DOMContentLoaded', () => {
    const menuCards = document.querySelectorAll('.feature-card');

    menuCards.forEach(card => {
        // Change cursor to let users know they can click the card
        card.style.cursor = 'pointer';

        card.addEventListener('click', () => {
            // 1. Get the specific details for THIS card
            const pastryName = card.querySelector('h3').innerText;
            const priceTag = card.querySelector('span').innerText;

            // 2. Create a professional confirmation message
            // We use backticks (`) to combine text and variables easily
            const message = `You've selected: ${pastryName}\nPrice: ${priceTag}\n\nWould you like to send us a WhatsApp message to place this order?`;

            // 3. Ask the user if they want to order
            if (confirm(message)) {
                // If they click 'OK', it opens WhatsApp with a pre-filled message
                const whatsappNumber = "233541400155"; // Your number
                const encodedMessage = encodeURIComponent(`Hello OA Debbys, I would like to order the ${pastryName} for ${priceTag}.`);
                window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
            }
        });
    });
});




// OA Debbys Services Page Logic
document.addEventListener('DOMContentLoaded', () => {

    // 1. Scroll Reveal Animation for Service Rows
    const serviceRows = document.querySelectorAll('.service-row');

    const revealOptions = {
        threshold: 0.15, // Trigger when 15% of the row is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const rowObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                rowObserver.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, revealOptions);

    serviceRows.forEach(row => {
        // Prepare initial state (hidden)
        row.style.opacity = "0";
        row.style.transform = "translateY(40px)";
        row.style.transition = "all 0.8s ease-out";
        rowObserver.observe(row);
    });

    // 2. Add a 'visible' class helper
    // This is applied by the Observer above
    const style = document.createElement('style');
    style.innerHTML = `
        .service-row.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // 3. Simple Image Hover Logic (Optional refinement)
    const images = document.querySelectorAll('.service-image img');
    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transition = "transform 0.5s ease";
            img.style.transform = "scale(1.03)";
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = "scale(1)";
        });
    });
});




document.addEventListener('DOMContentLoaded', () => {
    // 1. WhatsApp Button Pulse Effect
    const whatsappBtn = document.querySelector('.btn-whatsapp');
    if (whatsappBtn) {
        setInterval(() => {
            whatsappBtn.style.transform = 'scale(1.05)';
            setTimeout(() => {
                whatsappBtn.style.transform = 'scale(1)';
            }, 300);
        }, 3000); // Pulses every 3 seconds
    }

    // 2. Real-time Open/Closed Status
    const statusBadge = document.getElementById('status-badge');
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const hour = now.getHours();

    let isOpen = false;

    if (day === 0) { // Sunday
        if (hour >= 9 && hour < 16) isOpen = true;
    } else { // Mon - Sat
        if (hour >= 7 && hour < 19) isOpen = true;
    }

    if (isOpen) {
        statusBadge.innerText = "● We are currently OPEN";
        statusBadge.style.color = "#2e7d32"; // Green
    } else {
        statusBadge.innerText = "○ We are currently CLOSED";
        statusBadge.style.color = "#c62828"; // Red
    }
});