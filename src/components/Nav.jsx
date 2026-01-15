function Nav() {
  return (
    <nav className="min-h-14 w-full flex items-center justify-between bg-[#09090B] px-4 border-b border-neutral-800">
      <div className="flex items-center w-1/3 gap-3">
        <span className="text-white text-lg font-semibold">AmarCord</span>
      </div>

      <div className="flex items-center w-1/3 gap-2 justify-center">
        <input
          type="text"
          placeholder="Cerca..."
          className="w-[50%] bg-[#1e1e1e] text-sm text-white px-3 py-1.5 rounded-2xl outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="flex items-center w-1/3 gap-4 justify-end">
        <button className="text-neutral-300 hover:text-white text-sm">
          Login
        </button>
        <button className="bg-[#440083f8] hover:bg-green-400 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
          Sign up
        </button>
      </div>
    </nav>
  );
}

export default Nav;
