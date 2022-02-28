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

// arrow key keyboard link
let upArrowUser = document.getElementById("up-button");
let rightArrowUser = document.getElementById("right-button");
let downArrowUser = document.getElementById("down-button");
let leftArrowUser = document.getElementById("left-button");


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
