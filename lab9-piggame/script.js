"use strict";
const newGame = document.getElementById("newgame-btn");
const roll = document.getElementById("roll-btn");
const hold = document.getElementById("hold-btn");
const player = [
  document.getElementById("player-1"),
  document.getElementById("player-2"),
];
const playerScore = [
  document.querySelector(".pl1-score"),
  document.querySelector(".pl2-score"),
];
const playerCurrentScore = [
  document.querySelector(".pl1-current-score"),
  document.querySelector(".pl2-current-score"),
];
const playTimes = [
  document.querySelector(".pl1-times"),
  document.querySelector(".pl2-times"),
];
let playing, $playerScore, $playerCurrentScore, $playerTimes;
const init = function () {
  playing = "true";
  $playerScore = [0, 0];
  $playerCurrentScore = 0;
  $playerTimes = [0, 0];
  player[0].classList.remove("player-winner");
  player[1].classList.remove("player-winner");
  if (!player[0].classList.contains("player-active")) {
    player[0].classList.add("player-active");
    player[1].classList.remove("player-active");
  }
  playerScore[0].textContent = playerScore[1].textContent = 0;
  playerCurrentScore[0].textContent = playerCurrentScore[1].textContent = 0;
  playTimes[0].textContent = playTimes[1].textContent = 0;
};

//Initialation the game
init();

//Reset all value of game to 0
newGame.addEventListener("click", init);
const changePlayer = function () {
  $playerCurrentScore = 0;
  playerCurrentScore[0].textContent = playerCurrentScore[1].textContent =
    $playerCurrentScore;
  for (let i = 0; i <= 1; i++) {
    if (player[i].classList.contains("player-active")) {
      player[i].classList.remove("player-active");
      player[i === 0 ? 1 : 0].classList.add("player-active");
      $playerTimes[i]++;
      playTimes[i].textContent = $playerTimes[i];
      break;
    }
  }
  return 0;
};
//Roll button click function
roll.addEventListener("click", function () {
  if (playing) {
    const diceScore = Math.floor(Math.random() * 6 + 1);
    document.getElementById("dice-img").src = `dice-${diceScore}.png`;

    if (diceScore !== 1) {
      $playerCurrentScore += diceScore;
      for (let i = 0; i <= 1; i++) {
        if (player[i].classList.contains("player-active")) {
          playerCurrentScore[i].textContent = $playerCurrentScore;
          break;
        }
      }
    } else {
      changePlayer();
    }
  }
});

//Hold button click function
hold.addEventListener("click", function () {
  if (playing) {
    for (let i = 0; i <= 1; i++) {
      if (player[i].classList.contains("player-active")) {
        $playerScore[i] += $playerCurrentScore;
        playerScore[i].textContent = $playerScore[i];
        if ($playerScore[i] >= 100) {
          player[i].classList.add("player-winner");
          playing = false;
          $playerTimes[i]++;
          playTimes[i].textContent = $playerTimes[i];
        } else {
          changePlayer();
          break;
        }
      }
    }
  }
});
