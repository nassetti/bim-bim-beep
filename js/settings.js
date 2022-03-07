// Adapted from code from: https://www.w3schools.com/howto/howto_css_modals.asp
console.log("i am connected");
let soundBtn = document.getElementById("bell");
let mutedBtn = document.getElementById("bell-muted")
let gearBtn = document.getElementById("gear");
let tutorialBtn = document.getElementById("tutBtn");

let settingModal = document.getElementById("setting-modal");
let tutorialModal = document.getElementById("tutorial-modal");
let closeTut = document.getElementById("close-tut");
let closeSetting = document.getElementById("close-setting");
let modals = document.getElementsByClassName("modal")[0];

// linking sounds
var upSound = document.querySelector("#up-sound");
var downSound = document.querySelector("#down-sound");
var leftSound = document.querySelector("#left-sound");
var rightSound = document.querySelector("#up-sound");

// Modal set up
tutorialBtn.addEventListener("click", () => {
    tutorialModal.style.display = "block";
    console.log("clicked question");
  });

gearBtn.addEventListener("click", () => {
    settingModal.style.display = "block";
    console.log("clicked gear");
  });


closeTut.addEventListener("click", () => {
  tutorialModal.style.display = "none";
  console.log("clicked X on tutorial")
});

closeSetting.addEventListener("click", () => {
  settingModal.style.display = "none";
  console.log("clicked X on setting")
});

// sound settings
// turn sound off 
soundBtn.addEventListener("click", () => {
  mutedBtn.classList.remove("hidden");
  soundBtn.classList.add("hidden");
  upSound.muted = true;
  leftSound.muted = true;
  downSound.muted = true;
  rightSound.muted = true;

});
// turn sound on
mutedBtn.addEventListener("click", () => {
  soundBtn.classList.remove("hidden");
  mutedBtn.classList.add("hidden");
  upSound.muted = false;
  leftSound.muted = false;
  downSound.muted = false;
  rightSound.muted = false;
});

