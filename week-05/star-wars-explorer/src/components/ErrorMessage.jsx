import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class ErrorMessage extends Component {
  render() {
    return (
      <div className="error-message">
        <h1>{this.props.message}</h1>
        <h3>
          Why don't your try <Link to="/">looking for a movie</Link>
        </h3>
      </div>
    )
  }
}

export default ErrorMessage
