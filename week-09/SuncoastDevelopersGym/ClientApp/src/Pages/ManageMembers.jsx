import React, { Component } from 'react'
import axios from 'axios'

class ManageMembers extends Component {
  state = {
    members: [],
    member: {}
  }
  componentDidMount() {
    axios.get('/api/member').then(resp => {
      this.setState({
        members: resp.data
      })
    })
  }

  addNewMember = e => {
    e.preventDefault()
    axios.post('/api/member', this.state.member).then(resp => {
      this.setState({
        members: this.state.members.concat(this.state.member)
      })
    })
  }

  updateValue = e => {
    const state = this.state
    state.member[e.target.name] = e.target.value
    this.setState(state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addNewMember}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={this.updateValue}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={this.updateValue}
          />
          <input
            type="date"
            placeholder="Date of Birth"
            name="birthday"
            onChange={this.updateValue}
          />
          <input
            type="text"
            placeholder="Emergency Contact Name"
            name="emergencyContactName"
            onChange={this.updateValue}
          />
          <input
            type="text"
            placeholder="Emergency Contact Phone"
            name="emergencyContactPhone"
            onChange={this.updateValue}
          />
          <button>create member</button>
        </form>
        <main>
          <ul>
            {this.state.members.map(member => {
              return (
                <li className="members" key={member.id}>
                  {`${member.firstName} ${member.lastName}`}
                  <button>Delete</button>
                </li>
              )
            })}
          </ul>
        </main>
      </div>
    )
  }
}

export default ManageMembers
