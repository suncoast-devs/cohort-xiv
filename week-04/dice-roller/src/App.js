import React, { Component } from 'react'
import Header from './components/Header'
import DiceRoller from './components/DiceRoller.js'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <DiceRoller />
      </>
    )
  }
}

export default App
