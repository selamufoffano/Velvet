import { useEffect, useCallback } from 'react';
import { useAudioPlayerContext } from '../store/context/audio-player-context';
import { tracks } from '../data/tracks';

export const Controls = () => {
  const {
    currentTrack,
    setCurrentTrack,
    isPlaying,
    setIsPlaying,
    isShuffle,
    setIsShuffle,
    isRepeat,
    setIsRepeat,
    audioRef,
  } = useAudioPlayerContext();

  const handleNext = useCallback(() => {
    const currentIndex = tracks.findIndex((t) => t.title === currentTrack.title);
    const nextIndex = (currentIndex + 1) % tracks.length;
    setCurrentTrack(tracks[nextIndex]);
    setIsPlaying(true);
    if (audioRef.current) audioRef.current.currentTime = 0;
  }, [currentTrack, setCurrentTrack, setIsPlaying, audioRef]);

  const handlePrev = useCallback(() => {
    const currentIndex = tracks.findIndex((t) => t.title === currentTrack.title);
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrack(tracks[prevIndex]);
    setIsPlaying(true);
    if (audioRef.current) audioRef.current.currentTime = 0;
  }, [currentTrack, setCurrentTrack, setIsPlaying, audioRef]);

  useEffect(() => {
    if (isPlaying) audioRef.current?.play();
    else audioRef.current?.pause();
  }, [isPlaying, audioRef]);

  useEffect(() => {
    const handleEnded = () => {
      if (isRepeat) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      } else handleNext();
    };
    const audio = audioRef.current;
    audio?.addEventListener('ended', handleEnded);
    return () => audio?.removeEventListener('ended', handleEnded);
  }, [audioRef, isRepeat, handleNext]);

  // === SVG PATH PERSONALIZZATI ===
  const prevPath =
  'm 10.48399,13.372 c -0.365,0 -0.672,-0.107 -1.038,-0.323 L 0.93799005,8.0519995 C 0.31499005,7.687 0,7.238 0,6.682 0,6.118 0.30699005,5.694 0.93799005,5.321 L 9.44599,0.324 c 0.366,-0.216 0.68,-0.324 1.046,-0.324 0.73,0 1.337,0.556 1.337,1.569 v 4.773 c 0.108,-0.399 0.406,-0.73 0.904,-1.021 l 8.509002,-4.997 c 0.357,-0.216 0.672,-0.324 1.037,-0.324 0.73,0 1.345,0.556 1.345,1.569 v 10.235 c 0,1.012999 -0.614,1.568999 -1.345,1.568999 -0.365,0 -0.68,-0.108 -1.037,-0.323999 L 12.73299,8.0519995 C 12.24299,7.762 11.93699,7.421 11.82899,7.014 v 4.79 c 0,1.013 -0.615,1.568999 -1.345,1.568999 z'
  const nextPath =
    'm 13.140002,13.372 c 0.365,0 0.672,-0.107 1.038,-0.323 l 8.508,-4.997 c 0.623,-0.365 0.93799,-0.814 0.93799,-1.37 0,-0.564 -0.30699,-0.988 -0.93799,-1.361 l -8.508,-4.997 c -0.366,-0.216 -0.68,-0.324 -1.046,-0.324 -0.73,0 -1.337,0.556 -1.337,1.569 v 4.773 c -0.108,-0.399 -0.406,-0.73 -0.904,-1.021 L 2.382,0.324 C 2.025,0.108 1.71,0 1.345,0 0.615,0 0,0.556 0,1.569 v 10.235 c 0,1.013 0.614,1.569 1.345,1.569 0.365,0 0.68,-0.108 1.037,-0.324 l 8.509002,-4.997 c 0.49,-0.29 0.796,-0.631 0.904,-1.038 v 4.79 c 0,1.013 0.615,1.569 1.345,1.569 z';

  const playPath = 'M2 2v16l14-8L2 2z';
  const pausePath = 'M3 2h4v16H3V2zm10 0h4v16h-4V2z';
  const shafflePath = 'M 6.59,5.17 1.41,0 0,1.41 5.17,6.58 Z M 10.5,0 12.54,2.04 0,14.59 1.41,16 13.96,3.46 16,5.5 V 0 Z m 0.33,9.41 -1.41,1.41 3.13,3.13 L 10.5,16 H 16 v -5.5 l -2.04,2.04 z';
  const repeatPath = 'M 3.9999997,5 H 14 V 8 L 18,4 14,0 V 3 H 2 V 9 H 3.9999997 Z M 14,15 H 3.9999997 V 12 L 0,16 3.9999997,20 V 17 H 16 v -6 h -2 z';

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

  const btnBase =
    'flex items-center justify-center w-10 h-10 rounded-md transition-colors p-0 leading-none';

  return (
    <div className="flex items-center justify-center gap-1">
      <audio src={currentTrack.src} ref={audioRef} />

      {/* SHUFFLE */}
      <button
        onClick={() => setIsShuffle((p) => !p)}
        aria-label="Shuffle"
        className={`${btnBase} ${
          isShuffle ? 'text-green-600' : 'text-gray-400'
        } bg-transparent`}
        type="button"
      >
        <SvgIcon path={shafflePath} viewBox="0 1 24 14" />
      </button>

      {/* PREV */}
      <button
        onClick={handlePrev}
        aria-label="Brano precedente"
        className={`${btnBase} text-[#a8a8a8] hover:text-[#ffffff]`}
        type="button"
      >
        <SvgIcon path={prevPath} viewBox="0 0 24 14" />
      </button>

      {/* PLAY / PAUSE */}
      <button
        onClick={() => setIsPlaying((p) => !p)}
        aria-label={isPlaying ? 'Metti in pausa' : 'Riproduci'}
        className={`${btnBase} text-[#a8a8a8] hover:text-[#ffffff]`}
        type="button"
      >
        <SvgIcon path={isPlaying ? pausePath : playPath} viewBox="0 0 20 20" />
      </button>

      {/* NEXT */}
      <button
        onClick={handleNext}
        aria-label="Brano successivo"
        className={`${btnBase} text-[#a8a8a8] hover:text-[#ffffff]`}
        type="button"
      >
        <SvgIcon path={nextPath} viewBox="0 0 24 14" />
      </button>

      {/* REPEAT */}
      <button
        onClick={() => setIsRepeat((p) => !p)}
        aria-label="Ripeti"
        className={`${btnBase} ${
          isRepeat ? 'text-green-600' : 'text-gray-400'
        } bg-transparent`}
        type="button"
      >
        <SvgIcon path={repeatPath} viewBox="0 3 24 14"  />
      </button>
    </div>
  );
};
