const NavBar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-black shadow-2xl z-50 mx-auto px-6 py-2 flex items-center justify-between">
      {/* Primo gruppo - 25% */}
      <div className="flex items-center space-x-7 basis-1/4 flex-shrink-0">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#31313100] overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            className="w-6 h-6 text-white"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M 3.7500004,26.666668 H 9.3750002 V 16.666665 H 20.625 V 26.666668 H 26.25 V 11.666666 L 14.999999,4.1666664 3.7500004,11.666666 Z M 0,30 V 9.9999999 L 14.999999,0 30,9.9999999 V 30 H 16.874999 V 19.999999 H 13.125001 V 30 Z M 14.999999,15.416666 Z" />
          </svg>
        </div>
        <div className="w-[30px] min-h-[30px] bg-amber-400 m-0.5"></div>
        <div className="w-[30px] min-h-[30px] bg-amber-400 m-0.5"></div>
      </div>

      {/* Secondo gruppo - 50% */}
      <div className="flex items-center space-x-2 w-[500px] flex-shrink-0">
        {/* Avatar cerchio rosso */}
        <div className="w-14 h-12 flex items-center justify-center rounded-full bg-[#313131] overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-white"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732z" />
          </svg>
        </div>

        {/* Form di ricerca */}
        <form className="w-full">
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full h-12 ps-10 rounded-[30px] text-white  bg-[#383838]"
              placeholder="What do you want to play?"
            />

            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>

            <span className="absolute inset-y-2.5 end-0 flex items-center pl-3 pe-3 border-white pointer-events-none border-l-2 mr-5.5 h-6"></span>
            <button className="absolute inset-y-0 end-0 flex items-center pl-3 pe-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="m 2.7098137,1 a 1,1 0 0 1 1,-1 H 17.709814 a 1,1 0 0 1 1,1 V 5 H 2.7098137 Z M 0.22281366,8.37 A 1,1 0 0 1 1.0008137,8 H 20.419814 a 1,1 0 0 1 0.978,1.2079999 L 19.227814,19.416 A 2,2 0 0 1 17.271814,21 H 4.1478137 a 2,2 0 0 1 -1.956,-1.584 L 0.02181366,9.2079999 A 1,1 0 0 1 0.22281366,8.371 Z M 10.709814,16.834 c 1.933,0 3.5,-1.044 3.5,-2.333 0,-1.289 -1.567,-2.333 -3.5,-2.333 -1.9330003,0 -3.5000003,1.042 -3.5000003,2.332 0,1.29 1.567,2.333 3.5000003,2.333 z" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* Terzo gruppo - 25% */}
      <div className="flex items-center justify-end space-x-4 basis-1/4 flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-[#3d3d3d] flex items-center justify-center">
          <div className="w-7 h-7 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            <img
              src={"/img/avatar-icon.svg"}
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
