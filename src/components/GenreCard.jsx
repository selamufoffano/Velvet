import LoadingGenreSkeleton from "./LoadingGenreSkeleton";
import { COLORS } from "./Colors";
import { useMemo } from "react";
export const GenreCard = ({ genre }) => {
  if (!genre) {
    return <LoadingGenreSkeleton />;
  }

  const getColor = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex].hex;
  }, []);
  
  return (
    <div className="flex flex-col gap-3 group cursor-pointer">
      <div
        style={{ backgroundColor: getColor }}
        className="flex w-full h-20  transition-all rounded-md gap-3 items-center pl-3 border"
      >
        <div className="flex w-full h-20 bg-[#1a1a1a] hover:bg-[#222222] transition-all rounded-md gap-3 items-center px-4">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">
            <button
              onClick={(e) => handleAction(e, "play")}
              className="flex items-center justify-center w-8 h-8 bg-[#113B57] rounded-full text-white active:scale-90"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 ml-0.5"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col">
            <span className="text-white font-semibold text-sm">
              {genre.value}
            </span>

            {genre.songCount && (
              <span className="text-xs text-gray-400">
                {genre.songCount} brani
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};