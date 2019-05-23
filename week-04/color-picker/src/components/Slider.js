import React, { Component } from 'react'

class Slider extends Component {
  render() {
    return (
      <div>
        {this.props.label}:
        <input
          type="range"
          onChange={this.props.setMethod}
          name={this.props.name}
          min={this.props.min ? this.props.min : 0}
          max={this.props.max}
          step={this.props.step ? this.props.step : 1}
          value={this.props.value}
        />
      </div>
    )
  }
}

export default Slider
