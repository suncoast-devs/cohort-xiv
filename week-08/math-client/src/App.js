import React, { Component } from 'react'
import axios from 'axios'
class App extends Component {
  state = {
    data: {}
  }

  componentDidMount() {
    axios.get('https://localhost:5001/api/operations/add/42/13').then(resp => {
      this.setState({
        data: resp.data
      })
    })
  }

  render() {
    return <> {this.state.data.result}</>
  }
}

export default App
