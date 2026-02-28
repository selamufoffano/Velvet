import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./store/context/Auth-context";
import SideBar from "./components/SideBar";
import AudioPlayer from "./player/AudioPlayer";
import Connect from "./db/Connect";
import {Home} from "./pages/Home";
import Error from "./pages/Error";
import AlbumPage from "./pages/AlbumPage";
import { Album } from "./pages/Album";
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
            {/**
             * 
             * 
             * 
             */}
            <Route path="/Error" element={<Error />} />
            <Route path="*" element={<Navigate to="/Error" replace />} />
          </Routes>
        </main>
      </div>

      <AudioPlayer />
    </div>
  );
}

export default App;
