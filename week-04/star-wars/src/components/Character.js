import React, { Component } from 'react'

class Character extends Component {
  render() {
    return (
      <li>
        <article className="character">
          {/* <img src="/images/jar-jar.jpg" alt="Jar Jar Binks" /> */}
          <p>{this.props.name}</p>
          <p>{this.props.description}</p>
          <img src={this.props.pictureUrl} />
        </article>
      </li>
    )
  }
}

export default Character
