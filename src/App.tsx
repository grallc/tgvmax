import { useState } from 'react'
import City from './City'
import Background from './Background'
import './App.css'
import DateInput from './Date'
import cities from './cities'

function App () {
  const [origin, setOrigin] = useState<string | null>(cities[0])
  const [destination, setDestination] = useState<string | null>(cities[1])
  const [date, setDate] = useState<Date>(new Date())
  
  const search = async () => {
    const url = `https://ressources.data.sncf.com/api/records/1.0/search/?dataset=tgvmax&q=&sort=-date&facet=date&facet=origine&facet=destination&facet=od_happy_card&refine.date=${date.getFullYear()}%2F${date.getMonth() + 1}%2F${date.getDay()}&refine.origine=${origin}&refine.destination=${destination}&refine.od_happy_card=OUI`
  }

  return (
    <>
      <Background />
      <div className="content">
        <h1>TGV Max</h1>
        <div id="form">
          <City value={origin} onChange={setOrigin} />
          <City value={destination} onChange={setDestination} />
          <DateInput />
        </div>
        <button id="search-btn">
          Search
        </button>
      </div>
    </>
  )
}

export default App
