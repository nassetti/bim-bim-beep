// code adapted from https://github.com/beaucarnes/simon-game/blob/master/js/index.js and https://freshman.tech/simon-game/
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  let order = [];
  let playerOrder = [];
  let level;
  let clicks = 0;
  let computerClicks = 0;
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

  function reset() {
    wrong = false;
    order = [];
    playerOrder = [];
    level = 0;
    clicks = 0;
    computerClicks = 0;
    arrowArea.classList.remove("unclickable");
    info.innerHTML = "Click START to play";
    levelCounter.innerHTML = 0;
    console.log(order);
    console.log(playerOrder);
  }
  //   directions have to be up, left, down, or right
  function activate(direction) {
    const directionButton = document.querySelector(`#${direction}-button`);
    const directionIcon = document.querySelector(`#${direction}-icon`);
    const directionDiv = document.querySelector(`#${direction}-div`);
    const sound = document.querySelector(`#${direction}-sound`);

    directionDiv.classList.add("activated");
    directionIcon.classList.add(`active-${direction}`);
    directionDiv.classList.add(`active-${direction}`);
    sound.play();

    setTimeout(() => {
      directionDiv.classList.remove("activated");
      directionIcon.classList.remove(`active-${direction}`);
      directionDiv.classList.remove(`active-${direction}`);
      // directionIcon.classList.add(`non-active-${direction}`);
      // directionDiv.classList.add(`non-active-${direction}`);
    }, 300);
  }

  //   defining computerRound function

  function computerRound() {
    level += 1;
    levelCounter.innerHTML = level;
    // delete after debug
    order = [0, 0, 0, 0, 0, 0, 0];
    // this is the code you want to use for incremental levels
    // order.push(Math.floor(Math.random() * 4));
    console.log(order);
    arrowArea.classList.add("unclickable");
    for (i = 0; i < order.length; i++) {
      // adding button array
      // therefore, up = 0, left = 1, down = 2, right = 3 based on array start of 0.
      // console.log(directions[order[i]]);
      setTimeout(() => {
        var directions = ["up", "left", "down", "right"];
        activate(directions[order[i]]);
      }, order.length * 600);
    }
  }

  // adding user click functionality
  upBtn.addEventListener("click", () => {
    activate("up");
    playerOrder.push(0);
  });
  leftBtn.addEventListener("click", () => {
    activate("left");
    playerOrder.push(1);
  });
  downBtn.addEventListener("click", () => {
    activate("down");
    playerOrder.push(2);
  });
  rightBtn.addEventListener("click", () => {
    activate("right");
    playerOrder.push(3);
  });
  function playerRound() {
    playerOrder = [];
    arrowArea.classList.remove("unclickable");
    let remainingClicks = order.length - playerOrder.length;
    while (remainingClicks > 0) {
      info.innerHTML = `You have ${remainingClicks} clicks to make.`;
    }
  }

  //   function check() {}
  function playGame() {
    // reset variables to starting point
    reset();
    // plays Game
    computerRound();
    // playerRound();
    // check();
  }
});
