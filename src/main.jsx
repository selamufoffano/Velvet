import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AudioPlayerProvider } from "./store/context/audio-player-context.jsx";
import { AuthProvider } from "./store/context/Auth-context.jsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AudioPlayerProvider>
          <App />
        </AudioPlayerProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
