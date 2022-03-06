let order = [];
let playerOrder = [];
let maxLevels = 100;
let level;

// linking variables with elements
const startBtn = document.querySelector(".js-start");
const resetBtn = document.querySelector(".js-reset");
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const rightBtn = document.querySelector(".right-button");
const leftBtn = document.querySelector(".left-button");
const levelCounter = document.querySelector("#level");

// adding start and reset functionality on click
startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  resetBtn.classList.remove("hidden");
  startGame();
});
resetBtn.addEventListener("click", () => {
  startBtn.classList.remove("hidden");
  resetBtn.classList.add("hidden");
  reset();
});

function reset() {
  win = false;
  order = [];
  level = 0;
  levelCounter.innerHTML = 0;
}

function setOrder() {
  for (var i = 0; i < 100; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  // delete below so user cannot see correct order
  console.log(order); 
}

computerRound() {
  activate(direction) {

  }
}
function playGame() {
  // reset variables to starting point
  reset();
  // defines computer order
  setOrder();
  //  IMPORTANT: add while loop here
  computerRound();
}
