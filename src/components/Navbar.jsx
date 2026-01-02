import { Menu, X } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="fixed z-1111 h-fit  w-full  py-3 px-10 bg-[#fefff2]">
      <div className="">
        <div className="flex justify-between items-center">
          <div>
            <a href="#">
              <img
                src="https://framerusercontent.com/images/1tnrEkQ7iu9Nrkj27WcReIcvyM.png?scale-down-to=512"
                alt=""
                className="md:w-[130px] md:h-[45px] w-[120px] h-[40px]"
              />
            </a>
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
              <div
              className="relative"
                key={index}
              >
                <a
                  href={`/${item}`}
                  className={`cursor-pointer tracking-tight inter text-[#1d332c] inter-nav transition-300 delay-200 ease-in  ${index == 0
                    ? "hover:text-[#1d332c] bg-[#eae9dd] mb-0.5 h-[30px] w-[70px] flex items-center justify-center    rounded-lg "
                    : "hover:text-[#f2ac83]"
                    } ${index == 2 ? "peer " : " "}`}
                >
                  {item}
                </a>
                <ServicesHoverComponent/>
              </div>
            ))}
          </div>
          {/* MOBILE VIEW MENU */}
          <div
            onClick={() => setShowMenu(!showMenu)}
            className={`md:hidden p-2 rounded-xl transition-all duration-300 ease-in-out ${showMenu ? "bg-[#1d332c]" : "border border-black/40"
              }`}
          >
            {showMenu ? <X color="#f2ac83" /> : <Menu color="#1d332c" />}
          </div>
          
          <div
            className={`absolute top-20 left-0 w-full bg-[#fefff2] md:hidden transition-all duration-500 ease-in-out ${showMenu
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-full pointer-events-none"
              }`}
          >

            <div className="flex flex-col items-center gap-4 py-4">
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
                  href={`/${item}`}
                    className={`cursor-pointer  tracking-tight inter text-[#1d332c] inter-nav transition-all duration-500 ease-in ${index === 0
                      ? "hover:text-[#1d332c] bg-[#eae9dd] px-12 py-2 rounded-lg"
                      : "hover:text-[#f2ac83]"
                      } `}
                  >
                    {item}
                  </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const ServicesHoverComponent = () => {

  return (

    <div className="bg-[#f6f7e9] rounded-xl absolute top-9 pointer-events-none w-[400px] h-[300px] opacity-0 peer-hover:opacity-100 transition-all duration-500 ease-in-out">
      <div className="flex items-center justify-center h-full">
        Service card
      </div>
    </div>

  )
}

export default Navbar;