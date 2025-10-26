import React, { useState } from 'react';

const Player = () => {
  return (

    <div className="w-full h-[130px] bg-black flex items-center justify-center px-4">
      <div className="w-1/4 flex items-center space-x-4">
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

        <div className="w-2/4 flex flex-col justify-center items-center space-y-2"> 



          <div className="w-4/5 h-[20px] bg-yellow-600">
          </div>
      </div>

      <div className="w-1/4 h-full flex justify-center bg-[#444343]"></div>
    </div>
  );
};

export default Player;
