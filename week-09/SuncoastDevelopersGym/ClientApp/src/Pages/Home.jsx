import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Home() {
  const [members, setMembers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios.get('/api/member').then(resp => {
      setMembers(resp.data)
    })
  }, [])

  const getSearchResults = e => {
    e.preventDefault()
    axios.get('/api/search/members?searchTerm=' + searchTerm).then(resp => {
      setMembers(resp.data)
    })
  }
  return (
    <div>
      <form onSubmit={getSearchResults}>
        <input
          type="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button>search</button>
      </form>
      <main>
        <ul>
          {members.map(member => {
            return (
              <li key={member.id}>
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
