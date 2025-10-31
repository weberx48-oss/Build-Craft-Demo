// ===== Hamburger Menu Toggle =====
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Toggle menu open/close
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  document.body.classList.toggle("menu-open");
  hamburger.classList.toggle("active");
});

// Close menu when clicking any link
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    document.body.classList.remove("menu-open");
    hamburger.classList.remove("active");
  }
});
