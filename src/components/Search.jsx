const Search = () => {
  return (
    <>
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
    </>
  );
};
export default Search;
