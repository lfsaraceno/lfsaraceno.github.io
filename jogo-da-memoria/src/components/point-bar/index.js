const pointBar = (function() {
  const module = {};
  module._style = function() {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
        .pointBar {
          display: flex;        
          width: 93%;
          height: 60px;
          font-family: 'Comfortaa', sans-serif;
          justify-content: space-around;
          align-items: center;
          border-radius: 20px;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
          position: relative;
          margin: 5px;
          color: #fff;
          background-color: #3a4042;
  
        }
        .count {
          display: flex;
          flex-direction: column;
          width: 100px;
          height: 80%;
          justify-content: center;
          align-items: center;
          
        }
        .lable {
          margin-bottom: 5px;
          font-size: 1.2em;
          font-weight: lighter;
        }
        .numbers {
          font-weight: bold;
  
        }
  
    `;

    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();
    return `
      <header class="pointBar">
        <div class="count">
          <h3 class="lable">Pontos</h3>
          <span class="numbers -point">0</span>
        </div>
        <div class="count" >
          <h3 class="lable">Jogadas</h3>
          <span class="numbers -attempt">0</span>
        </div>
      </hearder>
    `;
  };

  return {
    create: module.create
  };
})();
