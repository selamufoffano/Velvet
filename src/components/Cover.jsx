import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTrack } from "../store/context/Track-context";
import { useAudioPlayerContext } from "../store/context/audio-player-context";
import { HeartIcon, PlayIcon } from "./Icons";

const Cover = ({ album, authData }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const [love, setLove] = useState(!!album.starred); 
  const cardRef = useRef();

  const { playAlbum } = useTrack();
  const { setCurrentTrack, setIsPlaying } = useAudioPlayerContext();

  const handleNavigate = () => {
    navigate(`/album/${album.id}`);
  };

  const handleLove = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    const previousState = love;
    setLove(!previousState);

    const endpoint = previousState ? "unstar" : "star";
    const url = `${authData.baseUrl}/rest/${endpoint}?${authData.authParams}&albumId=${album.id}&f=json`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data["subsonic-response"]?.status !== "ok") {
        console.error("Errore dal server durante l'aggiornamento dei preferiti.");
        setLove(previousState);
      }
    } catch (err) {
      console.error("Errore di rete durante star/unstar:", err);
      setLove(previousState);
    }
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
      <div className="relative w-full aspect-square rounded-md border border-white/10 overflow-hidden bg-[#1F1F1F] transition-transform duration-300 group-hover:scale-[1.02] shadow-sm">
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
          
          <div
            onClick={handleLove}
            className="absolute top-3 right-3 z-30 cursor-pointer transition-transform hover:scale-110"
          >
            <HeartIcon
              filled={`w-6 h-6 mx-auto ${love ? "text-red-500" : "text-gray-300 hover:text-red-500"}`}
            />
          </div>

          <div>
            <button
              onClick={handlePlayFromCover}
              className="flex items-center justify-center w-12 h-12 bg-[#5d5d5dc0] hover:bg-black/60 rounded-full text-white transition-all active:scale-90"
            >
              <PlayIcon/>
            </button>
          </div>
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