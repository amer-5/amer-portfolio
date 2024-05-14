const hamburgerMenu = document.getElementById("hamburger-button");
const navigationMenu = document.getElementById("navigation");
const navigationLinks = document.getElementById("navigation-links");
let isOpened = false;

hamburgerMenu.addEventListener("click", () => {
  if (!isOpened) {
    navigationMenu.classList.remove("hidden");
    navigationMenu.classList.add("flex");
    navigationLinks.classList.remove("hidden");
    navigationLinks.classList.add("flex");
    isOpened = true;
  } else {
    navigationMenu.classList.add("hidden");
    navigationLinks.classList.add("hidden");
    isOpened = false;
  }
});
