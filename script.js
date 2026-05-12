// 1. Custom Cursor Logic
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Cursor expansion on hover
const links = document.querySelectorAll('.hover-link, .btn, .bento-item');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(4)';
        cursor.style.background = 'rgba(0, 255, 136, 0.2)';
    });
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = '#00ff88';
    });
});

// 2. Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');
const scrollReveal = () => {
    revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', scrollReveal);

// 3. Set Current Year
document.getElementById('year').textContent = new Date().getFullYear();

// Trigger reveal on load
window.addEventListener('load', scrollReveal);