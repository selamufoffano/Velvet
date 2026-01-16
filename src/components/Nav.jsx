import React, { useState } from "react";

function Nav() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [settingOpen, setSettingOpen] = useState(false);

  const searchMenuHandler = () => {
    setSearchOpen((prev) => !prev);
  };
  
  const settingHandler = () => {
    setSettingOpen((prev) => !prev);
  };

  return (
    <nav className="min-h-14 w-full flex items-center justify-between bg-[#09090B] px-4 border-b border-neutral-800">
      <div className="flex items-center w-1/3 gap-3">
        <span className="text-white text-lg font-semibold mr-5">AmarCord</span>

        {["Home", "Album", "Song", "Artist", "Playlist", "Radio"].map(
          (item) => (
            <button
              key={item}
              className="bg-[#121212] hover:bg-[#1a1a1a] text-white text-sm font-semibold px-4 py-1.5 rounded-lg"
            >
              {item}
            </button>
          )
        )}
      </div>

      <div className="relative flex items-center w-1/3 justify-center">
        <div className="relative flex items-center w-full max-w-xs">
          <button
            type="button"
            onClick={searchMenuHandler}
            className="absolute left-3 top-1/2 -translate-y-1/2"
          >
            <img
              src="/img/search.svg"
              alt="Search"
              className="w-5 h-5 opacity-70"
            />
          </button>

          <input
            type="text"
            placeholder="Cerca..."
            className="h-[35px] w-full bg-[#1e1e1e] text-sm text-white pl-10 pr-3 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
            onFocus={() => setSearchOpen(true)}
          />
        </div>

        <div
          className={`absolute top-full mt-2 w-full min-h-28 rounded-lg bg-[#2c2833] z-10 p-4 text-white shadow-lg
          ${searchOpen ? "block" : "hidden"}`}
        >
          <div className="w-7 h-7 bg-[#111111] rounded-full flex justify-center items-center">
            <img src="/img/close.svg" alt="" onClick={searchMenuHandler} />
          </div>

          <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base ">
            <table class="w-full text-sm text-left rtl:text-right text-body">
              <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base">
                <tr>
                  <th scope="col" class="px-6 py-1 font-medium">
                    Song
                  </th>
                  <th scope="col" class="px-6 py-1 font-medium">
                    Album
                  </th>
                  <th scope="col" class="px-6 py-1 font-medium">
                    Artist
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-neutral-primary">
                  <td class="px-6 py-4">Walls</td>
                  <td class="px-6 py-4">This House Is Not For Sale (Deluxe)</td>
                  <td class="px-6 py-4">Bon Jovi</td>
                </tr>
                <tr class="bg-neutral-primary">
                  <td class="px-6 py-4">Walls</td>
                  <td class="px-6 py-4">This House Is Not For Sale (Deluxe)</td>
                  <td class="px-6 py-4">Bon Jovi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="relative flex items-center w-1/3 gap-4 justify-end">
        <button onClick={settingHandler} className="flex items-center gap-2 bg-[#121212] hover:bg-[#1a1a1a] text-white text-sm font-semibold px-4 py-1.5 rounded-lg">
          <img src="/img/settings.svg" alt="Settings" className="w-4 h-4" />
          Settings
        </button>
        
        <button className="bg-blue-950 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-1.5 rounded-md">
          Sign up
        </button>
      </div>
    </nav>
  );
}

export default Nav;
