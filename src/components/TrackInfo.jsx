// src/components/TrackInfo.jsx
import React from 'react';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { useAudioPlayerContext } from '../store/context/audio-player-context';

export const TrackInfo = () => {
  const { currentTrack } = useAudioPlayerContext();

  return (
    <div className="flex items-center h-[50px] gap-4">
      <div className="w-13 h-13 flex items-center justify-center">
        {currentTrack.thumbnail ? (
          <img
            className="w-full h-full object-cover rounded-[5px]"
             src="/album/img1.jpeg"
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
        <p className="font-semibold truncate max-w-[200px] sm:max-w-xs">
          {currentTrack.title}
        </p>
        <p className="text-sm text-gray-400 truncate max-w-[200px] sm:max-w-xs">{currentTrack.author}</p>
      </div>
    </div>
  );
};