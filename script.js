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
