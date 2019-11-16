const resetButton = (function() {
  module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    .resetbutton {
      width: 70px;
      height: 70px;
      display: block;
      position: relative;
      border-radius: 50%;
      background-color: #fff

    }
    `;
    $head.insertBefore($style, null);
  };
  module.render = () => {
    module._style();
    const $buttonReset = gameButton.render("reset");

    return `
      <div class="resetbutton" onClick="resetButton.handleClick()">${$buttonReset}</div>
    
    `;
  };

  module.handleClick = () => {
    window.location.reload();
  };
  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
