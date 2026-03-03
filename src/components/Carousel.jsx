import LoadingSkeleton from "./LoadingSkeleton";
import { useRef } from "react";

export const Carousel = ({}) => {
  let carouselMove = useRef(null);

  const CarouselMoveFlet = () => {
    carouselMove.current.scrollBy({
      left: -600,
      behavior: "smooth",
    });
  };

  const CarouselMoveRighet = () => {
    carouselMove.current.scrollBy({
      left: 600,
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      <div className="flex justify-end w-full h-7 gap-4">
        <button
          onClick={CarouselMoveFlet}
          class="bg-[#222222] rounded-md border border-white/5 group cursor-pointer hover:bg-[#161616] transition-all px-1 text-white"
        >
          Left
        </button>
        <button
          onClick={CarouselMoveRighet}
          class="bg-[#222222] rounded-md border border-white/5 group cursor-pointer hover:bg-[#161616] transition-all px-1 text-white"
        >
          Right
        </button>
      </div>
      <div
        ref={carouselMove}
        className="flex w-full h-100 overflow-x-hidden snap-x snap-mandatory scroll-smooth"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="min-w-[300px] h-full snap-center flex-shrink-0 p-4"
          >
            <LoadingSkeleton key={`skeleton-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
