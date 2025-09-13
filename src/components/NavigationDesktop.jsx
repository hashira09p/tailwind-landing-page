import React from "react";

const NavigationDesktop = () => {
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg">
      <nav className="min-w-full h-[70px] flex items-center justify-items  p-2">
        <div className="w-[20px] w-[50%] bg-black h-[70px]">
          <div className=""></div>
        </div>

        <div className="bg-neon-green w-[50%] h-[70px] relative">
          <div className="flex gap-8 items-center align-items justify-end w-full h-full absolute right-0 px-5 font-roboto font medium text-white text-lg">
            <div className="">
              <a href="" className="hover:text-neon-green">Home</a>
            </div>
            <div className="">
              <a href="">Skills</a>
            </div>
            <div className="">
              <a href="">Projects</a>
            </div>
            <div className="">
              <a href="">Contact</a>
            </div>
          </div>
        </div>

      </nav>
    </div>
  )
}

export default NavigationDesktop;