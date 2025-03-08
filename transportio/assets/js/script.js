'use strict';



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
let counters = document.querySelectorAll('.counter');
        let counterSection = document.getElementById('counterSection');
        let activated = false;
        
        function resetCounters() {
            counters.forEach(counter => counter.innerText = "0");
            activated = false;
        }
        
        function startCounting() {
            counters.forEach(counter => {
                let target = +counter.getAttribute('data-target');
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
        
        window.addEventListener('scroll', function () {
            let rect = counterSection.getBoundingClientRect();
            let inView = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (inView && !activated) {
                startCounting();
            } else if (!inView && activated) {
                resetCounters();
            }
        });

