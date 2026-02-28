import ServerList from "./Serverlist";
import { Link } from "react-router-dom";
import Search from "./Search";

const SideBar = () => {
  const mainLinks = [
    { name: "Home", icon: "/img/home.svg", path: "/" },
    { name: "Preferiti", icon: "/img/favorite.svg", path: "/AdminPage" },
    { name: "Album", icon: "/img/album.svg", path: "/AdminPage" },
    { name: "Tracce", icon: "/img/song.svg", path: "/AdminPage" },
    { name: "Artist", icon: "/img/artist.svg", path: "/AdminPage" },
    { name: "Generi", icon: "/img/generi.svg", path: "/AdminPage" },
    { name: "Folder", icon: "/img/folder.svg", path: "/AdminPage" },
    { name: "Radio", icon: "/img/radio.svg", path: "/AdminPage" },
  ];

  const playlistLinks = [
    { name: "Home", icon: "/img/home.svg", path: "/" },
    { name: "Preferiti", icon: "/img/favorite.svg", path: "/favorites" },
  ];

  const playlistShareLinks = [
    { name: "Home", icon: "/img/home.svg", path: "/" },
    { name: "Preferiti", icon: "/img/favorite.svg", path: "/favorites" },
    { name: "Album", icon: "/img/album.svg", path: "/albums" },
    { name: "Tracce", icon: "/img/song.svg", path: "/songs" },
  ];

  const NavSection = ({ title, children }) => (
    <div className="flex flex-col mb-4 border border-white/5 rounded-md">
      <div className="w-full flex justify-between items-center p-1 mb-1 hover:bg-[#161616] transition-all border-white/5 rounded-md">
        <span className="text-white font-bold px-1 uppercase text-sm tracking-wider">{title}</span>
        <button className="rounded-md hover:bg-[#333333] transition-colors">
          <img src="/img/arrow_down.svg" alt="Espandi" />
        </button>
      </div>
      <div className="flex flex-col gap-1 p-1">{children}</div>
    </div>
  );

  const NavSectionMod = ({ title, children }) => (
    <div className="flex flex-col mb-4 border border-white/5 rounded-md">
      <div className="w-full flex justify-between items-center p-1 mb-1 hover:bg-[#161616] transition-all border-white/5 rounded-md">
        <span className="text-white font-bold px-1 uppercase text-sm tracking-wider">{title}</span>
        <div className="flex gap-1">
          <button className="rounded-md hover:bg-[#333333] transition-colors flex"><img src="/img/add.svg" alt="" /></button>
          <button className="rounded-md hover:bg-[#333333] transition-colors flex"><img src="/img/list.svg" alt="" /></button>
          <button className="rounded-md hover:bg-[#333333] transition-colors flex"><img src="/img/arrow_down.svg" alt="" /></button>
        </div>
      </div>
      <div className="flex flex-col gap-1 p-1">{children}</div>
    </div>
  );

  const NavButton = ({ icon, label, isActive = false, to = "/" }) => (
    <Link
      to={to}
      className={`text-white flex items-center gap-3 w-full p-1.5 rounded-md no-underline
      ${isActive ? "bg-[#333333]" : "hover:bg-[#181818]"}
      hover:text-red-500 transition-colors
    `}
    >
      <img src={icon} alt="" className="w-5 h-5" />
      <span className="text-xs">{label}</span>
    </Link>
  );

  return (
    <div className="h-full bg-[#222222] w-full flex flex-col px-1.5 pb-1">
      <Search />

      <div className="h-full flex flex-col gap-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
        <NavSection title="LA TUA LIBRERIA">
          {mainLinks.map((link) => (
            <NavButton 
              key={link.name} 
              icon={link.icon} 
              label={link.name} 
              to={link.path}
            />
          ))}
        </NavSection>

        <NavSectionMod title="Playlist">
          {playlistLinks.map((link) => (
            <NavButton key={link.name} icon={link.icon} label={link.name} to={link.path} />
          ))}
        </NavSectionMod>

        <NavSection title="Playlist share">
          {playlistShareLinks.map((link) => (
            <NavButton key={link.name} icon={link.icon} label={link.name} to={link.path} />
          ))}
        </NavSection>
      </div>

      <ServerList />
    </div>
  );
};

export default SideBar;