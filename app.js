// Generate computer input: rock, paper or scissors at random.
function computerPlay() {
  let randomNumber = Math.random() * 3;
  if (randomNumber < 1) {
    return 'rock';
  } else if (randomNumber < 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// Take player input and computer input and simulate a round
function playRound (playerSelection, computerSelection) {
  let computer = computerSelection;
  console.log('Computer:', computer);
  let player = playerSelection.toLowerCase();
  console.log('Player:', player);
  switch (computer) {
    case 'rock':
      switch (player) {
        case 'rock':
        console.log("It's a draw.");
        break;
        case 'paper':
        console.log("You win.");
        break;
        case 'scissor':
        console.log("You lose.");
        break;
        default:
        console.log('Something went wrong.');
      }
    break;
    case 'paper':
      switch (player) {
        case 'rock':
        console.log("You lose.");
        break;
        case 'paper':
        console.log("It's a draw.");
        break;
        case 'scissor':
        console.log("You win.");
        break;
        default:
        console.log('Something went wrong.');
      }
    break;
    case 'scissors':
      switch (player) {
        case 'rock':
        console.log("You win.");
        break;
        case 'paper':
        console.log("You lose.");
        break;
        case 'scissor':
        console.log("It's a draw.");
        break;
        default:
        console.log('Something went wrong.');
      }
    break;
    default:
      console.log('Something went wrong.');
  }

}

playRound('PapeR', computerPlay());