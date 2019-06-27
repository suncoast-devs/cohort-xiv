import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import Home from './Pages/Home.jsx'
import ManageMembers from './Pages/ManageMembers'
import Login from './Pages/Login'
import Register from './Pages/Register'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/manage" component={ManageMembers} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Register} />
      </Layout>
    )
  }
}
