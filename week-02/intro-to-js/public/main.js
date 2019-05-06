let countOfTimesClicked = 0

const updateCounterInHtml = () => {
  document.querySelector('.timesClicked').textContent = countOfTimesClicked
}

const main = () => {
  console.log('hello there!')
  updateCounterInHtml()
}
const buttonClickEvent = () => {
  console.log('button was clicked')
  countOfTimesClicked += 1
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

document.addEventListener('DOMContentLoaded', main)
document.querySelector('button').addEventListener('click', buttonClickEvent)
document.querySelector('.addSeven').addEventListener('click', addSevenToCount)
// when the user clicks the .say-greeting-button
document
  .querySelector('.say-greeting-button')
  .addEventListener('click', sayGreeting)
