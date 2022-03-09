// code adapted from https://github.com/beaucarnes/simon-game/blob/master/js/index.js and https://freshman.tech/simon-game/
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
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
    directionDiv.classList.add(`active-${direction}`);
    sound.play();

    setTimeout(() => {
      directionDiv.classList.remove("activated");
      directionDiv.classList.remove(`active-${direction}`);
    }, 300);
  }

  //   defining computerRound function

  function computerRound() {
    level += 1;
    levelCounter.innerHTML = level;
    // delete after debug
    // order = [0, 1, 2, 3, 2, 1, 0];
    let directions = ["up", "left", "down", "right"];
    // this is the code you want to use for incremental levels
    order.push(Math.floor(Math.random() * 4));
    console.log(order);
    arrowArea.classList.add("unclickable");

    const timer = setInterval(timerFunction, 800);
    let counter = 0;
    function timerFunction() {
      if (counter >= order.length) {
        clearInterval(timer);
      } else {
        activate(directions[order[counter]]);
        counter++;
      }
    }
  }
  // adding user click functionality
  upBtn.addEventListener("click", () => {
    activate("up");
    playerOrder.push(0);
    clicks += 1;
    info.innerHTML = `You have ${remainingClicks} clicks to make.`;
  });
  leftBtn.addEventListener("click", () => {
    activate("left");
    playerOrder.push(1);
    clicks += 1;
    info.innerHTML = `You have ${remainingClicks} clicks to make.`;
  });
  downBtn.addEventListener("click", () => {
    activate("down");
    playerOrder.push(2);
    clicks += 1;
    info.innerHTML = `You have ${remainingClicks} clicks to make.`;
  });
  rightBtn.addEventListener("click", () => {
    activate("right");
    playerOrder.push(3);
    clicks += 1;
    console.log(playerOrder);
    info.innerHTML = `You have ${remainingClicks} clicks to make.`;
  });

  function check() {
    if (playerOrder === order) {
      info.innerHTML = "Well done. Onto the next round.";
      setTimeout(() => computerRound(), 1000);
    } else if (playerOrder !== order && remainingClicks == 0) {
      alert(
        `Sorry you didn't copy the sequence correctly. \n You made it to Level: ${level}. \n Would you like to play again?`
      );
      reset();
    }
  }
  function playerRound() {
    playerOrder = [];
    clicks = 0;
    arrowArea.classList.remove("unclickable");
    var remainingClicks = order.length - playerOrder.length;

    info.innerHTML = `You have ${remainingClicks} clicks to make.`;
    if (playerOrder === order) {
      info.innerHTML = "Well done. Onto the next round.";
      setTimeout(() => computerRound(), 1000);
    }
    // else if (playerOrder !== order && remainingClicks == 0) {
    //   alert(
    //     `Sorry you didn't copy the sequence correctly. \nYou made it to Level: ${level}. \nWould you like to play again?`
    //   );
    //   reset();
    // }
  }

  function playGame() {
    // reset variables to starting point
    reset();
    while (wrong == false) {
      computerRound();
      playerRound();
    }
  }
});
