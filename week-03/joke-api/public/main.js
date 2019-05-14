let currentJoke = {}

const getJokeFromApi = () => {
  // console.log('getting joke from API')
  console.log('1')
  document.querySelector('.get-joke').disabled = true
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => {
      console.log('2')

      // console.log(response)
      return response.json()
    })
    .then(joke => {
      console.log('3')

      console.log(joke)
      document.querySelector('.joke').textContent = joke.setup
      currentJoke = joke
      // storing the the punchline (and the whole joke)
      // so the punchline can be referenced later in the code
      document.querySelector('.get-joke').disabled = false
    })
  console.log('4')
}

const showPunchline = () => {
  document.querySelector('.punchline').textContent = currentJoke.punchline
}

document.querySelector('.get-joke').addEventListener('click', getJokeFromApi)
document
  .querySelector('.get-punchline')
  .addEventListener('click', showPunchline)
