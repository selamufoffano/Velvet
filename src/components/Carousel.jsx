import LoadingSkeleton from "./LoadingSkeleton";

let carosello = document.getElementById("CarouselMove");
const CarouselMoveFlet = ()=> {
// ogni volta che viene premuto il bottone
// il carosello deve essere mosso X
console.log("Il botonne move left premuto");
carosello.style.transition=-222;
}

const CarouselMoveRighet = ()=> {
console.log("Il botonne move right premuto");

}



export const Carousel = ({}) => {
  return (
    <div className="">
      <div className="flex justify-end w-full h-7 gap-4">
        <button onClick={CarouselMoveFlet} class="bg-[#222222] rounded-md border border-white/5 group cursor-pointer hover:bg-[#161616] transition-all px-1 text-white">
          Left
        </button>
        <button onClick={CarouselMoveRighet} class="bg-[#222222] rounded-md border border-white/5 group cursor-pointer hover:bg-[#161616] transition-all px-1 text-white">
          Right
        </button>
      </div>
      <div className="flex w-full h-100 overflow-x-auto snap-x snap-mandatory scroll-smooth">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            id="CarouselMove"
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
