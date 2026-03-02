export default function Error() {
  return (
    <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-3">
          <div className="w-full aspect-square bg-white/10 rounded-md animate-pulse"></div>
          <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse"></div>
          <div className="h-3 bg-white/5 rounded w-1/2 animate-pulse"></div>
        </div>
      ))}
    </div>
  );
}
