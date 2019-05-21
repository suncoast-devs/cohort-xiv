import React, { Component } from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MovieList />
      </>
    )
  }
}

export default App
