import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/context/Auth-context";
import { useTrack } from "../store/context/Track-context";
import { useAudioPlayerContext } from "../store/context/audio-player-context";

import { MusicNoteIcon, ClockIcon, PlayIcon } from "../components/Icons";

export const Album = () => {
  const { id } = useParams();
  const { authData } = useAuth();
  const { playAlbum } = useTrack();

  const { currentTrack, setCurrentTrack, setIsPlaying } =
    useAudioPlayerContext();

  const [albumDetails, setAlbumDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  //const fetchedRef = useRef(false);
  /**
   * Errore durante il caricamento degli album
   * Dati vecchio album non cancellati
   */

  const [fullscreenCover, setFullscreenCover] = useState(false);
  const coverUrl = `${authData.baseUrl}/rest/getCoverArt?${authData.authParams}&id=${id}&size=1000`;

  const handlePlayAlbum = () => {
    if (albumDetails && albumDetails.song) {
      playAlbum(albumDetails.song, authData, 0, setCurrentTrack, setIsPlaying);
    }
  };

  const handlePlaySingleTrack = (index) => {
    if (albumDetails && albumDetails.song) {
      playAlbum(
        albumDetails.song,
        authData,
        index,
        setCurrentTrack,
        setIsPlaying,
      );
    }
  };

  useEffect(() => {
    setAlbumDetails(null); // svuota chache
    setLoading(true);

    const fetchAlbumData = async () => {
      if (!authData || !id) return;

      try {
        const url = `${authData.baseUrl}/rest/getAlbum.view?${authData.authParams}&id=${id}&f=json`;

        const response = await fetch(url);
        const data = await response.json();

        setAlbumDetails(data["subsonic-response"]?.album);
        ////////////
        console.log(data);
        /////////////////
      } catch (err) {
        console.error("Errore nel recupero dell'album:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbumData();
  }, [id, authData]);

  if (loading)
    return (
      <div className="w-full h-full bg-[#121212] flex justify-center items-center">
        <div className="w-8 h-8 border-4 border-[#8a2be2] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (!albumDetails)
    return (
      <div className="p-10 text-red-500 bg-[#121212] w-full h-full">
        Album non trovato.
      </div>
    );

  return (
    <div className="w-full h-full bg-[#18181a] overflow-y-auto pb-32">
      {fullscreenCover && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-60"
          onClick={() => setFullscreenCover(false)}
        >
          <img
            src={coverUrl}
            alt={albumDetails.name}
            className="max-w-[90vw] max-h-[90vh] shadow-2xl"
          />
        </div>
      )}

      <div className="relative flex flex-col md:flex-row p-8 gap-8 items-end overflow-hidden">
        <img
          src={coverUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-3xl scale-110 opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#18181a] via-[#18181a]/20 to-transparent"></div>

        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-end">
          <img
            src={coverUrl}
            alt={albumDetails.name}
            onClick={() => setFullscreenCover(true)}
            className="w-48 h-48 md:w-56 md:h-56 shadow-2xl rounded-md object-cover cursor-pointer"
          />

          <div className="flex flex-col gap-2">
            <span className="text-gray-300 text-xs font-semibold uppercase tracking-wider">
              Album
            </span>

            <h1 className="text-white text-3xl md:text-4xl font-black tracking-tight mt-1">
              {albumDetails.name}
            </h1>

            <p className="text-gray-300 text-sm font-semibold ">
              {albumDetails.artist} {" • "} {albumDetails.year}
            </p>

            <div className="flex items-center gap-4 text-[#a8a8a8] text-sm font-medium">
              <div className="flex items-center gap-1.5">
                <MusicNoteIcon />
                <span>{albumDetails.songCount} brani</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ClockIcon />
                <span>
                  {Math.floor(albumDetails.duration / 3600) > 0
                    ? Math.floor(albumDetails.duration / 3600) + ":"
                    : ""}
                  {Math.floor(albumDetails.duration / 60) -
                    Math.floor(albumDetails.duration / 3600) * 60 +
                    ":"}
                  {(albumDetails.duration % 60).toString().padStart(2, "0")}
                </span>
              </div>
            </div>

            <div
              className={`${albumDetails.genres?.length ? "block" : "hidden"} text-[#a8a8a8] text-sm font-medium mt-2`}
            >
              {albumDetails.genres?.map((genre, index) => (
                <button
                  className="backdrop-blur-md mr-4 pl-2 pr-2 rounded-md border border-white/5 group cursor-pointer hover:bg-[#161616] transition-all text-white"
                  key={index}
                >
                  {genre.name}
                </button>
              ))}
            </div>

            <div className="mt-2 flex gap-5">
              <button
                onClick={handlePlayAlbum}
                className="flex items-center justify-center gap-2 bg-[#ffffff] hover:bg-blue-600 active:scale-95 px-5 py-1.5 rounded-3xl transition-all group"
              >
                <PlayIcon className="fill-black w-5 h-5" />
                <p className="text-black text-sm font-bold tracking-wide">
                  Riproduci
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 mt-2">
        <table className="w-full text-left border-collapse table-fixed">
          <thead>
            <tr className="text-[#a8a8a8] text-xs font-medium border-b border-white/5">
              <th className="pb-3 w-12 text-center">
                <MusicNoteIcon />
              </th>
              <th className="pb-3 uppercase tracking-wider w-[35%] pl-2">
                Title
              </th>
              <th className="pb-3 w-20 text-center">
                <ClockIcon />
              </th>
              <th className="pb-3 uppercase tracking-wider w-[25%] hidden sm:table-cell">
                Artist
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan="6" className="h-4"></td>
            </tr>

            {albumDetails.song?.map((song, index) => {
              const isPlayingNow = currentTrack?.title === song.title;

              return (
                <tr
                  key={song.id}
                  className={`group hover:bg-[#303030] transition-colors cursor-pointer ${
                    isPlayingNow
                      ? "border-l-2 border-blue-600 even:bg-[#1f1f1f] odd:bg-[#1f1f1f]"
                      : ""
                  }`}
                  onClick={() => handlePlaySingleTrack(index)}
                >
                  <td className="text-[#a8a8a8] text-center text-sm font-medium">
                    {song.discNumber ? song.discNumber + " • " : ""}
                    {song.track || index + 1}
                  </td>

                  <td className="pl-2 pr-4 truncate">
                    <span
                      className={`text-sm truncate ${
                        isPlayingNow
                          ? "text-blue-600 font-semibold"
                          : "font-medium text-gray-200"
                      }`}
                    >
                      {song.title}
                    </span>
                  </td>

                  <td className="text-[#a8a8a8] text-center text-sm">
                    {Math.floor(song.duration / 60)}:
                    {(song.duration % 60).toString().padStart(2, "0")}
                  </td>

                  <td className="py-2.5 text-[#a8a8a8] text-sm truncate pr-4 hidden sm:table-cell">
                    {song.artist}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
