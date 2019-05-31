import React, { Component } from 'react'

class MovieComponent extends Component {
  render() {
    return <div>{this.props.movie.title}</div>
  }
}

export default MovieComponent
