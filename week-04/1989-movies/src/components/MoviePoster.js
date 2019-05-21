import React, { Component } from 'react'

class MoviePoster extends Component {
  render() {
    return (
      <img
        src={
          'https://image.tmdb.org/t/p/w185_and_h278_bestv2' +
          this.props.posterUrl
        }
      />
    )
  }
}

export default MoviePoster
