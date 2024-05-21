import { useState } from 'react'
import './App.css'
import Square from './assets/square/square'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Square/>
  )
}

export default App



