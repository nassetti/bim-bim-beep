let correctOrder = [];
let humanOrder = [];

// adding arrowkey variables on screen
let up = document.getElementById("up");
let right = document.getElementById("right");
let down = document.getElementById("down");
let left = document.getElementById("left");
let upBtn = document.getElementById("up-button");
let rightBtn = document.getElementById("right-button");
let downBtn = document.getElementById("down-button");
let leftBtn = document.getElementById("left-button");

// testing link
upBtn.addEventListener("click", () => {
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
// adding start functionality
