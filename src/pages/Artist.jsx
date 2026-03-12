import { useEffect, useState } from "react";
import { useAuth } from "../store/context/Auth-context";
import { useNavigate } from "react-router-dom";

export const Artist = () => {
  const { authData } = useAuth();
  const navigate = useNavigate();

  const handleNavigation = (albumId) => {
    navigate(`/album/${albumId}`);
  };

  const [getArtist, setArtist] = useState();
  const [loading, setLoading] = useState(false);

  const id = "5SiBUsAF1qtbJeoQ5yKTza";
  useEffect(() => {
    setArtist(null);
    setLoading(true);
    const fetchAlbumsArtist = async () => {
      if (!authData) return;

      try {
        const url = `${authData.baseUrl}/rest/getArtist?id=${id}&${authData.authParams}&f=json`;

        const response = await fetch(url);
        const data = await response.json();

        const subsonicResponse = data["subsonic-response"];
        setArtist(subsonicResponse);

        /*
        console.log(subsonicResponse.artist.coverArt);
        console.log(subsonicResponse.artist.name);
        if (subsonicResponse?.artist?.album) {
          subsonicResponse.artist.album.forEach((albums) => {
            console.log(albums.id);
            console.log(albums.name);
            console.log(albums.coverArt);
          });

        } else {
          console.log("Nessun artista trovato o struttura dati imprevista.");
        }
          */

        console.log(data);
      } catch (err) {
        console.error("Errore nel recupero degli artisti:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbumsArtist();
  }, [id, authData]);

  const profileUrl = getArtist?.artist?.coverArt
    ? `${authData.baseUrl}/rest/getCoverArt?id=${getArtist?.artist?.coverArt}&size=300&${authData.authParams}`
    : "";

  return (
    <div className="w-full min-h-screen bg-[#333] text-white font-sans">
      <div className="relative flex flex-col md:flex-row items-end gap-6 mb-8 p-8 md:pt-16 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center blur-2xl opacity-50 scale-110"
          style={{ backgroundImage: `url(${profileUrl})` }}
        />

        <div className="absolute inset-0 z-0 bg-black/40 bg-gradient-to-t from-[#151515] to-transparent" />

        <div className="relative z-10 flex flex-col md:flex-row items-end gap-6 w-full">
          <img
            src={profileUrl}
            alt={getArtist?.artist?.name}
            className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-md shadow-2xl"
          />
          <div className="flex flex-col mb-2 text-white">
            <h1 className="text-5xl md:text-5xl font-black tracking-tighter mb-4 drop-shadow-lg">
              {getArtist?.artist?.name}
            </h1>
            <p className="text-sm text-gray-300 font-medium drop-shadow-md">
              {getArtist?.artist?.album?.length || 0} Album disponibili
            </p>
          </div>
        </div>
      </div>

      <div className="pl-8 w-full">
        <h2 className="text-2xl font-bold mb-6">Discografia</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 pl-8">
        {getArtist?.artist?.album?.map((album) => {
          const coverUrl = album.coverArt
            ? `${authData.baseUrl}/rest/getCoverArt?id=${album.coverArt}&size=300&${authData.authParams}`
            : "";

          return (
            <div
              onClick={() => handleNavigation(album.id)}
              key={album.id}
              className="bg-[#181818] hover:bg-[#282828] transition-all duration-300 p-4 rounded-2xl flex flex-col group cursor-pointer"
            >
              <div className="relative mb-4 w-full aspect-square shadow-lg">
                <img
                  src={coverUrl}
                  alt={album.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <p className="font-bold text-base text-white truncate w-full">
                {album.name}
              </p>
              <p className="text-sm text-[#b3b3b3] mt-1 truncate w-full">
                Album • ID: {album.id}
              </p>
              <p className="text-sm text-[#b3b3b3] mt-1 truncate w-full">
                {album.year} {" • " + album.genre}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
