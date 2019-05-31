import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AllMovies from './pages/AllMovies.jsx'
import Movie from './pages/Movie.jsx'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={AllMovies} />
            <Route exact path="/Movie/:id" component={Movie} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
