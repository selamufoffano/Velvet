// src/components/Controls.jsx
import React, { useEffect, useCallback } from 'react';
import {
  BsFillFastForwardFill,
  BsFillPauseFill,
  BsFillPlayFill,
  BsFillRewindFill,
  BsSkipEndFill,
  BsSkipStartFill,
  BsShuffle,
  BsRepeat,
} from 'react-icons/bs';
import { useAudioPlayerContext } from '../store/context/audio-player-context';
import { tracks } from '../data/tracks';

export const Controls = () => {
  const {
    currentTrack,
    setCurrentTrack,
    isPlaying,
    setIsPlaying,
    isShuffle,
    setIsShuffle,
    isRepeat,
    setIsRepeat,
    audioRef,
  } = useAudioPlayerContext();

  // Logica per passare al brano successivo
  const handleNext = useCallback(() => {
    const currentIndex = tracks.findIndex((track) => track.title === currentTrack.title);
    const nextIndex = (currentIndex + 1) % tracks.length;
    setCurrentTrack(tracks[nextIndex]);
    setIsPlaying(true);
  }, [currentTrack, setCurrentTrack, setIsPlaying]);

  // Logica per tornare al brano precedente
  const handlePrev = useCallback(() => {
    const currentIndex = tracks.findIndex((track) => track.title === currentTrack.title);
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrack(tracks[prevIndex]);
    setIsPlaying(true);
  }, [currentTrack, setCurrentTrack, setIsPlaying]);

  // Logica Play/Pause: invocata quando isPlaying cambia
  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, audioRef]);
  
  // Gestione Fine Brano e Repeat:
  useEffect(() => {
    const handleEnded = () => {
      if (isRepeat) {
        audioRef.current.currentTime = 0;
        audioRef.current.play(); // Ripeti il brano
      } else {
        handleNext(); // Passa al brano successivo
      }
    };

    audioRef.current?.addEventListener('ended', handleEnded);

    return () => {
      audioRef.current?.removeEventListener('ended', handleEnded);
    };
  }, [audioRef, isRepeat, handleNext]);


  // Logica Avanti Veloce (Fast Forward) e Riavvolgi (Rewind)
  const skipTime = 5; // Salto di 5 secondi
  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - skipTime);
    }
  };

  const handleFastForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        audioRef.current.duration,
        audioRef.current.currentTime + skipTime
      );
    }
  };


  return (
    <div className="flex gap-4 items-center">
      {/* Elemento <audio> senza i controlli di default */}
      <audio src={currentTrack.src} ref={audioRef} onVolumeChange={() => {}} /> 
      
      <button onClick={handlePrev} aria-label="Brano precedente">
        <BsSkipStartFill size={20} />
      </button>
      
      <button onClick={handleRewind} aria-label="Riavvolgi 5 secondi">
        <BsFillRewindFill size={20} />
      </button>
      
      <button onClick={() => setIsPlaying((prev) => !prev)} aria-label={isPlaying ? "Metti in pausa" : "Riproduci"}>
        {isPlaying ? (
          <BsFillPauseFill size={30} />
        ) : (
          <BsFillPlayFill size={30} />
        )}
      </button>
      
      <button onClick={handleFastForward} aria-label="Avanti veloce 5 secondi">
        <BsFillFastForwardFill size={20} />
      </button>
      
      <button onClick={handleNext} aria-label="Brano successivo">
        <BsSkipEndFill size={20} />
      </button>

      {/* Controlli Shuffle e Repeat */}
      <button onClick={() => setIsShuffle((prev) => !prev)} aria-label="Shuffle">
        <BsShuffle size={20} className={isShuffle ? 'text-[#f50]' : ''} />
      </button>
      
      <button onClick={() => setIsRepeat((prev) => !prev)} aria-label="Ripeti brano">
        <BsRepeat size={20} className={isRepeat ? 'text-[#f50]' : ''} />
      </button>
    </div>
  );
};