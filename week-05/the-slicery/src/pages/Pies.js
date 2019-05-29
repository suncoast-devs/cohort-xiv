import React, { Component } from 'react'

import pumpkin from '../images/pumpkin.jpg'
import smores from '../images/smores.jpg'
import sugarCream from '../images/sugar-cream.jpg'
import apple from '../images/apple.jpg'
import PieListItem from '../components/PieListItem'

const piesList = [
  {
    image: pumpkin,
    title: 'Pumpking'
  },
  {
    image: smores,
    title: "S'mores"
  },
  {
    image: apple,
    title: 'Apple!!!'
  },
  {
    image: sugarCream,
    title: 'Suga Cream'
  }
]

class Pies extends Component {
  render() {
    return (
      <div>
        <header>Check out these pies!</header>
        <ul>
          {piesList.map(pie => {
            return <PieListItem title={pie.title} imageUrl={pie.image} />
          })}
        </ul>
      </div>
    )
  }
}

export default Pies
