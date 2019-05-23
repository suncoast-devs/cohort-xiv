import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  componentDidMount() {
    fetch('https://minesweeper-api.herokuapp.com/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ difficulty: 1 })
    })
      .then(resp => {
        return resp.json()
      })
      .then(game => {
        console.log({ game })
      })
  }

  render() {
    return <HelloWorld />
  }
}

export default App
