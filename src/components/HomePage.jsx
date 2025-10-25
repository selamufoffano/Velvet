// HomePage.jsx
import React from "react";
import Footer from "./Footer";
const HomePage = () => {
  return(
    // Aggiungiamo 'flex-grow' per fargli occupare la larghezza rimanente accanto alla SideBar.
    // 'overflow-y-scroll' (o 'overflow-scroll') permette il contenuto interno di scrollare.
    <div className="w-full bg-[#a74242] flex-grow mt-20 p-6 overflow-y-scroll border-l-8 rounded-tl-[20px]">
      
      {/* Ho corretto l'altezza a h-[500px] per rendere l'esempio funzionante */}
      <div className="w-full h-[500px] bg-[#1112] mb-4"> Contenuto 1 </div>
      <div className="w-full h-[500px] bg-[#1112] mb-4"> Contenuto 2 </div>
      <div className="w-full h-[500px] bg-[#1112] mb-4"> Contenuto 3 </div>
      <Footer></Footer>
    </div>
    );
};

export default HomePage;