import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import data from '../data/foods.json'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome The Slicery</h1>
        <h2>We'll slice you, a good slice</h2>
        <section>
          We have:
          {Object.keys(data.foods).map(foodGroup => {
            return (
              <Link key={foodGroup} to={`/${foodGroup}`}>
                {foodGroup}!
              </Link>
            )
          })}
          <Link to="/cannibals">Cannibals!</Link>
        </section>
      </div>
    )
  }
}

export default Home
