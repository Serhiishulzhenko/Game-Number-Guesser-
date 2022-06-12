let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random()*10);
};
const compareGuesses = (humanGuess, computerGuess, secretTargetNumber) => {
  if (Math.abs(humanGuess-secretTargetNumber) <= Math.abs(computerGuess-secretTargetNumber)) {
    return true;
  } else {
    return false;
  }
};
const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else {
computerScore++;
  }
}
const advanceRound = () => {
currentRoundNumber++;
}
const check = humanGuess => {
  if (humanGuess > 9) { window.alert( 'Your number is out of range! Pleas, choose number between 0 and 9.')} 
}
