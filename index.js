function moveDodgerLeft() {

  const dodger = document.getElementById("dodger");
  const leftNumber = dodger.style.left.replace ("px","");
  const left = parsInt(leftNumber, 10);

  if (left > 0) {
    dodger.style.left= `${left - 1}px`;
  }

}
function moveDodgerRight() {
  const dodger = document.getElementById("dodger");
  const leftNumber= dodger.style.left.replace("px","");
  const right = parseInt (leftNumber, 10);

  if (right < 380) {
    dogder.style.left = `${right + 1}px`; 
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
