// SideBar.jsx
import React from "react";

const SideBar = () => {
  return (
    <div className="w-1/5 bg-[#121212] mt-18 flex-grow flex flex-col pt-2 rounded-tl-[20px] rounded-tr-[20px] ">
      {/** Contenitore elementi Home e Browse */}
      <div
        className="w-[95%] h-[100px] bg-[#121212] m-[2.5%] border-1 rounded-[10px]
      flex justify-center items-center p-2"
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

          {/*
          <div className="flex items-center space-x-2 mb-6.5 pl-3 border-l-2 border-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M 14.5,0 C 12.76,0 11.09,0.81 10,2.09 8.91,0.81 7.24,0 5.5,0 2.42,0 0,2.42 0,5.5 0,9.28 3.4,12.36 8.55,17.04 L 10,18.35 11.45,17.03 C 16.6,12.36 20,9.28 20,5.5 20,2.42 17.58,0 14.5,0 Z M 10.1,15.55 10,15.65 9.9,15.55 C 5.14,11.24 2,8.39 2,5.5 2,3.5 3.5,2 5.5,2 7.04,2 8.54,2.99 9.07,4.36 h 1.87 C 11.46,2.99 12.96,2 14.5,2 c 2,0 3.5,1.5 3.5,3.5 0,2.89 -3.14,5.74 -7.9,10.05 z" />
              </svg>
            </div>
            <div>
              <p>Favorite</p>
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
                <path d="M 4.92,6.3729999 C 5.886,6.3729999 6.3729995,5.886 6.3729995,4.883 v -3.4 C 6.3729995,0.479 5.886,0 4.92,0 H 1.452 C 0.487,0 0,0.479 0,1.483 v 3.4 c 0,1.003 0.487,1.4899999 1.452,1.4899999 z m 7.628,0 C 13.512999,6.3729999 14,5.886 14,4.883 v -3.4 C 14,0.479 13.513,0 12.548,0 H 9.0879995 c -0.974,0 -1.46,0.479 -1.46,1.483 v 3.4 c 0,1.003 0.486,1.4899999 1.46,1.4899999 z M 4.898,5.3 H 1.468 C 1.202,5.3 1.072,5.163 1.072,4.882 v -3.4 c 0,-0.273 0.13,-0.41 0.396,-0.41 h 3.43 c 0.265,0 0.402,0.137 0.402,0.41 v 3.4 C 5.3,5.163 5.163,5.3 4.897,5.3 Z m 7.634,0 H 9.1019995 c -0.273,0 -0.402,-0.137 -0.402,-0.418 v -3.4 c 0,-0.273 0.129,-0.41 0.403,-0.41 H 12.533 c 0.265,0 0.395,0.137 0.395,0.41 v 3.4 c 0,0.281 -0.13,0.418 -0.396,0.418 z M 4.92,14 c 0.966,0 1.4529995,-0.48 1.4529995,-1.483 V 9.1099999 c 0,-0.996 -0.4869995,-1.483 -1.4529995,-1.483 H 1.452 c -0.965,0 -1.452,0.487 -1.452,1.483 V 12.517 C 0,13.521 0.487,14 1.452,14 Z m 7.628,0 C 13.512999,14 14,13.52 14,12.517 V 9.1099999 c 0,-0.996 -0.487,-1.483 -1.452,-1.483 H 9.0879995 c -0.974,0 -1.46,0.487 -1.46,1.483 V 12.517 c 0,1.004 0.486,1.483 1.46,1.483 z m -7.65,-1.072 h -3.43 c -0.266,0 -0.396,-0.137 -0.396,-0.41 V 9.1179999 c 0,-0.282 0.13,-0.418 0.396,-0.418 h 3.43 c 0.265,0 0.402,0.136 0.402,0.418 V 12.518 c 0,0.273 -0.137,0.41 -0.403,0.41 z m 7.633999,0 H 9.1019995 c -0.273,0 -0.402,-0.137 -0.402,-0.41 V 9.1179999 c 0,-0.282 0.129,-0.418 0.403,-0.418 h 3.4299995 c 0.265001,0 0.395,0.136 0.395,0.418 V 12.518 c 0,0.273 -0.129999,0.41 -0.396,0.41 z" />
              </svg>
            </div>
            <div>
              <p>New</p>
            </div>
          </div>
          */}

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
      <div className="w-[95%] flex-grow bg-[#121212] m-[2.5%] border-1 rounded-[10px] pt-3 pl-2 overflow-y-scroll scrollbar-hidden">
        <div className="flex items-center space-x-2 text-white mb-5 bg-[#1f1e1e] rounded-[10px]">
          <div className="w-12">
            <img src="/album/img1.jpeg" alt="" />
          </div>
          <div className="ml-3">
            <p className="text-white text-sm mb-1">ten days</p>
            <p className="text-gray-400 text-xs">Fred again..</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-white mb-5">
          <div className="w-12">
            <img src="/album/img2.jpeg" alt="" />
          </div>
          <div className="ml-3">
            <p className="text-white text-sm  mb-1">Reckless Heart</p>
            <p className="text-gray-400 text-xs">Joanne Shaw Taylor</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-white mb-5">
          <div className="w-12">
            <img src="/album/img3.jpeg" alt="" />
          </div>
          <div className="ml-3">
            <p className="text-white text-sm  mb-1">
              Saviors (èdition de luxe)
            </p>
            <p className="text-gray-400 text-xs">Green Day</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-white mb-5">
          <div className="w-12">
            <img src="/album/img4.jpeg" alt="" />
          </div>
          <div className="ml-3">
            <p className="text-white text-sm  mb-1">El Camino</p>
            <p className="text-gray-400 text-xs">The Black Keys</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-white mb-5">
          <div className="w-12">
            <img src="/album/img5.jpeg" alt="" />
          </div>
          <div className="ml-3">
            <p className="text-white text-sm  mb-1">Groovy</p>
            <p className="text-gray-400 text-xs">
              StreamBeats by Harris Heller
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-white mb-5">
          <div className="w-12">
            <img src="/album/img6.jpeg" alt="" />
          </div>
          <div className="ml-3">
            <p className="text-white text-sm font-semibold mb-1">
              The Human Condition
            </p>
            <p className="text-gray-400 text-xs">Jon Bellion</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-white mb-5">
          <div className="w-12">
            <img src="/album/img4.jpeg" alt="" />
          </div>
          <div className="">
            <p className="text-white text-sm font-semibold mb-1">
              Live At Eventim Apollo
            </p>
            <p className="text-gray-400 text-xs">Olivia Dean</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-white mb-5">
          <div className="w-12">
            <img src="/album/img7.jpeg" alt="" />
          </div>
          <div className="">
            <p className="text-white text-sm font-semibold mb-1">
              Live At Eventim Apollo
            </p>
            <p className="text-gray-400 text-xs">Olivia Dean</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-white mb-5">
          <div className="w-12">
            <img src="/album/img2.jpeg" alt="" />
          </div>
          <div className="">
            <p className="text-white text-sm font-semibold mb-1">
              Live At Eventim Apollo
            </p>
            <p className="text-gray-400 text-xs">Olivia Dean</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-white mb-5">
          <div className="w-12">
            <img src="/album/img1.jpeg" alt="" />
          </div>
          <div className="">
            <p className="text-white text-sm font-semibold mb-1">
              Live At Eventim Apollo
            </p>
            <p className="text-gray-400 text-xs">Olivia Dean</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
