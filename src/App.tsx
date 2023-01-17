import { useState } from 'react'
import City from './City'
import Background from './Background'
import './App.css'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <Background />
      <div className="content">
        <h1>TGV Max</h1>
        <div id="form">
          <City />
          <City />
        </div>
      </div>
    </>
  )
}

export default App
