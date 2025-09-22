// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Contact form handling
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert("Thank you! We'll respond within 24 hours.");
    form.reset();
  });
}

// Sticky header effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 80) {
    header.style.background = 'rgba(30,58,138,0.95)';
    header.style.backdropFilter = 'blur(6px)';
  } else {
    header.style.background = 'linear-gradient(135deg, #2c5aa0, #1e3a8a)';
  }
});
// Lightbox functionality for projects
const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

galleryItems.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}

window.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
// --- Footer Dynamic Year ---
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// --- Back to Top Button ---
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
// Map fade-in effect
const mapSection = document.querySelector(".map-container");
if (mapSection) {
  window.addEventListener("scroll", () => {
    const rect = mapSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      mapSection.style.opacity = "1";
      mapSection.style.transform = "translateY(0)";
    }
  });

  // initial hidden style
  mapSection.style.opacity = "0";
  mapSection.style.transform = "translateY(50px)";
  mapSection.style.transition = "all 0.8s ease";
}
