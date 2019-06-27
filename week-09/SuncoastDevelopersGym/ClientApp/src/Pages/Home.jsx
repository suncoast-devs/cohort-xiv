import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Home() {
  const [members, setMembers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [message, setMessage] = useState('')

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

  const checkInMember = member => {
    axios.post(`/api/checkin/${member.id}`).then(resp => {
      setMessage(`Member: ${member.firstName} was successfully checked in`)
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
      <section>{message && <h3>{message}</h3>}</section>
      <main>
        <ul>
          {members.map(member => {
            return (
              <li key={member.id}>
                {member.firstName} {member.lastName}
                <button onClick={() => checkInMember(member)}>check in</button>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}
