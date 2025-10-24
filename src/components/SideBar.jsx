// SideBar.jsx
import React from "react";

const SideBar = () => {
  return (
    <div className="w-1/5 bg-[rgba(26,35,49,1)] pt-18 flex-grow flex flex-col"> 
      
      <div className="w-[95%] h-[150px] bg-yellow-400 m-[2.5%] border-2 rounded-[10px]"></div>      
      <div className="w-[95%] h-[300px] bg-yellow-400 m-[2.5%] border-2 rounded-[10px]"></div>
      <div className="w-[95%] flex-grow bg-yellow-400 m-[2.5%] border-2 rounded-[10px]"></div>
      
    </div>
  );
};

export default SideBar;