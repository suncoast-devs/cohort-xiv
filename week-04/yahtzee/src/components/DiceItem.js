import React, { Component } from 'react'

class DiceItem extends Component {
  render() {
    return (
      <li>
        {this.props.diceNumber}
        <button onClick={() => this.props.diceAction(this.props.index)}>
          {this.props.buttonText}
        </button>
      </li>
    )
  }
}

export default DiceItem
