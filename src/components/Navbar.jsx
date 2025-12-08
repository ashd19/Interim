import { h1 } from "motion/react-client";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed z-1111 h-fit  w-full  py-3 px-10 bg-[#fefff2]">
      <div className="">
        <div className="flex justify-between items-center">
          <div>
            <img
              src="https://framerusercontent.com/images/1tnrEkQ7iu9Nrkj27WcReIcvyM.png?scale-down-to=512"
              alt=""
              height={100}
              width={100}
            />
          </div>
          <div className="flex bg-[#f6f7e9] rounded-xl py-2 px-3 gap-6 items-center justify-center">
            {[
              "Home",
              "About",
              "Services",
              "Projects",
              "Gallery",
              "Blog",
              "Reviews",
              "Contact",
            ].map((item, index) => (
              <a
                key={index}
                className={`cursor-pointer tracking-tight inter text-[#1d332c] inter-nav transition-300 delay-200 ease-in  ${
                  index == 0
                    ? "hover:text-[#1d332c] bg-[#eae9dd] mb-0.5 h-[30px] w-[70px] flex items-center justify-center    rounded-lg "
                    : "hover:text-[#f2ac83]"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
