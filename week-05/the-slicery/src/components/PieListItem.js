import React, { Component } from 'react'

class PieListItem extends Component {
  render() {
    return (
      <li>
        <img
          src={this.props.imageUrl}
          alt="this is the best pie. fact. and it's real"
          title="this is the best pie. fact. and it's real"
        />
        <header>{this.props.title}</header>
      </li>
    )
  }
}

export default PieListItem
