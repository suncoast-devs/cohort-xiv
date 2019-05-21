import React, { Component } from 'react'
import MoviePoster from './MoviePoster'

class MovieContainer extends Component {
  render() {
    return (
      <section>
        <figure>
          <MoviePoster posterUrl={this.props.posterUrl} />
          <figcaption>
            <h2>{this.props.title}</h2>
            <p>{this.props.releaseDate}</p>
          </figcaption>
        </figure>
      </section>
    )
  }
}

export default MovieContainer
