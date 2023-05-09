var settingManue = document.querySelector(".seting-manue");
var darkBtn = document.getElementById("drk-btn");
function settingManueTogel() {
  settingManue.classList.toggle("seting-manue-height");
}
darkBtn.onclick = function () {
  darkBtn.classList.toggle("drk-btn-on");
};
