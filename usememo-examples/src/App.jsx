import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NoUseMemo from './components/NoUseMemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NoUseMemo />
    </>
  )
}

export default App
