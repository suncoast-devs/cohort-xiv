import React, { Component } from 'react'

import Counter from './components/Counter'
import Weather from './components/Weather'
import Timer from './components/Timer'
export default function App() {
  return (
    <>
      <Timer />
      <Weather />
      <Counter startingCount={13} mermaidCount={8} tribe={'under the sea'} />
    </>
  )
}
