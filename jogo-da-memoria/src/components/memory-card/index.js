const memoryCard = (function() {
  const module = {};
  module.creatingMemoryCard = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
        .cards{
          display: flex;        
          width: 155px;
          height: 155px;
          justify-content: center;
          align-items: center;
          border-radius: 30px;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
          position: relative;
          margin: 5px;        
        }
        .card {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 30px;
          background-color: #ffffff;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
          position: absolute;        
          cursor: pointer;
        }
        
        .card::before {
          content: "";
          width: 90px;
          height: 90px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          border-radius: 50%;
          background-color: #d4d4d4;
          position: absolute;
        }
  
        .card .icon {
          width: 90px;
          height: 90px;
          position: relative;
          top: -9px;
        }
        
        .cardBack {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 30px;
          background-color: #f25a70;
          z-index: 1;
        }
        
        
        .cardBack > .icon {
          width: 90px;
          height: 90px;
          position: static;
        }
  
        .cardBack.-disable,
        .cardBack.-score{
          display: none;
        }
        
        
      `;
    $head.insertBefore($style, null);

    return ({ src: src, alt: alt, nameClass: nameClass, name: name }) => `
      <div class="cards" onClick="memoryCard.clickCard(this)">
        <article class="cardBack" >
          <img
          src= "img/icon-collabcode.svg"
          alt= "Geio mascote da CollabCode"
          class='icon'
          
          />
        </article>
        <article class="${nameClass}">
          <img
          src= ${src}
          alt=${alt}
          name=${name}
          class='icon'          
          />
          </article>        
          </div>
          `;
  };

  module.clickCard = $component => {
    module._activeMemoryCard($component);
    module._verifyActiveCard();
  };

  module._activeMemoryCard = $component => {
    if (store.qtdCardDisable < 2) {
      $component.children[0].classList.add("-disable", "-score");
      $component.children[1].classList.add("-active");
    }
  };

  module._verifyActiveCard = () => {
    if (store.qtdCardDisable === 1) {
      module._compareCards();
    }
  };

  module._compareCards = () => {
    const $disableMemoryCard = document.querySelectorAll(".-disable");
    const $cardActive = document.querySelectorAll(".card.-active");
    if (
      $cardActive[0].children[0].getAttribute("src") ===
      $cardActive[1].children[0].getAttribute("src")
    ) {
      store.score++;
      store.attempt++;
      document.querySelector(".-point").textContent = store.score;
      document.querySelector(".-attempt").textContent = store.attempt;
      $cardActive.forEach($activeCard => {
        $activeCard.classList.remove("-active");
      });

      $disableMemoryCard.forEach($memoryCard => {
        $memoryCard.classList.remove("-disable");
      });
    } else {
      setTimeout(() => {
        $disableMemoryCard.forEach($memoryCard => {
          $memoryCard.classList.remove("-disable", "-score");
        });
        $cardActive.forEach($activeCard => {
          $activeCard.classList.remove("-active");
        });
        store.qtdCardDisable = 0;
      }, 1000);
      store.attempt++;
      document.querySelector(".-attempt").textContent = store.attempt;
    }
  };
  return {
    creatingMemoryCard: module.creatingMemoryCard,
    clickCard: module.clickCard
  };
})();
