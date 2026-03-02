import { useState, useEffect } from 'react';
import { useAudioPlayerContext } from '../store/context/audio-player-context';
import { VolumeMuteIcon, VolumeHalfIcon, VolumeFullIcon } from "../components/Icons";

export const VolumeControl = () => {
  const { audioRef, volume, setVolume } = useAudioPlayerContext();
  const [isMute, setIsMute] = useState(false);
  const [prevVolume, setPrevVolume] = useState(volume); 

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);
  
  const handleVolumeChange = (e) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    
    if (isMute && newVolume > 0) {
        setIsMute(false);
    }
    if (newVolume === 0) {
        setIsMute(true);
    }
  };
  
  const handleMute = () => {
    if (isMute || volume === 0) {
      setVolume(prevVolume > 0 ? prevVolume : 60); 
      setIsMute(false);
    } else {
      setPrevVolume(volume);
      setVolume(0);
      setIsMute(true);
    }
  };

  // 2. Usiamo direttamente i componenti al posto di passare le stringhe!
  const getVolumeIcon = () => {
    if (isMute || volume === 0) {
      return <VolumeMuteIcon className="block w-7 h-7" />;
    } else if (volume < 50) {
      return <VolumeHalfIcon className="block w-7 h-7" />;
    } else {
      return <VolumeFullIcon className="block w-7 h-7" />;
    }
  };

  const currentVolumeValue = isMute ? 0 : volume;

  return (
    <div className="flex items-center gap-3 w-32 group">
      <button 
        onClick={handleMute} 
        aria-label={isMute ? "Attiva audio" : "Disattiva audio"}
        className="text-[#a8a8a8] hover:text-white transition-colors"
      >
        {getVolumeIcon()}
      </button>
      
      <div className="relative w-full flex items-center">
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-[#4d4d4d] rounded-full pointer-events-none"></div>
        
        <input
          type="range"
          min="0"
          max="100"
          value={currentVolumeValue}
          onChange={handleVolumeChange}
          aria-label="Controlla volume"
          className="absolute top-1/2 -translate-y-1/2 w-full h-1 appearance-none bg-transparent cursor-pointer outline-none z-10 
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 
            [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md 
            [&::-webkit-slider-thumb]:opacity-0 group-hover:[&::-webkit-slider-thumb]:opacity-100 
            [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:border-none 
            [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:opacity-0 
            group-hover:[&::-moz-range-thumb]:opacity-100"
          style={{
            background: `linear-gradient(to right, #1db954 ${currentVolumeValue}%, transparent ${currentVolumeValue}%)`
          }}
        />
      </div>
    </div>
  );
};