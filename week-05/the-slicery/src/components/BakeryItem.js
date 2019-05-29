import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class BakeryItem extends Component {
  render() {
    return (
      <li>
        <Link to={`/${this.props.foodGroup}/${this.props.title}`}>
          {' '}
          <img
            src={this.props.imageUrl}
            alt="this is the best pie. fact. and it's real"
            title="this is the best pie. fact. and it's real"
          />
          <header>{this.props.title}</header>
        </Link>
      </li>
    )
  }
}

export default BakeryItem
