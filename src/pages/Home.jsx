import { useEffect, useState, useCallback } from "react";
import { useAuth } from "../store/context/Auth-context";
import { NewAlbum } from "../components/NewAlbum"; 
import { Carousel } from "../components/Carousel";
export const Home = () => {
  const { authData } = useAuth();
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  const PAGE_SIZE = 5; 

  const fetchAlbums = useCallback(async () => {
    if (!authData) return;

    setLoading(true);
    try {
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

  return (
    <div className="w-full h-full bg-[#1b102e] p-6 overflow-y-auto">
      <h1 className="text-4xl text-white font-semibold mb-1.5">Home</h1>
      <NewAlbum 
        albums={albums} 
        loading={loading} 
        authData={authData} 
        PAGE_SIZE={PAGE_SIZE} 
      />
      <Carousel></Carousel>

      <NewAlbum 
        albums={albums} 
        loading={loading} 
        authData={authData} 
        PAGE_SIZE={PAGE_SIZE} 
      />
    </div>
  );
};