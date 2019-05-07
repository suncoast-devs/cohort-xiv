let countOfTimesClicked = 0
let timeRemaining = 5 // in seconds

let interval
const startCountdown = () => {
  clearInterval(interval)
  interval = setInterval(() => {
    interval = timeRemaining -= 1
    updateClock()
    console.log(timeRemaining)
    if (timeRemaining === 0) {
      clearInterval(interval)
    }
  }, 750)
}

const updateCounterInHtml = () => {
  document.querySelector('.timesClicked').textContent = countOfTimesClicked
}

const updateClock = () => {
  const mins = Math.floor(timeRemaining / 60)
  const secs = timeRemaining - mins * 60
  console.log(mins, secs)
  document.querySelector('.clock-display').textContent = mins + ':' + secs
}

const main = () => {
  console.log('hello there!')
  updateCounterInHtml()
  updateClock()
  startCountdown()
}
const buttonClickEvent = () => {
  console.log('button was clicked')
  if (countOfTimesClicked < 5) {
    countOfTimesClicked += 1
  } else {
    document.querySelector('.counterButton').disabled = true
  }
  updateCounterInHtml()
}

const addSevenToCount = () => {
  console.log('adding 7')
  countOfTimesClicked += 7
  updateCounterInHtml()
}

const sayGreeting = () => {
  // grab the text from the input field
  const name = document.querySelector('.nameInput').value
  console.log(name)
  // update the HTML with a greeting + name
  document.querySelector('.output').textContent = 'Hello, ' + name
}

const resetCounter = () => {
  // reset score to 0
  countOfTimesClicked = 0
  updateCounterInHtml()
  // renable the button
  document.querySelector('.counterButton').disabled = false
  timeRemaining = 100
  startCountdown()
}

document.addEventListener('DOMContentLoaded', main)
document
  .querySelector('.counterButton')
  .addEventListener('click', buttonClickEvent)
document.querySelector('.addSeven').addEventListener('click', addSevenToCount)
// when the user clicks the .say-greeting-button
document
  .querySelector('.say-greeting-button')
  .addEventListener('click', sayGreeting)
document.querySelector('.reset').addEventListener('click', resetCounter)
