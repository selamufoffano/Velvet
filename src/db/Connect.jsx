import React, { useState } from "react";
import { useAuth } from "../store/context/Auth-context"; 

function Connect() {
  const { login } = useAuth();
  
  const [serverUrl, setServerUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const success = await login(serverUrl, username, password);
      if (!success) {
        setError("Credenziali non valide o server non raggiungibile");
      }
    } catch (err) {
      setError("Errore durante la connessione");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <div className="w-full max-w-md bg-[#121212] p-8 rounded-lg border border-white/10 shadow-xl">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Login</h1>
          <p className="text-gray-400 mt-2">Inserisci i dati del tuo server Navidrome</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="p-3 bg-red-900/30 border border-red-500 text-red-200 rounded text-sm text-center">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Server URL</label>
            <input
              type="url"
              className="w-full p-3 bg-[#1e1e1e] border border-white/5 focus:border-green-500 rounded outline-none transition-all"
              value={serverUrl}
              onChange={(e) => setServerUrl(e.target.value)}
              placeholder="http://192.168.1.x:4533"
              required
            />
          </div>

          <div>
            <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Username</label>
            <input
              type="text"
              className="w-full p-3 bg-[#1e1e1e] border border-white/5 focus:border-green-500 rounded outline-none transition-all"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Il tuo username"
              required
            />
          </div>

          <div>
            <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Password</label>
            <input
              type="password"
              className="w-full p-3 bg-[#1e1e1e] border border-white/5 focus:border-green-500 rounded outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="La tua password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-4 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors disabled:opacity-50 uppercase text-sm tracking-widest"
          >
            {loading ? "Connessione in corso..." : "Accedi"}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em]">
            Subsonic API Connection
          </p>
        </div>
      </div>
    </div>
  );
}

export default Connect;