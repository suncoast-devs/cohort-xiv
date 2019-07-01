import React, { useState } from 'react'
import axios from 'axios'
export default function Register() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('/auth/register', {
        fullName,
        password,
        email: userName
      })
      .then(resp => {
        console.log(resp.data)
      })
  }

  return (
    <div>
      <h1 className="display-4">Sign up to be staff member!</h1>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label for="fullNameExample">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            id="fullNameExample"
            aria-describedby="nameHelp"
            placeholder="Full Name"
            onChange={e => setFullName(e.target.value)}
          />
          <small id="nameHelp" className="form-text text-muted">
            First and last name please.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={e => setUserName(e.target.value)}
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}
