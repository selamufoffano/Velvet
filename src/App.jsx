import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/Navbar/NavBar'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    </>
  )
}

export default App
