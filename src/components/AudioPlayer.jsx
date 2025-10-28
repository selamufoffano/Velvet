// src/components/AudioPlayer.jsx
import React, { useState } from "react";
import { TrackInfo } from "./TrackInfo";
import { Controls } from "./Controls";
import { ProgressBar } from "./ProgressBar";
import { VolumeControl } from "./VolumeControls";
import { Coda } from "./Coda";

// === SVG PATH PERSONALIZZATI ===
const Lyrics =
  "m 13.178794,2.3291074 a 2.831,2.831 0 0 0 -4.7969996,1.55 l 3.2469996,3.247 a 2.831,2.831 0 0 0 1.55,-4.797 m -2.926,5.544 -2.6189996,-2.62 -3.1410002,3.577 -2.675,3.0449996 a 1.287,1.287 0 0 0 1.816,1.816 l 3.0600002,-2.688 3.5599996,-3.1289996 z m -3.3799996,-4.024 a 4.331,4.331 0 1 1 4.7859996,4.786 L 7.6847944,12.128107 4.6247942,14.817104 A 2.787,2.787 0 0 1 0.69179418,10.884107 L 3.3677942,7.8391074 Z";
const coda = 'M 14,13.999999 H 0 V 12.5 H 14 Z M 14,9.5 H 0 V 8 H 14 Z M 0,2.5 A 2.5,2.5 0 0 1 2.5,0 h 9 a 2.5,2.5 0 0 1 0,5 h -9 A 2.5,2.5 0 0 1 0,2.5 m 2.5,-1 a 1,1 0 0 0 0,2 h 9 a 1,1 0 1 0 0,-2 z'
const VolumeFull =
  "M 9.0372887,0.00405467 A 0.75,0.75 0 0 0 8.740666,0.10068957 L 1.8155072,4.1004455 A 3.64,3.64 0 0 0 0.48587263,5.4326639 3.64,3.64 0 0 0 1.8155072,10.399286 L 8.740666,14.399558 A 0.75,0.75 0 0 0 9.8656619,13.749469 V 0.74922887 A 0.75,0.75 0 0 0 9.490491,0.09965607 v 0.00103 A 0.75,0.75 0 0 0 9.0372887,0.00405107 Z M 14.089177,1.6618346 v 1.550293 a 4.252,4.252 0 0 1 0,8.1266354 v 1.551327 a 5.752,5.752 0 0 0 0,-11.2282554 z M 8.3665286,2.0494079 V 12.44929 L 2.5668826,9.0996235 a 2.14,2.14 0 0 1 0,-3.7000325 z m 2.8830284,0.9632487 v 1.6500285 a 3,3 0 0 1 0,5.1748779 v 1.648995 a 4.502,4.502 0 0 0 0,-8.4739014 z";

const SvgIcon = ({ path, viewBox = "0 0 24 24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    fill="currentColor"
    className="block w-7 h-7"
  >
    <path d={path} />
  </svg>
);
//<SvgIcon path={VolumeFull} viewBox="-5 0 24 14" />

const AudioPlayer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="text-white flex flex-col pr-1 pl-1">
      <div className="h-[70px] flex items-center justify-between px-2 overflow-hidden">
        <div className="w-1/4 flex items-center space-x-4">
          <div>
            <TrackInfo />
          </div>
        </div>

        <div className="w-2/4 flex flex-col justify-center items-center">
          <Controls />
          <div className="w-4/5">
            <ProgressBar />
          </div>
        </div>

        <div className="w-1/4 flex items-center justify-end space-x-4">
          <VolumeControl />
          <button
            onClick={() => setOpenDrawer((prev) => !prev)}
            aria-label={openDrawer ? "Chiudi playlist" : "Apri playlist"}
            className=""
          >
          </button>
            <div className="flex space-x-2">
              <SvgIcon path={Lyrics} viewBox="-5 0 24 14" />
              <SvgIcon path={coda} viewBox="-5 0 24 14" />
            </div>
        </div>
      </div>
    </div>
  );
};
export default AudioPlayer;
