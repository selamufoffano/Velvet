// src/components/Controls.jsx
import { useEffect, useCallback } from 'react';
import { useAudioPlayerContext } from '../store/context/audio-player-context';
import { useTrack } from '../store/context/Track-context'; 
import { PrevIcon, NextIcon, PlayIcon, PauseIcon, ShuffleIcon, RepeatIcon } from "../components/Icons";

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

  const { newTracks } = useTrack();

  const handleNext = useCallback(() => {
    if (!newTracks || newTracks.length === 0 || !currentTrack) return;

    const currentIndex = newTracks.findIndex((t) => t.title === currentTrack.title);
    const nextIndex = (currentIndex + 1) % newTracks.length;
    
    setCurrentTrack(newTracks[nextIndex]);
    setIsPlaying(true);
    if (audioRef.current) audioRef.current.currentTime = 0;
  }, [currentTrack, setCurrentTrack, setIsPlaying, audioRef, newTracks]);

  const handlePrev = useCallback(() => {
    if (!newTracks || newTracks.length === 0 || !currentTrack) return;

    const currentIndex = newTracks.findIndex((t) => t.title === currentTrack.title);
    const prevIndex = (currentIndex - 1 + newTracks.length) % newTracks.length;
    
    setCurrentTrack(newTracks[prevIndex]);
    setIsPlaying(true);
    if (audioRef.current) audioRef.current.currentTime = 0;
  }, [currentTrack, setCurrentTrack, setIsPlaying, audioRef, newTracks]);

  useEffect(() => {
    if ('mediaSession' in navigator) {
      if (currentTrack) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: currentTrack.title || 'Brano Sconosciuto',
          artist: currentTrack.author || 'Artista Sconosciuto',
          artwork: currentTrack.thumbnail ? [
            { src: currentTrack.thumbnail, sizes: '512x512', type: 'image/jpeg' }
          ] : []
        });
      }

      navigator.mediaSession.setActionHandler('play', () => setIsPlaying(true));
      navigator.mediaSession.setActionHandler('pause', () => setIsPlaying(false));
      navigator.mediaSession.setActionHandler('previoustrack', handlePrev);
      navigator.mediaSession.setActionHandler('nexttrack', handleNext);
    }

    return () => {
      if ('mediaSession' in navigator) {
        navigator.mediaSession.setActionHandler('play', null);
        navigator.mediaSession.setActionHandler('pause', null);
        navigator.mediaSession.setActionHandler('previoustrack', null);
        navigator.mediaSession.setActionHandler('nexttrack', null);
      }
    };
  }, [currentTrack, setIsPlaying, handlePrev, handleNext]);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("In attesa del caricamento o riproduzione interrotta:", error);
        });
      }
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentTrack, audioRef]); 

  useEffect(() => {
    const handleEnded = () => {
      if (isRepeat) {
        if(audioRef.current) {
           audioRef.current.currentTime = 0;
           audioRef.current.play();
        }
      } else {
        handleNext();
      }
    };
    const audio = audioRef.current;
    audio?.addEventListener('ended', handleEnded);
    return () => audio?.removeEventListener('ended', handleEnded);
  }, [audioRef, isRepeat, handleNext]);

  const btnBase = 'flex items-center justify-center w-11 h-11 rounded-full transition-colors p-0 leading-none';

  return (
    <div className="flex items-center gap-6">
      
      {currentTrack?.cover && (
        <div className="flex-shrink-0">
          <img 
            src={currentTrack.cover} 
            alt="Cover" 
            className="w-14 h-14 object-cover rounded-md shadow-md"
          />
        </div>
      )}

      <div className="flex items-center justify-center gap-1">
        <audio src={currentTrack?.src} ref={audioRef} />

        <button onClick={() => setIsShuffle((p) => !p)} aria-label="Shuffle" className={`${btnBase} ${isShuffle ? 'text-blue-600' : 'text-[#a8a8a8] hover:text-[#ffffff]'} bg-transparent`} type="button">
          <ShuffleIcon />
        </button>

        <button onClick={handlePrev} aria-label="Brano precedente" className={`${btnBase} text-[#a8a8a8] hover:text-[#ffffff]`} type="button">
          <PrevIcon />
        </button>

        <button onClick={() => setIsPlaying((p) => !p)} aria-label={isPlaying ? 'Metti in pausa' : 'Riproduci'} className={`${btnBase} text-[#a8a8a8] bg-blue-600/40 hover:text-[#ffffff]`} type="button">
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>

        <button onClick={handleNext} aria-label="Brano successivo" className={`${btnBase} text-[#a8a8a8] hover:text-[#ffffff]`} type="button">
          <NextIcon />
        </button>

        <button onClick={() => setIsRepeat((p) => !p)} aria-label="Ripeti" className={`${btnBase} ${isRepeat ? 'text-blue-600' : 'text-[#a8a8a8] hover:text-[#ffffff]'} bg-transparent`} type="button">
          <RepeatIcon />
        </button>
      </div>
    </div>
  );
};