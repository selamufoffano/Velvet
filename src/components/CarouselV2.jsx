import LoadingSkeleton from "./LoadingSkeleton";
import AlbumCard from "./Cover";
import { useRef } from "react";
import { RefreshIcon } from "./Icons";

export const CarouselV2 = ({
  albums = [],
  authData,
  loading = false,
  PAGE_SIZE = 20,
  Titolo = "",
  onRefresh,
}) => {
  const carouselMove = useRef(null);

  const CarouselMoveLeft = () => {
    carouselMove.current?.scrollBy({
      left: -700,
      behavior: "smooth",
    });
  };

  const CarouselMoveRight = () => {
    carouselMove.current?.scrollBy({
      left: 700,
      behavior: "smooth",
    });
  };



  return (
    <div className="mt-10 mb-20">
      <div className="flex justify-between items-center w-full h-7 mt-3">
        <h1 className="text-white font-semibold text-2xl mb-4">
          {Titolo}
          {onRefresh && (
            <button className="ml-2 cursor-pointer" onClick={onRefresh}>
              <RefreshIcon />
            </button>
          )}
        </h1>

        <div className="flex gap-4 mb-4">
          <button
            onClick={CarouselMoveLeft}
            className="bg-[#222222] rounded-md border border-white/5 hover:bg-[#161616] transition-all p-1 text-white"
          >
            <img
              src="/img/arrow_back.svg"
              alt="Back"
              className="w-4 h-4 opacity-70"
            />
          </button>

          <button
            onClick={CarouselMoveRight}
            className="bg-[#222222] rounded-md border border-white/5 hover:bg-[#161616] transition-all p-1 text-white"
          >
            <img
              src="/img/arrow_back.svg"
              alt="Forward"
              className="w-4 h-4 opacity-70 transform scale-x-[-1]"
            />
          </button>
        </div>
      </div>

      <div
        ref={carouselMove}
        className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth gap-x-7 items-start hide-scrollbar"
      >
        {albums?.map((album) => (
          <div key={album.id} className="w-[200px] snap-center flex-shrink-0">
            <AlbumCard album={album} authData={authData} />
          </div>
        ))}

        {loading &&
          Array.from({ length: PAGE_SIZE }).map((_, i) => (
            <div key={`skeleton-${i}`} className="w-[180px] flex-shrink-0">
              <LoadingSkeleton />
            </div>
          ))}
      </div>
    </div>
  );
};