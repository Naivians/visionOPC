// be default navbar is transparent
// then add bg-dark when scroll > 100
let nav = document.querySelector("nav");
let navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    nav.classList.add("nav-danger", "shadow");
  } else {
    nav.classList.remove("nav-danger", "shadow");
  }
});

// animate on Scroll
AOS.init();

// testimonials
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  // // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    color: "white",
  },
});
