import React from "react";

const NavigationDesktop = () => {
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-black">
      <nav className="min-w-[10px] h-[70px] flex items-center justify-items  p-2">
        <div className="w-[20px] w-[50%] bg-black h-[70px]">
          <div className="p-2">
            <a href="/">
              <img src="neonByte.png" alt="" className="w-[3.5em] h-[3.5em] transition duration-500 ease-in-out 
              hover:shadow-[0_0_10px_#00ff00]" />
            </a>
          </div>
        </div>

        <div className=" w-[50%] h-[70px] relative text-[16px]">
          <div className="flex gap-8 items-center align-items justify-end w-full h-full absolute right-0 px-5 font-roboto font-medium text-neon-green lg:text-lg md:text-md">
            <div className="h-full content-center">
              <a href="" className="text-neon-green transition duration-500 ease-in-out 
             hover:text-green-400 hover:text-shadow-neon-green-blur">Home</a>
              <div className=""></div>
            </div>

            <div className="h-full content-center">
              <a href="" className="text-neon-green transition duration-500 ease-in-out 
             hover:text-green-400 hover:text-shadow-neon-green-blur">Skills</a>
            </div>

            <div className="h-full content-center">
              <a href="" className="text-neon-green transition duration-500 ease-in-out 
             hover:text-green-400 hover:text-shadow-neon-green-blur">Projects</a>
            </div>

            <div className="h-full content-center">
              <a href="" className="text-neon-green transition duration-500 ease-in-out 
             hover:text-green-400 hover:text-shadow-neon-green-blur">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavigationDesktop;