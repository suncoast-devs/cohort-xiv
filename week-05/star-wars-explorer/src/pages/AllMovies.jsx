import React, { Component } from 'react'
import axios from 'axios'
import MovieListItem from '../components/MovieListItem.jsx'

class AllMovies extends Component {
  state = {
    movies: []
  }
  componentDidMount() {
    axios.get('https://www.swapi.co/api/films').then(resp => {
      console.log({ resp })
      this.setState({
        movies: resp.data.results
      })
    })
  }

  render() {
    return (
      <div>
        <header>Check out these movies!</header>
        <main>
          {this.state.movies.map((movie, index) => {
            return <MovieListItem key={index} movie={movie} />
          })}
        </main>
      </div>
    )
  }
}

export default AllMovies
