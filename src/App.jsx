import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import AudioPlayer from "./components/AudioPlayer";
import Connect from "./db/Connect";
import "./App.css";
import { useState } from "react";

function App() {
  const [openSidebar, seOpenSidebar] = useState(false);

  const sideBarHandler = () => {
    // devo usare context per passare i dati se voglio usare il bottone che c'è dentro
    // sidebarMenu
    // non posso usare le prop
  };

  return (
    <div className="h-screen w-full flex flex-col bg-[#000000] overflow-hidden">
      <div className="flex flex-grow overflow-hidden">
        <aside className="w-[30%] flex flex-colbg-[#121212] border border-white/5 group">
          <SideBar />
        </aside>

        <main className="w-[70] overflow-y-auto overflow-x-hidden ">
          <Connect />
        </main>
      </div>
      <AudioPlayer />
    </div>
  );
}

export default App;
