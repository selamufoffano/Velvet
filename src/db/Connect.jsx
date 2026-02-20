import React, { useEffect, useMemo, useState } from "react";
import md5 from "md5";
import HomePage from "../components/HomePage";

// Server navidrome su Docker
const BASE_URL = "http://192.168.1.63:4533";
const USERNAME = "chiara";
const PASSWORD = "1234";

function Connect() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const salt = "random_salt_123";
  const token = md5(PASSWORD + salt);

  const AUTH_QUERY = `u=${USERNAME}&t=${token}&s=${salt}&v=1.16.1&c=myApp&f=json`;

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      setLoading(true);
      setError(null);

      const url = `${BASE_URL}/rest/getAlbumList2?${AUTH_QUERY}&type=newest&size=80`;
      console.log("FETCH:", url);

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Errore HTTP " + res.status);
      }

      const data = await res.json();

      const list =
        data?.["subsonic-response"]?.albumList2?.album ?? [];

      setAlbums(list);
    } catch (err) {
      console.error("ERRORE FETCH:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const arrayDati = useMemo(() => {
    return albums.map((a) => ({
      id: a.id,
      titolo: a.name || a.title,
      artista: a.artist,
      coverUrl: a.coverArt
        ? `${BASE_URL}/rest/getCoverArt?${AUTH_QUERY}&id=${a.coverArt}&size=300`
        : null,
    }));
  }, [albums]);

  if (loading) {
    return <div >Caricamento…</div>;
  }

  if (error) {
    return (
      <div style={{ padding: 20, color: "red" }}>
        Errore: {error}
      </div>
    );
  }

  return (
    <div>
      <HomePage db_data={arrayDati} />
    </div>
  );
}

export default Connect;
