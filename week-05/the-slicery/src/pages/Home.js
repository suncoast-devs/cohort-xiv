import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome The Slicery</h1>
        <h2>We'll slice you, a good slice</h2>
        <section>
          We have:
          <Link to="/pies">PIES!</Link>
          <Link to="/cookies">Cookies!</Link>
          <Link to="/cannibals">Cannibals!</Link>
          <Link to="/cakes">Cakes!</Link>
        </section>
      </div>
    )
  }
}

export default Home
