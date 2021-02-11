const html = document.querySelector("html");
const header = document.querySelector(".header");
const openMenuBtn = document.querySelector("#openMenu");
const closeMenuBtn = document.querySelector("#closeMenu");

openMenuBtn.addEventListener("click", function () {
  console.log("open menu button clicked");
  header.classList.add("open");
  html.classList.add("noscroll");
});
closeMenuBtn.addEventListener("click", function () {
  console.log("close menu button clicked");
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    html.classList.remove("noscroll");
  }
});
