import React, { Component } from 'react'
import Counter from './Counter'

class Island extends Component {
  componentDidMount() {
    // do my fetch,
  }

  render() {
    return (
      <Counter startingCount={13} mermaidCount={8} tribe={'under the sea'} />
    )
  }
}

export default Island
