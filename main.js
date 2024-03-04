//Selecting the Elememnts
const score_0_elemnt = document.querySelector("#score_0");
const score_1_elemnt = document.querySelector("#score_1");
const current_score_0 = document.getElementById("current_0");
const current_score_1 = document.getElementById("current_1");
const player_0 = document.querySelector(".player_0");
const player_1 = document.querySelector(".player_1");
const diceImgEl = document.querySelector("img");
const btn_roleDice = document.querySelector(".click_role");
const btn_newGame = document.querySelector(".newgame");
const btn_holdScore = document.querySelector(".click_hold");

/* const number_choose = document
  .querySelector(".number_choose")
  .addEventListener("input", (e) => {
    e.target.valueAsNumber;
  }); */

//Starting Condition
let tolalScores, currentScore, activePlayer, stillPlaying;
const startingCondition = function () {
  score_0_elemnt.textContent = 0;
  score_1_elemnt.textContent = 0;
  current_score_0.textContent = 0;
  current_score_1.textContent = 0;

  diceImgEl.style = `display: none;`;
  tolalScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  stillPlaying = true;

  player_0.classList.remove("playerWin");
  player_1.classList.remove("playerWin");
  player_0.classList.add("player_active");
  player_1.classList.remove("player_active");
};
startingCondition();
//
const switchPlayer = function () {
  document.getElementById(`current_${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  document;
  player_0.classList.toggle("player_active");
  player_1.classList.toggle("player_active");
};
//

btn_roleDice.addEventListener("click", () => {
  if (stillPlaying) {
    //Generating  a random Dice Roll
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    //Display the dice
    diceImgEl.style = `display: block;`;
    diceImgEl.src = `img/dice_${randomDice}.png`;
    diceImgEl.alt = `Dice-${randomDice}`;

    //Check for rolled 1
    if (randomDice !== 1) {
      //Add dice to current Score
      currentScore += randomDice;
      document.getElementById(`current_${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

btn_holdScore.addEventListener("click", () => {
  if (stillPlaying) {
    //Add current score to active player
    tolalScores[activePlayer] += currentScore;
    document.getElementById(`score_${activePlayer}`).textContent =
      tolalScores[activePlayer];
    //Check if the player Score >= 100
    if (tolalScores[activePlayer] >= 100) {
      stillPlaying = false;
      document
        .querySelector(`.player_${activePlayer}`)
        .classList.add("playerWin");
      document
        .querySelector(`.player_${activePlayer}`)
        .classList.remove("player_active");
      document.querySelector(`#score_${activePlayer}`).textContent = `Winner`;
      diceImgEl.style = `display: none;`;
    } else {
      //Switch the Player
      switchPlayer();
    }
  }
});
btn_newGame.addEventListener("click", startingCondition);
