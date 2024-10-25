function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


const movingObject = document.querySelector('.ball');
let x = 50; 
let y = 50; 
let dx = 2; 
let dy = 2; 
const speed = 10; 

function bounce() {
    
    x += dx;
    y += dy;

    if (x + movingObject.offsetWidth >= window.innerWidth || x <= 0) {
        dx = -dx; 
    }

    if (y + movingObject.offsetHeight >= window.innerHeight || y <= 0) {
        dy = -dy; 
    }

    movingObject.style.transform = `translate(${x}px, ${y}px)`;

    setTimeout(bounce, speed);
}

bounce();