const gameButton = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    .button {
      display: inline-block;
      position: relative;
      font-family: "comfortaa", sans-serif;
      font-weight: bold;
      width: 50px;
      height: 50px;
      color: #f25a70;
      text-shadow: 0 0 2px black;
      background-image: linear-gradient(#828282, #3a4042);
      border: 10px solid #d4d4d4;
      box-sizing: content-box;
      border-radius: 50%;
      letter-spacing: 2px;
      
    }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
      <button class="button -start">start</button>
    `;
  };
  return {
    render: module.render
  };
})();
