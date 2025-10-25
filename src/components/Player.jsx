import React from "react";

const Player = () => {
  return (
    <div className="w-full h-[130px] bg-black flex justify-between items-center px-4"> 
      <div className="w-1/4 flex items-center space-x-4 bg-red-500">
        <div className="w-12"> 
            <img 
              src="/album/img1.jpeg" 
              alt="Album cover" 
              className="w-full h-full object-cover rounded-md" 
            />
        </div>
        <div>
            <p className="text-white text-base font-semibold mb-1"> 
              Live At Eventim Apollo
            </p>
            <p className="text-gray-400 text-sm">Olivia Dean</p>
          </div>
      </div>


      <div className="w-2/4 h-full flex justify-center flex-col items-center  bg-[#641ca7]">
        {/* Aggiunto flex-col per impilare verticalmente */}
        {/* Aggiunto items-center per centrare orizzontalmente i figli */}
        {/* Aggiunto space-y-2 per spaziatura tra i figli */}
        
        {/* 1. Contenitore Bottoni (Larghezza limitata per centrarli) */}
        <div className="w-3/5 h-[20px] bg-green-600"> 
            {/**contiene forward back play pause buttons */}
        </div>

        {/* 2. Contenitore Timeline (Larghezza quasi intera del blocco centrale) */}
        <div className="w-4/5 h-[20px] bg-yellow-600">
            {/**contiene time line */}
        </div>
      </div>

      
      <div className="w-1/4 h-full flex justify-center bg-[#444343]">
      </div>
      
    </div>
  );
};

export default Player;