function getComputerChoice() {
  //Working with integer
  //returns 0 for rock
  //returns 1 for paper
  //returns 2 for scissors
  let choice = Math.floor(Math.random() * 3);
  return choice === 0 ? "Rock" : choice === 1 ? "Paper" : "Scissors";
}

function round(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "Rock":
      return computerSelection === "Paper"
        ? "You lost! Paper beats Rock"
        : computerSelection === "Scissors"
        ? "You Win! Rock beats Scissors"
        : "Tie! Both choose Rock";

    case "Paper":
      return computerSelection === "Scissors"
        ? "You lost! Scissors beats Paper"
        : computerSelection === "Rock"
        ? "You Win! Paper beats Rock"
        : "Tie! Both choose Paper";

    case "Scissor":
      return computerSelection === "Rock"
        ? "You lost! Rock beats Scissor"
        : computerSelection === "Paper"
        ? "You Win! Scissors beats Paper"
        : "Tie! Both choose Scissor";
  }
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
