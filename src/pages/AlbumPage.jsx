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
      {/* GRIGLIA PRINCIPALE */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        
        {/* 1. Album Reali Caricati */}
        {albums.map((album, index) => (
          <AlbumCard key={`${album.id}-${index}`} album={album} authData={authData} />
        ))}

        {/* 2. Skeleton Loaders (10 sagome che pulsano durante il caricamento) */}
        {loading &&
          Array.from({ length: 5 }).map((_, index) => (
            <div key={`skeleton-${index}`} className="w-full">
              {/* Finta copertina */}
              <div className="aspect-square bg-white/5 rounded-lg animate-pulse animationDuration: '3s'"></div>
              
              {/* Finti testi (Titolo e Artista) */}
              <div className="mt-3 flex flex-col gap-2">
                <div className="h-3.5 bg-white/10 rounded w-3/4 animate-pulse animationDuration: '3s'"></div>
                <div className="h-2.5 bg-white/5 rounded w-1/2 animate-pulse animationDuration: '3s'"></div>
              </div>
            </div>
          ))}

      </div>

      {/* Target per l'Infinite Scroll (Ora serve solo per intercettare la fine pagina) */}
      <div ref={observerTarget} className="h-20 w-full flex items-center justify-center mt-6">
        {!hasMore && albums.length > 0 && (
          <p className="text-gray-600 text-xs uppercase tracking-widest">Fine della collezione</p>
        )}
      </div>
    </div>
  );
};

export default AlbumPage;