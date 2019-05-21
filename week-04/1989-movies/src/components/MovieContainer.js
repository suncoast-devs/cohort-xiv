import React, { Component } from 'react'
import MoviePoster from './MoviePoster'

class MovieContainer extends Component {
  render() {
    return (
      <div>
        <MoviePoster posterUrl={this.props.posterUrl} />

        <h3>{this.props.title}</h3>
        <p>{this.props.releaseDate}</p>
      </div>
    )
  }
}

export default MovieContainer
