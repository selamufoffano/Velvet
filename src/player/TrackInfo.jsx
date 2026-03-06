import { useAudioPlayerContext } from "../store/context/audio-player-context";
import { useNavigate } from "react-router-dom";

export const TrackInfo = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/album/${currentTrack.id}`);
  };

  const { currentTrack } = useAudioPlayerContext();
  return (
    <div className="flex items-center h-[70px] gap-4">
      <div className="w-15 h-15 sm:w-15 sm:h-15 flex-shrink-0 flex items-center justify-center">
        {currentTrack?.thumbnail ? (
          <img
            className="w-full h-full object-cover rounded-[5px] shadow-md"
            src={currentTrack.thumbnail}
            alt={`${currentTrack?.title || "Traccia"} cover`}
          />
        ) : (
          <div className="w-full h-full bg-gray-400 rounded-[5px] animate-pulse shadow-sm"></div>
        )}
      </div>
      <div className="flex flex-col justify-center truncate">
        {currentTrack?.title ? (
          <p className="font-semibold truncate max-w-[200px] sm:max-w-xs text-white">
            {currentTrack.title}
          </p>
        ) : (
          <div className="w-32 h-4 bg-gray-500 rounded-md animate-pulse"></div>
        )}

        {currentTrack?.author ? (
          <p className="text-[14px] text-gray-400 truncate max-w-[200px] sm:max-w-xs hover:underline cursor-pointer">
            {currentTrack.author}
          </p>
        ) : (
          <div className="w-20 h-3 bg-gray-500 rounded-md animate-pulse"></div>
        )}

        {currentTrack?.album ? (
          <p onClick={handleNavigate} className="text-[14px] text-gray-400 truncate max-w-[200px] sm:max-w-xs hover:underline cursor-pointer">
            {currentTrack.album}
          </p>
        ) : (
          <div className="w-20 h-3 bg-gray-500 rounded-md animate-pulse"></div>
        )}
      </div>
    </div>
  );
};
