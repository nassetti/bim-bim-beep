// Adapted from code from: https://www.w3schools.com/howto/howto_css_modals.asp
console.log("i am connected");
var soundBtn = document.getElementById("bell");
var gearBtn = document.getElementById("gear");
var tutorialBtn = document.getElementById("tutBtn");

var settingModal = document.getElementById("setting-modal");
var tutorialModal = document.getElementById("tutorial-modal");
var close = document.getElementsByClassName("close")[0];
var modals = document.getElementsByClassName("modal")[0];

tutorialBtn.addEventListener("click", () => {
    tutorialModal.style.display = "block";
    console.log("clicked question");
  });

gearBtn.addEventListener("click", () => {
    tutorialModal.style.display = "block";
    console.log("clicked gear");
  });


close.addEventListener("click", () => {
  modals.style.display = "none";
  console.log("clicked X")
});

window.onclick = function (event) {
  if (event.target == modals) {
    modals.style.display = "none";
    console.log("clicked outside")
  }
};
