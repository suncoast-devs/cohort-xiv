import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import ToDoList from './components/ToDoList'

class App extends Component {
  render() {
    return (
      <>
        <header>One-list</header>
        <ToDoList />
      </>
    )
  }
}

export default App
