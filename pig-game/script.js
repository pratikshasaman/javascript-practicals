"use strict";
let scores, currentScore, activePlayer;
const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  diceEl.classList.add("hidden");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
};

init();

const switchUser = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  let diceCount = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${diceCount}.png`;
  currentScore += diceCount;

  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  if (diceCount == 1) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    document.getElementById(`current--${activePlayer}`).textContent = 0;
    switchUser();
  }
});

btnNew.addEventListener("click", init);
