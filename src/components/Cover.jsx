import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTrack } from "../store/context/Track-context";
import { useAudioPlayerContext } from "../store/context/audio-player-context";

const Cover = ({ album, authData }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef();

  const { playAlbum } = useTrack();
  const { setCurrentTrack, setIsPlaying } = useAudioPlayerContext();

  const handleNavigate = () => {
    navigate(`/album/${album.id}`);
  };

  const handleAction = (e, action) => {
    e.stopPropagation();
    console.log(`Eseguo azione: ${action} per album ${album.id}`);
  };

  const handlePlayFromCover = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (!authData) return;

    try {
      const url = `${authData.baseUrl}/rest/getAlbum.view?${authData.authParams}&id=${album.id}&f=json`;
      const response = await fetch(url);
      const data = await response.json();

      const albumDetails = data["subsonic-response"]?.album;

      if (albumDetails && albumDetails.song) {
        playAlbum(
          albumDetails.song,
          authData,
          0,
          setCurrentTrack,
          setIsPlaying,
        );
      } else {
        console.warn("Nessun brano trovato in questo album.");
      }
    } catch (err) {
      console.error(
        "Errore durante il recupero dei brani dell'album per la riproduzione:",
        err,
      );
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" },
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const coverUrl = `${authData.baseUrl}/rest/getCoverArt?${authData.authParams}&id=${album.id}&size=300`;

  const displayName = album.name || album.title || "Album Sconosciuto";

  return (
<div
  ref={cardRef}
  onClick={handleNavigate}
  className="group flex flex-col text-left cursor-pointer w-full transition-all"
>
  <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#1c1c1c] transition-transform duration-300 group-hover:scale-[1.02] shadow-sm">
    {isVisible ? (
      <img
        src={coverUrl}
        alt={displayName}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    ) : (
      <div className="w-full h-full flex items-center justify-center text-[#a1a1a6] italic text-sm">
        ...
      </div>
    )}

    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10 pointer-events-none" />

    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePlayFromCover(e);
        }}
        className="flex items-center justify-center w-12 h-12 bg-[#5d5d5dc0]  hover:bg-black/60 rounded-full text-white transition-all active:scale-90"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 ml-1"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  </div>

  <div className="mt-3 flex flex-col w-full">
    <h3 className="text-[15px] font-semibold leading-tight truncate text-white">
      {album.name}
    </h3>
    <p className="text-[13px] text-[#a1a1a6] mt-0.5 truncate">
      {album.artist} • {album.year}
    </p>
  </div>
</div>
  );
};

export default Cover;
