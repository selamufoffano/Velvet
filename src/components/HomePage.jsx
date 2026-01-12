import React from "react";
import Connect from "../db/Connect";
const HomePage = ({db_data}) => {
  return(
    <div className="w-full bg-[#121212]  flex-grow mt-16 p-6 overflow-y-scroll border-l-8 rounded-tl-[20px]">
      <div className="w-full h-auto mb-4 bg-[#ffffff]">
        <Connect></Connect>
        </div>
    </div>
    );
};

export default HomePage;