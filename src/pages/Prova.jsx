import { useState, useEffect } from "react";
import { useAuth } from "../store/context/Auth-context";
import AlbumCard from "../components/Cover";

export const Prova = () => {
  const { authData } = useAuth();
  const [getAlbumsArtist, setGetAlbumsArtist] = useState([]);
  const id = "h0RzDUCjK6VBSjmd9hViNg";

  useEffect(() => {
    const fetchRadio = async () => {
      if (!authData) {
        return;
      }

      try {
        const radioUrl = `${authData.baseUrl}/rest/getPlaylist?${authData.authParams}&id=${id}&f=json`;
        const response = await fetch(radioUrl);
        const json = await response.json();
        console.log(json);

        const stationsArray =json["subsonic-response"]?.internetRadioStations?.internetRadioStation || [];
        setGetAlbumsArtist(stationsArray);
        console.log(stationsArray);
      } catch (err) {
        console.error("Errore nel recupero radio:", err);
      }
    };

    fetchRadio();
  }, [id, authData]);

  return (
    <>
      <div className="w-full h-full bg-gray-600">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-6 pl-10 pr-10">
          {getAlbumsArtist?.artist?.album?.slice(0, 8).map((album, i) => (
            <AlbumCard key={i} album={album} authData={authData} />
          ))}
        </div>
      </div>
    </>
  );
};
