import React, { createContext, useContext, useState, useEffect } from "react";
import md5 from "md5";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authData, setAuthData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedAuth = localStorage.getItem("navidrome_auth");
    if (savedAuth) {
      try {
        const data = JSON.parse(savedAuth);
        setAuthData(data);
        setIsLoggedIn(true);
      } catch (e) {
        localStorage.removeItem("navidrome_auth");
      }
    }
    setLoading(false);
  }, []);

  const login = async (serverUrl, username, password) => {
    const baseUrl = serverUrl.replace(/\/$/, "");
    const salt = Math.random().toString(36).substring(2, 10);
    const token = md5(password + salt);
    
    const authParams = `u=${username}&t=${token}&s=${salt}&v=1.16.1&c=velvet&f=json`;
    
    try {
      const response = await fetch(`${baseUrl}/rest/ping.view?${authParams}`);
      const data = await response.json();

      if (data["subsonic-response"]?.status === "ok") {
        const sessionData = { baseUrl, username, authParams };
        localStorage.setItem("navidrome_auth", JSON.stringify(sessionData));
        setAuthData(sessionData);
        setIsLoggedIn(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Errore login:", error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("navidrome_auth");
    setAuthData(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, authData, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};