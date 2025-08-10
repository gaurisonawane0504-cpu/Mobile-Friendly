const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
});

// Close menu when clicking overlay
overlay.addEventListener("click", () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
});
