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
    arrowArea.classList.remove("unclickable");
    info.innerHTML = "Click START to play";
    levelCounter.innerHTML = 0;
    arrowArea.classList.add("unclickable");
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
    playerOrder = [];
    clicks = 0;
    info.innerHTML = "Wait for the computer ...";
    level += 1;
    levelCounter.innerHTML = level;
    console.log(`round begining`);
    let directions = ["up", "left", "down", "right"];
    order.push(Math.floor(Math.random() * 4));
    arrowArea.classList.add("unclickable");

    const timer = setInterval(timerFunction, 800);
    let counter = 0;
    function timerFunction() {
      if (counter >= order.length) {
        clearInterval(timer);
        playerRound();
      } else {
        activate(directions[order[counter]]);
        counter++;
      }
    }
  }

  // adding clickCounter function

  function clickCounter() {
    let remainingClicks = order.length - clicks;
    info.innerHTML = `You have made ${clicks} clicks. You have ${remainingClicks} clicks left.`;

  }
  // adding user click functionality
  upBtn.addEventListener("click", () => {
    activate("up");
    playerOrder.push(0);
    clicks += 1;
    clickCounter();
    console.log(`clicks made: ${clicks}`);
    console.log(`playerOrder: ${playerOrder}`);
    if (playerOrder.length == order.length) {
      checkSequence();
    }
  });
  leftBtn.addEventListener("click", () => {
    activate("left");
    playerOrder.push(1);
    clicks += 1;
    clickCounter();
    console.log(`clicks made: ${clicks}`);
    console.log(`playerOrder: ${playerOrder}`);
    if (playerOrder.length == order.length) {
      checkSequence();
    }
  });
  downBtn.addEventListener("click", () => {
    activate("down");
    playerOrder.push(2);
    clicks += 1;
    clickCounter();
    console.log(`clicks made: ${clicks}`);
    console.log(`playerOrder: ${playerOrder}`);
    if (playerOrder.length == order.length) {
      checkSequence();
    }
  });
  rightBtn.addEventListener("click", () => {
    activate("right");
    playerOrder.push(3);
    clicks += 1;
    clickCounter();
    console.log(`clicks made: ${clicks}`);
    console.log(`playerOrder: ${playerOrder}`);
    if (playerOrder.length == order.length) {
      checkSequence();
    }
  });

  // checks if player input matches computer sequence
  function checkSequence() {
    remainingClicks = order.length - clicks;
    let good = true;
    if (playerOrder.length <= order.length) {
      for (i = 0; i < order.length; i++) {
        if (playerOrder[i] == order[i] && playerOrder.length < order.length) {
          // good = true;
        } else if (
          playerOrder[i] != order[i] &&
          playerOrder.length == order.length
        ) {
          info.innerHTML = `Oops. You've clicked the wrong button`;
          good = false;
          wrong = true;
          checkWrong();
        }
      }
      if (good == true) {
        info.innerHTML = "Nice work. Onto the next round.";
        setTimeout(computerRound, 1000);
      }
    } else {
      alert("Oops you clicked too quickly.");
      reset();
    }
  }

  // allows user to interact with the game area
  function playerRound() {
    playerOrder = [];
    arrowArea.classList.remove("unclickable");
    clicks = 0;
    info.innerHTML = `You have made ${clicks} clicks. You have ${order.length} clicks left.`;
    checkWrong();
  }
  // checks if sequence is incorrect and resets game
  function checkWrong() {
    if (wrong == true) {
      alert(
        `Sorry you didn't copy the sequence correctly. \nYou made it to Level: ${level}. \nWould you like to play again?`
      );
      reset();
    }
  }
  function playGame() {
    // reset variables to starting point
    reset();
    computerRound();
  }
});
