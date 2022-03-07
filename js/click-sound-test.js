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

const levelCounter = document.querySelector("#level");
const info = document.querySelector(".js-info");

// sounds
var upSound = document.querySelector("#up-sound");
var downSound = document.querySelector("#down-sound");
var leftSound = document.querySelector("#left-sound");
var rightSound = document.querySelector("#up-sound");

function upClick() {
  upSound.play();
  upDiv.classList.add("activeUp");
  upIcon.classList.add("activeUp");
  upDiv.classList.add("activated");
  console.log("upClick")
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
  console.log("leftClick")

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
  console.log("downClick");
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
  console.log("rightClick");
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
