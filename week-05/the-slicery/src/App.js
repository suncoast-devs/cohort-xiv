import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Pies from './pages/Pies'
import Cakes from './pages/Cakes'
import Cannibals from './pages/Cannibals'
import Cookies from './pages/Cookies'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/pies" exact component={Pies} />
            <Route path="/cakes" exact component={Cakes} />
            <Route path="/cannibals" exact component={Cannibals} />
            <Route path="/cookies" exact component={Cookies} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
