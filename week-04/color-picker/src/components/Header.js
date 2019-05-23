import React, { Component } from 'react'

class Header extends Component {
  state = {
    hue: 275,
    sat: 50,
    light: 35
  }

  render() {
    return <h1>Choose Cool Colours</h1>
  }
}

export default Header
