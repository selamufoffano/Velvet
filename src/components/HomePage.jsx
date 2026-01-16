import React from "react";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
const HomePage = ({ db_data }) => {
  if (!db_data || db_data.length === 0) {
    return (
      <div className="w-full bg-[#121212] flex-grow mt-16 p-6 text-white overflow-hidden">
        Caricamento album...
      </div>
    );
  }

  return (
    <div className="w-full max-w-full bg-[#121212] flex-grow p-0.5 pb-3 overflow-y-auto overflow-x-hidden border-l-8 border-[#121212] rounded-t-md">
      <div className="w-full h-auto">
        <h1 className="text-white text-3xl font-bold tracking-tight">
          I tuoi Album
        </h1>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 w-full">
        {db_data.map((album) => (
          <div
            key={album.id}
            className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-all duration-300 cursor-pointer group w-full"
          >
            <div className="relative aspect-square mb-4 shadow-lg shadow-black/50 overflow-hidden rounded-md">
              <img
                src={album.coverUrl}
                alt={album.titolo}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300?text=No+Cover";
                }}
              />
            </div>

            <h3
              className="text-white font-semibold truncate text-sm w-full"
              title={album.titolo}
            >
              {album.titolo}
            </h3>
            <p className="text-[#b3b3b3] text-xs mt-1 truncate w-full">
              {album.artista}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
