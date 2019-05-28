import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Minesweeper from './components/Minesweeper'

class App extends Component {
  render() {
    return (
      <>
        <HelloWorld />
        <Minesweeper />
      </>
    )
  }
}

export default App
