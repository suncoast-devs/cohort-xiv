import React, { Component } from 'react'
import MovieContainer from './MovieContainer'

// import movieData from '../data/movies.json'

class MovieList extends Component {
  state = {
    movies: [],
    selectedYear: '1989'
  }

  componentDidMount() {
    console.log('component mounted')
    this.getMovieFromApi()
  }

  getMovieFromApi = () => {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=' +
        this.state.selectedYear +
        '&sort_by=popularity.desc&api_key=2b39f89969ae6ac7cc55346160e79f11'
    )
      .then(resp => {
        return resp.json()
      })
      .then(json => {
        console.log(json)
        this.setState({
          movies: json.results
        })
      })
  }

  updateYear = () => {
    // update state  to the year, 1999
    console.log('updating year')
    this.setState(
      {
        selectedYear: '1999'
      },
      () => {
        this.getMovieFromApi()
      }
    )
  }

  goTo93 = () => {
    console.log('going to 93')
    this.setState(
      {
        selectedYear: '1993'
      },
      this.getMovieFromApi
    )
  }

  render() {
    console.log('rendering')
    return (
      <>
        <button onClick={this.updateYear}>Fast forward 10yrs</button>
        <button onClick={this.goTo93}>Fast forward 4yrs</button>
        <main className="main-container">
          {this.state.movies.map(movie => {
            return (
              <>
                <MovieContainer
                  title={movie.title}
                  releaseDate={movie.release_date}
                  posterUrl={movie.poster_path}
                />
              </>
            )
          })}
        </main>
      </>
    )
  }
}

export default MovieList
