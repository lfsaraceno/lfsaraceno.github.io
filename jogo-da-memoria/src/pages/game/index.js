(function() {
  const $root = document.querySelector("#root");

  const creatingCard = memoryCard.creatingMemoryCard();
  const $wrapperCard = createCardWrapper();
  const $pointBar = pointBar.create();

  const $memoryCardBug = creatingCard({
    src: "img/icon-bug.svg",
    alt: "IconeBug",
    nameClass: "card",
    name: "Bug"
  });
  const $memoryCardJava = creatingCard({
    src: "img/icon-java.svg ",
    alt: "IconeJava",
    nameClass: "card"
  });
  const $memoryCardC = creatingCard({
    nameClass: "card",
    src: "img/icon-c.svg",
    alt: "IconeC"
  });
  const $memoryCardJS = creatingCard({
    src: "img/icon-js.svg ",
    alt: "IconeJS",
    nameClass: "card"
  });
  const $memoryCardCabeca = creatingCard({
    src: "img/icon-cabeca.svg ",
    alt: "IconeCabeça",
    nameClass: "card"
  });

  $wrapperCard.insertAdjacentHTML("afterbegin", $pointBar);

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
})();
