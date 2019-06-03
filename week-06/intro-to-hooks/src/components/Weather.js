import React, { useState, useEffect } from 'react'

export default function Weather() {
  // const [temp, setTemp] = useState(0)
  const [weather, setWeather] = useState({})
  // const [state, setState] = useState({})

  useEffect(() => {
    const key = '5c418bd61b262dfeab5ee02852a70c07'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=33716&appid=${key}`
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log({ data })
        setWeather({
          temp: data.main.temp,
          condition: data.weather[0].main
        })
      })
  }, '')

  return (
    <>
      <h4>
        {weather.temp} and {weather.condition}
      </h4>
    </>
  )
}
