// Function that returns rock, paper, or scissors at random.
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

console.log(computerPlay());