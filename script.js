// pop-up window
const closeModal = document.querySelector(".close-modal");
const got = document.querySelector(".got");
const overlay = document.querySelector(".overlay");
const popUp = document.querySelector(".pop-up");
const closePopup = function () {
  popUp.classList.add("hidden");
  overlay.classList.add("hidden");
};
closeModal.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);
got.addEventListener("click", closePopup);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !popUp.classList.contains("hidden")) {
    closePopup();
  }
});
// game

var y = Math.floor(Math.random() * 20 + 1);

// counting the number of guesses
// made for correct Guess
var guess = 1;

document.getElementById("check").onclick = function () {
  // number guessed by user
  var x = document.getElementById("number").value;

  if (x == y) {
    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS ");
  } else if (x > y) {
    /* if guessed number is greater than actual number*/
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
  } else {
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER");
  }
};
