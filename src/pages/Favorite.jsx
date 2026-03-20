import { useAuth } from "../store/context/Auth-context";
import { useState, useEffect } from "react";
import AlbumCard from "../components/Cover";
export const Favorite = () => {
  const { authData } = useAuth();

  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (!authData) return;

    const fetchAlbums = async () => {
      setLoading(true);
      try {
        const url = `${authData.baseUrl}/rest/getStarred2?${authData.authParams}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Errore HTTP: ${response.status}`);
        }

        const data = await response.json();

        const albumList = data["subsonic-response"]?.starred2?.album || [];

        console.log("Album preferiti:", albumList);
        setAlbums(albumList);

        albumList?.forEach((album) => {
          console.log(album.name);
        });
      } catch (error) {
        console.error("Impossibile recuperare i preferiti:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, [authData]);

  return (
    <div className="w-full min-h-full bg-[#1A1A1A] p-4 text-white">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6">
        {albums.map((album) => (
          <AlbumCard
            key={`${album.id}`}
            album={album}
            authData={authData}
          />
        ))}
      </div>
    </div>
  );
};
