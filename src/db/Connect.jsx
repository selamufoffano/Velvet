import React, { useEffect, useState } from "react";
import md5 from "md5";

const BASE_URL = "";
const USERNAME = "";
const PASSWORD = "";

function Connect() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  const salt = "random_salt_123";
  const token = md5(PASSWORD + salt);
  const AUTH_QUERY = `u=${USERNAME}&t=${token}&s=${salt}&v=1.16.1&c=myApp&f=json`;

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {

      const res = await fetch(`${BASE_URL}/rest/getAlbumList2?${AUTH_QUERY}&type=newest&size=50`);
      const data = await res.json();
      
      const list = data["subsonic-response"].albumList2.album;
      setAlbums(list || []);
      setLoading(false);
    } catch (err) {
      console.error("Errore caricamento album:", err);
      setLoading(false);
    }
  };

  if (loading) return <div style={{ padding: 20 }}>Caricamento...</div>;

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>

      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th>Cover</th>
            <th>ID Album</th>
            <th>Titolo</th>
            <th>Artista</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((a) => {

            const coverUrl = `${BASE_URL}/rest/getCoverArt?${AUTH_QUERY}&id=al-${a.id}&size=100`;

            return (
              <tr key={a.id}>
                <td style={{ textAlign: "center", width: "110px" }}>
                  <img 
                    src={coverUrl} 
                    alt={a.name} 
                    style={{ width: "80px", height: "80px", borderRadius: "4px", display: "block", margin: "auto" }}
                    onError={(e) => { e.target.src = "https://via.placeholder.com/80?text=No+Cover"; }}
                  />
                </td>
                <td style={{ fontSize: "12px", color: "#666" }}>{a.id}</td>
                <td style={{ fontWeight: "bold" }}>{a.name || a.title}</td>
                <td>{a.artist}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Connect;