import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <h1
        style={{
          color: `hsl(${this.props.hue}, ${this.props.saturation}%, ${
            this.props.lightness
          }%)`
        }}
      >
        Choose Cool Colours
      </h1>
    )
  }
}

export default Header
