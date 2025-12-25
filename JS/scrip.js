// Show all fade-in elements on page load
window.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.fade-in').forEach(function(el) {
		el.classList.add('show');
	});
});


// Mobile menu toggle
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
});

// Contact form submission — do not override the main submit handler
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  // Inline script handles the Formspree POST. Keep this as a no-op
  // to avoid preventing default or clearing the form before submission.
}

// Scroll animations
const animatedElements = document.querySelectorAll(".fade-in, .slide-left, .slide-right");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach(el => observer.observe(el));

// Testimonials Carousel
const track = document.getElementById("testimonial-track");
const testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showTestimonial() {
  index = (index + 1) % testimonials.length;
  track.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showTestimonial, 4000); // every 4s

