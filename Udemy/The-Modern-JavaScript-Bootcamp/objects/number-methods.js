let makeGuess = function (guess, min, max) {
  if (guess >= min && guess <= max) {
    return guess === Math.floor(Math.random() * (max - min) + min);
  } else {
    return `Please choose a number between ${min} and ${max}.`;
  }
};

console.log(makeGuess(11, 1, 5));
