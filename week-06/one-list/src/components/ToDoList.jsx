import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ToDoItem from './ToDoItem'

const TOKEN = 'spokesperson row improve cane'
const API_URL = 'http://one-list-api.herokuapp.com/'

export default function ToDoList() {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/items?access_token=${TOKEN}`).then(resp => {
      setTaskList(resp.data)
    })
  }, [])

  const addTaskToList = e => {
    e.preventDefault()
    console.log({ task })
    axios
      .post(`${API_URL}/items?access_token=${TOKEN}`, {
        item: {
          text: task
        }
      })
      .then(resp => {
        console.log({ resp })
        setTaskList(oldList => oldList.concat(resp.data))
        setTask('')
      })
  }

  const deleteItem = itemId => {
    axios
      .delete(`${API_URL}/items/${itemId}?access_token=${TOKEN}`)
      .then(resp => {
        // update our list
        setTaskList(oldList => oldList.filter(item => item.id !== itemId))
      })
  }

  return (
    <section>
      <form onSubmit={addTaskToList}>
        <input
          type="text"
          placeholder="Add an item..."
          value={task}
          onChange={e => {
            setTask(e.target.value)
          }}
        />
        <button>+</button>
      </form>
      <ul>
        {taskList.map(item => {
          return <ToDoItem key={item.id} item={item} deleteItem={deleteItem} />
        })}
      </ul>
    </section>
  )
}
