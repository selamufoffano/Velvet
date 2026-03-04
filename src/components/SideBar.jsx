import ServerList from "./Serverlist";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useState } from "react";

const SideBar = () => {

  const [SectionLib, setSectionLib] = useState(false);
  const [SectionMylist, setSectionMylist] = useState(false);
  const [SectionShared, setSectionShared] = useState(false);

  const mainLinks = [
    { name: "Home", icon: "/img/home.svg", path: "/" },
    { name: "Album", icon: "/img/album.svg", path: "/AlbumPage" },
    { name: "Preferiti", icon: "/img/favorite.svg", path: "/ArtistPage" },
    { name: "Tracce", icon: "/img/song.svg", path: "/AdminPage" },
    { name: "Artist", icon: "/img/artist.svg", path: "/AdminPage" },
    { name: "Generi", icon: "/img/generi.svg", path: "/AdminPage" },
    { name: "Radio", icon: "/img/radio.svg", path: "/AdminPage" },
    { name: "Folder", icon: "/img/folder.svg", path: "/AdminPage" },
  ];

  const playlistLinks = [
    { name: "Playlist One", icon: "/img/home.svg", path: "/404" },
    { name: "Rap", icon: "/img/favorite.svg", path: "/404" },
  ];

  const playlistShareLinks = [
    { name: "Hip-Hop", icon: "/img/home.svg", path: "/" },
    { name: "Rock", icon: "/img/favorite.svg", path: "/404" },
    { name: "Real", icon: "/img/album.svg", path: "/404" },
    { name: "Tracce", icon: "/img/song.svg", path: "/404" },
  ];


  const NavSection = ({ title, children, isCollapsed, onToggle }) => {
    return (
      <div className="flex flex-col mb-4 border border-white/5 rounded-md">
        
        <div
          onClick={onToggle}
          className="w-full flex justify-between items-center p-2 hover:bg-[#161616] transition-all rounded-md cursor-pointer"
        >
          <span className="text-white font-bold uppercase text-sm tracking-wider">
            {title}
          </span>

          <img
            src="/img/arrow_down.svg"
            alt="Toggle"
            className={`w-4 h-4 transition-transform duration-300 ${
              isCollapsed ? "-rotate-90" : ""
            }`}
          />
        </div>

        <div
          className={`flex flex-col gap-1 p-1 transition-all duration-300 ${
            isCollapsed ? "hidden" : ""
          }`}
        >
          {children}
        </div>

      </div>
    );
  };


  const NavButton = ({ icon, label, isActive = false, to = "/" }) => (
    <Link
      to={to}
      className={`text-white flex items-center gap-3 w-full p-1.5 rounded-md no-underline
      ${isActive ? "bg-[#333333]" : "hover:bg-[#181818]"}
      hover:text-red-500 transition-colors`}
    >
      <img src={icon} alt="" className="w-5 h-5" />
      <span className="text-xs">{label}</span>
    </Link>
  );


  return (
    <div className="h-full bg-[#222222] w-full flex flex-col px-1.5 pb-1">
      
      <Search />

      <div className="h-full flex flex-col gap-1 overflow-y-auto overflow-x-hidden scrollbar-hide">

        <NavSection
          title="LA TUA LIBRERIA"
          isCollapsed={SectionLib}
          onToggle={() => setSectionLib(prev => !prev)}
        >
          {mainLinks.map((link) => (
            <NavButton
              key={link.name}
              icon={link.icon}
              label={link.name}
              to={link.path}
            />
          ))}
        </NavSection>

        <NavSection
          title="Playlist"
          isCollapsed={SectionMylist}
          onToggle={() => setSectionMylist(prev => !prev)}
        >
          {playlistLinks.map((link) => (
            <NavButton
              key={link.name}
              icon={link.icon}
              label={link.name}
              to={link.path}
            />
          ))}
        </NavSection>

        <NavSection
          title="Playlist share"
          isCollapsed={SectionShared}
          onToggle={() => setSectionShared(prev => !prev)}
        >
          {playlistShareLinks.map((link) => (
            <NavButton
              key={link.name}
              icon={link.icon}
              label={link.name}
              to={link.path}
            />
          ))}
        </NavSection>

      </div>

      <ServerList />

    </div>
  );
};

export default SideBar;