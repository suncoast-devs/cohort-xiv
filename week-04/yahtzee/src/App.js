import React, { Component } from 'react'

class App extends Component {
  state = {
    rolledDice: [],
    keptDice: [],
    numberOfDiceToRoll: 5,
    total: 0
  }

  getRandomNumber = () => {
    return Math.ceil(Math.random() * 6)
  }

  rollDice = () => {
    // roll 5 dice
    const hand = []
    for (let i = 0; i < this.state.numberOfDiceToRoll; i++) {
      hand.push(this.getRandomNumber())
    }
    console.log(hand)
    this.setState({
      rolledDice: hand
    })
  }

  keepDice = indexOfDiceToKeep => {
    console.log(indexOfDiceToKeep)
    console.log('value to move', this.state.rolledDice[indexOfDiceToKeep])
    const kept = this.state.keptDice.concat(
      this.state.rolledDice[indexOfDiceToKeep]
    )
    const total = kept.reduce((runningTotal, dice) => runningTotal + dice, 0)
    this.setState({
      // add the value to the kept dice array
      keptDice: kept,
      // remove the value from the rolledDice Array
      rolledDice: this.state.rolledDice.filter(
        (dice, index) => index !== indexOfDiceToKeep
      ),
      total
    })
    // update the total/sum/score of dice
  }

  render() {
    return (
      <>
        <header>Club Yahtzee!!!</header>
        <main>
          <button onClick={this.rollDice}>Roll</button>
          <p>You have 2 rolls left</p>
          You rolled:
          <ul>
            {this.state.rolledDice.map((dice, index) => {
              return (
                <li key={index}>
                  {dice}
                  <button onClick={() => this.keepDice(index)}>keep</button>
                </li>
              )
            })}
          </ul>
          You are keeping:
          <ul>
            {this.state.keptDice.map((dice, index) => {
              return (
                <li key={index}>
                  {dice} <button>unkeep</button>
                </li>
              )
            })}
          </ul>
          <p>your total is: {this.state.total}</p>
        </main>
      </>
    )
  }
}

export default App
