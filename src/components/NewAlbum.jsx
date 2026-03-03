import AlbumCard from "./Cover"; 
import LoadingSkeleton from "./LoadingSkeleton";

export const NewAlbum = ({ albums, loading, authData, PAGE_SIZE }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} authData={authData} />
      ))}

      {loading &&
        Array.from({ length: PAGE_SIZE }).map((_, i) => (
          <LoadingSkeleton key={`skeleton-${i}`} />
        ))}
    </div>
  );
};


