const startButton = (function() {
  module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    .startbutton {
      width: 50%;
      height: 50%;
      display: block;
      position: relative;
      border-radius: 50%;
    }   
    `;
    $head.insertBefore($style, null);
  };
  module.render = () => {
    const $buttonStart = gameButton.render("start");
    module._style();
    return `
      <div class="startbutton" onClick=startButton.start(this)>${$buttonStart}</div>
  `;
  };

  module.start = $component => {
    const $button = document.querySelector(".shield");
    $button.classList.remove("-active");
    $component.remove();
  };

  return {
    render: module.render,
    start: module.start
  };
})();
