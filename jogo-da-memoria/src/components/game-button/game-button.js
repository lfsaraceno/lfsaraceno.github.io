const gameButton = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    .button {
      width: 50px;
      height: 50px;
      display: inline-block;
      position: absolute;
      font-family: "comfortaa", sans-serif;
      font-weight: bold;
      color: #f25a70;
      text-shadow: 0 0 2px black;
      background-image: linear-gradient(#828282, #3a4042);
      border: 2px solid #fffcee;
      box-sizing: content-box;
      border-radius: 50%;
      letter-spacing: 2px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
    `;

    $head.insertBefore($style, null);
  };

  module.render = $component => {
    module._style();
    return `
      <button class="button">${$component}</button>
    `;
  };

  return {
    render: module.render
  };
})();
