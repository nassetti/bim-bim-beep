    let order = [];
    let playerOrder = [];
    let level;
    let clicks = 0;
    let wrong = false;
  
    // linking variables with elements
    const startBtn = document.querySelector(".js-start");
    const resetBtn = document.querySelector(".js-reset");
    const upBtn = document.querySelector(".up-btn");
    const downBtn = document.querySelector(".down-btn");
    const rightBtn = document.querySelector(".right-btn");
    const leftBtn = document.querySelector(".left-btn");
    const arrowArea = document.querySelector(".arrow-area");
    const levelCounter = document.querySelector("#level");
    const info = document.querySelector(".js-info");
    arrowArea.classList.add("unclickable");
    
    // adding start and reset functionality on click
    startBtn.addEventListener("click", () => {
      startBtn.classList.add("hidden");
      resetBtn.classList.remove("hidden");
      console.log("clicked start");
      info.innerHTML = "Wait...";
      playGame();
    });
    resetBtn.addEventListener("click", () => {
      startBtn.classList.remove("hidden");
      resetBtn.classList.add("hidden");
      info.innerHTML = "Click START to play";
      reset();
    });
  
    // initial alert
    alert(
      "This is a Simple Simon Game. Click Start and repeat the computers pattern. Click the bell icon in the upper right corner to mute and the question mark for a tutorial on how to play. Enjoy!"
    );
  
    function reset() {
      wrong = false;
      order = [];
      playerOrder = [];
      level = 0;
      clicks = 0;
      info.innerHTML = "Click START to play";
      levelCounter.innerHTML = 0;
      arrowArea.classList.add("unclickable");
    }
  
    //   directions have to be up, left, down, or right
    function activate(direction) {
      const directionDiv = document.querySelector(`#${direction}-div`);
      const sound = document.querySelector(`#${direction}-sound`);
  
      directionDiv.classList.add("activated");
      directionDiv.classList.add(`active-${direction}`);
      sound.play();
  
      setTimeout(() => {
        directionDiv.classList.remove("activated");
        directionDiv.classList.remove(`active-${direction}`);
      }, 300);
    }