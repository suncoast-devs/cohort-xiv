import React, { Component } from 'react'

class DiceRoller extends Component {
  state = {
    randomResult: Math.ceil(Math.random() * 6),
    greeting: 'Hello !',
    counter: 1,
    pastResults: []
  }

  rollDice = () => {
    const random = Math.ceil(Math.random() * 6)
    console.log(random)
    this.setState({
      randomResult: random,
      counter: this.state.counter + 1,
      timestamp: new Date(),
      pastResults: this.state.pastResults.concat(this.state.randomResult)
    })
  }

  reset = () => {
    this.setState({
      randomResult: Math.ceil(Math.random() * 6),
      greeting: 'Hello !',
      counter: 1,
      pastResults: []
    })
  }

  render() {
    return (
      <div>
        <p className={`roll-${this.state.randomResult}`}>
          {this.state.randomResult}
        </p>
        <p>You have roll {this.state.counter} dice</p>
        <button onClick={this.rollDice}>Roll!</button>
        <button onClick={this.reset}>Start over</button>
        <div className="class-is-coll" />
        <ul>
          {this.state.pastResults.map(roll => {
            return <li className={`roll-${roll}`}>{roll}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default DiceRoller
