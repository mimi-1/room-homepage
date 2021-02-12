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

const btnLeft = document.querySelector("#left");
const heroItems = document.querySelectorAll(".hero__articles__item");
const heroItemsLastIndex = heroItems.length - 1;

btnLeft.addEventListener("click", () => {
  //set the item which is visible hidden and  previouse item visible
  //if it is first item, make the last item visible
  //  index = heroItems.values()
  const index = Array.from(heroItems).findIndex(
    (item) => !item.classList.contains("hidden")
  );
  const item = heroItems[index];
  const prevItem =
    index > 0 ? heroItems[index - 1] : heroItems[heroItemsLastIndex];
  item.classList.add("hidden");
  prevItem.classList.remove("hidden");
});

const btnRight = document.querySelector("#right");

btnRight.addEventListener("click", () => {
  const index = Array.from(heroItems).findIndex(
    (item) => !item.classList.contains("hidden")
  );
  const item = heroItems[index];
  const nextItem =
    index < heroItemsLastIndex ? heroItems[index + 1] : heroItems[0];
  item.classList.add("hidden");
  nextItem.classList.remove("hidden");
});
