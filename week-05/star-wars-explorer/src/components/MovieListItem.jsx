import React, { Component } from 'react'

class MovieListItem extends Component {
  render() {
    return <div>{this.props.movie.title}</div>
  }
}

export default MovieListItem
