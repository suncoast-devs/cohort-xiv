import React, { Component } from 'react'

class HelloWorld extends Component {
  state = { users: [] }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({ users: data }))
  }

  render() {
    console.log(this.state.users)
    return (
      <div>
        {this.state.users.map(user => (
          <div>
            <p> {user.name} </p>
            <p> {user.email} </p>
          </div>
        ))}
      </div>
    )
  }
}

export default HelloWorld
