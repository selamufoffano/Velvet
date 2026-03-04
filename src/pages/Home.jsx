import { useEffect, useState, useCallback } from "react";
import { useAuth } from "../store/context/Auth-context";
import { Carousel } from "../components/Carousel";

export const Home = () => {
  const { authData } = useAuth();

  const PAGE_SIZE = 20;

  const [newestAlbums, setNewestAlbums] = useState([]);
  const [randomAlbums, setRandomAlbums] = useState([]);
  const [recentAlbums, setRecentAlbums] = useState([]);
  const [byYearAlbums, setByYearAlbums] = useState([]);

  const [loading, setLoading] = useState({
    newest: true,
    random: true,
    recent: true,
    byYear: true,
  });

  const fetchAlbums = useCallback(
    async (type, setter, loadingKey, extraParams = "") => {
      if (!authData) return;

      try {
        setLoading((prev) => ({ ...prev, [loadingKey]: true }));

        const url = `${authData.baseUrl}/rest/getAlbumList2?${authData.authParams}&type=${type}&size=${PAGE_SIZE}${extraParams}&f=json`;

        const response = await fetch(url);
        const data = await response.json();

        const albumList =
          data["subsonic-response"]?.albumList2?.album || [];

        setter(albumList);
      } catch (err) {
        console.error(`Errore fetch ${type}:`, err);
      } finally {
        setLoading((prev) => ({ ...prev, [loadingKey]: false }));
      }
    },
    [authData]
  );

  const fetchAlbumsByYear = async (year = 2025) => {
  if (!authData) return [];

  try {
    const url = `${authData.baseUrl}/rest/search3?${authData.authParams}&year=${year}&albumCount=${PAGE_SIZE}&f=json`;

    const res = await fetch(url);
    const data = await res.json();

    return data["subsonic-response"]?.searchResult3?.album || [];
  } catch (err) {
    console.error(`Errore fetch albums ${year}:`, err);
    return [];
  }
};

useEffect(() => {
  if (!authData) return;

  fetchAlbums("newest", setNewestAlbums, "newest");
  fetchAlbums("random", setRandomAlbums, "random");
  fetchAlbums("recent", setRecentAlbums, "recent");

  // Appena pubblicati 2025
  fetchAlbumsByYear(2025).then((albums) => setByYearAlbums(albums))
}, [fetchAlbums, authData]);

  return (
    <div className="w-full h-full bg-[#0a0a0a] p-6 overflow-y-auto border-l border-white/20">
      <h1 className="text-4xl text-white font-semibold mb-6">Home</h1>

      <Carousel
        albums={newestAlbums}
        loading={loading.newest}
        authData={authData}
        PAGE_SIZE={PAGE_SIZE}
        Titolo="New Albums"
      />

      <Carousel
        albums={randomAlbums}
        loading={loading.random}
        authData={authData}
        PAGE_SIZE={PAGE_SIZE}
        Titolo="Album casuali"
      />

      <Carousel
        albums={recentAlbums}
        loading={loading.recent}
        authData={authData}
        PAGE_SIZE={PAGE_SIZE}
        Titolo="Riprodotti recentemente"
      />

      <Carousel
        albums={byYearAlbums}
        loading={loading.byYear}
        authData={authData}
        PAGE_SIZE={PAGE_SIZE}
        Titolo="Appena pubblicato"
      />
    </div>
  );
};