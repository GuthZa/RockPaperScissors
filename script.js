const btnRock = document.querySelector("#Rock");
const btnScissors = document.querySelector("#Scissors");
const btnPapper = document.querySelector("#Paper");

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
      return computerSelection === "Paper"
        ? "You lost! Paper beats Rock!"
        : computerSelection === "Scissors"
        ? "You Win! Rock beats Scissors!"
        : "Tie! Both choose Rock";

    case "Paper":
    case "paper":
    case "PAPER":
      return computerSelection === "Scissors"
        ? "You lost! Scissors beats Paper!"
        : computerSelection === "Rock"
        ? "You Win! Paper beats Rock!"
        : "Tie! Both choose Paper";

    case "Scissors":
    case "scissors":
    case "SCISSORS":
      return computerSelection === "Rock"
        ? "You lost! Rock beats Scissors!"
        : computerSelection === "Paper"
        ? "You Win! Scissors beats Paper!"
        : "Tie! Both choose Scissor";
  }
}

btnRock.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  console.log(playRound("Rock", computerSelection));
});
btnScissors.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  console.log(playRound("Scissors", computerSelection));
});
btnPapper.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  console.log(playRound("Paper", computerSelection));
});

// function playGame() {

//   while (true) {
//     let userSelection = prompt("Rock, Paper or Scissor?");
//     if (userSelection === "exit") return;
//     let computerSelection = getComputerChoice();
//     console.log(playRound(userSelection, computerSelection));
//   }
// }

//playGame();
