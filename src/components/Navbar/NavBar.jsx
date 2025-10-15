import React from "react";
import logo from "../../img/tailwind-logo.svg";

const NavBar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-black text-white shadow-2xl z-50">
      <div className="mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo + Nome */}
        <div className="flex items-center space-x-3">
          <div>

          <img  
            src={logo}
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-semibold tracking-wide">
            Velvet
          </span>
          </div>
          
          <div>
          <a href="#home" className="hover:text-red-400 transition">
            Home
          </a>
          <a href="#servizi" className="hover:text-red-400 transition">
            Servizi
          </a>
          <a href="#contatti" className="hover:text-red-400 transition">
            Contatti
          </a>
          </div>
        </div>

        {/* Menu */}
        <div className="flex items-center space-x-6">
          <a href="#home" className="hover:text-red-400 transition">
            Home
          </a>
          <a href="#servizi" className="hover:text-red-400 transition">
            Servizi
          </a>
          <a href="#contatti" className="hover:text-red-400 transition">
            Contatti
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
