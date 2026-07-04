let humanScore = 0;
let computerScore = 0;

function intRPStoStr(i) {
  switch (i) {
    case 0:
      return "rock";
      break;

    case 1:
      return "paper";
      break;

    default:
      return "scissors";
      break;
  }
}

function strRPStoInt(s) {
  switch (s) {
    case "rock":
      return 0;
      break;

    case "paper":
      return 1;
      break;

    default:
      return 2;
      break;
  }
}

function getComputerChoice() {
  return intRPStoStr(Math.floor(Math.random() * 3));
}

function getHumanChoice() {
  return intRPStoStr(
    +prompt("Enter \n0 for rock\n1 for paper\n2 for scissors", "0"),
  );
}

function playRound(humanChoice, computerChoice) {
  const para = document.createElement("p");
  switch (
    (strRPStoInt(humanChoice.toLocaleLowerCase()) -
      strRPStoInt(computerChoice) +
      3) %
    3
  ) {
    case 0: // tie
      para.textContent = "Tie: you and the computer both picked " + humanChoice;
      console.log("tie");
      break;
    case 1: // human wins
      para.textContent = "You win! " + humanChoice + " beats " + computerChoice;
      humanScore++;
      break;
    case 2: // computer wins
      para.textContent =
        "You lose! " + computerChoice + " beats " + humanChoice;
      computerScore++;
      break;
    default:
      break;
  }
  para.textContent = para.textContent + " " + humanScore + "-" + computerScore;
  textOutput = document.querySelector("#textOutput");
  textOutput.appendChild(para);

  // End condition is rough: if you keep playing, you can get the other win message
  if (humanScore >= 5) {
    const paraEnd = document.createElement("p");
    paraEnd.textContent =
      "You win but the computer guessed randomly so you just got lucky. Your success is empty. womp womp womp";
    textOutput.appendChild(paraEnd);
  } else if (computerScore >= 5) {
    const paraEnd = document.createElement("p");
    paraEnd.textContent = "You lose womp womp womp";
    textOutput.appendChild(paraEnd);
  }
}

for (const choice of ["rock", "paper", "scissors"]) {
  document
    .querySelector("#" + choice)
    .addEventListener("click", () => playRound(choice, getComputerChoice()));
}
