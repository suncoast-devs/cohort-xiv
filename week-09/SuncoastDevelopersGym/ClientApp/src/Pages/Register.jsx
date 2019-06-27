import React, { useState } from 'react'

export default function Register() {
  return (
    <div>
      <h1 className="display-4">Sign up to be staff member!</h1>
      <form>
        <div className="form-group">
          <label for="fullNameExample">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            id="fullNameExample"
            aria-describedby="nameHelp"
            placeholder="Full Name"
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
