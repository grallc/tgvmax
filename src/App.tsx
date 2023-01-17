import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import City from './City'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="form">
        <City />
        <City />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
