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
function playRound () {
  let computer = computerPlay();
  let player = this.textContent.toLowerCase();
  const lastRound = document.querySelector('#last-round');
  switch (computer) {
    case 'rock':
      switch (player) {
        case 'rock':
        lastRound.textContent = "It's a draw.";
        return 'draw';
        case 'paper':
        lastRound.textContent = "You win. Paper beats rock.";
        return 'win';
        case 'scissors':
        lastRound.textContent = "You lose. Rock beats scissors.";
        return 'lose';
        default:
        lastRound.textContent = 'Something went wrong.';
      }
    break;
    case 'paper':
      switch (player) {
        case 'rock':
        lastRound.textContent = "You lose. Paper beats rock.";
        return 'lose';
        case 'paper':
        lastRound.textContent = "It's a draw.";
        return 'draw';
        case 'scissors':
        lastRound.textContent = "You win. Scissors beat paper.";
        return 'win';
        default:
        lastRound.textContent = 'Something went wrong.';
      }
    break;
    case 'scissors':
      switch (player) {
        case 'rock':
        lastRound.textContent = "You win. Rock beats scissors.";
        return 'win';
        case 'paper':
        lastRound.textContent = "You lose. Scissors beat paper.";
        return 'lose';
        case 'scissors':
        lastRound.textContent = "It's a draw.";
        return 'draw';
        default:
        lastRound.textContent = 'Something went wrong.';
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

  const moves = document.querySelectorAll('.move');
  moves.forEach( move => move.addEventListener('mouseup', playRound));


}

game();