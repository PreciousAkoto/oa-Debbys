document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card');

    cards.forEach(card => {
        card.style.cursor = 'pointer';

        card.addEventListener('click', () => {
            const pastryName = card.querySelector('h3').innerText;
            
            // Check if we are currently on the menu page
            const isMenuPage = window.location.pathname.includes('menu.html');

            if (isMenuPage) {
                /* --- MENU PAGE BEHAVIOR --- */
                // 1. Get the price from the span tag
                const price = card.querySelector('span').innerText;
                
                // 2. Prompt for WhatsApp Order
                const userWantsToOrder = confirm(
                    `Item: ${pastryName}\nPrice: ${price}\n\nWould you like to send this order to OA Debbys on WhatsApp?`
                );
                
                if (userWantsToOrder) {
                    const phone = "233541400155";
                    const message = encodeURIComponent(
                        `Hello! I want to order the ${pastryName} (${price}). Is it available?`
                    );
                    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
                }

            } else {
                /* --- HOME PAGE BEHAVIOR --- */
                // 1. Tell the user they are being redirected
                alert(`We are directing you to our menu for pricing and availability of our ${pastryName}.`);
                
                // 2. Move to the menu page
                window.location.href = 'menu.html';
            }
        });
    });

    // Navigation and other site features
    handleNavStyles();
});

// Extra: Makes the navigation look professional on scroll
function handleNavStyles() {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    
    /* --- 2. ABOUT PAGE: SCROLL REVEAL & STATS --- */
    // This makes mission/vision cards slide in as you scroll down
    const aboutCards = document.querySelectorAll('.card, .story');
    if (aboutCards.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, { threshold: 0.1 });

        aboutCards.forEach(c => {
            c.style.opacity = "0";
            c.style.transform = "translateY(30px)";
            c.style.transition = "all 0.8s ease-out";
            observer.observe(c);
        });
    }

    /* --- 3. SERVICES PAGE: TYPEWRITER EFFECT --- */
    const serviceHeader = document.querySelector('.page-header p');
    if (window.location.pathname.includes('services.html') && serviceHeader) {
        const text = serviceHeader.innerText;
        serviceHeader.innerText = '';
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                serviceHeader.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        typeWriter();
    }

    /* --- 4. SERVICES PAGE: IMAGE HOVER EFFECTS --- */
    const serviceImages = document.querySelectorAll('.service-image img');
    serviceImages.forEach(img => {
        img.addEventListener('mouseover', () => img.style.filter = 'brightness(1.1)');
        img.addEventListener('mouseout', () => img.style.filter = 'brightness(1)');
    });

    /* --- 5. GLOBAL: NAV SCROLL EFFECT --- */
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            nav.style.background = '#fff';
        } else {
            nav.style.boxShadow = 'none';
        }
    });

});
