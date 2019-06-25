import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import Home from './Pages/Home.jsx'
import ManageMembers from './Pages/ManageMembers'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/manage" component={ManageMembers} />
      </Layout>
    )
  }
}
