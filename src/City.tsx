import React from 'react'
import Select from 'react-select'
import cities from './cities'

const City = () => {
  return (
    <div className="city-input">
      <Select options={cities.map(city => ({ label: city, value: city }))} />
    </div>
  )
}

export default City