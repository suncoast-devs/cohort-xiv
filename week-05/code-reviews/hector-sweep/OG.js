import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import { request } from 'http'

class App extends Component {
  state = {
    board: []
  }
  componentDidMount() {
    const data = { number: 0 }
    const request = {
      method: 'POST',
      // mode: 'cors',
      // cache: 'no-cache',
      // credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(data)
    }

    fetch('https://minesweeper-api.herokuapp.com/games', request)
      .then(response => {
        return response.json()
      })
      .then(game => {
        console.log(game)
        this.setState({
          board: game.board
        })
      })
  }

  render() {
    return <h1>Hello world</h1>
  }
}

export default App
