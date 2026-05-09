// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.padding = '1rem 0';
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .project-card, .skill-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.8s ease';
    observer.observe(el);
});

// Typing Effect for Hero Title (Optional)
const heroTitle = document.querySelector('.main-title');
const titleText = "Hi, I'm NV Web Developer";
let i = 0;

function typeWriter() {
    if (i < titleText.length) {
        heroTitle.innerHTML += titleText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Uncomment below for typing effect
// window.addEventListener('load', () => {
//     heroTitle.innerHTML = '';
//     typeWriter();
// });

// Mouse Follower Effect
const mouseFollower = document.createElement('div');
mouseFollower.classList.add('mouse-follower');
document.body.appendChild(mouseFollower);

document.addEventListener('mousemove', (e) => {
    mouseFollower.style.left = e.clientX + 'px';
    mouseFollower.style.top = e.clientY + 'px';
});

// Add mouse follower styles to CSS (add this to style.css)
/*
.mouse-follower {
    position: fixed;
    width: 10px;
    height: 10px;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    mix-blend-mode: difference;
}

.mouse-follower:hover {
    transform: scale(2);
}
*/
// Portfolio Lightbox
document.addEventListener('DOMContentLoaded', function() {
  // WhatsApp click animation
  document.querySelectorAll('.whatsapp-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });
});
