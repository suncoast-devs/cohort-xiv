import React, { Component } from 'react'
import BakeryItem from '../components/BakeryItem'
import data from '../data/foods.json'
import HomeButton from '../components/HomeButton'
class BakeryList extends Component {
  render() {
    const thisTreat = this.props.match.params.tummyTreat
    return (
      <div>
        <HomeButton/>
        <header>{data.foods[thisTreat].tagline}!</header>
        <ul>
          {data.foods[thisTreat].treats.map((pie, index) => {
            return (
              <BakeryItem
                key={index}
                foodGroup={thisTreat}
                title={pie.title}
                imageUrl={pie.image}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default BakeryList
