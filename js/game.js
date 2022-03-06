// code adapted from https://freshman.tech/simon-game/#conclusion and https://www.youtube.com/watch?v=n_ec3eowFLQ&t=161s

let order = [];
let playerOrder = [];
let level = 0;

// linking start button and reset button
const startButton = document.querySelector(".js-start");
const resetButton = document.querySelector(".js-reset");
// adding arrowkey variables on screen
let upBtn = document.getElementById("up-button");
let rightBtn = document.getElementById("right-button");
let downBtn = document.getElementById("down-button");
let leftBtn = document.getElementById("left-button");

// testing link
upBtn.addEventListener("click", () => {
  up.classList.add("active-red");
  console.log("clicked up");
});
leftBtn.addEventListener("click", () => {
  console.log("clicked left");
});
downBtn.addEventListener("click", () => {
  console.log("clicked down");
});
rightBtn.addEventListener("click", () => {
  console.log("clicked right");
});

// testing arrowkey link

// adding start functionality
startButton.addEventListener("click", () => {
  startButton.classList.add("hidden");
  resetButton.classList.remove("hidden");
  console.log("clicked start");
  startGame()
});

// // adding reset functionality
// resetButton.addEventListener("click", () => {
//   reset();
// });

function activateDirection(direction) {
  const direction = document.querySelector(`[data-direction="${direction}"]`);
  const sound = document.querySelector(`[data-sound="${direction}"]`);

  direction.classList.add("activated");
  sound.play();

  setTimeout(() => {
    direction.classList.remove("activated");
  }, 300);
}

function playRound(nextSequence) {
  nextSequence.forEach((direction, index) => {
    setTimeout(() => {
      activateDirection(direction);
    }, (index + 1) * 600);
  });
}
// defining nextStep functions
function nextStep() {
  const directions = ["up", "left", "down", "right"];
  const random = directions[Math.floor(Math.random() * directions.length)];
  return random;
}
// defining nextRound function
function nextRound() {
  level += 1;
  let nextSequence = [...order];
  nextSequence.push(nextStep());
  playRound(nextSequence);
}

function startGame() {
  startButton.classList.add("hidden");
  nextRound();
}
// // defining play function
// let play = () => {
//   startButton.classList.add("hidden");
//   for (i = 0; i < 20; i++) {
//     order.push(Math.floor(Math.random() * 4) + 1);
//   }
//   compTurn = true;

//   intervalId = setInterval(gameTurn, 800);
// };


function reset() {
  order = [];
  playerOrder = [];
  level = 0;
  startButton.classList.remove("hidden");
  resetButton.classList.add("hidden");
}
