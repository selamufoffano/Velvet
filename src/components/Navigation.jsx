import { useNavigate } from "react-router-dom";

// 1. Aggiungi 'searchTerm' tra le prop in ingresso
const Navigation = ({ setOpenSearch, onSearchInput, searchTerm }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center gap-2 mt-2 mb-5">
        <div
          // rimosso l'onClick da qui!
          className="relative flex items-center w-full max-w-[240px]"
        >
          <button
            type="button"
            // 2. Sposta qui l'apertura/chiusura della ricerca
            onClick={() => setOpenSearch((prev) => !prev)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
          >
            <img
              src="/img/search.svg"
              alt="Search"
              className="w-4 h-4 opacity-50 hover:opacity-100 transition-opacity"
            />
          </button>

          <input
            // 3. Collega il valore al testo condiviso col Padre
            value={searchTerm || ""} 
            onChange={(e) => {
              if (onSearchInput) {
                onSearchInput(e.target.value); 
              }
            }}
            // Apri la tendina automaticamente quando l'utente clicca per scrivere
            onFocus={() => setOpenSearch(true)}
            type="text"
            placeholder="Search"
            className="h-[30px] w-full bg-[#1c1c1c] text-sm text-[#8a8a8a] pl-10 pr-3 rounded-md border border-transparent focus:outline-none transition-all"
          />
        </div>

        <div className="flex items-center justify-center gap-2">
          <button className="flex items-center justify-center h-[30px] w-[30px] bg-[#1c1c1c] rounded-md hover:bg-[#2a2a2a] transition-colors shadow-sm">
            <img
              src="/img/setting.svg"
              alt="Settings"
              className="w-4 h-4 opacity-70 block"
            />
          </button>

          <button
            onClick={() => navigate(-1)}
            className="cursor-pointer flex items-center justify-center h-[30px] w-[30px] bg-[#1c1c1c] rounded-md hover:bg-[#2a2a2a] transition-colors"
          >
            <img
              src="/img/arrow_back.svg"
              alt="Back"
              className="w-4 h-4 opacity-70 block"
            />
          </button>

          <button
            onClick={() => navigate(1)}
            className="cursor-pointer flex items-center justify-center h-[30px] w-[30px] bg-[#1c1c1c] rounded-md hover:bg-[#2a2a2a] transition-colors"
          >
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

export default Navigation;