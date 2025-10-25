// SideBar.jsx
import React from "react";

const SideBar = () => {
  return (
    <div className="w-1/5 bg-[rgba(26,35,49,1)] pt-18 flex-grow flex flex-col">
      {/** Contenitore elementi Home e Browse */}
      <div
        className="w-[95%] h-[100px] bg-[#044b24] m-[2.5%] border-2 
      flex justify-center items-center p-0.5"
      >
        <div className="bg-green-400 w-full">
          <div className="flex items-center space-x-2 mb-5 bg-purple-600 pl-3 border-l-5 border-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-red-500"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732z" />
              </svg>
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 pl-3 bg-purple-700 border-l-5 border-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-red-500"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732z" />
              </svg>
            </div>
            <div>
              <p>Browse</p>
            </div>
          </div>
        </div>
      </div>

      {/** Contenitore elementi Album, Song, New, Playlist  */}

      <div
        className="w-[95%] h-auto bg-[#0b461f] m-[2.5%] border-2
      flex justify-center"
      >
        <div className="bg-green-400 w-full">
          <div className="flex items-center space-x-2 mb-5 bg-purple-600 pl-3 border-l-5 border-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-red-500"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732z" />
              </svg>
            </div>
            <div>
              <p>Album</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-5 bg-purple-600 pl-3 border-l-5 border-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-red-500"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732z" />
              </svg>
            </div>
            <div>
              <p>Song</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-5 bg-purple-600 pl-3 border-l-5 border-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-red-500"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732z" />
              </svg>
            </div>
            <div>
              <p>Favorite</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-5 bg-purple-600 pl-3 border-l-5 border-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-red-500"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732z" />
              </svg>
            </div>
            <div>
              <p>New</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-purple-600 pl-3 border-l-5 border-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-red-500"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732z" />
              </svg>
            </div>
            <div>
              <p>Playlist</p>
            </div>
          </div>
        </div>
      </div>

      {/** Contenitore elementi Play History */}
      <div className="w-[95%] flex-grow bg-yellow-400 m-[2.5%] border-2 rounded-[10px]"></div>
    </div>
  );
};

export default SideBar;
