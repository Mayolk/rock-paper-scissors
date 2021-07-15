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
  console.log(computer);
  let player = playerSelection.toLowerCase();

  switch (computer) {
    case 'rock':
      switch (player) {
        case 'rock':
        console.log("It's a draw.");
        return 'draw';
        case 'paper':
        console.log("You win. Paper beats rock.");
        return 'win';
        case 'scissors':
        console.log("You lose. Rock beats scissors.");
        return 'lose';
        default:
        console.log('Something went wrong.');
      }
    break;
    case 'paper':
      switch (player) {
        case 'rock':
        console.log("You lose. Paper beats rock.");
        return 'lose';
        case 'paper':
        console.log("It's a draw.");
        return 'draw';
        case 'scissors':
        console.log("You win. Scissors beat paper.");
        return 'win';
        default:
        console.log('Something went wrong.');
      }
    break;
    case 'scissors':
      switch (player) {
        case 'rock':
        console.log("You win. Rock beats scissors.");
        return 'win';
        case 'paper':
        console.log("You lose. Scissors beat paper.");
        return 'lose';
        case 'scissors':
        console.log("It's a draw.");
        return 'draw';
        default:
        console.log('Something went wrong.');
      }
    break;
    default:
      console.log('Something went wrong.');
  }

}
// Take input from the user and playRound.
// Record results
function game () {
  let playerCount = 0;
  let computerCount = 0;

  // USE A LOOP

  let lastRound = playRound(prompt('Round 1. Rock, paper or scissors','') , computerPlay());
  if ( lastRound === 'win') {
    playerCount++;
  } else if (lastRound === 'lose')  {
    computerCount++;
  }
  lastRound = playRound(prompt('Round 2. Rock, paper or scissors','') , computerPlay());
  if ( lastRound === 'win') {
    playerCount++;
  } else if (lastRound === 'lose')  {
    computerCount++;
  }
  lastRound = playRound(prompt('Round 3. Rock, paper or scissors','') , computerPlay());
  if ( lastRound === 'win') {
    playerCount++;
  } else if (lastRound === 'lose')  {
    computerCount++;
  }

  lastRound = playRound(prompt('Round 4. Rock, paper or scissors','') , computerPlay());
  if ( lastRound === 'win') {
    playerCount++;
  } else if (lastRound === 'lose')  {
    computerCount++;
  }

  lastRound = playRound(prompt('Round 5. Rock, paper or scissors','') , computerPlay());
  if ( lastRound === 'win') {
    playerCount++;
  } else if (lastRound === 'lose')  {
    computerCount++;
  }

  console.log(`Final result: You:${playerCount} - Comp:${computerCount}`);
}

game();