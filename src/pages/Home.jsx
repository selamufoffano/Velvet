import React, { useEffect, useState, useCallback, useRef } from "react";
import { useAuth } from "../store/context/Auth-context";
import AlbumCard from "../components/Cover";

export const Home = () => {
  const { authData } = useAuth();
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const PAGE_SIZE = 5; 

  const fetchAlbums = useCallback(async () => {
    if (!authData) return;

    try {
      setLoading(true);
      const url = `${authData.baseUrl}/rest/getAlbumList2?${authData.authParams}&type=newest&size=${PAGE_SIZE}`;

      const response = await fetch(url);
      const data = await response.json();

      const albumList = data["subsonic-response"]?.albumList2?.album || [];

      setAlbums(albumList);
    } catch (err) {
      console.error("Errore fetch album:", err);
    } finally {
      setLoading(false);
    }
  }, [authData]);

  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  if (loading) {
    return (
      <div className="w-full h-full bg-[#121212] flex items-center justify-center">
        <div className="text-gray-400 animate-pulse font-medium">Caricamento vetrina...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#121212] p-6 overflow-y-auto">  
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {albums.map((album) => (
          <AlbumCard 
            key={album.id} 
            album={album} 
            authData={authData} 
          />
        ))}
      </div>
    </div>
  );
};