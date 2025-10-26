// src/components/VolumeControl.jsx
import React, { useState, useEffect } from 'react';
import {
  BsFillVolumeUpFill,
  BsFillVolumeMuteFill,
  BsFillVolumeDownFill,
} from 'react-icons/bs';
import { useAudioPlayerContext } from '../store/context/audio-player-context';

export const VolumeControl = () => {
  const { audioRef, volume, setVolume } = useAudioPlayerContext();
  const [isMute, setIsMute] = useState(false);
  const [prevVolume, setPrevVolume] = useState(volume); // Per ripristinare il volume dopo il mute

  // Sincronizza il volume dell'elemento audio con lo stato
  useEffect(() => {
    if (audioRef.current) {
      // Il volume dell'elemento audio va da 0.0 a 1.0
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);
  
  // Gestisce il cambio di posizione dello slider del volume
  const handleVolumeChange = (e) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    // Se l'utente interagisce con lo slider e il volume è > 0, esce dallo stato mute
    if (isMute && newVolume > 0) {
        setIsMute(false);
    }
    if (newVolume === 0) {
        setIsMute(true);
    }
  };
  
  // Gestisce il pulsante mute/unmute
  const handleMute = () => {
    if (isMute) {
      // Unmute: Ripristina il volume precedente (o 60 se era stato mutato a 0)
      setVolume(prevVolume > 0 ? prevVolume : 60); 
      setIsMute(false);
    } else {
      // Mute: Salva il volume corrente e imposta il volume a 0
      setPrevVolume(volume);
      setVolume(0);
      setIsMute(true);
    }
  };

  // Sceglie l'icona del volume corretta
  const getVolumeIcon = () => {
    if (isMute || volume === 0) {
      return <BsFillVolumeMuteFill size={20} />;
    } else if (volume < 50) {
      return <BsFillVolumeDownFill size={20} />;
    } else {
      return <BsFillVolumeUpFill size={20} />;
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button onClick={handleMute} aria-label="Mute/Unmute">{getVolumeIcon()}</button>
      <input
        type="range"
        min="0"
        max="100"
        value={isMute ? 0 : volume}
        onChange={handleVolumeChange}
        className="w-20 h-1 bg-gray-600 appearance-none cursor-pointer rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
      />
    </div>
  );
};