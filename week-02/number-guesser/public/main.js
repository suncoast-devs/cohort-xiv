let targetNumber = 0

const main = () => {
  // gen a random for targetNumber
  targetNumber = Math.ceil(Math.random() * 25)
  console.log('the genned number is ' + targetNumber)
}

const compareGuess = () => {
  // get the number the user typed in
  const guess = parseInt(document.querySelector('#userGuess').value)
  console.log('the user guessed', guess, typeof guess)
  // checks if the guess is a number
  if (!isNaN(guess)) {
    // check if it the number is in the range
    if (guess <= 25 && guess >= 1) {
      console.log('range was hit')
      console.log(document.querySelector('.result'))
      if (guess === targetNumber) {
        document.querySelector('.result').textContent = 'Correct!'
      } else if (guess > targetNumber) {
        document.querySelector('.result').textContent = 'Guessed too high!'
      } else if (guess < targetNumber) {
        document.querySelector('.result').textContent = 'Guessed too low!'
      } else {
        document.querySelector('.result').textContent = 'Keep trying!'
      }
    } else {
      document.querySelector('.result').textContent =
        'We are looking for numbers between 1 and 25'
    }
  } else {
    document.querySelector('.result').textContent =
      'We are looking for numbers...'
  }
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.guessButton').addEventListener('click', compareGuess)
