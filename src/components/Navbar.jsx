import { Menu } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="fixed z-1111 h-fit  w-full  py-3 px-10 bg-[#ffff]">
      <div className="">
        <div className="flex justify-between items-center">
          <div>
            <img
              src="https://framerusercontent.com/images/1tnrEkQ7iu9Nrkj27WcReIcvyM.png?scale-down-to=512"
              alt=""

              className="md:w-[130px] md:h-[45px] w-[120px] h-[40px]"
            />
          </div>
          <div className="hidden md:flex bg-[#f6f7e9] rounded-xl py-2 px-3 gap-6 items-center justify-center">
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
                className={`cursor-pointer tracking-tight inter text-[#1d332c] inter-nav transition-300 delay-200 ease-in  ${index == 0
                  ? "hover:text-[#1d332c] bg-[#eae9dd] mb-0.5 h-[30px] w-[70px] flex items-center justify-center    rounded-lg "
                  : "hover:text-[#f2ac83]"
                  }`}
              >
                {item}
              </a>
            ))}
          </div>
          <div onClick={() => setShowMenu(!showMenu)} className="md:hidden  p-2 border border-black/40 rounded-xl">
            <Menu color="#1d332c" />
          </div>
          {showMenu && (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;  
