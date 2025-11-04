// App.jsx
import { useState } from 'react'
// ... (omissione degli altri import)
import NavBar from './components/NavBar'
import './App.css'
import SideBar from './components/SideBar'
import HomePage from './components/HomePage' // Importa la tua HomePage
import AudioPlayer from './components/AudioPlayer'
function App() {
  const [count, setCount] = useState(0)

  // Calcoliamo l'altezza disponibile per il contenuto.
  // La NavBar è alta 60px (esempio), e il Player è alto 70px (dalle tue classi).
  // Quindi, l'altezza è l'intera viewport (h-screen) meno 60px - 70px.
  // Usiamo 'h-[calc(100vh-130px)]' o un approccio basato su classi Flex/Grid.
  
  return (
    <div className="h-screen flex flex-col"> 
      
      <NavBar></NavBar>
      <div className="flex flex-row flex-grow overflow-hidden">
        
        <SideBar></SideBar>
        
        <HomePage></HomePage>
      </div>
      
      <AudioPlayer></AudioPlayer>
    </div>
  )
}

export default App