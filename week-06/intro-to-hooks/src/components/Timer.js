import React, { useState, useEffect } from 'react'

export default function Timer() {
  const [timer, setTimer] = useState(1)

  useEffect(() => {
    setInterval(() => {
      console.log('this will run every second')
      setTimer(oldTimer => oldTimer + 1)
    }, 1000)
  }, [])

  return (
    <>
      <h1>{timer}</h1>
    </>
  )
}
