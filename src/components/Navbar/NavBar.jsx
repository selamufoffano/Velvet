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
        <div className="flex items-center space-x-2 w-[550px] flex-shrink-0">
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
                className="block w-full h-12 ps-10 rounded-2xl text-white-900 border  bg-[#383838]" 
                placeholder="What do you want to play?" 
                required 
              />
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>


              <div className="absolute inset-y-2.5 end-0 flex items-center pl-3 pe-3 pointer-events-none border-l-2 mr-5.5 h-6">
              </div>
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
            <img  
              src={"../../public/img/refresh-circle-svgrepo-com.svg"}
              alt="Logo"
              className="w-full h-full object-cover"
            /> 
          </div>
          
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            <img  
              src={userIcon}
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
