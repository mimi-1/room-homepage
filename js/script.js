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
const articles = document.querySelectorAll(".articles__item");
const itemsLastIndex = articles.length - 1;

const scrollLeft = () => {
  //set the item which is visible hidden and  previouse item visible
  //if it is first item, make the last item visible
  const index = Array.from(articles).findIndex(
    (item) => !item.classList.contains("hidden")
  );
  const item = articles[index];
  const prevItem = index > 0 ? articles[index - 1] : articles[itemsLastIndex];
  item.classList.add("hidden");
  prevItem.classList.remove("hidden");
};

const btnRight = document.querySelector("#right");

btnLeft.addEventListener("click", scrollLeft);
const scrollRight = () => {
  const index = Array.from(articles).findIndex(
    (item) => !item.classList.contains("hidden")
  );
  const item = articles[index];
  const nextItem = index < itemsLastIndex ? articles[index + 1] : articles[0];
  item.classList.add("hidden");
  nextItem.classList.remove("hidden");
};

btnRight.addEventListener("click", scrollRight);

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    scrollLeft();
  } else if (event.key === "ArrowRight") {
    scrollRight();
  }
});
