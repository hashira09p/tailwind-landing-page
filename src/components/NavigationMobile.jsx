import React from "react";
import NavigationDesktop from "./NavigationDesktop";
import { useState } from "react";

function toggleMenu() {
  return (
    <div className="w-full h-[300px] bg-black flex flex-col gap-2">
      <div className="flex-1 p-2 text-lg text-neon-green font-medium font-roboto inline-block content-center">
        <div className="w-fit h-auto m-auto">
          <a href="">Home</a>
        </div>
      </div>
      <div className="flex-1 p-2">
        <a href="">Skill</a>
      </div>
      <div className="flex-1 p-2 ">
        <a href="">Projects</a>
      </div>
      <div className="flex-1 p-2 ">
        <a href="">Contact</a>
      </div>
    </div>
  )
}

const NavigationMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-20 w-full backdrop-blur-lg">
      <nav className="w-full h-[70px] bg-black flex">
        <div className="w-[50%] h-full p-2">
          <img src="neonByte.png" alt="" className="w-[60px] h-full" />
        </div>
        <div className="w-[50%] h-full p-2 relative">
          <svg
            width="52px"
            height="52px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            id="menu-alt"
            className="icon glyph trasition-all duration-300 ease-in-out cursor-pointer hover:color-green-400 absolute right-[10px]"
            fill="#1FA164"
            stroke="#1FA164"
          >
            <path d="M21,19H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z" style={{ fill: "#1FA164" }} />
            <path d="M21,13H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z" style={{ fill: "#1FA164" }} />
            <path d="M21,7H3A1,1,0,0,1,3,5H21a1,1,0,0,1,0,2Z" style={{ fill: "#1FA164" }} />
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default toggleMenu;