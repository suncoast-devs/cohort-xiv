import React, { Component } from 'react'

import Counter from './components/Counter'
import Weather from './components/Weather'
export default function App() {
  return (
    <>
      <Weather />
      <Counter startingCount={13} mermaidCount={8} tribe={'under the sea'} />
    </>
  )
}
