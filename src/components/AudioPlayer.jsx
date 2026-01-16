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
const screenFullIn =
  "m -10.940012,-0.1148856 c 0,-0.9665 0.7835,-1.75 1.75,-1.75 h 3.375 v 1.5 h -3.375 c -0.13807,0 -0.25,0.11193 -0.25,0.25 v 2.4285699 h -1.5 z m 13.75,-0.25 h -3.375 v -1.5 h 3.375 c 0.9665,0 1.75,0.7835 1.75,1.75 v 2.4285699 h -1.5 v -2.4285699 c 0,-0.13807 -0.1119,-0.25 -0.25,-0.25 z m -12.25,7.8213996 v 2.4286 c 0,0.1381 0.11193,0.25 0.25,0.25 h 3.375 v 1.5 h -3.375 c -0.9665,0 -1.75,-0.7835 -1.75,-1.75 v -2.4286 z m 12.5,2.4286 v -2.4286 h 1.5 v 2.4286 c 0,0.9665 -0.7835,1.75 -1.75,1.75 h -3.375 v -1.5 h 3.375 c 0.1381,0 0.25,-0.1119 0.25,-0.25 z";
const screenFullOut =
  "m -10.940012,-0.1148856 c 0,-0.9665 0.7835,-1.75 1.75,-1.75 h 3.375 v 1.5 h -3.375 c -0.13807,0 -0.25,0.11193 -0.25,0.25 v 2.4285699 h -1.5 z m 13.75,-0.25 h -3.375 v -1.5 h 3.375 c 0.9665,0 1.75,0.7835 1.75,1.75 v 2.4285699 h -1.5 v -2.4285699 c 0,-0.13807 -0.1119,-0.25 -0.25,-0.25 z m -12.25,7.8213996 v 2.4286 c 0,0.1381 0.11193,0.25 0.25,0.25 h 3.375 v 1.5 h -3.375 c -0.9665,0 -1.75,-0.7835 -1.75,-1.75 v -2.4286 z m 12.5,2.4286 v -2.4286 h 1.5 v 2.4286 c 0,0.9665 -0.7835,1.75 -1.75,1.75 h -3.375 v -1.5 h 3.375 c 0.1381,0 0.25,-0.1119 0.25,-0.25 z";

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
    <div className="text-white flex flex-col pr-1 pl-1 bg-[#09090B]">
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
              <SvgIcon path={screenFullIn} viewBox="-15 -3 24 14" />
            </div>
        </div>
      </div>
    </div>
  );
};
export default AudioPlayer;
