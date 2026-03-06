import { useEffect, useState } from "react";
import { useAuth } from "../store/context/Auth-context";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const { authData } = useAuth();
  const navigate = useNavigate();

  const handleNavigation = (albumId) => {
    navigate(`/album/${albumId}`);
  };
  
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchAlbums(searchQuery);
    }, 400);

    return () => clearTimeout(delay);
  }, [searchQuery]);



  return (
    <div>
      <div className="flex flex-col gap-2 mb-5">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cerca album..."
          className="border p-2 rounded"
        />

        <h1 className="text-2xl font-bold">Album Name</h1>
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
      >
        {albums.map((album, index) => (
          <div
            key={album.id || index}
            onClick={() => handleNavigation(album.id)}
            className="border p-4 rounded shadow-sm cursor-pointer hover:bg-[#727272] transition"
          >
            <div>
              {album.coverArt && (
                <img
                  src={`${authData.baseUrl}/rest/getCoverArt?id=${album.coverArt}&${authData.authParams}`}
                  alt={album.name}
                  className="rounded mb-2"
                />
              )}
            </div>

            <div>
              <p className="truncate font-semibold">
                {album.name || album.title || "Unknown Album"}
              </p>

              {album.artist && (
                <p className="text-sm text-gray-500 truncate">{album.artist}</p>
              )}

              {album.year && (
                <p className="text-xs text-gray-400">{album.year}</p>
              )}
            </div>
          </div>
        ))}

        {loading &&
          Array.from({ length: 6 }).map((_, i) => (
            <LoadingSkeleton key={`skeleton-${i}`} />
          ))}
      </div>
    </div>
  );
};
