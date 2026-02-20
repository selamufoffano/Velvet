const SideBar = () => {
  return (
    <div className="h-full bg-[#121212] w-full flex flex-col px-2">
      <div className="relative flex items-center w-full max-w-xs">
        <button
          type="button"
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
        />
      </div>

      <div className="h-full flex flex-col gap-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-[#333333]">
        <div className="flex flex-col items-center pb-1">
          <div className="w-full h-fit bg-[#121212] flex justify-between p-1">
            <button className="flex items-center gap-2 p-3 pb-0.5 pt-0.5 rounded-2xl bg-[]">
              <span className="text-white font-bold">La tua libreria</span>
            </button>

            <button className="flex items-center gap-2 p-2 pb-0.5 pt-0.5 border-[#8f8f8f] rounded-2xl hover:bg-[#333333]">
              <img src="/img/arrow_down.svg" alt="" />
            </button>
          </div>

          <div className="w-full h-fit flex flex-col bg-[#121212] gap-1 p-1">
            <button className="gap-2 p-1.5 text-white rounded-md flex items-start hover:bg-[#333333]">
              <img src="/img/home.svg" alt="" />
              <span className="text-white">Home</span>
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
            <button className="gap-2 p-1.5 text-white rounded-md flex items-start hover:bg-[#333333]">
              <img src="/img/home.svg" alt="" />
              <span className="text-white">Home</span>
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
            <button className="gap-2 p-1.5 text-white rounded-md flex items-start hover:bg-[#333333]">
              <img src="/img/home.svg" alt="" />
              <span className="text-white">Home</span>
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
            <button className="gap-2 p-1.5 text-white rounded-md flex items-start hover:bg-[#333333]">
              <img src="/img/home.svg" alt="" />
              <span className="text-white">Home</span>
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
            <button className="gap-2 p-1.5 text-white rounded-md flex items-start hover:bg-[#333333]">
              <img src="/img/home.svg" alt="" />
              <span className="text-white">Home</span>
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
            <button className="gap-2 p-1.5 text-white rounded-md flex items-start hover:bg-[#333333]">
              <img src="/img/home.svg" alt="" />
              <span className="text-white">Home</span>
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
            <button className="gap-2 p-1.5 text-white rounded-md flex items-start hover:bg-[#333333]">
              <img src="/img/home.svg" alt="" />
              <span className="text-white">Home</span>
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
            <button className="gap-2 p-1.5 text-white rounded-md flex items-start hover:bg-[#333333]">
              <img src="/img/home.svg" alt="" />
              <span className="text-white">Home</span>
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

        <div className="flex flex-col items-center pb-1">
          <div className="w-full h-fit bg-[#121212] flex justify-between p-1">
            <button className="flex items-center gap-2 p-3 pb-0.5 pt-0.5 rounded-2xl bg-[]">
              <span className="text-white font-bold">Playlist</span>
            </button>

            <button className="flex items-center gap-2 p-2 pb-0.5 pt-0.5 border-[#8f8f8f] rounded-2xl bg-[#333333]">
              <img src="/img/arrow_down.svg" alt="" />
            </button>
          </div>

          <div className="w-full h-fit flex flex-col bg-[#121212] gap-1 p-1">
            <button className="gap-2 p-1.5 text-white rounded-md flex items-start bg-[#333333]">
              <img src="/img/close.svg" alt="" />
              <span className="text-white">Home</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center pb-1">
          <div className="w-full h-fit bg-[#121212] flex justify-between p-1">
            <button className="flex items-center gap-2 p-3 pb-0.5 pt-0.5 rounded-2xl bg-[]">
              <span className="text-white font-bold">Playlist Condivise</span>
            </button>

            <button className="flex items-center gap-2 p-2 pb-0.5 pt-0.5 border-[#8f8f8f] rounded-2xl bg-[#333333]">
              <img src="/img/arrow_down.svg" alt="" />
            </button>
          </div>

          <div className="w-full h-fit flex flex-col bg-[#121212] gap-1 p-1">
            <button className="gap-2 p-1.5 text-white rounded-md flex items-start bg-[#333333]">
              <img src="/img/close.svg" alt="" />
              <span className="text-white">Home</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
