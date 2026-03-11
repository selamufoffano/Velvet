import { useEffect, useState } from "react";
import { useAuth } from "../store/context/Auth-context";

export const Artist = () => {
  const { authData } = useAuth();

  const [getArtist, setArtist] = useState();
  const [loading, setLoading] = useState(false);

  const id = "2Y3qQA6zJC3ObbBrF9ZBoV";
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
    <div className="w-full h-full p-6 text-white">
      <div className="flex items-end">
        <div>
          <img
            src={profileUrl}
            className="w-60 aspect-square object-cover rounded-lg mb-3"
          />
        </div>
        <div>
          <p>Albums Artist</p>
          <h1 className="text-2xl text-white font-bold mb-4">
            {getArtist?.artist?.name}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {getArtist?.artist?.album?.map((album) => {
          const coverUrl = album.coverArt
            ? `${authData.baseUrl}/rest/getCoverArt?id=${album.coverArt}&size=300&${authData.authParams}`
            : "";
          return (
            <div
              key={album.id}
              className="bg-white p-4 rounded-lg shadow flex flex-col items-center text-center"
            >
              <img
                src={coverUrl}
                alt={`${album.name}`}
                className="w-40 h-40 rounded-md object-cover mb-4 shadow-sm"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/150?text=No+Cover";
                }}
              />

              <p className="font-bold text-gray-800">{album.name}</p>
              <p className="text-sm text-gray-500">ID: {album.id}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
