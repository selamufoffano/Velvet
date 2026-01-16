function Nav() {
  return (
    <nav className="min-h-14 w-full flex items-center justify-between bg-[#09090B] px-4  border-neutral-800">
      <div className="flex items-center w-1/3 gap-3">
        <span className="text-white text-lg font-semibold mr-5">AmarCord</span>
        <button className="bg-[#121212] hover:bg-[#1a1a1a] text-white text-sm font-semibold px-4 py-1.5 rounded-lg">
          Home
        </button>
        <button className="bg-[#121212] hover:bg-[#1a1a1a] text-white text-sm font-semibold px-4 py-1.5 rounded-lg">
          Album
        </button>
        <button className="bg-[#121212] hover:bg-[#1a1a1a] text-white text-sm font-semibold px-4 py-1.5 rounded-lg">
          Song
        </button>
        <button className="bg-[#121212] hover:bg-[#1a1a1a] text-white text-sm font-semibold px-4 py-1.5 rounded-lg">
          Artist
        </button>
        <button className="bg-[#121212] hover:bg-[#1a1a1a] text-white text-sm font-semibold px-4 py-1.5 rounded-lg">
          Playlist
        </button>
        <button className="bg-[#121212] hover:bg-[#1a1a1a] text-white text-sm font-semibold px-4 py-1.5 rounded-lg">
          Radio
        </button>
      </div>

      <div className="flex items-center w-1/3 justify-center">
        <div className="relative hidden md:flex items-center w-full max-w-xs">
          <img
            src="/img/search.svg"
            alt=""
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
          />

          <input
            type="text"
            placeholder="Cerca..."
            className="h-[35px] w-full bg-[#1e1e1e] text-sm text-white pl-10 pr-3 py-1.5 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <div className="flex items-center w-1/3 gap-4 justify-end">
        <button className="flex items-center gap-2 bg-[#121212] hover:bg-[#1a1a1a] text-white text-sm font-semibold px-4 py-1.5 rounded-lg">
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
