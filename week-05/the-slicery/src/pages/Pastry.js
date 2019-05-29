import React, { Component } from 'react'

import data from '../data/foods.json'

// "image": "https://res.cloudinary.com/dbtqsg7vf/image/upload/v1559153663/pumpkin.jpg",
// "title": "Pumpking",
// "numberLeft": 22,
// "containsNuts": true,
// "feeds": 1

class Pastry extends Component {
  render() {
    const pastry = data.foods[this.props.match.params.tummyTreat].treats.filter(
      treat => treat.title === this.props.match.params.treatyMcTreatFace
    )[0]
    console.log({ pastry })
    return (
      <div className={pastry.className}>
        <img src={pastry.image} />
        <h2>{pastry.title}</h2>
        <h3>Serves: {pastry.feeds}</h3>
        <h3>{pastry.containsNuts ? 'Contains Nuts' : 'Peanut Free'}</h3>
        <h3>In Stock: {pastry.numberLeft}</h3>
      </div>
    )
  }
}

export default Pastry
