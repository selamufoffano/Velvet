

export const tracks = [
  {
    title: 'Live At Eventim Apollo',
    src: '/a_beautiful_day.mp3', 
    author: 'Fred again..',
    thumbnail: '/img1.jpeg', 
  },
  {
    title: 'Brano Esempio 23',
    src: '/path/to/second/audio.mp3', 
    author: 'Artista Esempio 2',
    thumbnail: '/path/to/second/thumbnail.jpg', 
  },
];

import React, { useEffect } from "react";
import { useTrack } from "../store/context/Track-context"; // Aggiorna il percorso se necessario

export const TrackPlayer = () => {
  // Richiamiamo le tracce dal context
  const { newTracks } = useTrack();

  useEffect(() => {
    // Questo si attiverà ogni volta che newTracks cambia
    console.log("Tracce ricevute nel componente TrackPlayer:", newTracks);
  }, [newTracks]);

  // Se non ci sono tracce dal server, potresti voler usare il tuo array statico di fallback
  const staticTracksFallback = [
    {
      title: 'Live At Eventim Apollo',
      src: '/a_beautiful_day.mp3', 
      author: 'Fred again..',
      thumbnail: '/img1.jpeg', 
    },
    {
      title: 'Brano Esempio 23',
      src: '/path/to/second/audio.mp3', 
      author: 'Artista Esempio 2',
      thumbnail: '/path/to/second/thumbnail.jpg', 
    },
  ];

  // Scegliamo quali tracce usare: quelle del context se esistono, altrimenti quelle statiche
  const currentTracks = newTracks.length > 0 ? newTracks : staticTracksFallback;

  return (
    <div className="p-4 text-white">
      <h2>Coda di riproduzione:</h2>
      <ul>
        {currentTracks.map((track, idx) => (
          <li key={idx}>{track.title} - {track.artist || track.author}</li>
        ))}
      </ul>
    </div>
  );
};