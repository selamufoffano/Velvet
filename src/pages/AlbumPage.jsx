import React, { useEffect, useState, useCallback, useRef } from "react";
import { useAuth } from "../store/context/Auth-context";
import AlbumCard from "../components/Cover";

// Componente Principale Home
const AlbumPage = () => {
  const { authData } = useAuth();
  const [albums, setAlbums] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  
  const observerTarget = useRef(null);
  const PAGE_SIZE = 40; 


  // Funzione per caricare gli album
  const fetchAlbums = useCallback(async () => {
    if (!authData || loading || !hasMore) return;

    setLoading(true);
    try {
      const url = `${authData.baseUrl}/rest/getAlbumList2?${authData.authParams}&type=newest&size=${PAGE_SIZE}&offset=${offset}`;
      const response = await fetch(url);
      const data = await response.json();
      
      const newAlbums = data["subsonic-response"]?.albumList2?.album || [];
      
      if (newAlbums.length < PAGE_SIZE) {
        setHasMore(false);
      }

      setAlbums(prev => [...prev, ...newAlbums]);
      setOffset(prev => prev + PAGE_SIZE);
    } catch (err) {
      console.error("Errore fetch album:", err);
    } finally {
      setLoading(false);
    }
  }, [authData, offset, loading, hasMore]);

  // Observer per caricare altri album quando si arriva in fondo
  useEffect(() => {
    const target = observerTarget.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          fetchAlbums();
        }
      },
      { threshold: 0.5 }
    );

    if (target) observer.observe(target);
    return () => { if (target) observer.unobserve(target); };
  }, [fetchAlbums, hasMore, loading]);

  return (
    <div className="w-full h-full bg-[#121212] p-6 overflow-y-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {albums.map((album, index) => (
          <AlbumCard key={`${album.id}-${index}`} album={album} authData={authData} />
        ))}
      </div>

      {/* Target per l'Infinite Scroll */}
      <div ref={observerTarget} className="h-40 w-full flex items-center justify-center">
        {loading && <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>}
        {!hasMore && albums.length > 0 && (
          <p className="text-gray-600 text-xs uppercase tracking-widest">Fine della collezione</p>
        )}
      </div>
    </div>
  );
};
export default AlbumPage;