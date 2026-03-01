// src/components/ProgressBar.jsx
import { useEffect, useCallback, useState } from 'react';
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
  return '0:00';
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

  // Stato per gestire il colore della barra in hover
  const [isHovering, setIsHovering] = useState(false);

  // Gestisce il "seeking" (spostamento) quando l'utente trascina lo slider
  const handleProgressChange = () => {
    if (audioRef.current && progressBarRef.current) {
      const newTime = Number(progressBarRef.current.value);
      audioRef.current.currentTime = newTime;
      setTimeProgress(newTime);
    }
  };

  // Funzione per aggiornare la progress bar e il tempo durante la riproduzione
  const onTimeUpdate = useCallback(() => {
    if (audioRef.current && progressBarRef.current) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime;
    }
  }, [audioRef, setTimeProgress]);

  // Effetto per attaccare gli event listener sull'elemento audio
  useEffect(() => {
    const handleLoadedMetadata = () => {
      if (audioRef.current) {
        const totalDuration = audioRef.current.duration;
        setDuration(totalDuration);
      }
    };

    const currentAudio = audioRef.current;
    currentAudio?.addEventListener('loadedmetadata', handleLoadedMetadata);
    currentAudio?.addEventListener('timeupdate', onTimeUpdate);
    
    return () => {
      currentAudio?.removeEventListener('loadedmetadata', handleLoadedMetadata);
      currentAudio?.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, [audioRef, setDuration, onTimeUpdate]);
  
  // Imposta il valore massimo dello slider alla durata del brano
  useEffect(() => {
    if (progressBarRef.current && duration) {
      progressBarRef.current.max = duration;
    }
  }, [duration, progressBarRef]);

  // Calcolo della percentuale per il riempimento della barra
  const percentage = duration > 0 ? (timeProgress / duration) * 100 : 0;
  // Colore di riempimento dinamico (Verde se in hover, altrimenti Bianco)
  const fillColor = isHovering ? '#1db954' : '#ffffff';

  return (
    <div 
      className="flex items-center justify-center gap-3 w-full group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className="text-xs text-[#a8a8a8] min-w-[35px] text-right font-medium">
        {formatTime(timeProgress)}
      </span>
        
      {/* Contenitore relativo per sovrapporre input e guida visiva */}
      <div className="relative w-full flex items-center h-4"> 
        {/* Track grigia di sfondo */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-[#4d4d4d] rounded-full pointer-events-none"></div>
        
        <input
          type="range"
          ref={progressBarRef}
          defaultValue="0"
          onChange={handleProgressChange}
          className="absolute top-1/2 -translate-y-1/2 w-full h-1 appearance-none bg-transparent cursor-pointer outline-none z-10 
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 
            [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md 
            [&::-webkit-slider-thumb]:opacity-0 group-hover:[&::-webkit-slider-thumb]:opacity-100 
            [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:border-none 
            [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:opacity-0 
            group-hover:[&::-moz-range-thumb]:opacity-100"
          style={{
            background: `linear-gradient(to right, ${fillColor} ${percentage}%, transparent ${percentage}%)`
          }}
        />
      </div>

      <span className="text-xs text-[#a8a8a8] min-w-[35px] font-medium">
        {formatTime(duration)}
      </span>
    </div>
  );
};