import { useState, useEffect } from "react";
import { useAuth } from "../store/context/Auth-context";

export const Prova = () => {
  const { authData } = useAuth();
  
  const id="h0RzDUCjK6VBSjmd9hViNg";
  useEffect(() => {

    const fetchRadio = async () => {
      if (!authData) { return; }

      try {
        const radioUrl = `${authData.baseUrl}/rest/getPlaylist?${authData.authParams}&id=${id}&f=json`;
        const response = await fetch(radioUrl);
        const json = await response.json();
        console.log(json);

        const stationsArray = json["subsonic-response"]?.internetRadioStations?.internetRadioStation || [];
        console.log(stationsArray);
      } catch (err) {
        console.error("Errore nel recupero radio:", err);
      }
    };

    fetchRadio();
  }, [id, authData]);

  return (
    <>
      <div className="w-full h-full bg-gray-600"></div>
    </>
  );
};
