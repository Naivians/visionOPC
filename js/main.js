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


// clickable image
// Get all clickable image elements
const clickableImages = document.querySelectorAll('.clickable-image');

// Add event listener to each clickable image
clickableImages.forEach(function(clickableImage, index) {
  clickableImage.addEventListener('click', function(event) {
    // Set the source of the previewed image
    const previewedImage = document.querySelector(`#previewedImage_${index}`);
    previewedImage.src = clickableImage.src;

    // Show the corresponding image preview container with fade in effect
    const imagePreviewContainer = document.querySelector(`#imagePreviewContainer_${index}`);
    fadeIn(imagePreviewContainer);

    // Prevent propagation to the document click handler
    event.stopPropagation();
  });
});

// Add event listener to the document body to close any image preview
document.body.addEventListener('click', function(event) {
  // Loop through each clickable image
  clickableImages.forEach(function(clickableImage, index) {
    // Get the corresponding image preview container
    const imagePreviewContainer = document.querySelector(`#imagePreviewContainer_${index}`);

    // Check if the click target is outside the image preview container or clickable image
    if (!imagePreviewContainer.contains(event.target) && event.target !== clickableImage) {
      // Close the corresponding image preview
      closeImagePreview(imagePreviewContainer);
    }
  });
});

// Function to close the image preview
// Function to close the image preview
function closeImagePreview(index) {
  // Get the corresponding image preview container
  const imagePreviewContainer = document.querySelector(`#imagePreviewContainer_${index}`);
  
  // Check if the container exists before attempting to modify its display property
  if (imagePreviewContainer) {
    // Hide the image preview container with fade out effect
    fadeOut(imagePreviewContainer);
  }
}


// Function to fade in an element
function fadeIn(element) {
  element.style.display = 'block';
  element.style.opacity = 0;

  let opacity = 0;
  const fadeInInterval = setInterval(function() {
    if (opacity < 1) {
      opacity += 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeInInterval);
    }
  }, 50);
}

// Function to fade out an element
function fadeOut(element) {
  let opacity = 1;
  const fadeOutInterval = setInterval(function() {
    if (opacity > 0) {
      opacity -= 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeOutInterval);
      element.style.display = 'none';
    }
  }, 50);
}


