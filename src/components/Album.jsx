import React from "react";
const cardStyles = "w-full aspect-square bg-sky-500 rounded-xl overflow-hidden";

export const Album = () => {
  
  const albumCards = [];
  for (let i = 1; i <= 7; i++) {
    albumCards.push(
      <div key={i} className={cardStyles}>
        <img 
          src={`/album/img${i}.jpeg`} 
          alt={`Copertina album ${i}`} 
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="w-full mx-auto p-1 bg-slate-800">
      <div className="grid grid-cols-5 gap-4">
        {albumCards}        
        {albumCards}        
        {albumCards}        
      </div>
    </div>
  );
};