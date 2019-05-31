import React, { Component } from 'react'

import axios from 'axios'
import ErrorMessage from '../components/ErrorMessage'
import MovieComponent from '../components/MovieComponent'

class Movie extends Component {
  state = { movie: {} }
  componentDidMount() {
    const movieId = this.props.match.params.id

    if (!isNaN(parseInt(movieId))) {
      axios.get(`https://swapi.co/api/films/${movieId}`).then(resp => {
        this.setState({
          movie: resp.data
        })
      })
    } else {
      this.setState({
        errorMessage: 'That is not a movie id, try again'
      })
    }
  }

  render() {
    // if (this.state.errorMessage) {
    //   return <>{this.state.errorMessage}</>
    // } else {
    //   return <>{this.state.movie.title}</>
    // }

    return this.state.errorMessage ? (
      <ErrorMessage message={this.state.errorMessage} />
    ) : (
      <MovieComponent movie={this.state.movie} />
    )
  }
}

export default Movie
