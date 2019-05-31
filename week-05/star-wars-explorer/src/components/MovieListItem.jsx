import React, { Component } from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
class MovieListItem extends Component {
  render() {
    const splitted = this.props.movie.url.split('/')
    const movieId = splitted[splitted.length - 2]
    console.log({ splitted, movieId })
    return (
      <Link to={`/Movie/${movieId}`}>
        <h1>{this.props.movie.title}</h1>
        <h2>
          <Moment format="MMM Do, YYYY">{this.props.movie.release_date}</Moment>
        </h2>
        <h3>Planets: {this.props.movie.planets.length}</h3>
        <h3>Characters: {this.props.movie.characters.length}</h3>
        <hr />
      </Link>
    )
  }
}

export default MovieListItem
