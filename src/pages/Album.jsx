import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/context/Auth-context";

export const Album = () => {
  const { id } = useParams(); // Recupera l'id dall'URL /album/:id
  const { authData } = useAuth();
  const [albumDetails, setAlbumDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbumData = async () => {
      if (!authData || !id) return;

      try {
        setLoading(true);
        const url = `${authData.baseUrl}/rest/getAlbum.view?${authData.authParams}&id=${id}&f=json`;
        const response = await fetch(url);
        const data = await response.json();

        // Salviamo i dettagli dell'album (che contengono l'array .song)
        setAlbumDetails(data["subsonic-response"]?.album);
      } catch (err) {
        console.error("Errore nel recupero dell'album:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbumData();
  }, [id, authData]);

  if (loading)
    return <div className="p-10 text-white">Caricamento brani...</div>;
  if (!albumDetails)
    return <div className="p-10 text-red-500">Album non trovato.</div>;

  return (
    <div className="w-full h-full bg-[#121212] overflow-y-auto">
      {/* Header Album */}
      <div className="flex flex-col md:flex-row p-8 gap-8 items-end bg-gradient-to-b from-[#2a2a2a] to-[#121212]">
        <img
          src={`${authData.baseUrl}/rest/getCoverArt?${authData.authParams}&id=${id}&size=300`}
          alt={albumDetails.name}
          className="w-48 h-48 md:w-60 md:h-60 shadow-2xl rounded-lg object-cover"
        />
        <div className="flex flex-col gap-2">
          <span className="text-white text-xs font-bold uppercase">Album</span>
          <h1 className="text-white text-5xl md:text-5xl font-black tracking-tighter">
            {albumDetails.name}
          </h1>
          <p className="text-white/70 text-sm font-semibold">
            {albumDetails.artist} • {albumDetails.songCount} brani •{" "}
            {albumDetails.year}
          </p>
          <div className="">
            <button className="flex items-center justify-center gap-2 bg-[#ffffff] hover:bg-[#ffabab] px-4 py-0.5 rounded-full transition-colors group">
              {/* Icona SVG Inline */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 text-black opacity-70"
              >
                <path d="M8 5v14l11-7z" />
              </svg>

              <p className="text-black text-sm font-medium">Riproduci</p>
            </button>
          </div>
        </div>
      </div>

      {/* Lista Brani */}
      <div className="p-8">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-400 text-xs uppercase border-b border-white/10">
              <th className="pb-3 w-10 font-medium text-center">#</th>
              <th className="pb-3 font-medium">Titolo</th>
              <th className="pb-3 hidden md:table-cell font-medium text-right">
                Durata
              </th>
            </tr>
          </thead>
          <tbody>
            {albumDetails.song?.map((song, index) => (
              <tr
                key={song.id}
                className="group hover:bg-white/5 transition-colors cursor-pointer"
              >
                <td className="py-3 text-gray-400 text-center text-sm">{index + 1}</td>
                <td className="py-1">
                  <p className="text-white text-sm font-medium truncate w-64 md:w-full">
                    {song.title}
                  </p>
                  <p className="text-gray-400 text-xs">{song.artist}</p>
                </td>
                <td className="py-3 hidden md:table-cell text-right pr-4.5 text-gray-400 text-sm">
                  {Math.floor(song.duration / 60)}:
                  {(song.duration % 60).toString().padStart(2, "0")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
