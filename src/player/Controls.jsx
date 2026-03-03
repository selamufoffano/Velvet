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
    <div className="flex items-center justify-center gap-1">
      <audio src={currentTrack?.src} ref={audioRef} />

     <button onClick={() => setIsShuffle((p) => !p)} aria-label="Shuffle" className={`${btnBase} ${isShuffle ? 'text-green-600' : 'text-[#a8a8a8] hover:text-[#ffffff]'} bg-transparent`} type="button">
        <ShuffleIcon />
      </button>

      <button onClick={handlePrev} aria-label="Brano precedente" className={`${btnBase} text-[#a8a8a8] hover:text-[#ffffff]`} type="button">
        <PrevIcon />
      </button>

      <button onClick={() => setIsPlaying((p) => !p)} aria-label={isPlaying ? 'Metti in pausa' : 'Riproduci'} className={`${btnBase} text-[#a8a8a8] bg-[#113b57] hover:text-[#ffffff]`} type="button">
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>

      <button onClick={handleNext} aria-label="Brano successivo" className={`${btnBase} text-[#a8a8a8] hover:text-[#ffffff]`} type="button">
        <NextIcon />
      </button>

      <button onClick={() => setIsRepeat((p) => !p)} aria-label="Ripeti" className={`${btnBase} ${isRepeat ? 'text-green-600' : 'text-[#a8a8a8] hover:text-[#ffffff]'} bg-transparent`} type="button">
        <RepeatIcon />
      </button>
    </div>
  );
};