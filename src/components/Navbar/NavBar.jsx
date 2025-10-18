import React from "react";
import logo from "../../img/tailwind-logo.svg";
import userIcon from "../../img/user.jpg";

const NavBar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-black text-white shadow-2xl z-50">
      <div className="mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Primo gruppo - 25% */}
        <div className="flex items-center space-x-7 basis-1/4 flex-shrink-0">
          <img  
            src={logo}
            alt="Logo"
            className="w-8 h-8 object-contain"
          />
        </div>

        {/* Secondo gruppo - 50% */}
        <div className="flex items-center space-x-2 w-[500px] flex-shrink-0">
          {/* Avatar cerchio rosso */}
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#313131] overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-red"
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
                className="block w-full h-12 ps-10 rounded-[30px] text-white-900 border  bg-[#383838]" 
                placeholder="What do you want to play?" 
              />

              
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>


              <span className="absolute inset-y-2.5 end-0 flex items-center pl-3 pe-3 pointer-events-none border-l-2 mr-5.5 h-6"></span>
              <button className="absolute inset-y-0 end-0 flex items-center pl-3 pe-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-red"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4z" />
                </svg>
              </button>
            </div>
          </form>      
        </div>

        {/* Terzo gruppo - 25% */}
        <div className="flex items-center justify-end space-x-4 basis-1/4 flex-shrink-0">
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-red"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M 7.9943102,0.938 A 1.2572638,1.1666667 0 0 1 9.2264287,0 h 2.9671423 a 1.2572638,1.1666667 0 0 1 1.232118,0.938 l 0.416155,1.9273333 a 8.792046,8.1585 0 0 1 2.425262,1.3008334 l 2.009107,-0.63 a 1.2572638,1.1666667 0 0 1 1.491115,0.5215 L 21.2509,6.4423333 a 1.2572638,1.1666667 0 0 1 -0.25774,1.4595 l -1.592953,1.2984998 a 8.8599383,8.2215 0 0 1 0,2.5993339 l 1.592953,1.2985 a 1.2572638,1.1666667 0 0 1 0.258997,1.458333 l -1.483572,2.385833 a 1.2572638,1.1666667 0 0 1 -1.492372,0.5215 l -2.009107,-0.63 a 8.792046,8.1585 0 0 1 -2.425262,1.300834 L 13.426947,20.062 A 1.2572638,1.1666667 0 0 1 12.194829,21 H 9.2264287 A 1.2572638,1.1666667 0 0 1 7.9943102,20.062 L 7.5781559,18.134667 A 8.792046,8.1585 0 0 1 5.152894,16.833833 l -2.0091073,0.63 a 1.2572638,1.1666667 0 0 1 -1.4911149,-0.5215 L 0.16910049,14.557667 a 1.2572638,1.1666667 0 0 1 0.25773909,-1.4595 L 2.0197928,11.7985 a 8.8637101,8.225 0 0 1 0,-2.5981669 L 0.42683958,7.9018333 A 1.2572638,1.1666667 0 0 1 0.16784323,6.4435 L 1.6514145,4.0576667 a 1.2572638,1.1666667 0 0 1 1.4923722,-0.5215 l 2.0091073,0.63 A 8.7907888,8.1573333 0 0 1 7.5794132,2.8653333 Z M 10.71,14 a 3.7717915,3.5 0 1 0 0,-7 3.7717915,3.5 0 0 0 0,7 z" />
                </svg>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-red"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M 18.27197,3.084375 C 16.329568,1.18125 13.66379,0 10.703302,0 4.7823265,0 0,4.69875 0,10.5 0,16.30125 4.7823265,21 10.703302,21 c 4.99666,0 9.162777,-3.346875 10.355009,-7.875 H 18.27197 c -1.098462,3.058125 -4.072345,5.25 -7.568668,5.25 -4.4340333,0 -8.0375234,-3.530625 -8.0375234,-7.875 0,-4.344375 3.6034901,-7.875 8.0375234,-7.875 2.223714,0 4.206304,0.905625 5.653058,2.33625 L 12.042889,9.1875 H 21.42 V 0 Z" />
                </svg>
          </div>
          <div className="w-9 h-9 rounded-full bg-[#383838] flex items-center justify-center">
            <div className="w-7 h-7 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
              <img  
                src={"/img/user.jpeg"}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>  
      </div>
    </nav>
  );
};

export default NavBar;
