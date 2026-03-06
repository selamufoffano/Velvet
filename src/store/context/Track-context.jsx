import { createContext, useContext, useState } from "react";

const TrackContext = createContext();

export const useTrack = () => useContext(TrackContext);

export const TrackProvider = ({ children }) => {
  const [newTracks, setNewTracks] = useState([]); 

  // Aggiungiamo setCurrentTrack e setIsPlaying come parametri
  const playAlbum = (subsonicSongs, authData, startIndex = 0, setCurrentTrack, setIsPlaying) => {
    if (!subsonicSongs || !authData) return;

    // 1. Formattiamo i dati per il player
    const formattedTracks = subsonicSongs.map((song) => ({
      id: song.albumId,
      album: song.album,
      title: song.title,
      author: song.artist,
      src: `${authData.baseUrl}/rest/stream?${authData.authParams}&id=${song.id}`,
      thumbnail: `${authData.baseUrl}/rest/getCoverArt?${authData.authParams}&id=${song.coverArt || song.albumId}&size=300`,
    }));

    // 2. Aggiorniamo la coda (newTracks)
    setNewTracks(formattedTracks);
    
    // 3. Comunichiamo al Player qual è il brano corrente e lo facciamo partire!
    if (setCurrentTrack && setIsPlaying) {
      setCurrentTrack(formattedTracks[startIndex]);
      setIsPlaying(true);
    }
  };

  const addTracks = (tracks) => {
    setNewTracks(prev => [
      ...prev,
      ...tracks.filter(nt => !prev.some(t => t.title === nt.title)),
    ]);
  };

  return (
    <TrackContext.Provider value={{ newTracks, addTracks, playAlbum }}>
      {children}
    </TrackContext.Provider>
  );
};