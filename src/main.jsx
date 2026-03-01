import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AudioPlayerProvider } from "./store/context/audio-player-context.jsx";
import { AuthProvider } from "./store/context/Auth-context.jsx";
import { BrowserRouter } from "react-router-dom";
import { TrackProvider } from "./store/context/Track-context.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TrackProvider>
          <AudioPlayerProvider>
            <App />
          </AudioPlayerProvider>
        </TrackProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
