// src/context/audio-player-context.jsx
import React, { createContext, useContext, useState, useRef } from 'react';
import { tracks } from '../../data/tracks';

const AudioPlayerContext = createContext(undefined);

export const AudioPlayerProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(60); // Volume iniziale al 60%

  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  const contextValue = {
    currentTrack,
    setCurrentTrack,
    isPlaying,
    setIsPlaying,
    isShuffle,
    setIsShuffle,
    isRepeat,
    setIsRepeat,
    timeProgress,
    setTimeProgress,
    duration,
    setDuration,
    volume,
    setVolume,
    audioRef,
    progressBarRef,
  };

  return (
    <AudioPlayerContext.Provider value={contextValue}>
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayerContext = () => {
  const context = useContext(AudioPlayerContext);
  if (context === undefined) {
    throw new Error(
      'useAudioPlayerContext deve essere usato all\'interno di un AudioPlayerProvider'
    );
  }
  return context;
};