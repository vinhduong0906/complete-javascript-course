"use strict";
let number, score, highScore, guessStatus, guessing;
const presentScoreEl = document.querySelector(".present-score");
const highScoreEl = document.querySelector(".high-score");
const numberEl = document.querySelector(".number");
const guessStatusEl = document.querySelector(".guess-status");
const containerEl = document.querySelector(".container");
const inputNumberEl = document.getElementById("input-number");
highScore = 0;
// Initialation function called when start a new game
function initialation() {
  number = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  guessing = true;
  guessStatus = "Start guesting...";
  presentScoreEl.textContent = score;
  highScoreEl.textContent = highScore;
  numberEl.textContent = "?";
  guessStatusEl.textContent = guessStatus;
  containerEl.style.backgroundColor = "black";
  numberEl.classList.remove("correct-number");
  inputNumberEl.value = "";
  inputNumberEl.focus();
}
function checkoutProcess(presentScore, status) {
  guessStatusEl.textContent = status;

  presentScoreEl.textContent = presentScore;
}
initialation();

// Check button click even

document.querySelector(".check-btn").addEventListener("click", function () {
  if (guessing) {
    inputNumberEl.select();
    let guessNumber = Number(inputNumberEl.value);
    if (!guessNumber) guessStatus = "⛔ No number!";
    //Correct number case
    else if (guessNumber === number) {
      containerEl.style.backgroundColor = "green";
      guessStatus = "😁 Correct number!";
      numberEl.textContent = number;
      numberEl.classList.add("correct-number");
      if (highScore < score) {
        highScore = score;
        highScoreEl.textContent = highScore;
      }

      guessing = false;
    } else {
      guessStatus = guessNumber < number ? "😒 Too low!" : "😒 Too high!";

      score--;
    }

    //Lose case
    if (score === 0) {
      guessStatus = "😒 You lose!";
      containerEl.style.backgroundColor = "red";
      guessing = false;
    }

    checkoutProcess(score, guessStatus);
  }
});

// Again button click even

document.querySelector(".again-btn").addEventListener("click", initialation);
