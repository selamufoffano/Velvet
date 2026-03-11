import { useEffect, useState } from "react";
import { useAuth } from "../store/context/Auth-context";

export const ShowArtist = () => {
  const { authData } = useAuth();

  const [artistList, setArtistList] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setArtistList(null);
    setLoading(true);

    const fetchArtistList = async () => {
      if (!authData) return;

      try {
        const url = `${authData.baseUrl}/rest/getArtists?${authData.authParams}&f=json`;

        const response = await fetch(url);
        const data = await response.json();

        const subsonicResponse = data["subsonic-response"];
        setArtistList(subsonicResponse);

        if (subsonicResponse?.artists.index) {
          subsonicResponse.artists.index.forEach((indexItem) => {
            if (indexItem.artist) {
              indexItem.artist.forEach((artist) => {
                console.log(artist.name);
                console.log(artist.id);
              });
            }
          });
        } else {
          console.log("Nessun artista trovato o struttura dati imprevista.");
        }

        //console.log(data);
      } catch (err) {
        console.error("Errore nel recupero degli artisti:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArtistList();
  }, [authData]);

  if (loading) return <p>Caricamento...</p>;
  const userIcon = "/img/circle.svg";

  return (
    <div className="w-full min-h-full bg-[#2d2d2d] p-6">
      <h1 className="text-white text-2xl font-bold mb-6">Artisti</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full">
        {artistList?.artists?.index?.map((indexItem) =>
          indexItem.artist?.map((artist) => (
            <div
              key={artist.id}
              className="flex flex-col items-center justify-center text-center"
            >
              <img
                src={artist.artistImageUrl || userIcon}
                alt={artist.name}
                className="w-40 h-40 rounded-full object-cover mb-2 bg-red-500"
              />

              <p className="text-sm text-white font-medium">{artist.name}</p>
            </div>
          )),
        )}
      </div>
    </div>
  );
};
