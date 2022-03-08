// Code adapted from https://freshman.tech/simon-game/

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  let sequence = [];
  let humanSequence = [];
  let level = 0;

  const startButton = document.querySelector(".js-start");
  const info = document.querySelector(".js-info");
  const arrowArea = document.querySelector(".arrow-area");
  const levelCounter = document.querySelector("#level");

  function resetGame(text) {
    alert(text);
    sequence = [];
    humanSequence = [];
    level = 0;
    startButton.classList.remove("hidden");
    info.classList.add("hidden");
    arrowArea.classList.add("unclickable");
  }

  function humanTurn(level) {
    arrowArea.classList.remove("unclickable");
    info.textContent = `Your turn: ${level} Tap${level > 1 ? "s" : ""}`;
  }

  function activateDirection(direction) {
    const button = document.querySelector(`[data-direction='${direction}']`);
    const directionIcon = document.querySelector(`#${direction}-icon`);
    const directionDiv = document.querySelector(`#${direction}-div`);
    const sound = document.querySelector(`[data-sound='${direction}']`);

    directionDiv.classList.add("activated");
    directionIcon.classList.add(`"active-"${direction}`);
    directionDiv.classList.add(`"active-"${direction}`);
    sound.play();

    setTimeout(() => {
      directionDiv.classList.remove("activated");
      directionIcon.classList.remove(`"active-"${direction}`);
      directionDiv.classList.remove(`"active-"${direction}`);
    }, 300);
  }

  function playRound(nextSequence) {
    nextSequence.forEach((direction, index) => {
      setTimeout(() => {
        activateDirection(direction);
      }, (index + 1) * 600);
    });
  }

  function nextStep() {
    const directions = ["up", "left", "down", "right"];
    const random = directions[Math.floor(Math.random() * directions.length)];

    return random;
  }

  function nextRound() {
    level += 1;
    levelCounter.innerHTML = level;
    arrowArea.classList.add("unclickable");
    info.textContent = "Wait for the computer";

    const nextSequence = [...sequence];
    nextSequence.push(nextStep());
    playRound(nextSequence);

    sequence = [...nextSequence];
    setTimeout(() => {
      humanTurn(level);
    }, level * 600 + 1000);
  }

  function handleClick(direction) {
    const index = humanSequence.push(direction) - 1;
    const sound = document.querySelector(`[data-sound='${direction}']`);
    sound.play();

    const remainingTaps = sequence.length - humanSequence.length;

    if (humanSequence[index] !== sequence[index]) {
      resetGame("Oops! Game over, you pressed the wrong button");
      return;
    }

    if (humanSequence.length === sequence.length) {
      if (humanSequence.length === 20) {
        resetGame("Congrats! You completed all the levels");
        return;
      }

      humanSequence = [];
      info.textContent = "Success! Keep going!";
      setTimeout(() => {
        nextRound();
      }, 1000);
      return;
    }

    info.textContent = `Your turn: ${remainingTaps} Tap${
      remainingTaps > 1 ? "s" : ""
    }`;
  }

  function startGame() {
    startButton.classList.add("hidden");
    info.classList.remove("hidden");
    info.textContent = "Wait for the computer";
    nextRound();
  }

  startButton.addEventListener("click", startGame);
  arrowArea.addEventListener("click", (event) => {
    const { button } = event.target.dataset;
    if (button) handleClick(button);
  });
});
let sequence = [];
let humanSequence = [];
let level = 0;

const startButton = document.querySelector(".js-start");
const info = document.querySelector(".js-info");
const arrowArea = document.querySelector(".arrow-area");

function resetGame(text) {
  alert(text);
  sequence = [];
  humanSequence = [];
  level = 0;
  startButton.classList.remove("hidden");
  info.classList.add("hidden");
  arrowArea.classList.add("unclickable");
}

function humanTurn(level) {
  arrowArea.classList.remove("unclickable");
  info.textContent = `Your turn: ${level} Tap${level > 1 ? "s" : ""}`;
}

function activateDirection(direction) {
  const button = document.querySelector(`[data-direction='${direction}']`);
  const directionIcon = document.querySelector(`#${direction}-icon`);
  const directionDiv = document.querySelector(`#${direction}-div`);
  const sound = document.querySelector(`[data-sound='${direction}']`);

  directionDiv.classList.add("activated");
  directionIcon.classList.add(`active-${direction}`);
  directionDiv.classList.add(`active-${direction}`);
  sound.play();

  setTimeout(() => {
    directionDiv.classList.remove("activated");
    directionIcon.classList.remove(`active-${direction}`);
    directionDiv.classList.remove(`active-${direction}`);
  }, 300);
}

function playRound(nextSequence) {
  nextSequence.forEach((direction, index) => {
    setTimeout(() => {
      activateDirection(direction);
    }, (index + 1) * 600);
  });
}

function nextStep() {
  const directions = ["up", "left", "down", "right"];
  const random = directions[Math.floor(Math.random() * directions.length)];

  return random;
}

function nextRound() {
  level += 1;
  level;

  arrowArea.classList.add("unclickable");
  info.textContent = "Wait for the computer";

  const nextSequence = [...sequence];
  nextSequence.push(nextStep());
  playRound(nextSequence);

  sequence = [...nextSequence];
  setTimeout(() => {
    humanTurn(level);
  }, level * 600 + 1000);
}

function handleClick(direction) {
  const index = humanSequence.push(direction) - 1;
  const sound = document.querySelector(`[data-sound='${direction}']`);
  sound.play();

  const remainingTaps = sequence.length - humanSequence.length;

  if (humanSequence[index] !== sequence[index]) {
    resetGame("Oops! Game over, you pressed the wrong tile");
    return;
  }

  if (humanSequence.length === sequence.length) {
    if (humanSequence.length === 20) {
      resetGame("Congrats! You completed all the levels");
      return;
    }

    humanSequence = [];
    info.textContent = "Success! Keep going!";
    setTimeout(() => {
      nextRound();
    }, 1000);
    return;
  }

  info.textContent = `Your turn: ${remainingTaps} Tap${
    remainingTaps > 1 ? "s" : ""
  }`;
}

function startGame() {
  startButton.classList.add("hidden");
  info.classList.remove("hidden");
  info.textContent = "Wait for the computer";
  nextRound();
}

startButton.addEventListener("click", startGame);
arrowArea.addEventListener("click", (event) => {
  const { direction } = event.target.dataset;

  if (direction) handleClick(direction);
});
