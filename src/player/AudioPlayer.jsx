import { useState } from "react";
import { TrackInfo } from "./TrackInfo";
import { Controls } from "./Controls";
import { ProgressBar } from "./ProgressBar";
import { VolumeControl } from "./VolumeControls";
import { LyricsIcon, CodaIcon2, ScreenFullInIcon, ScreenFullOutIcon } from "../components/Icons";

const AudioPlayer = ({ openLyric, setOpenLyric, openCoda, setOpenCoda }) => {

  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
        .then(() => setIsFullScreen(true))
        .catch((err) => {
          console.error(`Errore nell'attivazione dello schermo intero: ${err.message}`);
        });
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  const IconScreen = isFullScreen ? ScreenFullInIcon : ScreenFullOutIcon;

  return (
    <div className="text-white flex flex-col bg-[#2C2C2C] border-t border-white/5 shrink-0 h-[90px] w-full">
      <div className="flex-1 flex items-center justify-between px-3 overflow-hidden">
        
        {/* SINISTRA */}
        <div className="w-1/4 flex items-center">
          <TrackInfo />
        </div>

        {/* CENTRO */}
        <div className="w-2/4 flex flex-col justify-center items-center">
          <Controls />
          <div className="w-full max-w-md flex justify-center">
            <ProgressBar />
          </div>
        </div>

        {/* DESTRA */}
        <div className="w-1/4 flex items-center justify-end gap-6">
          <VolumeControl />

          <div className="flex items-center gap-4">

            {/* Lyrics */}
            <button
              onClick={() => setOpenLyric((prev) => !prev)}
              aria-label="Testo della canzone"
              className={`${openLyric ? "text-blue-600" : "text-[#a8a8a8]"} hover:text-white transition-colors`}
            >
              <LyricsIcon className="block w-5 h-5" />
            </button>

            {/* Playlist */}
            <button
              onClick={() => setOpenCoda((prev) => !prev)}
              aria-label={openCoda ? "Chiudi playlist" : "Apri playlist"}
              className={`${openCoda ? "text-blue-600" : "text-[#a8a8a8]"} hover:text-white transition-colors`}
            >
              <CodaIcon2 className="block w-5 h-5" />
            </button>

            {/* Fullscreen */}
            <button
              onClick={handleFullScreen}
              aria-label="Schermo intero"
              className="hover:text-white text-[#a8a8a8] transition-colors"
            >
              <IconScreen className="block w-5 h-5" />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;