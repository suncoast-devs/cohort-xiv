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

document.addEventListener('DOMContentLoaded', main)
document.querySelector('button').addEventListener('click', buttonClickEvent)
document.querySelector('.addSeven').addEventListener('click', addSevenToCount)
