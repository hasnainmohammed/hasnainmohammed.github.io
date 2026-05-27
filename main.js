// main.js — Mohammed Hasnain Portfolio

// Mobile nav toggle
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  links.classList.toggle('open');
}

// Scroll-based nav shadow
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 40) {
    nav.style.borderBottomColor = 'rgba(0,170,255,0.2)';
  } else {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.06)';
  }
});

// Fade-in sections on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
  section.classList.add('fade-section');
  observer.observe(section);
});

// Mobile nav open styles injected
const style = document.createElement('style');
style.textContent = `
  .nav-links.open {
    display: flex !important;
    flex-direction: column;
    position: fixed;
    top: 60px; left: 0; right: 0;
    background: rgba(8,12,20,0.97);
    padding: 1.5rem 2rem;
    gap: 1.5rem;
    border-bottom: 1px solid rgba(0,170,255,0.15);
    z-index: 99;
  }
  .fade-section { opacity: 0; transform: translateY(20px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .fade-section.visible { opacity: 1; transform: none; }
  .hero { opacity: 1 !important; transform: none !important; }
`;
document.head.appendChild(style);
