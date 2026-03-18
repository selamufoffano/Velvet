import LoadingSkeleton from "./LoadingSkeleton";
import AlbumCard from "./Cover";
import { useRef, useEffect } from "react";
import { RefreshIcon } from "./Icons";

export const Carousel = ({albums, loading, authData, PAGE_SIZE,  Titolo,  onRefresh,}) => {
  const carouselMove = useRef(null);

  const CarouselMoveFlet = () => {
    carouselMove.current.scrollBy({
      left: -700,
      behavior: "smooth",
    });
  };

  const CarouselMoveRighet = () => {
    carouselMove.current.scrollBy({
      left: 700,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = carouselMove.current;

    const onWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const el = carouselMove.current;

    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDown = (e) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      el.style.cursor = "grabbing";
    };

    const mouseLeave = () => {
      isDown = false;
      el.style.cursor = "grab";
    };

    const mouseUp = () => {
      isDown = false;
      el.style.cursor = "grab";
    };

    const mouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mousedown", mouseDown);
    el.addEventListener("mouseleave", mouseLeave);
    el.addEventListener("mouseup", mouseUp);
    el.addEventListener("mousemove", mouseMove);

    el.style.cursor = "grab";

    return () => {
      el.removeEventListener("mousedown", mouseDown);
      el.removeEventListener("mouseleave", mouseLeave);
      el.removeEventListener("mouseup", mouseUp);
      el.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div className="mt-10 mb-20">
      <div className="flex justify-between items-center w-full h-7 mt-3">
        <h1 className="text-white font-semibold text-2xl mb-4">
          {Titolo}
          <button className="ml-2 cursor-pointer" onClick={onRefresh}>
            <RefreshIcon />
          </button>
        </h1>

        <div className="flex gap-4 mb-4">
          <button
            onClick={CarouselMoveFlet}
            className="bg-[#222222] rounded-md border border-white/5 hover:bg-[#161616] transition-all p-1 text-white"
          >
            <img
              src="/img/arrow_back.svg"
              alt="Back"
              className="w-4 h-4 opacity-70 block"
            />
          </button>

          <button
            onClick={CarouselMoveRighet}
            className="bg-[#222222] rounded-md border border-white/5 hover:bg-[#161616] transition-all p-1 text-white"
          >
            <img
              src="/img/arrow_back.svg"
              alt="Forward"
              className="w-4 h-4 opacity-70 transform scale-x-[-1] block"
            />
          </button>
        </div>
      </div>

      <div
        ref={carouselMove}
        className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth gap-x-7 items-start hide-scrollbar"
      >
        {albums.map((album) => (
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
