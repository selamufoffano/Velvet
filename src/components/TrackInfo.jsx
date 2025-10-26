// src/components/TrackInfo.jsx
import React from 'react';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { useAudioPlayerContext } from '../store/context/audio-player-context';

export const TrackInfo = () => {
  const { currentTrack } = useAudioPlayerContext();

  return (
    <div className="flex items-center gap-4 flex-shrink-0">
      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-gray-200 rounded-md overflow-hidden">
        {currentTrack.thumbnail ? (
          <img
            className="w-full h-full object-cover"
            src={currentTrack.thumbnail}
            alt="audio avatar"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded-md">
            <span className="text-xl text-gray-600">
              <BsMusicNoteBeamed />
            </span>
          </div>
        )}
      </div>
      <div className="truncate">
        <p className="font-bold truncate max-w-[200px] sm:max-w-xs">
          {currentTrack.title}
        </p>
        <p className="text-sm text-gray-400 truncate max-w-[200px] sm:max-w-xs">{currentTrack.author}</p>
      </div>
    </div>
  );
};