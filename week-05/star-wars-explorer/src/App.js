import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AllMovies from './pages/AllMovies.jsx'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={AllMovies} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
