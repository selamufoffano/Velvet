const SideBar = () => {



  return (
    <div className="h-full bg-[#080808] w-full flex flex-col px-1.5 pb-1">
      {/* search */}
      <div className="flex items-center gap-2 mt-2 mb-5">
        {/* Search Bar Container */}
        <div className="relative flex items-center w-full max-w-[240px]">
          <button
            type="button"
            className="absolute left-3 top-1/2 -translate-y-1/2"
          >
            <img
              src="/img/search.svg"
              alt="Search"
              className="w-4 h-4 opacity-50"
            />
          </button>

          <input
            type="text"
            placeholder="Search"
            className="h-[30px] w-full bg-[#1c1c1c] text-sm text-[#8a8a8a] pl-10 pr-3 rounded-md border border-transparent focus:outline-none transition-all"
          />
        </div>

        {/* Menu Button */}
        <button className="flex items-center justify-center h-[30px] w-[40px] bg-[#1c1c1c] rounded-md hover:bg-[#2a2a2a] transition-colors">
          <img src="/img/menu.svg" alt="Menu" className="w-4 h-4 opacity-70" />
        </button>
        {/* Menu Button */}
        <button className="flex items-center justify-center h-[30px] w-[40px] bg-[#1c1c1c] rounded-md hover:bg-[#2a2a2a] transition-colors">
          <img
            src="/img/arrow_back.svg"
            alt="Menu"
            className="w-4 h-4 opacity-70"
          />
        </button>
        {/* Menu Button */}
        <button className="flex items-center justify-center h-[30px] w-[40px] bg-[#1c1c1c] rounded-md hover:bg-[#2a2a2a] transition-colors">
          <img
            src="/img/arrow_forward.svg"
            alt="Menu"
            className="w-4 h-4 opacity-70"
          />
        </button>
      </div>

      {/* Menu */}
      <div className="h-full flex flex-col gap-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-[#333333]">
        <div className="flex flex-col items-center pb-1 border border-white/5 rounded-md">
          <div className="w-full h-fit bg-[] flex justify-between p-1 hover:bg-[#161616] transition-all">
            <button className="flex items-center gap-2 p-3 pb-0.5 pt-0.5 rounded-2xl bg-[]">
              <span className="text-white font-bold">La tua libreria</span>
            </button>

            <button className="flex items-center gap-2 p-2 pb-0.5 pt-0.5 border-[#8f8f8f] rounded-2xl cursor-pointer">
              <img className="h-[25px]" src="/img/arrow_down.svg" alt="" />
            </button>
          </div>

          <div className="w-full h-fit flex flex-col bg-[] gap-1 p-1 text-sm">
            <button className="gap-2 p-1.5 text-white rounded-md flex items-start hover:bg-[#333333]">
              <img src="/img/home.svg" alt="" />
              <span className="text-red-400 ">Home</span>
            </button>
            <button className="gap-2 p-1.5 text-white rounded-md flex items-start hover:bg-[#333333]">
              <img src="/img/favorite.svg" alt="" />
              <span className="text-white">Preferiti</span>
            </button>
            <button className="gap-2 p-1.5 text-white rounded-md flex items-start hover:bg-[#333333]">
              <img src="/img/album.svg" alt="" />
              <span className="text-white">Album</span>
            </button>
            <button className="gap-2 p-1.5 text-white rounded-md flex items-start hover:bg-[#333333]">
              <img src="/img/song.svg" alt="" />
              <span className="text-white">Tracce</span>
            </button>
            <button className="gap-2 p-1.5 text-white rounded-md flex items-start hover:bg-[#333333]">
              <img src="/img/artist.svg" alt="" />
              <span className="text-white">Artist</span>
            </button>
            <button className="gap-2 p-1.5 text-white rounded-md flex items-start hover:bg-[#333333]">
              <img src="/img/generi.svg" alt="" />
              <span className="text-white">Generi</span>
            </button>
            <button className="gap-2 p-1.5 text-white rounded-md flex items-start hover:bg-[#333333]">
              <img src="/img/folder.svg" alt="" />
              <span className="text-white">Cartelle</span>
            </button>
            <button className="gap-2 p-1.5 text-white rounded-md flex items-start hover:bg-[#333333]">
              <img src="/img/radio.svg" alt="" />
              <span className="text-white">Radio</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center pb-1 border border-white/5 rounded-md">
          <div className="w-full h-fit bg-[] flex justify-between p-1 hover:bg-[#161616] transition-all">
            <button className="flex items-center gap-2 p-3 pb-0.5 pt-0.5 rounded-2xl bg-[]">
              <span className="text-white font-bold">Playlist</span>
            </button>

            <button className="flex items-center gap-2 p-2 pb-0.5 pt-0.5 border-[#8f8f8f] rounded-2xl cursor-pointer">
              <img className="h-[25px] hover:bg-[#292929] rounded-md" src="/img/add.svg" alt="" />
              <img className="h-[25px] hover:bg-[#292929] rounded-md" src="/img/list.svg" alt="" />
              <img className="h-[25px] hover:bg-[#292929] rounded-md" src="/img/arrow_down.svg" alt="" />
            </button>
          </div>

          <div className="w-full h-fit flex flex-col bg-[] gap-1 p-1">
            <button className="gap-2 p-1.5 text-white rounded-md flex items-start">
              <img src="/img/close.svg" alt="" />
              <span className="text-white text-sm">Home</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center pb-1 border border-white/5 rounded-md">
          <div className="w-full h-fit bg-[] flex justify-between p-1.5 hover:bg-[#161616] transition-all">
            <button className="flex items-center gap-2 p-3 pb-0.5 pt-0.5 rounded-2xl bg-[]">
              <span className="text-white font-bold">Playlist Condivise</span>
            </button>

            <button className="flex items-center gap-2 p-2 pb-0.5 pt-0.5 border-[#8f8f8f] rounded-2xl cursor-pointer">
              <img className="h-[25px]" src="/img/arrow_down.svg" alt="" />
            </button>
          </div>

          <div className="w-full h-fit flex flex-col  gap-1 p-1">
            <button className="gap-2 p-1.5 text-white rounded-md flex items-start">
              <img src="/img/close.svg" alt="" />
              <span className="text-white text-sm">Home</span>
            </button>
          </div>
        </div>
      </div>

      {/* Server */}
      <div className="flex items-center justify-between w-full max-w-sm bg-[#111111] p-1 rounded-md border border-white/5 group cursor-pointer hover:bg-[#161616] transition-all">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center h-[52px] w-[52px]  rounded-lg shadow-inner">
            <img
              src="/img/navidrome.svg"
              alt="Server Icon"
              className="w-10 h-10 object-contain"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-white font-bold text-[15px] leading-tight">
              My Server
            </span>
            <span className="text-[#8a8a8a] text-xs">
              No music folder selected
            </span>
          </div>
        </div>

        <button className="p-2 text-[#8a8a8a] hover:text-white transition-colors">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
