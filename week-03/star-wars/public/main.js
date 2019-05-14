const main = () => {
  fetch('https://swapi.co/api/people')
    .then(resp => {
      return resp.json()
    })
    .then(results => {
      const randomPersonNumber = Math.ceil(Math.random() * results.count)
      fetch(
        'https://swapi.co/api/people/' + randomPersonNumber + '/?format=json'
      )
        .then(resp => {
          return resp.json()
        })
        .then(person => {
          console.log({ person })
          document.querySelector('.name').textContent = person.name
          fetch(person.homeworld)
            .then(resp => {
              return resp.json()
            })
            .then(homeWorld => {
              console.log({ homeWorld })
              document.querySelector('.homeworld').textContent = homeWorld.name
            })
            .catch(error => {
              console.log({ error })
            })
        })
    })
}

document.addEventListener('DOMContentLoaded', main)
