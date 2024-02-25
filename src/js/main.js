//NAVIGATION
//NAV LINKS
// Add 'active' class to the current page's navigation item
document.addEventListener("DOMContentLoaded", () => {
  // Get the current URL path
  const path = window.location.pathname;

  // Find the corresponding navigation item and add 'active' class
  const navItems = document.querySelectorAll(".header li a");
  navItems.forEach((item) => {
    if (item.getAttribute("href") === path) {
      item.classList.add("active");
    }
  });
});

//Burger Menu

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");

  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
});

//SLIDER

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 3000); // Change slide every 3 seconds
});

//FOOTER

// Get the current year
const currentYear = new Date().getFullYear();

// Update the content of the currentYear span element
document.getElementById("currentYear").textContent = currentYear;
