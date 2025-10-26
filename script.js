const openHam = document.querySelector("#openHam");
const closeHam = document.querySelector("#closeHam");
const navLinks = document.querySelector("#navbar-links");
const hamburgerContainer = document.querySelector(".hamburger");

function toggleHamburger() {
  const isActive = navLinks.classList.toggle("active");

  if (isActive) {
    openHam.style.display = "none";
    closeHam.style.display = "block";
  } else {
    openHam.style.display = "block";
    closeHam.style.display = "none";
  }
}

openHam.addEventListener("click", toggleHamburger);
closeHam.addEventListener("click", toggleHamburger);

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
