import React from 'react'
import Select from 'react-select'
import cities from './cities'

interface Props {
  value: string | null;
  onChange: (value: string | null) => void;
}
const City: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="city-input">
      <Select
        options={cities.map(city => ({ label: city, value: city }))}
        onChange={e => onChange(e === null ? null : e.value)}
        value={value === null ? null : { label: value, value }}
      />
    </div>
  )
}

export default City