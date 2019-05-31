import React, { Component } from 'react'
import axios from 'axios'

import ErrorMessage from '../components/ErrorMessage'
import MovieComponent from '../components/MovieComponent'

class Movie extends Component {
  state = {
    movie: {},
    errorMessage: null
  }

  componentDidMount() {
    const movieId = this.props.match.params.id

    if (!isNaN(parseInt(movieId))) {
      axios
        .get(`https://swapi.co/api/films/${movieId}`)
        .then(resp => {
          console.log({ resp })
          if (resp.status === 200) {
            this.setState({
              movie: resp.data
            })
          } else {
            this.setState({
              errorMessage: 'API is down, go for walk.'
            })
          }
        })
        .catch(error => {
          this.setState({
            errorMessage: error.message
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
