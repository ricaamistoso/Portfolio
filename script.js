// Highlight the nav link of the section currently in view
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

const sectionToNav = {
  home: "#home", welcome: "#home", introduction: "#home",
  about: "#about", skills: "#about",
  projects: "#projects",
  contact: "#contact"
};

window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 200) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === sectionToNav[current]);
  });
});