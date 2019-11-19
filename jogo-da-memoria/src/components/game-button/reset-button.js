const resetButton = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    .resetbutton {
      width: 50px;
      height: 50px;
      display: contents;
      position: relative;
      border-radius: 50%;
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
