import React, { Component } from 'react'

import pumpkin from '../images/pumpkin.jpg'

class Pies extends Component {
  render() {
    return (
      <div>
        <header>Check out these pies!</header>
        <img
          src={pumpkin}
          alt="this is the best pie. fact. and it's real"
          title="this is the best pie. fact. and it's real"
        />
      </div>
    )
  }
}

export default Pies
