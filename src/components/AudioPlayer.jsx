// src/components/AudioPlayer.jsx
import React, { useState } from 'react';
import { RiMenuAddLine } from 'react-icons/ri';
import { TrackInfo } from './TrackInfo';
import { Controls } from './Controls';
import { ProgressBar } from './ProgressBar';
import { VolumeControl } from './VolumeControls';
import { PlayList } from './PlayList';

const AudioPlayer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="text-white flex flex-col">
      <div className="h-[130px] flex items-center justify-between px-4">

        <div className="w-1/4 flex items-center space-x-4">
          <div>
            <TrackInfo />
          </div>
        </div>

        <div className="w-2/4 flex flex-col justify-center items-center space-y-2">
          <Controls />
          <div className="w-4/5">
            <ProgressBar />
          </div>
        </div>

        <div className="w-1/4 flex items-center justify-end space-x-4">
          <VolumeControl />
          <button
            onClick={() => setOpenDrawer((prev) => !prev)}
            aria-label={openDrawer ? 'Chiudi playlist' : 'Apri playlist'}
            className="p-2 rounded-md hover:bg-[#333333] transition"
          >
            <RiMenuAddLine size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default AudioPlayer;
