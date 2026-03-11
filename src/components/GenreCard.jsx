import { useEffect, useState, useMemo } from "react";
import { useAuth } from "../store/context/Auth-context";
import { COLORS } from "./Colors";
import LoadingGenreSkeleton from "./LoadingGenreSkeleton";

/**
 * I dati vengono inviati ad Home.jsx
 * Da Home.jsx -> App.jsx
 * Dentro App.jsx il passaggio AlbumGenre.jsx * */

export const GenreCard = ({ sedGnre, limit }) => {
  const { authData } = useAuth();

  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!authData) {
      setLoading(false);
      return;
    }

    const fetchGenres = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = `${authData.baseUrl}/rest/getGenres?${authData.authParams}&f=json`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Errore HTTP: ${response.status}`);
        }

        const data = await response.json();
        const genreList = data["subsonic-response"]?.genres?.genre || [];

        setGenres(genreList);
      } catch (err) {
        console.error("Errore nel recupero generi:", err);
        setError("Errore nel caricamento generi");
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, [authData]);

  const genresWithColors = useMemo(() => {
    if (genres.length === 0) return [];

    const listToProcess = limit
      ? [...genres].sort(() => 0.5 - Math.random()).slice(0, limit)
      : genres;

    return listToProcess.map((genre) => {
      const randomIndex = Math.floor(Math.random() * COLORS.length);
      return {
        ...genre,
        color: COLORS[randomIndex].hex,
      };
    });
  }, [genres, limit]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <LoadingGenreSkeleton/>
        ))}
      </div>
    );
  }

  if (error) return <p className="p-6 text-red-500">{error}</p>;
  if (!authData) return <p className="p-6">Utente non autenticato.</p>;

  return (
    <div className="w-full p-6 h-full">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {genresWithColors.map((genre) => (
          <div
            key={genre.value}
            onClick={() => sedGnre(genre.value)}
            style={{ backgroundColor: genre.color }}
            className="aspect-square flex justify-center items-center text-black hover:brightness-110 cursor-pointer p-6 rounded-xl text-center font-semibold shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
          >
            {genre.value}
          </div>
        ))}
      </div>
    </div>
  );
};
