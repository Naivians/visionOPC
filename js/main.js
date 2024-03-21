// be default navbar is transparent
// then add bg-dark when scroll > 100
let nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
let navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    nav.classList.add("nav-danger", "shadow");
    
    menu.classList.add("displayMenu")
  } else {
    menu.classList.remove("displayMenu");
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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    color: "white",
  },
});

// preloader
// var loader = document.getElementById("loader");
// window.addEventListener("load", function () {
//   setTimeout(function () {
//     loader.style.display = "none";
//   }, 1500);
// });

$(window).on("load", function () {
  $("#loader").fadeOut("slow");
});

function toggleSidebar(x) {
  const sidebar = document.querySelector(".sidebar");
  const s = document.querySelector('main');
  sidebar.classList.toggle("active");
  s.classList.toggle("move-left");
  x.classList.toggle("change");
}
