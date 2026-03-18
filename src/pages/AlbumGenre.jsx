import { useEffect, useState } from "react";
import { useAuth } from "../store/context/Auth-context";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSkeleton from "../components/LoadingSkeleton";
import Cover from "../components/Cover";

export const AlbumGenre = ({}) => {
  const navigate = useNavigate();
  const { authData } = useAuth();

  const { getGenre } = useParams();

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
    <div className="w-full h-full bg-[#1F1F1F] p-8 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6 text-white">Album: {getGenre}</h1>

      {albums.length === 0 ? (
        <p className="text-black">Nessun album trovato per questo genere.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {albums.map((album) => {
            return (
              <Cover
                key={`${album.id}`}
                album={album}
                authData={authData}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
