import React, { Component } from 'react'

class Character extends Component {
  render() {
    return (
      <li>
        <article class="character">
          {/* <img src="/images/jar-jar.jpg" alt="Jar Jar Binks" /> */}
          <p>{this.props.name}</p>
          <p>{this.props.description}</p>
        </article>
      </li>
    )
  }
}

export default Character
