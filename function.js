// ===================================================
//  RIZAL SCRAPBOOK — JAVASCRIPT
// ===================================================

// --- Nav Toggle (mobile) ---
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// --- Scroll reveal for timeline items and other elements ---
function onScroll() {
  // Timeline items
  document.querySelectorAll('.timeline-item').forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      item.classList.add('visible');
    }
  });
  // Generic fade-in elements
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.88) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('load', onScroll);

// Add fade-in class to cards on load
document.addEventListener('DOMContentLoaded', () => {
  const animatables = [
    '.lugar-card',
    '.event-card',
    '.akda-card',
    '.tao-card',
    '.pagsubok-card',
    '.letter-card',
    '.postcard',
    '.loc-story',
    '.activity-item',
  ];
  animatables.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('fade-in');
      el.style.transitionDelay = `${i * 0.08}s`;
    });
  });
  onScroll();
});

// --- Map location popup ---
function showLocationInfo(location) {
  document.querySelectorAll('.loc-story').forEach(s => {
    s.style.borderLeftColor = 'var(--gold)';
    s.style.background = 'var(--cream)';
  });
  const el = document.getElementById('story-' + location);
  if (el) {
    el.style.borderLeftColor = 'var(--red-tape)';
    el.style.background = '#fff8ee';
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// --- Smooth section highlight on nav click ---
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    document.querySelectorAll('.nav-links a').forEach(l => l.style.background = '');
    this.style.background = 'var(--gold)';
    this.style.color = 'var(--ink)';
    setTimeout(() => {
      this.style.background = '';
      this.style.color = '';
    }, 1200);
  });
});

// --- Polaroid tilt on hover (subtle) ---
document.querySelectorAll('.polaroid').forEach(p => {
  p.addEventListener('mouseenter', () => {
    p.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    p.style.transform = 'scale(1.04) rotate(0deg)';
    p.style.boxShadow = '6px 8px 22px rgba(60,30,10,0.28)';
  });
  p.addEventListener('mouseleave', () => {
    p.style.transform = '';
    p.style.boxShadow = '';
  });
});

// --- Active nav highlight on scroll ---
const sections = document.querySelectorAll('section[id], header[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
function highlightNav() {
  let current = '';
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top <= 80) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.style.color = '';
    a.style.fontWeight = '';
    if (a.getAttribute('href') === '#' + current) {
      a.style.color = 'var(--gold)';
    }
  });
}
window.addEventListener('scroll', highlightNav, { passive: true });