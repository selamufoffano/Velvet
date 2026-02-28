import { useState, useEffect } from 'react';
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

  // === SVG PATH PERSONALIZZATI ===
  const volumeMute = 'M 9.1368946,2.8682631e-4 A 0.75,0.75 0 0 0 8.7410536,0.10053914 L 1.8158947,4.1008117 A 3.64,3.64 0 0 0 0.48574338,9.0674336 3.64,3.64 0 0 0 1.8158947,10.399652 l 6.9251589,3.999755 a 0.75,0.75 0 0 0 1.124996,-0.649056 V 11.844525 A 4.7,4.7 0 0 1 8.3658826,11.15051 v 1.300179 L 2.5667533,9.1025734 A 2.14,2.14 0 0 1 1.7859224,6.1828551 C 1.9729222,5.8588555 2.2422368,5.5884738 2.5662365,5.400474 L 8.3658826,2.0508076 V 3.3504699 C 8.8158816,3.0374702 9.3220496,2.8004553 9.8660496,2.6564554 V 0.75062864 A 0.75,0.75 0 0 0 9.1368946,2.8682631e-4 Z M 13.521641,4.7529683 A 0.75,0.75 0 0 0 13.044667,4.9710428 L 11.574473,6.4412373 10.104795,4.9710428 A 0.75,0.75 0 0 0 9.0459446,6.0309264 L 10.514589,7.5011209 9.0449106,8.9713154 a 0.75,0.75 0 1 0 1.0598844,1.0598836 l 1.469678,-1.4701944 1.470194,1.4701944 A 0.75,0.75 0 0 0 14.104551,8.9713154 L 12.635907,7.5011209 14.105584,6.0309264 a 0.75,0.75 0 0 0 0,-1.0598836 0.75,0.75 0 0 0 -0.583943,-0.2180745 z';
  const VolumeHalf = 'M 9.037383,0.00417723 A 0.75,0.75 0 0 0 8.74076,0.10029533 L 1.8161179,4.1000512 A 3.64,3.64 0 0 0 0.48596661,5.4322696 3.64,3.64 0 0 0 1.8161179,10.399408 L 8.74076,14.399164 a 0.75,0.75 0 0 0 1.124996,-0.65009 V 0.74935133 A 0.75,0.75 0 0 0 9.491102,0.09926183 v 0.00103 A 0.75,0.75 0 0 0 9.037383,0.00417723 Z M 8.366622,2.0495304 V 12.449412 L 2.5669765,9.0992293 a 2.14,2.14 0 0 1 0,-3.7000326 z m 2.883029,0.9627319 v 1.6500285 a 3,3 0 0 1 0,5.1748775 v 1.6489947 a 4.502,4.502 0 0 0 0,-8.4739007 z';
  const VolumeFull = 'M 9.0372887,0.00405467 A 0.75,0.75 0 0 0 8.740666,0.10068957 L 1.8155072,4.1004455 A 3.64,3.64 0 0 0 0.48587263,5.4326639 3.64,3.64 0 0 0 1.8155072,10.399286 L 8.740666,14.399558 A 0.75,0.75 0 0 0 9.8656619,13.749469 V 0.74922887 A 0.75,0.75 0 0 0 9.490491,0.09965607 v 0.00103 A 0.75,0.75 0 0 0 9.0372887,0.00405107 Z M 14.089177,1.6618346 v 1.550293 a 4.252,4.252 0 0 1 0,8.1266354 v 1.551327 a 5.752,5.752 0 0 0 0,-11.2282554 z M 8.3665286,2.0494079 V 12.44929 L 2.5668826,9.0996235 a 2.14,2.14 0 0 1 0,-3.7000325 z m 2.8830284,0.9632487 v 1.6500285 a 3,3 0 0 1 0,5.1748779 v 1.648995 a 4.502,4.502 0 0 0 0,-8.4739014 z';

  const SvgIcon = ({ path, viewBox = '0 0 24 24' }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill="currentColor"
      className="block w-7 h-7"
    >
      <path d={path} />
    </svg>
  );

  // Sceglie l'icona del volume corretta
  const getVolumeIcon = () => {
    if (isMute || volume === 0) {
      return ({/*<BsFillVolumeMuteFill size={20} />*/},
        <SvgIcon path={volumeMute} viewBox="-5 0 24 14" />
      );
    } else if (volume < 50) {
      return ({/*<BsFillVolumeDownFill size={20} />*/},
        <SvgIcon path={VolumeHalf} viewBox="-5 0 24 14" />
      );
    } else {
      return ({/*<BsFillVolumeUpFill size={20} />*/},
        <SvgIcon path={VolumeFull} viewBox="-5 0 24 14" />
      );
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
        className="custom-range w-20 h-1 bg-gray-600 appearance-none cursor-pointer rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
      />
    </div>
  );
};