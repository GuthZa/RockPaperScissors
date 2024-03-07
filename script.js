const btnRock = document.querySelector("#Rock");
const btnScissors = document.querySelector("#Scissors");
const btnPapper = document.querySelector("#Paper");
const results = document.querySelector(".results");
const scoreboard = document.querySelector(".scoreboard");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  //0 for rock, 1 for paper, 2 for scissors
  let choice = Math.floor(Math.random() * 3);
  return choice === 0 ? "Rock" : choice === 1 ? "Paper" : "Scissors";
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    default:
      return "Invalid input!";
    case "Rock":
    case "rock":
    case "ROCK":
      if (computerSelection === "Paper") {
        computerScore++;
        return "You lost! Paper beats Rock!";
      } else if (computerSelection === "Scissors") {
        playerScore++;
        return "You Win! Rock beats Scissors!";
      }
      return "Tie! Both choose Rock";
    case "Paper":
    case "paper":
    case "PAPER":
      if (computerSelection === "Scissors") {
        computerScore++;
        return "You lost! Scissors beats Paper!";
      } else if (computerSelection === "Rock") {
        playerScore++;
        return "You Win! Paper beats Rock!";
      }
      return "Tie! Both choose Paper";
    case "Scissors":
    case "scissors":
    case "SCISSORS":
      if (computerSelection === "Rock") {
        computerScore++;
        return "You lost! Rock beats Scissors!";
      } else if (computerSelection === "Paper") {
        playerScore++;
        ("You Win! Scissors beats Paper!");
      }
      return "Tie! Both choose Scissor";
  }
}

btnPapper.addEventListener("click", () => {
  let a = $(this).attr("id");
  console.log(a);
});

btnRock.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  results.textContent = playRound("Rock", computerSelection);
  updateScoreboard();
});
btnScissors.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  results.textContent = playRound("Scissors", computerSelection);
  updateScoreboard();
});
btnPapper.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  results.textContent = playRound("Paper", computerSelection);
  updateScoreboard();
});

function updateScoreboard() {
  scoreboard.textContent = `Player ${playerScore} - ${computerScore} Computer`;
  checkWinner();
}

function checkWinner() {
  results.textContent +=
    playerScore === 5
      ? " Player Won!"
      : computerScore === 5
      ? " Computer Won!"
      : "";
}
