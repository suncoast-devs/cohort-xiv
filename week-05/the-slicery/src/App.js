import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'

import Cannibals from './pages/Cannibals'
import BakeryList from './pages/BakeryList'
import Pastry from './pages/Pastry'

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
            <Route path="/:tummyTreat" exact component={BakeryList} />
            <Route
              path="/:tummyTreat/:treatyMcTreatFace"
              exact
              component={Pastry}
            />
            {/* <Route path="/pies/pumpkin" exact component={Pumpkin} /> */}
            <Route path="/cannibals" exact component={Cannibals} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
