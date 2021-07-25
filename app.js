game();

// ***
function game () {

  let playerCount = 0;
  let computerCount = 0;
  let limit = 5;
  const overallResult = document.querySelector('#overall');
  const moves = document.querySelectorAll('.move');
  const playerOptions = document.querySelector('#player-options');
  
  moves.forEach( move => move.addEventListener('mouseup', playRound))

  function playRound() {
    let roundResult = getRoundResult(this);
    
    if (roundResult === 'win') {
      playerCount++;
    } else if (roundResult === 'lose') {
      computerCount++;
    }
    
    overallResult.textContent = `Player ${playerCount} - ${computerCount} Computer`;
   
    if (playerCount === limit) {
      playerOptions.innerHTML = `
      <h3 class="pb-1">GAME OVER!</h3>
      <h3>YOU WIN!</h3>
      `;
    } else if (computerCount === limit) {
      playerOptions.innerHTML = `
      <h3 class="pb-1">GAME OVER!</h3>
      <h3>YOU LOSE!</h3>
      `;
    }
  }
}

// Calculate result of one round
function getRoundResult (move) {
 
  let computerMove = getComputerMove();
  let playerMove = move.textContent.toLowerCase();
  const lastRound = document.querySelector('#last-round');

  switch (computerMove) {
    case 'rock':
      switch (playerMove) {
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
      switch (playerMove) {
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
      switch (playerMove) {
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
      lastRound.textContent = 'Something went wrong.';
  }
}

// Generate computer input: rock, paper or scissors at random.
function getComputerMove() {
  let randomNumber = Math.random() * 3;
  if (randomNumber < 1) {
    return 'rock';
  } else if (randomNumber < 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}