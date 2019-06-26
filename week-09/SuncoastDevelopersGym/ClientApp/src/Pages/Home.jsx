import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Home() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    axios.get('/api/member').then(resp => {
      setMembers(resp.data)
    })
  }, [])
  return (
    <div>
      <form>
        <input type="search" name="" id="" />
        <button>search</button>
      </form>
      <main>
        <ul>
          {members.map(member => {
            return (
              <li>
                {member.firstName} {member.lastName}
                <button>check in</button>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}
