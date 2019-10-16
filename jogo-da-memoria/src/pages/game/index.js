const $root = document.querySelector("#root");

const creatingCard = creatingMemoryCard();

const $wrapperCard = createCardWrapper();

const $memoryCardBug = creatingCard({
  src: "img/icon-bug.svg",
  alt: "Icone Bug",
  nameClass: "card"
});
const $memoryCardJava = creatingCard({
  src: "img/icon-java.svg ",
  alt: "Icone Java",
  nameClass: "card"
});
const $memoryCardC = creatingCard({
  nameClass: "card",
  src: "img/icon-c.svg",
  alt: "Icone C"
});
const $memoryCardJS = creatingCard({
  src: "img/icon-js.svg ",
  alt: "Icone JS",
  nameClass: "card"
});
const $memoryCardCabeca = creatingCard({
  src: "img/icon-cabeca.svg ",
  alt: "Icone Cabeça",
  nameClass: "card"
});

$wrapperCard.insertAdjacentHTML("beforeend", $memoryCardBug);
$wrapperCard.insertAdjacentHTML("beforeend", $memoryCardJava);
$wrapperCard.insertAdjacentHTML("beforeend", $memoryCardCabeca);
$wrapperCard.insertAdjacentHTML("beforeend", $memoryCardC);
$wrapperCard.insertAdjacentHTML("beforeend", $memoryCardBug);
$wrapperCard.insertAdjacentHTML("beforeend", $memoryCardJS);
$wrapperCard.insertAdjacentHTML("beforeend", $memoryCardC);
$wrapperCard.insertAdjacentHTML("beforeend", $memoryCardJS);
$wrapperCard.insertAdjacentHTML("beforeend", $memoryCardJava);
$wrapperCard.insertAdjacentHTML("beforeend", $memoryCardCabeca);

$root.insertAdjacentElement("beforeend", $wrapperCard);

// const $iconJs = `<img
//   src= "img/icon-js.svg"
//   alt= "Icone Javascript"
//   class= "icon"
//   />`;

// const $iconJava = `<img
//   src= "img/icon-java.svg"
//   alt= "Icone Javascript"
//   class= "icon"
//   />`;

// const $iconC = `<img
//   src= "img/icon-c.svg"
//   alt= "Icone Javascript"
//   class= "icon"
//   />`;

// const $iconCabeca = `<img
//   src= "img/icon-cabeca.svg"
//   alt= "Icone Javascript"
//   class= "icon"
//   />`;

// const $iconCelular = `<img
//   src= "img/icon-celular.svg"
//   alt= "Icone Javascript"
//   class= "icon"
//   />`;

// const $iconPHP = `<img
//   src= "img/icon-php.svg"
//   alt= "Icone Javascript"
//   class= "icon"
//   />`;

// const $iconResponsive = `<img
//   src= "img/icon-responsivo.svg"
//   alt= "Icone Javascript"
//   class= "icon"
//   />`;

// const $iconSettings = `<img
//   src= "img/icon-settings.svg"
//   alt= "Icone Javascript"
//   class= "icon"
//   />`;

// const $iconWoman = `<img
//   src= "img/icon-Woman.svg"
//   alt= "Icone Javascript"
//   class= "icon"
//   />`;
