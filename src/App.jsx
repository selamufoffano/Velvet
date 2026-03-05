import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./store/context/Auth-context";
import { useState } from "react";
import SideBar from "./components/SideBar";
import AudioPlayer from "./player/AudioPlayer";
import Connect from "./db/Connect";
import { Home } from "./pages/Home";
import Error from "./pages/Error";
import AlbumPage from "./pages/AlbumPage";
import { Album } from "./pages/Album";
import { Lyric } from "./components/Lyric";
import { CloseLyricsIcon, CloseLyricsIcon2 } from "./components/Icons";
import "./App.css";

function App() {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/login" element={<Connect />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  const [openLyric, setOpenLyric] = useState(null);
  const [openLyricFull, setOpenLyricFull] = useState(false);

  return (
    <div className="h-screen w-full flex flex-col bg-[#000000] overflow-hidden">
      <div className="flex flex-grow overflow-hidden">
        <aside className="w-[15%] flex flex-col bg-[#121212] border-white/5 group">
          <SideBar />
        </aside>

        <main className="w-[85%] overflow-y-auto overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Navigate to="/Home" replace />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/AlbumPage" element={<AlbumPage />} />
            <Route path="/album/:id" element={<Album />} />
            <Route path="/404" element={<Error />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </div>

      <div
        className={`fixed top-0 bottom-[90px] right-0 w-[30%] backdrop-blur-2xl bg-[#4e4e4e52] border-l border-white/20 z-50 transform transition-transform duration-300 ${
          openLyric ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-4 text-white overflow-y-auto h-full">
          <div className="flex w-full justify-between items-center border-b border-white/10 pb-4">
            <button >
              <CloseLyricsIcon />
            </button>

            <button onClick={() => setOpenLyric(false)} className="rounded-full bg-[#3a3a3a] hover:bg-[#202020] transition-colors">
              <CloseLyricsIcon2 className="" />
            </button>
          </div>

          <div>
            <Lyric />
          </div>
        </div>
      </div>

      <AudioPlayer openLyric={openLyric} setOpenLyric={setOpenLyric} />
    </div>
  );
}

export default App;
