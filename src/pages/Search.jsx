import { useEffect, useState } from "react";
import { useAuth } from "../store/context/Auth-context";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { useNavigate } from "react-router-dom";
import AlbumCard from "../components/Cover";

export const Search = ({ setOpenSearch, searchTerm, onSearchInput }) => {
  const { authData } = useAuth();
  const navigate = useNavigate();

  const handleNavigation = (albumId) => {
    navigate(`/album/${albumId}`);
  };

  // Ripristiniamo lo stato locale per l'input interno
  const [searchQuery, setSearchQuery] = useState(searchTerm || "");
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  // 1. SINCRONIZZAZIONE DAL PADRE AL FIGLIO
  // Se l'utente scrive nella Navigation (il padre), aggiorniamo l'input locale
  useEffect(() => {
    if (searchTerm !== undefined) {
      setSearchQuery(searchTerm);
    }
  }, [searchTerm]);

  // 2. SINCRONIZZAZIONE DAL FIGLIO AL PADRE
  // Se l'utente scrive direttamente nell'input qui sotto
  const handleLocalInputChange = (e) => {
    const nuovoTesto = e.target.value;
    setSearchQuery(nuovoTesto); // Aggiorna l'input locale

    // Invia il testo anche al padre per tenere sincronizzata la barra in alto!
    if (onSearchInput) {
      onSearchInput(nuovoTesto);
    }
  };

  const fetchAlbums = async (query) => {
    if (!authData || !query) {
      setAlbums([]);
      return;
    }

    setLoading(true);

    try {
      const url = `${authData.baseUrl}/rest/search3?${authData.authParams}&query=${encodeURIComponent(
        query,
      )}&songCount=0&artistCount=0`;

      const response = await fetch(url);
      const data = await response.json();

      const results = data["subsonic-response"]?.searchResult3?.album || [];

      setAlbums(results);
    } catch (err) {
      console.error("Errore ricerca album:", err);
    } finally {
      setLoading(false);
    }
  };

  // Ascolta i input che arriva da fuori
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchAlbums(searchQuery);
    }, 400);

    return () => clearTimeout(delay);
  }, [searchQuery]);

  const handleAlbumClick = () => {
    setOpenSearch(false);
    setSearchQuery("");
    if (onSearchInput) onSearchInput("");
  };

  return (
    <div>
      <div className="flex flex-col gap-2 mb-5">
        <input
          type="text"
          value={searchQuery}
          onChange={handleLocalInputChange}
          placeholder="Cerca album artista ..."
          className="border border-[#333] bg-[#1c1c1c] text-white p-2 rounded focus:outline-none focus:border-blue-500 transition-colors"
        />

        <h1 className="text-2xl font-bold mt-2">
          {searchQuery ? `Risultati per: "${searchQuery}"` : "Cerca un album"}
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {albums.map((album) => (
          <AlbumCard key={`${album.id}`} album={album} authData={authData} />
        ))}
 
        {loading &&
          Array.from({ length: 6 }).map((_, i) => (
            <LoadingSkeleton key={`skeleton-${i}`} />
          ))}
      </div>
    </div>
  );
};
