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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    switch (
      (strRPStoInt(humanChoice.toLocaleLowerCase()) -
        strRPStoInt(computerChoice) +
        3) %
      3
    ) {
      case 0: // tie
        console.log("tie");
        break;
      case 1: // human wins
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        break;
      case 2: // computer wins
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        break;
      default:
        break;
    }
  }

  for (let iRound = 0; iRound < 5; iRound++){
    playRound(getHumanChoice(), getComputerChoice());
  }
}
