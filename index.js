// Language switcher
const langToggle = document.getElementById("langToggle");
const langDropdown = document.getElementById("langDropdown");

// Toggle dropdown
langToggle.addEventListener("click", () => {
  langDropdown.classList.toggle("hidden");
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
    langDropdown.classList.add("hidden");
  }
});

// Navigation active state
const navLinks = document.querySelectorAll("[data-nav='main']");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-nav");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active-nav");
    }
  });
});
