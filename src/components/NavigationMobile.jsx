import React from "react";
import NavigationDesktop from "./NavigationDesktop";
import { useState } from "react";

function toggleMenu() {

  return (
    <div className="w-full h-[300px] bg-black flex flex-col gap-2 text-neon-green text-lg font-medium font-roboto">

      <div className="flex-1 p-2 content-center">
        <div className="w-fit h-auto m-auto">
          <a href="" className="transition-all duration-300 ease-in-out hover:text-green-400 hover:text-shadow-[0_0_10px_#00ff00]">Home</a>
        </div>
      </div>

      <div className="flex-1 p-2  content-center">
        <div className="w-fit h-auto m-auto">
          <a href="" className="transition-all duration-300 ease-in-out hover:text-green-400 hover:text-shadow-[0_0_10px_#00ff00]">Skills</a>
        </div>
      </div>

      <div className="flex-1 p-2 content-center ">
        <div className="w-fit h-auto m-auto">
          <a href="" className="transition-all duration-300 ease-in-out hover:text-green-400 hover:text-shadow-[0_0_10px_#00ff00]">Projects</a>
        </div>

      </div>

      <div className="flex-1 p-2 ">
        <div className="w-fit h-auto m-auto">
          <a href="" className="transition-all duration-300 ease-in-out hover:text-green-400 hover:text-shadow-[0_0_10px_#00ff00]">Contact</a>
        </div>
      </div>
    </div>
  )
}

const NavigationMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-20 w-full backdrop-blur-lg">
      <div>

        <nav className="w-full h-[70px] bg-black flex">
          <div className="w-[50%] h-full p-2">
            <img src="neonByte.png" alt="" className="w-[60px] h-full transition-all duration-500 ease-in-out hover:shadow-[0_0_10px_#00ff00]" />
          </div>
          <div className="w-[50%] h-full p-2 relative">
            <button className="w-fit h-fit absolute right-[10px]" onClick={() => setIsOpen(true)}>
              <svg
                className="icon glyph trasition-all duration-300 ease-in-out cursor-pointer hover:shadow-[0_0_10px_#00ff00]"
                width="52px"
                height="52px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                id="menu-alt"
                fill="#1FA164"
                stroke="#1FA164"
              >
                <path d="M21,19H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z" style={{ fill: "#1FA164" }} />
                <path d="M21,13H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z" style={{ fill: "#1FA164" }} />
                <path d="M21,7H3A1,1,0,0,1,3,5H21a1,1,0,0,1,0,2Z" style={{ fill: "#1FA164" }} />
              </svg>
            </button>
          </div>
        </nav>
        {isOpen && toggleMenu()}
      </div>

    </div>
  );
};

export default NavigationMobile;