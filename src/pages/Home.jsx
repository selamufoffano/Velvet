import { useEffect, useState, useCallback } from "react";
import { useAuth } from "../store/context/Auth-context";
import { Carousel } from "../components/Carousel";
import { GenreCard } from "../components/GenreCard";
export const Home = () => {
  const { authData } = useAuth();

  const PAGE_SIZE = 20;

  const [newestAlbums, setNewestAlbums] = useState([]);
  const [randomAlbums, setRandomAlbums] = useState([]);
  const [recentAlbums, setRecentAlbums] = useState([]);
  const [genres, setGenres] = useState([]);

  const [loading, setLoading] = useState({
    newest: true,
    random: true,
    recent: true,
    genres: true,
  });

  const fetchAlbums = useCallback(
    async (type, setter, loadingKey, extraParams = "") => {
      if (!authData) return;

      try {
        setLoading((prev) => ({ ...prev, [loadingKey]: true }));

        const url = `${authData.baseUrl}/rest/getAlbumList2?${authData.authParams}&type=${type}&size=${PAGE_SIZE}${extraParams}&f=json`;

        const response = await fetch(url);
        const data = await response.json();

        const albumList = data["subsonic-response"]?.albumList2?.album || [];

        setter(albumList);
      } catch (err) {
        console.error(`Errore fetch ${type}:`, err);
      } finally {
        setLoading((prev) => ({ ...prev, [loadingKey]: false }));
      }
    },
    [authData],
  );

  const fetchGenres = useCallback(async () => {
    if (!authData) return;

    try {
      setLoading((prev) => ({ ...prev, genres: true }));

      const url = `${authData.baseUrl}/rest/getGenres?${authData.authParams}&f=json`;

      const response = await fetch(url);
      const data = await response.json();

      const genreList = data["subsonic-response"]?.genres?.genre || [];

      setGenres(genreList);
    } catch (err) {
      console.error("Errore fetch generi:", err);
    } finally {
      setLoading((prev) => ({ ...prev, genres: false }));
    }
  }, [authData]);

  useEffect(() => {
    if (!authData) return;

    fetchAlbums("newest", setNewestAlbums, "newest");
    fetchAlbums("random", setRandomAlbums, "random");
    fetchAlbums("recent", setRecentAlbums, "recent");
    fetchGenres();
  }, [fetchAlbums, fetchGenres, authData]);

  return (
    <div className="w-full h-full bg-[#1a1a1a] p-6 overflow-y-auto overflow-x-hidden border-l border-white/10">
      <h1 className="text-4xl text-white font-semibold mb-6">Home</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {loading.genres
          ? Array.from({ length: 12 }).map((_, i) => (
              <GenreCard key={`skeleton-${i}`} />
            ))
          : genres.map((genre) => (
              <GenreCard key={genre.value} genre={genre} />
            ))}
      </div>

      <Carousel
        albums={newestAlbums}
        loading={loading.newest}
        authData={authData}
        PAGE_SIZE={PAGE_SIZE}
        Titolo="New Albums"
        onRefresh={() => fetchAlbums("newest", setNewestAlbums, "newest")}
      />

      <Carousel
        albums={randomAlbums}
        loading={loading.random}
        authData={authData}
        PAGE_SIZE={PAGE_SIZE}
        Titolo="Album casuali"
        onRefresh={() => fetchAlbums("random", setRandomAlbums, "random")}
      />

      <Carousel
        albums={recentAlbums}
        loading={loading.recent}
        authData={authData}
        PAGE_SIZE={PAGE_SIZE}
        Titolo="Riprodotti recentemente"
        onRefresh={() => fetchAlbums("recent", setRecentAlbums, "recent")}
      />
    </div>
  );
};