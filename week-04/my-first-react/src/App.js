import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

const colors = ['red', 'yellow', 'blue', 'green', 'purple', 'blue', 'purple']

class App extends Component {
  render() {
    return (
      <main>
        {colors.map(color => {
          return <HelloWorld cssClass={color} />
        })}
      </main>
    )
  }
}

export default App
