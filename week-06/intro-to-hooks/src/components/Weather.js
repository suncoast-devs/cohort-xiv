import React, { useState, useEffect } from 'react'

export default function Weather() {
  const [searchTerm, setSearchTerm] = useState('')
  const [weather, setWeather] = useState({})

  useEffect(() => {
    const needle = searchTerm ? searchTerm : 'tampa'
    console.log('fetching for ', searchTerm)
    const key = '5c418bd61b262dfeab5ee02852a70c07'
    const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${needle}&appid=${key}`
    if (needle.length > 4) {
      fetch(url)
        .then(resp => resp.json())
        .then(data => {
          console.log({ data })
          if (data.main && data.weather) {
            setWeather({
              temp: data.main.temp,
              condition: data.weather[0].main
            })
          }
        })
    }
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
