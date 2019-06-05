import React, { useState } from 'react'
import Moment from 'react-moment'
import axios from 'axios'

const TOKEN = 'spokesperson row improve cane'
const API_URL = 'http://one-list-api.herokuapp.com/'

export default function ToDoItem(props) {
  const [isCompleted, setIsCompleted] = useState(props.item.complete)
  const [errorMessage, setErrorMessage] = useState('')

  const toggleCompletion = () => {
    setIsCompleted(oldIsCompleted => !oldIsCompleted)
    axios
      .put(`${API_URL}/items/${props.item.id}?access_token=${TOKEN}`, {
        item: {
          complete: !isCompleted
        }
      })
      .then(resp => {
        console.log({ resp })
        if (resp.status !== 200) {
          //handle the error here
          setErrorMessage('WARNING, change not saved')
        }
      })
  }

  // const showErrorMessage = () => {
  //   if (errorMessage) {
  //     return <p className="errorMessage">{errorMessage}</p>
  //   } else return ''
  // }

  return (
    <li className={isCompleted ? 'completed' : ''}>
      <p className="item-text">{props.item.text}</p>

      <Moment fromNow>{props.item.created_at}</Moment>
      <hr />
      <div className="button-container">
        <button onClick={toggleCompletion}>
          {isCompleted ? 'undo' : 'complete'}
        </button>
        <button>edit</button>
        <button onClick={() => props.deleteItem(props.item.id)}>delete</button>
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      </div>
    </li>
  )
}
