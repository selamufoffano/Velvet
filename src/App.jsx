// App.jsx
import { useState } from 'react'
// ... (omissione degli altri import)
import NavBar from './components/Navbar/NavBar'
import './App.css'
import SideBar from './components/SideBar'
import Player from './components/Player'
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
      
      {/* 1. Navbar: rimane in alto */}
      <NavBar></NavBar>
      
      {/* 2. Contenitore Principale: prende lo spazio tra NavBar e Player */}
      {/* 'flex-grow' gli fa occupare tutto lo spazio verticale rimanente. */}
      {/* 'flex' e 'flex-row' affiancano SideBar e HomePage. */}
      <div className="flex flex-row flex-grow overflow-hidden">
        
        {/* SideBar: non ha bisogno di overflow-y se è più piccola del contenuto */}
        <SideBar></SideBar>
        
        {/* HomePage: ha il suo scrolling interno */}
        <HomePage></HomePage>
      </div>
      
      {/* 3. Player: rimarrà sempre in basso grazie a 'fixed' e un'altra classe, ma nel tuo layout Flex-col attuale, è già in basso. */}
      <Player></Player>
      <AudioPlayer></AudioPlayer>
    </div>
  )
}

export default App