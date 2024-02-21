//Burger Menu

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");

  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
});

//Slider

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
