import React, { Component } from 'react'

class HelloWorld extends Component {
  render() {
    return (
      <h1 class={this.props.cssClass}>
        Hello, <a href="#">World!</a>
      </h1>
    )
  }
}

export default HelloWorld
