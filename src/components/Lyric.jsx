import { useState, useEffect } from "react";
import { useAuth } from "../store/context/Auth-context";
import { useAudioPlayerContext } from "../store/context/audio-player-context";

export const Lyric = () => {
  const { authData } = useAuth();
  const [lyricData, setLyricData] = useState(null); 
  const { currentTrack } = useAudioPlayerContext();

  useEffect(() => {
    const fetchLyrics = async () => {
      if (!authData || !currentTrack) {
        setLyricData(null);
        return;
      }
      setLyricData(null);

      try {
        const artist = currentTrack.author; 
        const title = currentTrack.title;

        if (!artist || !title) return;

        const lyricsUrl = `${authData.baseUrl}/rest/getLyrics.view?${authData.authParams}&artist=${encodeURIComponent(artist)}&title=${encodeURIComponent(title)}&f=json`;
        
        const response = await fetch(lyricsUrl);
        const json = await response.json();
        
        setLyricData(json["subsonic-response"]);
      } catch (err) {
        console.error("Errore nel recupero dei testi:", err);
        setLyricData({ lyrics: null });
      }
    };

    fetchLyrics();
  }, [authData, currentTrack]); 

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Lyrics</h2>
      {lyricData?.lyrics?.value ? (
        <div className="whitespace-pre-wrap">
          {lyricData.lyrics.value}
        </div>
      ) : (
        <p className="text-gray-500 italic">
          {!currentTrack ? "Nessuna traccia in riproduzione." : "Caricamento o nessun testo trovato..."}
        </p>
      )}
    </div>
  );
};