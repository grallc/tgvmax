import { useState } from 'react'
import City from './City'
import Background from './Background'
import './App.css'
import DateInput from './Date'
import cities from './cities'
import List from './List'
import 'react-datepicker/dist/react-datepicker.css';

export interface Train {
  departure: string;
  arrival: string;
  date: string;
  origin: string;
  destination: string
}

const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]

function App () {
  const [origin, setOrigin] = useState<string | null>(cities[0])
  const [destination, setDestination] = useState<string | null>(cities[1])
  const [date, setDate] = useState<Date>(new Date())
  const [fetching, setFetching] = useState(false)
  const [trains, setTrains] = useState<Train[] | null>(null)

  const searchUrl = destination === null || origin === null ? '' : `https://www.sncf-connect.com/app/home/search?userInput=${origin?.split(' ').join('+')}+vers+${destination.split(' ').join('+')}+${date.getDate()}+${months[date.getMonth()]}&destinationId=`

  const search = async () => {
    setFetching(true)
    const url = `https://ressources.data.sncf.com/api/records/1.0/search/?dataset=tgvmax&q=&sort=-date&facet=date&facet=origine&facet=destination&facet=od_happy_card&refine.date=${date.getFullYear()}%2F${date.getMonth() + 1}%2F${date.getDate()}&refine.origine=${origin}&refine.destination=${destination}&refine.od_happy_card=OUI`
    try {
      const response = await fetch(url)
      const data = await response.json()
      const newTrains = data.records.map((record: any) => ({
        departure: record.fields.heure_depart,
        arrival: record.fields.heure_arrivee,
        origin: record.fields.origine,
        date: record.fields.date,
        destination: record.fields.destination
      })) as Train[]
      setTrains(newTrains)
    } catch (e) {
      console.error(e)
    }
    setFetching(false)
  }

  return (
    <>
      <Background />
      <div className="content">
        <h1>TGV Max</h1>
        <p>Find available TGV Max seats</p>
        <div id="form">
          <City value={origin} onChange={setOrigin} />
          <button onClick={() => {
            const temp = origin
            setOrigin(destination)
            setDestination(temp)
          }}>↔️</button>
          <City value={destination} onChange={setDestination} />
          <DateInput value={date} setDate={setDate} />
        </div>
        <button id="search-btn" onClick={search} disabled={fetching}>
          {fetching ? 'Searching for trains...' : 'Search'}
        </button>
        {
          date !== null && (
            <a href={searchUrl} id="search-url" target="_blank">
              <button id="open-btn">Open on SNCF Connect</button>
            </a>
          )
        }
        <List trains={trains} />
      </div>
    </>
  )
}

export default App
