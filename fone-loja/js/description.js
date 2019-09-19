let valorInicial = 0;
const $heart = document.querySelector(".heart");
const $btnCart = document.querySelector(".-cart");
const $stars = document.querySelectorAll(".star-rating");
const lastPosition = $stars.length - 1;

$heart.addEventListener("click", handleClick);
$btnCart.addEventListener("click", clickCart);

$stars.forEach(function($star, key) {
  if (key == 0) {
    $star.addEventListener("click", firstStar);
  }
  if (key == lastPosition) {
    $star.addEventListener("click", lastStar);
  }
  if (key > 0 && key < lastPosition) {
    $star.addEventListener("click", function() {
      midlleStar(key);
    });
  }
});

function handleClick() {
  $heart.classList.toggle("-active");
}

function firstStar() {
  $stars.forEach(function($star) {
    $star.classList.remove("-star-active");
  });
  this.classList.toggle("-star-active");
}
function lastStar() {
  $stars.forEach(function($star) {
    $star.classList.add("-star-active");
  });
}
function midlleStar(index) {
  $stars.forEach(function($star) {
    $star.classList.remove("-star-active");
  });
  $stars.forEach(function($star, key) {
    if (key <= index) {
      $star.classList.add("-star-active");
    }
  });
}

function clickCart() {
  const $navCart = document.querySelector(".-cart-menu");
  $navCart.innerHTML = `Carrinho (${++valorInicial})`;
}
