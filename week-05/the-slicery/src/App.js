import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Pies from './pages/Pies'
import Cakes from './pages/Cakes'
import Cannibals from './pages/Cannibals'
import Cookies from './pages/Cookies'
import Pumpkin from './pages/Pumpkin'

class App extends Component {
  render() {
    // const { isLoggedIn, firstName, score, cardsLeft } = this.state
    // console.log(firstName)

    // this.setState({
    //   isLoggedIn,
    //   firstName,
    //   score,
    //   cardsLeft
    // })

    // const isLoggedIn = this.state.isLoggedIn
    // const firstName = this.state.firstName
    // const score = this.state.score
    // const cardsLeft = this.state.cardsLeft

    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/pies" exact component={Pies} />
            <Route path="/pies/pumpkin" exact component={Pumpkin} />
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
