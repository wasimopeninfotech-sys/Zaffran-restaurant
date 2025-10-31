// Smooth scroll when clicking navbar links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Highlight active section in navbar on scroll

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");
  let current = "";
  sections.forEach(sec => {
    const top = window.scrollY;
    if (top >= sec.offsetTop - 100) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});

// Reveal elements on scroll

const revealElements = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  revealElements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Form submission alert
const form = document.querySelector("form");
form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for contacting ZAFFRAN! We'll get back to you soon.");
    form.reset();
});


// Mobile menu toggle button creation and functionality
const nav = document.querySelector('nav');
const navToggle = document.createElement('button');
navToggle.classList.add('nav-toggle');
navToggle.setAttribute('aria-label', 'Toggle navigation');
navToggle.innerHTML = '&#9776;'; // hamburger icon
nav.prepend(navToggle);

// Toggle nav menu on button click
navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});

// Close nav menu when a nav link is clicked (useful for mobile)
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-open');
  });
});

// Lazy load all images for better performance
document.querySelectorAll('img').forEach(img => {
  img.setAttribute('loading', 'lazy');
});

// Back to top button functionality
const backToTopBtn = document.createElement('button');
backToTopBtn.classList.add('back-to-top');
backToTopBtn.textContent = '↑';
document.body.appendChild(backToTopBtn);

