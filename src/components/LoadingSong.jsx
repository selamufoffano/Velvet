export const LoadingSong = () => {
  const tracks = Array.from({ length: 10 });

  return (
    <div className="h-full bg-[#18181A] pt-10 pl-[5%] pr-[30%]">
      <div className="flex items-center gap-6">
        <div className="relative w-36 h-36 bg-white/10  rounded-xl overflow-hidden animate-pulse"></div>

        <div className="flex flex-col gap-3">
          <div className="h-8 w-56 bg-white/10 rounded-md animate-pulse"></div>
          <div className="h-5 w-22 bg-white/10 rounded-md animate-pulse"></div>
          <div className="h-5 w-32 bg-white/10 rounded-md animate-pulse"></div>
        </div>
      </div>

      <div className="mt-8 border-t-2 border-white/10">
        {tracks.map((_, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-4 px-2"
          >
            <div className="flex gap-2">
              <div className="h-5 w-12 bg-white/10 rounded-md animate-pulse"></div>
              <div className="h-5 w-38 sm:w-74 bg-white/10 rounded-md animate-pulse"></div>
            </div>
            <div className="flex gap-2">
              <div className="h-5 w-15 bg-white/10 rounded-md animate-pulse"></div>
              <div className="h-5 w-28 sm:w-64 bg-white/10 rounded-md animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
