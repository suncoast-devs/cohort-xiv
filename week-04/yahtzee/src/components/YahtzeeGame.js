import React, { Component } from 'react'
import DiceItem from './DiceItem'

class YahtzeeGame extends Component {
  state = {
    rolledDice: [],
    keptDice: [],
    numberOfDiceToRoll: 5,
    rollsLeft: 3,
    total: 0
  }

  getRandomNumber = () => {
    return Math.ceil(Math.random() * 6)
  }

  rollDice = () => {
    // roll 5 dice
    console.log(this.state.rollsLeft)
    const rolledDice = []
    const isNewTurn = this.state.rollsLeft === 0
    const diceToRoll = isNewTurn ? 5 : this.state.numberOfDiceToRoll
    const state = {}
    if (isNewTurn) {
      state.keptDice = []
      state.total = 0
      state.rollsLeft = 3
      state.numberOfDiceToRoll = 5
    } else {
      state.rollsLeft = this.state.rollsLeft - 1
    }

    for (let i = 0; i < diceToRoll; i++) {
      rolledDice.push(this.getRandomNumber())
    }
    state.rolledDice = rolledDice

    this.setState(state)
  }

  unkeepDice = index => {
    // add back to the not-kept
    const unkept = this.state.rolledDice.concat(this.state.keptDice[index])
    // remove from kept array
    const kept = this.state.keptDice.filter((d, i) => i !== index)
    // update the score
    const total = kept.reduce((runningTotal, dice) => runningTotal + dice, 0)

    this.setState({
      keptDice: kept,
      rolledDice: unkept,
      total,
      numberOfDiceToRoll: this.state.numberOfDiceToRoll + 1
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
      total,
      numberOfDiceToRoll: this.state.numberOfDiceToRoll - 1
    })
    // update the total/sum/score of dice
  }

  render() {
    return (
      <main>
        <button onClick={this.rollDice}>Roll</button>
        <p>You have {this.state.rollsLeft} rolls left</p>
        You rolled:
        <ul>
          {this.state.rolledDice.map((dice, index) => {
            return (
              <DiceItem
                key={index}
                diceNumber={dice}
                index={index}
                diceAction={this.keepDice}
                buttonText="keep"
              />
            )
          })}
        </ul>
        You are keeping:
        <ul>
          {this.state.keptDice.map((dice, index) => {
            return (
              <DiceItem
                key={index}
                diceNumber={dice}
                index={index}
                diceAction={this.unkeepDice}
                buttonText="unkeep"
              />
            )
          })}
        </ul>
        <p>your total is: {this.state.total}</p>
      </main>
    )
  }
}

export default YahtzeeGame
