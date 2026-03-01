import React, { createContext, useContext, useState } from "react";

const TrackContext = createContext();

export const TrackProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  // Funzione per caricare i brani nel formato richiesto
  const playAlbum = (songs, authData) => {
    const formattedTracks = songs.map((song) => ({
      title: song.title,
      // Costruiamo l'URL di streaming di Navidrome
      src: `${authData.baseUrl}/rest/stream.view?${authData.authParams}&id=${song.id}`,
      author: song.artist,
      thumbnail: `${authData.baseUrl}/rest/getCoverArt?${authData.authParams}&id=${song.albumId || song.id}&size=300`,
    }));

    setPlaylist(formattedTracks);
    setCurrentTrackIndex(0);
  };

  return (
    <TrackContext.Provider value={{ playlist, playAlbum, currentTrackIndex, setCurrentTrackIndex }}>
      {children}
    </TrackContext.Provider>
  );
};

export const useTrack = () => useContext(TrackContext);