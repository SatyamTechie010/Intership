// function ct() {
//   document.getElementById("head").innerText = "hello javascript";
// }

// function cc() {
//   document.getElementById("head").style.color = "red";
// }

// function resize() {
//   document.getElementById("im").style.width = "220px";
//   document.getElementById("im").style.height = "120px";
// }

let button = document.getElementById("head");
button.addEventListener("click", () => {
  document.getElementById('head').innerHTML="<b>Head</b>"
});

