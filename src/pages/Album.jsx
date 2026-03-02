import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/context/Auth-context";
import { useTrack } from "../store/context/Track-context";
import { useAudioPlayerContext } from "../store/context/audio-player-context";
import { MusicNoteIcon, ClockIcon, HeartIcon, StarIcon, PauseIcon2 } from "../components/Icons";

export const Album = () => {
  const { id } = useParams();
  const { authData } = useAuth();
  const { playAlbum } = useTrack();
  
  const { currentTrack, setCurrentTrack, setIsPlaying } = useAudioPlayerContext();
  
  const [albumDetails, setAlbumDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const handlePlayAlbum = () => {
    if (albumDetails && albumDetails.song) {
      playAlbum(albumDetails.song, authData, 0, setCurrentTrack, setIsPlaying);
    }
  };

  const handlePlaySingleTrack = (index) => {
    if (albumDetails && albumDetails.song) {
      playAlbum(albumDetails.song, authData, index, setCurrentTrack, setIsPlaying);
    }
  };

  useEffect(() => {
    const fetchAlbumData = async () => {
      if (!authData || !id) return;
      try {
        setLoading(true);
        const url = `${authData.baseUrl}/rest/getAlbum.view?${authData.authParams}&id=${id}&f=json`;
        const response = await fetch(url);
        const data = await response.json();
        setAlbumDetails(data["subsonic-response"]?.album);
      } catch (err) {
        console.error("Errore nel recupero dell'album:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAlbumData();
  }, [id, authData]);

  if (loading) return (
    <div className="w-full h-full bg-[#121212] flex justify-center items-center">
      <div className="w-8 h-8 border-4 border-[#8a2be2] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
  
  if (!albumDetails) return <div className="p-10 text-red-500 bg-[#121212] w-full h-full">Album non trovato.</div>;

  return (
    <div className="w-full h-full bg-[#18181a] overflow-y-auto pb-32">
      
      <div className="flex flex-col md:flex-row p-8 gap-8 items-end bg-gradient-to-b from-[#2a2a2c] to-[#18181a]">
        <img
          src={`${authData.baseUrl}/rest/getCoverArt?${authData.authParams}&id=${id}&size=300`}
          alt={albumDetails.name}
          className="w-48 h-48 md:w-56 md:h-56 shadow-2xl rounded-md object-cover"
        />
        <div className="flex flex-col gap-2">
          <span className="text-gray-300 text-xs font-semibold uppercase tracking-wider">Album</span>
          <h1 className="text-white text-4xl md:text-5xl font-black tracking-tight mt-1">
            {albumDetails.name}
          </h1>
          <p className="text-[#a8a8a8] text-sm font-medium mt-2">
            {albumDetails.artist} • {albumDetails.songCount} brani • {albumDetails.year}
          </p>
          <div className="mt-4 flex gap-5">
            <button 
              onClick={handlePlayAlbum} 
              className="flex items-center justify-center gap-2 bg-[#ffffff] hover:bg-gray-200 active:scale-95 px-7 py-1.5 rounded-3xl transition-all group"
            >
              <PauseIcon2/>
              <p className="text-black text-sm font-bold tracking-wide">Riproduci</p>
            </button>
          </div>
        </div>
      </div>

      <div className="px-8 mt-2">
        <table className="w-full text-left border-collapse table-fixed">

          <thead>
            <tr className="text-[#a8a8a8] text-xs font-medium border-b border-white/5">
              <th className="pb-3 w-12 text-center"><MusicNoteIcon /></th>
              <th className="pb-3 uppercase tracking-wider w-[35%] pl-2">Title</th>
              <th className="pb-3 w-20 text-center"><ClockIcon /></th>
              <th className="pb-3 w-14 text-center"></th> {/* Spazio per il cuore */}
              <th className="pb-3 uppercase tracking-wider w-[25%] hidden sm:table-cell">Artist</th>
              <th className="pb-3 w-32 pl-2 hidden md:table-cell"></th> {/* Spazio per le stelle */}
            </tr>
          </thead>
          
          <tbody>
            <tr><td colSpan="6" className="h-4"></td></tr>
            {albumDetails.song?.map((song, index) => {
              const isPlayingNow = currentTrack?.title === song.title;
              return (
                <tr
                  key={song.id}
                  className="group hover:bg-white/5 transition-colors cursor-pointer"
                  onClick={() => handlePlaySingleTrack(index)}
                >
                  <td className=" text-[#a8a8a8] text-center text-sm font-medium">
                    {song.track || index + 1}
                  </td>
                  
                  <td className="pl-2 pr-4 truncate">
                    <span className={`text-sm font-medium truncate ${isPlayingNow ? 'text-[#8a2be2]' : 'text-gray-200'}`}>
                      {song.title}
                    </span>
                  </td>
                  
                  <td className=" text-[#a8a8a8] text-center text-sm">
                    {Math.floor(song.duration / 60)}:{(song.duration % 60).toString().padStart(2, "0")}
                  </td>
                  
                  <td className=" text-center text-[#a8a8a8] opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="hover:text-white transition-colors" onClick={(e) => { e.stopPropagation()}}>
                      <HeartIcon filled={false} />
                    </button>
                  </td>
                  
                  <td className="py-2.5 text-[#a8a8a8] text-sm truncate pr-4 hidden sm:table-cell">
                    {song.artist}
                  </td>
                  
                  <td className="py-2.5 hidden md:table-cell">
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <StarIcon filled={false} />
                      <StarIcon filled={false} />
                      <StarIcon filled={false} />
                      <StarIcon filled={false} />
                      <StarIcon filled={false} />
                    </div>
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