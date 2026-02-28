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

        <div className="flex items-center justify-center gap-2">
          {/* Menu / Settings Button */}
          <button className="flex items-center justify-center h-[30px] w-[30px] bg-[#1c1c1c] rounded-md hover:bg-[#2a2a2a] transition-colors shadow-sm">
            <img
              src="/img/setting.svg"
              alt="Settings"
              className="w-4 h-4 opacity-70 block"
            />
          </button>

          {/* Back Button (Forward capovolto) */}
          <button className="flex items-center justify-center h-[30px] w-[30px] bg-[#1c1c1c] rounded-md hover:bg-[#2a2a2a] transition-colors">
            <img
              src="/img/arrow_back.svg"
              alt="Back"
              className="w-4 h-4 opacity-70 block"
            />
          </button>

          {/* Forward Button */}
          <button className="flex items-center justify-center h-[30px] w-[30px] bg-[#1c1c1c] rounded-md hover:bg-[#2a2a2a] transition-colors">
            <img
              src="/img/arrow_back.svg"
              alt="Forward"
              className="w-4 h-4 opacity-70 transform scale-x-[-1] block"
            />
          </button>
        </div>
      </div>
    </>
  );
};
export default Search;
