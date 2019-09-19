const $search = document.querySelector(".header-action");
const $icon = $search.querySelector(".icon");
const $active = $search.querySelector(".active");
const $menu = document.querySelector(".menu");
const $nav = document.querySelector(".navigation-store");

$icon.addEventListener("click", event => {
  event.preventDefault();

  $search.classList.toggle("active");
  $icon.classList.toggle("-close");
});

$menu.addEventListener("click", event => {
  event.preventDefault();

  $menu.classList.toggle("-close");
  $nav.classList.toggle("-open");
});
