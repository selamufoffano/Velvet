import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Cover = ({ album, authData }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef();

  const handleNavigate = () => {
    navigate(`/album/${album.id}`);
  };

  const handleAction = (e, action) => {
    e.stopPropagation();
    console.log(`Eseguo azione: ${action} per album ${album.id}`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" },
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const coverUrl = `${authData.baseUrl}/rest/getCoverArt?${authData.authParams}&id=${album.id}&size=300`;

  const displayName = album.name || album.title || "Album Sconosciuto";

  return (
    <div
      ref={cardRef}
      onClick={handleNavigate}
      className="group cursor-pointer w-full transition-transform duration-200 bg-[#161616] hover:bg-[#202020] rounded-lg p-4"
    >
      <div className="aspect-square relative overflow-hidden rounded-lg bg-[#1c1c1c]">
        {isVisible ? (
          <img
            src={coverUrl}
            alt={displayName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-800 italic">
            ...
          </div>
        )}

        <div className="absolute inset-0 flex items-end">
          <div className="hidden group-hover:flex w-full h-[45px] backdrop-blur-md bg-white/5 border-t border-white/10 items-center justify-between px-4">
            <button
              onClick={(e) => handleAction(e, "play")}
              className="flex items-center justify-center w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full text-white active:scale-90"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 ml-0.5"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <button
              onClick={(e) => handleAction(e, "menu")}
              className="flex items-center justify-center w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full text-white active:scale-90"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <h3 className="text-white text-sm font-semibold truncate leading-tight">
          {displayName}
        </h3>
        <p className="text-gray-500 text-xs truncate mt-1">
          {album.artist || "Artista Sconosciuto"}
        </p>
      </div>
    </div>
  );
};

export default Cover;
