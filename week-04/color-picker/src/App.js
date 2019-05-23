import React, { Component } from 'react'
import Header from './components/Header'
import Slider from './components/Slider'

class App extends Component {
  state = {
    hue: Math.ceil(Math.random() * 360),
    saturation: Math.ceil(Math.random() * 100),
    lightness: Math.ceil(Math.random() * 100),
    alpha: Math.ceil(Math.random() * 100)
  }
  randomColour = () => {
    this.setState({
      hue: Math.ceil(Math.random() * 360),
      saturation: Math.ceil(Math.random() * 100),
      lightness: Math.ceil(Math.random() * 100),
      alpha: Math.ceil(Math.random() * 100)
    })
  }

  updateStateFromSlider = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <>
        <main
          style={{
            backgroundColor: `hsl(${this.state.hue},${this.state.saturation}%,${
              this.state.lightness
            }%)`
          }}
        >
          <Header
            hue={this.state.hue}
            saturation={this.state.saturation}
            lightness={this.state.lightness}
          />
          <h1
            style={{
              color: `hsl(${this.state.titleHue},${
                this.state.titleSaturation
              }%,${this.state.titleLightness}%)`
            }}
          >
            TESTING-testing- TESTING
          </h1>
          <section>
            <Slider
              label="hue"
              setMethod={this.updateStateFromSlider}
              name="hue"
              max="360"
              value={this.state.hue}
            />
            <Slider
              label="saturation"
              setMethod={this.updateStateFromSlider}
              name="saturation"
              max="100"
              value={this.state.saturation}
            />
            <Slider
              label="lightness"
              setMethod={this.updateStateFromSlider}
              name="lightness"
              max="100"
              value={this.state.lightness}
            />
            <Slider
              label="alpha"
              setMethod={this.updateStateFromSlider}
              name="alpha"
              max="100"
              value={this.state.alpha}
            />
          </section>
          <button onClick={this.randomColour}>Random Colour</button>
        </main>
      </>
    )
  }
}

export default App
