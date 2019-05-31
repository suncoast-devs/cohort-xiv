import React, { Component } from 'react'

class HighLightedMovieTitle extends Component {
  render() {
    const elements = this.props.title.split(' ').map((word, index) => {
      if (index === 0) {
        return <span className="first">{word}</span>
      } else {
        return <>{` ${word}`}</>
      }
      // if its the first word return it with span, else , return just the word
    })
    return (
      <h1>
        {elements.map(element => {
          return element
        })}
      </h1>
    )
  }
}

export default HighLightedMovieTitle
