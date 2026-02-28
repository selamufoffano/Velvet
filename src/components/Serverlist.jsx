const ServerList = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full max-w-sm bg-[#222222] p-1 rounded-md border border-white/5 group cursor-pointer hover:bg-[#161616] transition-all">
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
    </>
  );
};
export default ServerList;
