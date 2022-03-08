// code adapted from https://github.com/beaucarnes/simon-game/blob/master/js/index.js and https://freshman.tech/simon-game/

let order = [];
let playerOrder = [];
let maxLevels = 100;
let level;

// linking variables with elements
const startBtn = document.querySelector(".js-start");
const resetBtn = document.querySelector(".js-reset");
const upBtn = document.querySelector(".up-btn");
const downBtn = document.querySelector(".down-btn");
const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");
const upDiv = document.querySelector("#up");
const downDiv = document.querySelector("#down");
const rightDiv = document.querySelector("#right");
const leftDiv = document.querySelector("#left");
const upIcon = document.querySelector("#up-icon");
const leftIcon = document.querySelector("#left-icon");
const downIcon = document.querySelector("#down-icon");
const rightIcon = document.querySelector("#right-icon");
const arrowArea = document.querySelector(".arrow-area");

const levelCounter = document.querySelector("#level");
const info = document.querySelector(".js-info");

// sounds
var upSound = document.querySelector("#up-sound");
var downSound = document.querySelector("#down-sound");
var leftSound = document.querySelector("#left-sound");
var rightSound = document.querySelector("#right-sound");

// adding button array
buttons = ["up", "left", "down", "right"];
// therefore, up = 0, left = 1, down = 2, right = 3 based on array maths.

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
  win = false;
  order = [];
  playerOrder = [];
  level = 0;
  info.innerHTML = "Click START to play";
  levelCounter.innerHTML = 0;
  console.log(order);
  console.log(playerOrder);
}
function upClick() {
  upSound.play();
  upDiv.classList.add("activeUp");
  upIcon.classList.add("activeUp");
  upDiv.classList.add("activated");
  playerOrder.push(0);
  console.log(playerOrder);
  setTimeout(() => {
    upDiv.classList.remove("activeUp");
    upIcon.classList.remove("activeUp");
    upDiv.classList.remove("activated");
  }, 300);
}
function leftClick() {
  leftSound.play();
  leftDiv.classList.add("activeLeft");
  leftIcon.classList.add("activeLeft");
  leftDiv.classList.add("activated");
  playerOrder.push(1);
  console.log(playerOrder);
  setTimeout(() => {
    leftDiv.classList.remove("activeLeft");
    leftIcon.classList.remove("activeLeft");
    leftDiv.classList.remove("activated");
  }, 300);
}

function downClick() {
  downSound.play();
  downDiv.classList.add("activeDown");
  downIcon.classList.add("activeDown");
  downDiv.classList.add("activated");
  playerOrder.push(2);
  console.log(playerOrder);
  setTimeout(() => {
    downDiv.classList.remove("activeDown");
    downIcon.classList.remove("activeDown");
    downDiv.classList.remove("activated");
  }, 300);
}

function rightClick() {
  rightSound.play();
  rightDiv.classList.add("activeRight");
  rightIcon.classList.add("activeRight");
  rightDiv.classList.add("activated");
  playerOrder.push(3);
  console.log(playerOrder);
  setTimeout(() => {
    rightDiv.classList.remove("activeRight");
    rightIcon.classList.remove("activeRight");
    rightDiv.classList.remove("activated");
  }, 300);
}

// adding computer "clicks"

function upComputer() {
  upSound.play();
  upDiv.classList.add("activeUp");
  upIcon.classList.add("activeUp");
  upDiv.classList.add("activated");
  console.log(order);
  setTimeout(() => {
    upDiv.classList.remove("activeUp");
    upIcon.classList.remove("activeUp");
    upDiv.classList.remove("activated");
  }, 300);
}
function leftComputer() {
  leftSound.play();
  leftDiv.classList.add("activeLeft");
  leftIcon.classList.add("activeLeft");
  leftDiv.classList.add("activated");
  console.log(order);
  setTimeout(() => {
    leftDiv.classList.remove("activeLeft");
    leftIcon.classList.remove("activeLeft");
    leftDiv.classList.remove("activated");
  }, 300);
}

function downComputer() {
  downSound.play();
  downDiv.classList.add("activeDown");
  downIcon.classList.add("activeDown");
  downDiv.classList.add("activated");
  console.log(order);
  setTimeout(() => {
    downDiv.classList.remove("activeDown");
    downIcon.classList.remove("activeDown");
    downDiv.classList.remove("activated");
  }, 300);
}

function rightComputer() {
  rightSound.play();
  rightDiv.classList.add("activeRight");
  rightIcon.classList.add("activeRight");
  rightDiv.classList.add("activated");
  console.log(order);
  setTimeout(() => {
    rightDiv.classList.remove("activeRight");
    rightIcon.classList.remove("activeRight");
    rightDiv.classList.remove("activated");
  }, 300);
}

// adding user click functionality
upBtn.addEventListener("click", () => {
  upClick();
});
leftBtn.addEventListener("click", () => {
  leftClick();
});
downBtn.addEventListener("click", () => {
  downClick();
});
rightBtn.addEventListener("click", () => {
  rightClick();
});

function computerRound() {
  level += 1;
  levelCounter.innerHTML = level;
  order.push(Math.floor(Math.random() * 4));
  console.log(order);
  arrowArea.classList.add("unclickable");
  console.log(true);
  // console.log(order[level - 1]);
  for (let i = 0; i < order.length; i++) {
    switch (order[i]) {
      case 0:
        upComputer();
        break;
      case 1:
        leftComputer();
        break;
      case 2:
        downComputer();
        break;
      case 3:
        rightComputer();
        break;
    }
  }
  setTimeout(() => {
    playerRound();
  }, level * 600 + 1000);
}

function playerRound() {
  arrowArea.classList.remove("unclickable");
  var remainingClicks = order.length - playerOrder.length;
  var clicks = playerOrder.length;
  if (clicks < order.length) {
    let c = clicks;
    if (playerOrder === order && remainingClicks == 0) {
      info.innerHTML = "Congratulations! Onto the next round!";
      setTimeout(() => {
        computerRound();
      }, 600);
      console.log(`You have made ${clicks}`);
    } else if (remainingClicks > 0 && playerOrder[c] === order[c]) {
      info.innerHTML = `You have made ${clicks} clicks. You have ${remainingClicks} left.`;
      console.log(`You have made ${clicks}`);
    }
  } else {
    info.innerHTML = `You have made ${clicks} clicks. You have ${remainingClicks} left.`;
    console.log(`You have made ${clicks}`);
  }
}

function playGame() {
  // reset variables to starting point
  reset();
  // plays Game
  computerRound();
  playerRound();
}
