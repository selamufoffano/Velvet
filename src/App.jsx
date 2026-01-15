import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import AudioPlayer from "./components/AudioPlayer";
import Connect from "./db/Connect";
import "./App.css";
import SideBarMenu from "./components/SideBarMenu";

function App() {
  return (
    <div className="h-screen w-full flex flex-col bg-[#000000] overflow-hidden">
      <Nav/>

      <div className="flex flex-grow overflow-hidden border-1 border-red-500">
        <aside className="w-1/5 flex flex-col overflow-hidden bg-[#121212] m-1 p-0.5 rounded-md">
          <div className="min-h-min max-h-fit flex-grow overflow-hidden m-1 mb-0 border-1 bg-[#121212] rounded-t-md p-0.5">
            <SideBarMenu></SideBarMenu>
          </div>

          <div className="flex-grow overflow-hidden m-1 mt-0 border-1">
            <SideBar />
          </div>
        </aside>

        <main className="w-4/5 overflow-y-auto overflow-x-hidden">
          <Connect />
        </main>
      </div>
      <AudioPlayer />
    </div>
  );
}

export default App;
