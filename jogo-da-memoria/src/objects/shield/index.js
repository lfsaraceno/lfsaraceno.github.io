const shield = (function() {
  module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .shield {
        display: none;
      }
      .shield.-active {
        width: 350px;
        height: 100%;
        display: block;
        position: absolute;
        border-radius: 30px;
        background-image: linear-gradient(#000, #82828260, #000);
        z-index: 1;
      }

      .startbutton {
        width: 100px;
        height: 100px;
        display: block;
        position: relative;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .startbutton > .button {
        width: 90px;
        height: 90px;
        border: 4px solid #fffcee;
        font-size: 1.5em;
      }
    `;
    $head.insertBefore($style, null);
  };
  module.render = () => {
    const $startButton = startButton.render();
    module._style();
    return `
    <div class="shield -active">
    ${$startButton}
    </div>
    `;
  };
  return {
    create: module.render
  };
})();
