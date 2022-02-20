// Adapted from code from: https://www.w3schools.com/howto/howto_css_modals.asp
console.log("i am connected");
let soundBtn = document.getElementById("bell");
let gearBtn = document.getElementById("gear");
let tutorialBtn = document.getElementById("tutBtn");

let settingModal = document.getElementById("setting-modal");
let tutorialModal = document.getElementById("tutorial-modal");
let closeTut = document.getElementById("close-tut");
let closeSetting = document.getElementById("close-setting");
// let close = document.getElementsByClassName("close")[0];
let modals = document.getElementsByClassName("modal")[0];

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

window.onclick = function (event) {
  if (event.target == modals) {
    modals.style.display = "none";
    console.log("clicked outside")
  }
};
