import React, { Component } from 'react'
import MineContainer from './components/MineContainer'

class App extends Component {
  render() {
    return (
      <>
        <h1>Minesweeper</h1>

        <MineContainer />
      </>
    )
  }
}

export default App
