"use strict";

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}

/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// counter effect functionality
let counters = document.querySelectorAll(".counter");
let counterSection = document.getElementById("counterSection");
let activated = false;

function resetCounters() {
  counters.forEach((counter) => (counter.innerText = "0"));
  activated = false;
}

function startCounting() {
  counters.forEach((counter) => {
    let target = +counter.getAttribute("data-target");
    let count = 0;
    let step = target / 100;
    let interval = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      counter.innerText = Math.floor(count) + "+";
    }, 20);
  });
  activated = true;
}

window.addEventListener("scroll", function () {
  let rect = counterSection.getBoundingClientRect();
  let inView = rect.top < window.innerHeight && rect.bottom > 0;

  if (inView && !activated) {
    startCounting();
  } else if (!inView && activated) {
    resetCounters();
  }
});


// testimonial slider
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the carousel with auto-sliding
  const carousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
      interval: 5000, // Auto-slide every 5 seconds
      pause: 'hover' // Pause on hover
  });
  
  // Variables for touch events
  let touchStartX = 0;
  let touchEndX = 0;
  
  // Get the carousel element
  const carouselElement = document.getElementById('testimonialCarousel');
  
  // Add touch event listeners
  carouselElement.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
  }, false);
  
  carouselElement.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
  }, false);
  
  // Handle swipe gesture
  function handleSwipe() {
      if (touchEndX < touchStartX - 50) {
          // Swipe left - go to next slide
          carousel.next();
      }
      
      if (touchEndX > touchStartX + 50) {
          // Swipe right - go to previous slide
          carousel.prev();
      }
  }
});


// advertisement shows
document.addEventListener("DOMContentLoaded", function () {
  var contactModal = new bootstrap.Modal(document.getElementById('contactModal'), {});
  contactModal.show(); 

  setTimeout(function () {
      contactModal.hide(); 
  }, 3000);
});