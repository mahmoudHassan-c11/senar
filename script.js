const linksMenu = document.querySelector(".links-menu");
const linksList = document.querySelector(".links-menu ul");
const scrollElement = document.querySelector(".scroll");

linksMenu.addEventListener("click", () => {
  linksList.style.display = "block";
});

document.addEventListener("scroll", () => {
  if (window.pageYOffset > 600) {
    scrollElement.style.display = "flex";
  } else {
    scrollElement.style.display = "none";
  }
});

scrollElement.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
