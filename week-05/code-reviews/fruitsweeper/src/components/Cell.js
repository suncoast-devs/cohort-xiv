import React, { Component } from 'react'

class Cell extends Component {
  render() {
    let rv = <>{this.props.character}</>
    if (this.props.character === '*') {
      rv = (
        <>
          <span>💩</span>
        </>
      )
    } else if (this.props.character === 'F') {
      rv = (
        <>
          <span>🐶</span>
        </>
      )
    }
    return rv
  }
}

export default Cell
