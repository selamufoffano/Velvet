import { useState, useEffect } from "react";
import { useAuth } from "../store/context/Auth-context";
import { useAudioPlayerContext } from "../store/context/audio-player-context";
export const Radio = () => {
  const { authData } = useAuth();
  const [stations, setStations] = useState([]);

  const { currentTrack, setCurrentTrack, setIsPlaying } = useAudioPlayerContext();

  useEffect(() => {
    const fetchRadio = async () => {
      if (!authData) {
        setStations([]);
        return;
      }

      try {
        const radioUrl = `${authData.baseUrl}/rest/getInternetRadioStations?${authData.authParams}&f=json`;

        const response = await fetch(radioUrl);
        const json = await response.json();

        const stationsArray =
          json["subsonic-response"]?.internetRadioStations
            ?.internetRadioStation || [];

        setStations(stationsArray);
      } catch (err) {
        console.error("Errore nel recupero radio:", err);
        setStations([]);
      }
    };

    fetchRadio();
  }, [authData]);

  const handlePlayRadio = (radio) => {
    const radioTrack = {
      id: radio.id,
      title: radio.name,
      author: "Web Radio Live",
      src: radio.streamUrl,
      thumbnail: radio.homePageUrl,
      duration: 0,
      isRadio: true,
    };

    setCurrentTrack(radioTrack);
    setIsPlaying(true);
  };

  return (
    <div className="w-full h-full min-h-screen bg-[#1F1F1F] p-8  pb-32">
      <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8">
        {stations.map((radio) => {
          const imageUrl = radio.homePageUrl;
          const isPlayingNow = currentTrack?.id === radio.id;

          return (
            <button
              key={radio.id}
              onClick={() => handlePlayRadio(radio)}
              className="group flex flex-col text-left cursor-pointer w-full transition-all"
            >
              <div
                className={`w-full aspect-square rounded-xl overflow-hidden bg-black transition-transform duration-300 group-hover:scale-[1.02] shadow-sm ${
                  isPlayingNow
                    ? "ring-2 ring-offset-2 ring-offset-[#18181a] ring-blue-500"
                    : ""
                }`}
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="w-full h-full bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <div className="mt-3 flex flex-col w-full">
                <h2
                  className={`text-[15px] font-semibold leading-tight truncate ${
                    isPlayingNow ? "text-blue-500" : "text-white"
                  }`}
                >
                  {radio.name}
                </h2>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
