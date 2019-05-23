import React, { Component } from 'react'
import Header from './components/Header'

class App extends Component {
  state = {
    hue: Math.ceil(Math.random() * 360),
    saturation: Math.ceil(Math.random() * 100),
    lightness: Math.ceil(Math.random() * 100)
  }
  randomColour = () => {
    this.setState({
      hue: Math.ceil(Math.random() * 360),
      saturation: Math.ceil(Math.random() * 100),
      lightness: Math.ceil(Math.random() * 100)
    })
  }
  setHue = event => {
    this.setState({
      hue: event.target.value
    })
  }
  setSaturation = event => {
    this.setState({
      saturation: event.target.value
    })
  }
  setLightness = event => {
    console.log(event.target.value)
    this.setState({
      lightness: event.target.value
    })
  }
  
  render() {
    return (
      <>
        <main
          style={{
            backgroundColor: ` hsl(${this.state.hue},${
              this.state.saturation
            }%,${this.state.lightness}%)`
          }}
        >
          <Header />
          <h1  style={{color:`hsl(${this.state.titleHue},${this.state.titleSaturation}%,${this.state.titleLightness}%)`}}>TESTING-testing-
          TESTING</h1>
          <section>
            <input
              type="range"
              onChange={this.setHue}
              id="H"
              name="Hue"
              min="0"
              max="360"
              step="1"
            />
            <input
              type="range"
              onChange={this.setSaturation}
              id="S"
              name="Saturation"
              min="0"
              max="100"
              step="1"
            />
            <input
              type="range"
              onChange={this.setLightness}
              id="L"
              name="Lightness"
              min="0"
              max="100"
              step="1"
            />
          </section>
          <button onClick={this.randomColour}>Random Colour</button>
        </main>
      </>
    )
  }
}

export default App
