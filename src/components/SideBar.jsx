// SideBar.jsx
import React from "react";
import SideBar_history from "./sideBar_history";
const SideBar = () => {
  return (
    <div className="w-1/4 bg-[#121212] mt-16 flex-grow flex flex-col pt-1.5 rounded-tl-[20px] rounded-tr-[20px] ml-1.5">
      {/** Contenitore elementi Home e Browse */}
      <div
        className="w-[95%] h-[100px] bg-[#121212] m-[2.5%] border-1 rounded-[10px]
      flex justify-center items-center p-2 font-bold"
      >
        <div className=" w-full">
          <div className="flex items-center space-x-2 mb-6.5 pl-3 border-l-2 border-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732z" />
              </svg>
            </div>
            <div>
              <p className="text-white">Home</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 pl-3  border-l-2 border-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="m 2.7098137,1 a 1,1 0 0 1 1,-1 H 17.709814 a 1,1 0 0 1 1,1 V 5 H 2.7098137 Z M 0.22281366,8.37 A 1,1 0 0 1 1.0008137,8 H 20.419814 a 1,1 0 0 1 0.978,1.2079999 L 19.227814,19.416 A 2,2 0 0 1 17.271814,21 H 4.1478137 a 2,2 0 0 1 -1.956,-1.584 L 0.02181366,9.2079999 A 1,1 0 0 1 0.22281366,8.371 Z M 10.709814,16.834 c 1.933,0 3.5,-1.044 3.5,-2.333 0,-1.289 -1.567,-2.333 -3.5,-2.333 -1.9330003,0 -3.5000003,1.042 -3.5000003,2.332 0,1.29 1.567,2.333 3.5000003,2.333 z" />
              </svg>
            </div>
            <div>
              <p className="text-white">Browse</p>
            </div>
          </div>
        </div>
      </div>

      {/** Contenitore elementi Album, Song, New, Playlist  */}

      <div
        className="w-[95%] h-auto m-[2.5%] border-1 p-2 bg-[#121212] rounded-[10px]
      flex justify-center"
      >
        <div className="w-full text-white">
          <div className="flex items-center space-x-2 mb-6.5 pl-3 border-l-2 border-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M 10,0 C 4.48,0 0,4.48 0,10 0,15.52 4.48,20 10,20 15.52,20 20,15.52 20,10 20,4.48 15.52,0 10,0 Z m 0,18 C 5.59,18 2,14.41 2,10 2,5.59 5.59,2 10,2 c 4.41,0 8,3.59 8,8 0,4.41 -3.59,8 -8,8 z M 10,5.5 c -2.49,0 -4.5,2.01 -4.5,4.5 0,2.49 2.01,4.5 4.5,4.5 2.49,0 4.5,-2.01 4.5,-4.5 C 14.5,7.51 12.49,5.5 10,5.5 Z M 10,11 C 9.45,11 9,10.55 9,10 9,9.45 9.45,9 10,9 c 0.55,0 1,0.45 1,1 0,0.55 -0.45,1 -1,1 z" />
              </svg>
            </div>
            <div>
              <p className="text-white">Album</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-6.5 pl-3 border-l-2 border-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M 6,0 6.01,10.55 C 5.42,10.21 4.74,10 4.01,10 1.79,10 0,11.79 0,14 0,16.21 1.79,18 4.01,18 6.23,18 8,16.21 8,14 V 4 h 4 V 0 Z M 4.01,16 c -1.1,0 -2,-0.9 -2,-2 0,-1.1 0.9,-2 2,-2 1.1,0 2,0.9 2,2 0,1.1 -0.9,2 -2,2 z" />
              </svg>
            </div>
            <div>
              <p>Song</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 pl-3 border-l-2 border-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M 2,4 H 0 v 14 c 0,1.1 0.90000002,2 2,2 H 16 V 18 H 2 Z M 18,0 H 6 C 4.9,0 4,0.9 4,2 v 12 c 0,1.1 0.9,2 2,2 h 12 c 1.1,0 2,-0.9 2,-2 V 2 C 20,0.9 19.1,0 18,0 Z m -1,9 h -4 v 4 H 11 V 9 H 7 V 7 h 4 V 3 h 2 v 4 h 4 z" />
              </svg>
            </div>
            <div>
              <p>Playlist</p>
            </div>
          </div>
        </div>
      </div>

      {/** Contenitore elementi Play History */}
      {/** Ovvviamente qui va creato un ciclo */}
      <SideBar_history></SideBar_history>
    </div>
  );
};

export default SideBar;
