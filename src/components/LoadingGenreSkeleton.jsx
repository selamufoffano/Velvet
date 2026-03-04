const LoadingGenreSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex w-full h-20 bg-white/10 rounded-md animate-pulse gap-3 items-center px-4">
        <div className="w-10 h-10 bg-white/5 rounded-full"></div>
        <div className="h-4 w-32 bg-white/10 rounded"></div>
      </div>
    </div>
  );
};
export default LoadingGenreSkeleton;
