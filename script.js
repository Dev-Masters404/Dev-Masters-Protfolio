// Navbar dynamic on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Reveal on scroll
const cards = document.querySelectorAll('.reveal-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
cards.forEach(card => observer.observe(card));

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Language toggle
const langToggle = document.getElementById('langToggle');
const translatable = document.querySelectorAll('[data-ar][data-en]');
let currentLang = 'ar';

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  langToggle.textContent = currentLang === 'ar' ? 'EN' : 'AR';
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  translatable.forEach(el => el.textContent = el.getAttribute(`data-${currentLang}`));
});

// Whole project card clickable
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('.card-actions')) return;
    const link = card.getAttribute('data-link');
    if (link) window.location.href = link;
  });
});