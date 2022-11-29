"use strict";

const playButton = document.querySelector(".intro button");
const introScreen = document.querySelector(".intro");
const match = document.querySelector(".match");
const options = document.querySelectorAll(".options button");
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");
const pscore = document.querySelector(".player-score p");
const cscore = document.querySelector(".computer-score p");

let playerScore = 0;
let computerScore = 0;

const game = () => {
  //   Start the game
  function startGame() {
    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  }

  //   Play Match
  function playMatch() {
    // Computer Options
    const computerOptions = ["rock", "paper", "scissors"];
    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        // Call compare choices
        compareChoices(this.textContent, computerChoice);

        // Update Images
        playerHand.src = `./img/${this.textContent}.png`;
        computerHand.src = `./img/${computerChoice}.png`;
      });
    });
  }

  function updateScore() {
    pscore.textContent = playerScore;
    cscore.textContent = computerScore;
  }

  function compareChoices(playerChoice, computerChoice) {
    // Update text
    const winner = document.querySelector(".winner");

    // Check for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }

    // Check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        playerScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        computerScore++;
        updateScore();
        return;
      }
    }

    // Check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "computer Wins";
        computerScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player wins Wins";
        playerScore++;
        updateScore();
        return;
      }
    }
    // Check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        computerScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player  Wins";
        playerScore++;
        updateScore();
        return;
      }
    }
  }

  //   Call all the inner functions
  startGame();
  playMatch();
};

//Game start function
game();
