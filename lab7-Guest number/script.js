"use strict";
let number = 0;
let score = 20;
let highScore = 0;
let guestStatus = "Start guesting...";
// Initialation function called when start a new game
function initialation(score, highScore, status) {
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".present-score").textContent = score;
  document.querySelector(".high-score").textContent = highScore;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guest-status").textContent = status;

  document.querySelector(".container").style.backgroundColor = "black";
  return 1;
}
function checkoutProcess(presentScore, status) {
  document.querySelector(".guest-status").textContent = status;

  document.querySelector(".present-score").textContent = presentScore;
  return 1;
}
initialation(score, highScore, guestStatus);

// Check button click even

document.querySelector(".check-btn").addEventListener("click", function () {
  let guestNumber = Number(document.querySelector("#input-number").value);
  if (!guestNumber) guestStatus = "⛔ No number!";
  //Correct number case
  else if (guestNumber === number) {
    document.querySelector(".container").style.backgroundColor = "green";
    guestStatus = "😁 Correct number!";
    document.querySelector(".number").textContent = number;
    if (highScore < score) {
      highScore = score;
      document.querySelector(".high-score").textContent = highScore;
    }

    document.querySelector(".check-btn").disabled = true;
  } else {
    guestStatus = guestNumber < number ? "😒 Too low!" : "😒 Too high!";

    score--;
  }

  //Lose case
  if (score === 0) {
    guestStatus = "😒 You lose!";
    document.querySelector(".container").style.backgroundColor = "red";
    document.querySelector(".check-btn").disabled = true;
  }

  checkoutProcess(score, guestStatus);
});

// Again button click even

document.querySelector(".again-btn").addEventListener("click", function () {
  score = 20;
  guestStatus = "Start guesting...";
  initialation(score, highScore, guestStatus);
  document.querySelector(".check-btn").disabled = false;
});
