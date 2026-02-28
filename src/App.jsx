import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import AudioPlayer from "./components/AudioPlayer";
import Connect from "./db/Connect";
import AdminPage from "./pages/AdminPage";
import "./App.css";

function App() {
  return (
    <div className="h-screen w-full flex flex-col bg-[#000000] overflow-hidden">
      <div className="flex flex-grow overflow-hidden">
        <aside className="w-[15%] flex flex-col bg-[#121212] border-white/5 group">
          <SideBar />
        </aside>

        <main className="w-[85%] overflow-y-auto overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Connect />} />
            <Route path="/AdminPage" element={<AdminPage />} />
          </Routes>
        </main>
      </div>
      <AudioPlayer />
    </div>
  );
}

export default App;