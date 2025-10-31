// HomePage.jsx
import React from "react";
import Footer from "./Footer";
import { Album } from "./Album";
const HomePage = () => {
  return(
    // Aggiungiamo 'flex-grow' per fargli occupare la larghezza rimanente accanto alla SideBar.
    // 'overflow-y-scroll' (o 'overflow-scroll') permette il contenuto interno di scrollare.
    <div className="w-full bg-[#121212]  flex-grow mt-16 p-6 overflow-y-scroll border-l-8 rounded-tl-[20px]">
      
      {/* Ho corretto l'altezza a h-[500px] per rendere l'esempio funzionante */}
      <div className="w-full h-auto mb-4">
        <h1 className="text-white text-5xl font-semibold mb-5">Browse</h1>
        <Album></Album>
        </div>
      <div className="w-full h-[500px] bg-[#222222] mb-4"> Contenuto 2 </div>
      <div className="w-full h-[500px] bg-[#222222] mb-4"> Contenuto 3 </div>
      <div className="w-full h-[500px] bg-[#222222] mb-4"> Contenuto 3 </div>
      <Footer></Footer>
    </div>
    );
};

export default HomePage;