import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Weather from './components/Weather'
import Error from './components/Error'

/*
 global fetch
*/

function App () {
  const [search, setSearch] = useState({
    city: '',
    country: ''
  })
  const [request, setRequest] = useState(false)
  const [data, setData] = useState({})
  const [error, setError] = useState(false)

  const { city, country } = search

  useEffect(() => {
    const requestAPI = async () => {
      if (request) {
        const apiKey = 'efce7534c35c46b5367f2a95ff12ab54'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
        const response = await fetch(url)
        const result = await response.json()
        setData(result)
        setRequest(false)

        if (result.cod === '404') {
          setError(true)
        } else {
          setError(false)
        }
      }
    }
    requestAPI()
  }, [request])

  let component
  if (error) {
    component = <Error message='No results' />
  } else {
    component = <Weather data={data} />
  }

  return (
    <>
      <Header title='Weather App' />
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Form search={search} setSearch={setSearch} setRequest={setRequest} />
            </div>
            <div className='col m6 s12'>
              {component}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
