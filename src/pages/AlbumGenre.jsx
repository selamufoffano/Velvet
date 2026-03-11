import { useEffect, useState } from "react";
import { useAuth } from "../store/context/Auth-context";
import { useNavigate } from "react-router-dom";
import LoadingSkeleton from "../components/LoadingSkeleton";

export const AlbumGenre = ({ getGenre }) => {
  const navigate = useNavigate();
  const { authData } = useAuth();

  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!authData || !getGenre) {
      setLoading(false);
      return;
    }

    const fetchAlbums = async () => {
      setLoading(true);
      setError(null);

      try {
        const encodedGenre = encodeURIComponent(getGenre);
        const url = `${authData.baseUrl}/rest/getAlbumList2?type=byGenre&genre=${encodedGenre}&size=100&${authData.authParams}&f=json`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Errore HTTP: ${response.status}`);
        }

        const data = await response.json();
        const albumList = data["subsonic-response"]?.albumList2?.album || [];

        setAlbums(albumList);
        console.log(`Album trovati per ${getGenre}:`, albumList);
      } catch (err) {
        console.error("Errore nel recupero degli album:", err);
        setError("Errore nel caricamento album");
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, [authData, getGenre]);

  if (!getGenre) {
    return (
      <div className="w-full p-8 text-white">
        <p>Nessun genere selezionato. Torna alle Categorie e scegline uno.</p>
      </div>
    );
  }

  if (loading)
    <div>
      {Array.from({ length: 10 }).map((_, i) => (
        <LoadingSkeleton key={`skeleton-${i}`} />
      ))}
    </div>;

  if (error) return <p className="p-8 text-red-500">{error}</p>;

  return (
    <div className="w-full h-full bg-[#1A1A1A] p-8 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6 text-white">Album: {getGenre}</h1>

      {albums.length === 0 ? (
        <p className="text-black">Nessun album trovato per questo genere.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {albums.map((album) => {
            const coverUrl = `${authData.baseUrl}/rest/getCoverArt?id=${album.coverArt || album.id}&${authData.authParams}`;

            return (
              <div
                key={album.id}
                onClick={() => navigate(`/album/${album.id}`)}
                className="bg-[#292929] rounded-xl p-3 hover:bg-[#333333] transition cursor-pointer"
              >
                <img
                  src={coverUrl}
                  alt={album.name}
                  className="w-full aspect-square object-cover rounded-lg mb-3"
                />

                <h3 className="font-semibold text-sm truncate text-white">
                  {album.name}
                </h3>

                <p className="text-xs text-white truncate">{album.artist}</p>

                <p className="text-xs text-white">
                  {album.year || "Anno sconosciuto"}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
