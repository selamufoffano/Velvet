// src/components/ProgressBar.jsx
import React, { useEffect, useCallback } from 'react';
import { useAudioPlayerContext } from '../store/context/audio-player-context';

// Funzione di utilità per formattare il tempo in 'MM:SS'
const formatTime = (time) => {
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  return '00:00';
};

export const ProgressBar = () => {
  const {
    progressBarRef,
    audioRef,
    timeProgress,
    setTimeProgress,
    duration,
    setDuration,
  } = useAudioPlayerContext();

  // Gestisce il "seeking" (spostamento) quando l'utente trascina lo slider
  const handleProgressChange = () => {
    if (audioRef.current && progressBarRef.current) {
      const newTime = Number(progressBarRef.current.value);
      audioRef.current.currentTime = newTime;
    }
  };

  // Funzione per aggiornare la progress bar e il tempo durante la riproduzione
  const onTimeUpdate = useCallback(() => {
    if (audioRef.current && progressBarRef.current) {
      const currentTime = audioRef.current.currentTime;
      
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime;
      
      // Calcolo e aggiornamento per lo stile di avanzamento della barra (opzionale)
      const percentage = (currentTime / duration) * 100;
      // Per una visualizzazione completa, dovrai aggiungere stili specifici per l'input range
      // tramite CSS o librerie.
    }
  }, [audioRef, setTimeProgress, duration]);


  // Effetto per attaccare gli event listener sull'elemento audio
  useEffect(() => {
    const handleLoadedMetadata = () => {
      if (audioRef.current) {
        const totalDuration = audioRef.current.duration;
        setDuration(totalDuration);
      }
    };

    audioRef.current?.addEventListener('loadedmetadata', handleLoadedMetadata);
    audioRef.current?.addEventListener('timeupdate', onTimeUpdate);
    
    // Pulizia
    return () => {
      audioRef.current?.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audioRef.current?.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, [audioRef, setDuration, onTimeUpdate]);
  
  // Imposta il valore massimo dello slider alla durata del brano
  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.max = duration;
    }
  }, [duration]);


  return (
    <div className="flex items-center justify-center gap-5 w-full">
      <span className="text-xs text-gray-400">{formatTime(timeProgress)}</span>
      <input
        type="range"
        className="max-w-[80%] w-full h-1 bg-gray-600 appearance-none cursor-pointer rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f50] focus:ring-offset-2"
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
      />
      <span className="text-xs text-gray-400">{formatTime(duration)}</span>
    </div>
  );
};