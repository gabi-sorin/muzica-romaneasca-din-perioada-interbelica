// variable to store our intervalID
let nIntervId;

function changeColor() {
    nIntervId = setInterval(flashText, 1000);
  
}

function flashText() {
  const oElem = document.getElementById("my_box");
  oElem.className = oElem.className === "go" ? "stop" : "go";
}

function stopTextColor() {
  clearInterval(nIntervId);
  // release our intervalID from the variable
  nIntervId = null;
}
document.addEventListener("DOMContentLoaded", function(){
document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);

});