function SideBarMenu() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full pb-1">
      <div className="w-full h-fit bg-[#121212] flex justify-between p-1">
        <button className="flex items-center gap-2 p-3 pb-0.5 pt-0.5 rounded-2xl bg-[]">
          <span className="text-white font-bold">La tua libreria</span>
        </button>

        <button className="flex items-center gap-2 p-2 pb-0.5 pt-0.5 border-[#8f8f8f] rounded-2xl bg-[#333333]">
          <img src="/img/close.svg" alt="" />
          <span className="text-white">Close</span>
        </button>
      </div>

      <div className="w-full h-fit bg-[#121212] flex flex-wrap gap-2 p-1">
        <button className="p-3 pb-0.5 pt-0.5 text-white rounded-2xl bg-[#333333]">
          Home
        </button>
        <button className="p-3 pb-0.5 pt-0.5 text-white rounded-2xl bg-[#333333]">
          Albums
        </button>
        <button className="p-3 pb-0.5 pt-0.5 text-white rounded-2xl bg-[#333333]">
          Songs
        </button>
        <button className="p-3 pb-0.5 pt-0.5 text-white rounded-2xl bg-[#333333]">
          Artist
        </button>
        <button className="p-3 pb-0.5 pt-0.5 text-white rounded-2xl bg-[#333333]">
          Radio
        </button>
        <button className="p-3 pb-0.5 pt-0.5 text-white rounded-2xl bg-[#333333]">
          Playlist
        </button>
      </div>
    </div>
  );
}

export default SideBarMenu;
