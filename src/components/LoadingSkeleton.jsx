const LoadingSkeleton = () => (
  <div className="flex flex-col gap-3">
    <div className="w-full aspect-square bg-white/10 rounded-md animate-pulse"></div>
    <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse"></div>
    <div className="h-3 bg-white/5 rounded w-1/2 animate-pulse"></div>
  </div>
);

export default LoadingSkeleton;