import { createContext, useContext, useState, useEffect } from "react";

const TrackContext = createContext();

export const useTrack = () => useContext(TrackContext);

export const TrackProvider = ({ children }) => {
  const [newTracks, setNewTracks] = useState([]); 

  // Quando newTracks cambia, stampa il nuovo valore in console!
  useEffect(() => {
    if (newTracks.length > 0) {
      console.log("Dati aggiornati nel Context:", newTracks);
    }
  }, [newTracks]);

  // NOTA: In Album.jsx chiami playAlbum, quindi assicurati di averla definita qui.
  // Se stavi usando addTracks per gestire il play, ecco un esempio:
  const playAlbum = (tracks, authData, startIndex = 0) => {
    console.log(`Ricevute ${tracks.length} tracce. Partenza dall'indice:`, startIndex);
    
    // Sostituisci l'array corrente con il nuovo album, oppure aggiungilo
    setNewTracks(tracks); 
  };

  const addTracks = (tracks) => {
    setNewTracks(prev => [
      ...prev,
      ...tracks.filter(nt => !prev.some(t => t.title === nt.title)),
    ]);
  };

  return (
    // Assicurati di passare playAlbum nel value
    <TrackContext.Provider value={{ newTracks, addTracks, playAlbum }}>
      {children}
    </TrackContext.Provider>
  );
};