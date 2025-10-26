// src/components/PlayList.jsx
import React from 'react';
import { useAudioPlayerContext } from '../store/context/audio-player-context';
import { tracks } from '../data/tracks';
import { BsMusicNoteBeamed } from 'react-icons/bs';

export const PlayList = () => {
  const { currentTrack, setIsPlaying, setCurrentTrack } = useAudioPlayerContext();

  const handleClick = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true); // Avvia la riproduzione del nuovo brano
  };

  return (
    <ul className="text-white max-h-72 overflow-y-auto">
      {tracks.map((track, index) => (
        <li
          key={index}
          className={`flex items-center gap-3 p-[0.5rem_10px] cursor-pointer transition-colors ${
            currentTrack.title === track.title ? 'bg-[#a66646]' : 'hover:bg-[#635f5f]'
          }`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleClick(track);
            }
          }}
          onClick={() => handleClick(track)}
        >
          <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
            {track.thumbnail ? (
              <img className="w-full h-full object-cover" src={track.thumbnail} alt="track avatar" />
            ) : (
              <span className="text-gray-600">
                <BsMusicNoteBeamed />
              </span>
            )}
          </div>
          <div className="flex flex-col flex-grow truncate">
            <p className="font-bold text-sm truncate">{track.title}</p>
            <p className="text-xs text-gray-400">{track.author}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};