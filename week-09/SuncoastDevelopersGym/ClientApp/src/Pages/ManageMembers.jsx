import React, { Component } from 'react'

class ManageMembers extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="date" placeholder="Date of Birth" />
          <input type="text" placeholder="Emergency Contact Name" />
          <input type="text" placeholder="Emergency Contact Phone" />
          <button>create member</button>
        </form>
        <main>
          <ul>
            <li className="members">
              Jane
              <button>Check in</button>
            </li>
            <li className="members">
              Jane
              <button>Check in</button>
            </li>
            <li className="members">
              Jane
              <button>Check in</button>
            </li>
            <li className="members">
              Jane
              <button>Check in</button>
            </li>
            <li className="members">
              Jane
              <button>Check in</button>
            </li>
          </ul>
        </main>
      </div>
    )
  }
}

export default ManageMembers
