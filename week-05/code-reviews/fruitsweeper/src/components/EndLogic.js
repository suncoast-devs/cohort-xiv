import React, { Component } from 'react'

class EndLogic extends Component {
  render() {
    let message = 'still playing'
    if (this.props.status === 'lost') {
      message = 'you lost, clean your shoe'
    } else if (this.props.status === 'won') {
      message = 'Who is a good boy!!?, you are!'
    }
    return (
      <div>
        <p>How are you doing so far?</p>
        <p>{message}</p>
      </div>
    )
  }
}

export default EndLogic
