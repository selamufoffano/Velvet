import React from "react";
const cardStyles = "w-full aspect-square bg-slate-800 rounded-xl hover:bg-slate-600 transition duration-500 ease-in-out hover:shadow-2xl shadow-slate-800";

export const Album = () => {
  
  const albumCards = [];
  for (let i = 1; i <= 7; i++) {
    albumCards.push(
      <div key={i} className={cardStyles}>
        <img 
          src={`/album/img${i}.jpeg`} 
          alt={`Copertina album ${i}`} 
          className="w-full h-full object-cover rounded-t-xl"
        />
        <div className="w-full h-auto p-3">
          <h1 className="text-white font-semibold ">ten days</h1>
          <p className="text-gray-400 text-xs">Fred again..</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto p-1">
      <div className="grid grid-cols-6 gap-4">
        {albumCards}        
        {albumCards}        
        {albumCards}        
      </div>
    </div>
  );
};