import React, { useState, useEffect } from 'react'
import axios from 'axios'
// add a timer here that updates the weather every 10 seconds

export default function Weather() {
  const [searchTerm, setSearchTerm] = useState('')
  const [weather, setWeather] = useState({})

  const fetchWeather = () => {
    console.log('fetching for ', searchTerm)
    const key = '5c418bd61b262dfeab5ee02852a70c07'
    const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${searchTerm}&appid=${key}`
    if (searchTerm.length > 4) {
      axios.get(url).then(resp => {
        console.log({ resp })
        if (resp.status === 200 && resp.data.main && resp.data.weather) {
          setWeather({
            temp: resp.data.main.temp,
            condition: resp.data.weather[0].main
          })
        }
      })
    }
  }

  useEffect(() => {
    fetchWeather()
  }, [searchTerm])

  useEffect(() => {
    const interval = setInterval(() => {
      fetchWeather()
    }, 10 * 1000)
    return () => clearInterval(interval)
  }, [searchTerm])

  return (
    <>
      <form>
        <input
          type="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </form>

      <h4>
        {weather.temp} and {weather.condition}
      </h4>
    </>
  )
}
