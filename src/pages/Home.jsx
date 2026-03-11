import { useEffect, useState, useCallback } from "react";
import { useAuth } from "../store/context/Auth-context";
import { Carousel } from "../components/Carousel";
import { GenreCard } from "../components/GenreCard";

export const Home = ({ sedGnre }) => {
  const { authData } = useAuth();

  const PAGE_SIZE = 20;

  const [newestAlbums, setNewestAlbums] = useState([]);
  const [randomAlbums, setRandomAlbums] = useState([]);
  const [recentAlbums, setRecentAlbums] = useState([]);

  const [loading, setLoading] = useState({
    newest: true,
    random: true,
    recent: true,
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

  useEffect(() => {
    if (!authData) return;

    fetchAlbums("newest", setNewestAlbums, "newest");
    fetchAlbums("random", setRandomAlbums, "random");
    fetchAlbums("recent", setRecentAlbums, "recent");
  }, [fetchAlbums, authData]);

  return (
    <div className="w-full h-full bg-[#1a1a1a] p-6 overflow-y-auto overflow-x-hidden border-l border-white/10">
      <h1 className="text-4xl text-white font-semibold mb-6">Home</h1>

      <h1 className="text-white font-semibold text-2xl">Generi</h1>
      <div>
        <GenreCard sedGnre={sedGnre} limit={6} />
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
