import React, { useState } from 'react'
import Error from './Error'

const Form = ({ search, setSearch, setRequest }) => {
  const [error, setError] = useState(false)

  const { city, country } = search

  const handleChange = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (city.trim() === '' || country.trim() === '') {
      setError(true)
      return
    }
    setError(false)
    setRequest(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error message='All fields are mandatory' /> : null}
      <div className='input-field col s12'>
        <input type='text' name='city' id='city' value={city} onChange={handleChange} />
        <label htmlFor='city'>City: </label>
      </div>
      <div className='input-field col s12'>
        <select name='country' id='country' value={country} onChange={handleChange}>
          <option value=''>-- Select a country</option>
          <option value='US'>United States</option>
          <option value='MX'>Mexico</option>
          <option value='AR'>Argentina</option>
          <option value='CO'>Colombia</option>
          <option value='CR'>Costa Rica</option>
          <option value='ES'>Spain</option>
          <option value='PE'>Peru</option>
        </select>
        <label htmlFor='country'>Country: </label>
      </div>
      <div className='input-field col s12'>
        <button type='submit' className='waves-effect waves-light btn-large btn-block yellow accent-4 col s12'>
          Buscar Clima
        </button>
      </div>
    </form>
  )
}

export default Form
