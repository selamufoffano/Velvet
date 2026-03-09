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
import { Search } from "./pages/Search";
import { CloseLyricsIcon2, CloseLyricsIcon3 } from "./components/Icons";
import { Settings } from "./pages/Settings";
import { LoadingSong } from "./components/LoadingSong";
import "./App.css";

function App() {
  const { isLoggedIn } = useAuth();

  const [openLyric, setOpenLyric] = useState(null);
  const [openLyricFull, setOpenLyricFull] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [openCoda, setOpenCoda] = useState(false);

  return (
    <Routes>
      {!isLoggedIn && (
        <>
          <Route path="/login" element={<Connect />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}

      {isLoggedIn && (
        <Route
          path="/*"
          element={
            <div className="h-screen w-full flex flex-col bg-[#000000] overflow-hidden">
              <div className="flex flex-grow overflow-hidden">
                <aside className="w-[15%] flex flex-col bg-[#121212] border-white/5 group">
                  <SideBar
                    openSearch={openSearch}
                    setOpenSearch={setOpenSearch}
                    searchTerm={searchTerm}
                    onSearchInput={setSearchTerm}
                  />
                </aside>

                <main className="w-[85%] overflow-y-auto overflow-x-hidden">
                  <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/albumpage" element={<AlbumPage />} />
                    <Route path="/album/:id" element={<Album />} />
                    <Route path="/setting" element={<Settings />} />
                    <Route path="/loadingsong" element={<LoadingSong />} />
                    <Route path="*" element={<Error />} />
                  </Routes>
                </main>
              </div>

              {/** Div Lyrics */}
              <div
                className={`fixed top-0 bottom-[90px] right-0 ${
                  openLyricFull ? "w-full" : "w-[30%]"
                } backdrop-blur-2xl bg-[#4e4e4e52] border-l border-white/20 z-40 transform transition-transform duration-300 ${
                  openLyric ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="p-6 pt-4 text-white overflow-y-auto h-full">
                  <div className="flex w-full justify-between items-center border-b border-white/10 pb-4">
                    <button onClick={() => setOpenLyricFull((prev) => !prev)}>
                      <CloseLyricsIcon3 />
                    </button>

                    <button
                      onClick={() => setOpenLyric(false)}
                      className="rounded-full bg-[#3a3a3a] hover:bg-[#202020] transition-colors"
                    >
                      <CloseLyricsIcon2 />
                    </button>
                  </div>

                  <Lyric />
                </div>
              </div>
              {/** Div for Search form */}
              <div
                className={`fixed top-0 bottom-[90px] w-[85%] right-0 backdrop-blur-2xl bg-[#4e4e4e52] border-l border-white/20 z-30 transform transition-transform duration-300 ${
                  openSearch ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="p-6 pt-4 text-white overflow-y-auto h-full">
                  <div className="flex w-full justify-between items-center border-b border-white/10 pb-4">
                    <button
                      className="rounded-full bg-[#3a3a3a] hover:bg-[#202020] transition-colors"
                      onClick={() => setOpenSearch(false)}
                    >
                      <CloseLyricsIcon2 />
                    </button>
                  </div>

                  <Search
                    setOpenSearch={setOpenSearch}
                    searchTerm={searchTerm}
                    onSearchInput={setSearchTerm}
                  />
                </div>
              </div>
              {/** Div Coda section */}
              <div
                className={`fixed top-[50%] bottom-[90px] w-[20%] right-0 backdrop-blur-2xl bg-[#4e4e4e52] border-l rounded-tl-3xl border-white/20 z-50 transform transition-transform duration-300 ${
                  openCoda ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="p-6 pt-4 text-white overflow-y-auto h-full rounded-tl-3xl">
                  <div className="flex w-full justify-between items-center border-b border-white/10 pb-4">
                    <button
                      className="rounded-full bg-[#3a3a3a] hover:bg-[#202020] transition-colors"
                      onClick={() => setOpenCoda(false)}
                    >
                      <CloseLyricsIcon2 />
                    </button>
                  </div>

                  
                </div>
              </div>

              <AudioPlayer openLyric={openLyric} setOpenLyric={setOpenLyric} openCoda={openCoda} setOpenCoda={setOpenCoda} />
            </div>
          }
        />
      )}
    </Routes>
  );
}

export default App;
