import { useState, useEffect } from "react";
import { useAuth } from "../store/context/Auth-context";

export const Prova = () => {
  const { authData } = useAuth();
  
  const id="7EEOM00sz2DhtwAactdxPP";
  useEffect(() => {

    const fetchRadio = async () => {
      if (!authData) { return; }

      try {
        const radioUrl = `${authData.baseUrl}/rest/star?${authData.authParams}&albumId=${id}`;
        // prende id dell'album setStar = true

        /**
         * 
         * const starUrl = `${authData.baseUrl}/rest/star.view?${authData.authParams}&albumId=${id}`;
         */

        const response = await fetch(radioUrl);
        const json = await response.json();

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
