import { useState } from "react";
import { motion } from "motion/react";
import {
  Instagram,
  Facebook,
  Twitter,
  Twitch,
  Youtube,
  Linkedin,
} from "lucide-react";
const Footer = () => {
  motion;
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className=" md:flex flex flex-col  ">
      <div className="bg-[#1e3730] rounded-xl text-white md:min-h-screen h-full  w-full ssmd:py-3  flex flex-col ">
        <div className="md:px-10 px-3 relative z-10 ">
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center md:gap-40">

            <div className="flex flex-col md:mt-0 mt-7">
              {/* icon grid  */}

              <div className="uppercase grid grid-rows-2 grid-cols-3     md:gap-x-4 gap-x-4 gap-y-2 md:mt-10 ">
                {[
                  { name: "Instagram", component: Instagram },
                  { name: "Facebook", component: Facebook },
                  { name: "Twitch", component: Twitch },
                  { name: "Youtube", component: Youtube },
                  { name: "Linkedin", component: Linkedin },
                  { name: "Twitter", component: Twitter },
                ].map(({ name, component: Icon }, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="bg-[#2b413b]   text-white flex flex-col md:h-[130px] md:w-[190px] h-[100px] w-[100px]  hover:scale-90  duration-1000 transition ease-in items-center justify-center     border-2 border-transparent hover:border-[#f2ac83] rounded-xl gap-3 "
                  >
                    <div className="">
                      <Icon
                        className={
                          hoveredIndex === index
                            ? "text-[#f2ac83]"
                            : "text-white"
                        }
                      />
                    </div>
                    <h1 className="">{name}</h1>
                  </div>
                ))}
              </div>

              <h1 className="mt-3">Subscribe to the newsletter</h1>
              <input
                type="text"
                placeholder="jane@framer.com"
                className="focus:border  focus:border-blue-600 bg-[#2b413b] p-3 rounded-lg mt-2 md:w-full  w-[320px]"
              />
              <button className="cursor-pointer hover:text-white hover:bg-orange-400/80  bg-[#f2ac83] text-center text-[#1e3730] h-full md:w-full  w-[320px] font-medium mt-3 rounded-lg py-2">
                Submit
              </button>
            </div>
            {/* links  */}
            <div className="flex gap-10 md:gap-15 mt-10  text-left">
              <div className="flex flex-col gap-2">
                <h1 className="text-[#f2ac83]">Menu</h1>
                <a href="#home" className="text-[#f2ac83] hover:underline">
                  Home
                </a>
                {[
                  "About",
                  "Projects",
                  "Gallery",
                  "Videos",
                  "Blog",
                  "Review",
                  "Contact",
                ].map((item, index) => (
                  <a
                    key={index}
                    href={`#${item}`}
                    className="hover:underline w-fit  text-white  transition-300 delay-200 ease-in hover:text-[#f2ac83]"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[#f2ac83]">Services</h1>
                {[
                  "Residential Interior Design",
                  "Commercial Interior Design",
                  "Design Consultation",
                  "Space Planning",
                  "Lighting Design",
                  "Furniture Design",
                  "Art and Accessory Procurement",
                  "Color Consultation",
                  "Outdoor and Landscape Design",
                  "Renovation and Remodeling",
                  "Project Management",
                  "Styling and Staging",
                ].map((item, index) => (
                  <a
                    key={index}
                    href={`#${item}`}
                    className="hover:underline w-fit  text-white  transition-300 delay-200 ease-in hover:text-[#f2ac83]"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:-mt-[75px] ">
          <h1 className="relative text-[#f2ac83] mr-8 md:text-[27rem]  text-[6rem] ml-5 md:mb-0   tracking-tighter inter">
            interim
            <div
              className="h-[0.009rem] md:w-[1200px] w-[290px] md:ml-25  bg-neutral-500
           bottom-0   md:-translate-y-20  -translate-y-6"
            />
          </h1>

          {/* Desktop view  */}
          <div className="md:flex hidden md:gap-90 md:px-20  absolute bottom-0 md:-translate-y-11 text-[0.6rem] md:text-[1.1rem]   md:whitespace-nowrap">
            <div className="flex md:gap-5 gap-2      md:mt-0 md:ml-15 md:flex-row flex-col  ">
              <a className="hover:underline w-fit md:ml-0  md:mt-0  ml-5 mt-2 cursor-pointer    text-white  transition-300 delay-200 ease-in hover:text-[#f2ac83]">
                Privacy Policy
              </a>
              <a className="hover:underline w-fit md:ml-0 ml-5   cursor-pointer  text-white  transition-300 delay-200 ease-in hover:text-[#f2ac83]">
                Terms
              </a>
            </div>
            <div className="flex gap-5 md:mt-0   md:ml-40 md:flex-row flex-col ">
              <a className="hover:underline w-fit cursor-pointer md:ml-0  md:mt-0  ml-5   text-white  transition-300 delay-200 ease-in hover:text-[#f2ac83]">
                ©Template by RealMehdi
              </a>
              <a className="ml-4  hover:underline w-fit cursor-pointer  text-white  transition-300 delay-200 ease-in hover:text-[#f2ac83]">
                Built in Framer
              </a>
            </div>
          </div>

          {/* Mobile view  */}
          <div className="md:hidden flex items-center justify-between -mt-3 px-4 mb-5 text-[0.7rem] ">
            <div className="flex items-start   flex-col gap-2 ">

              <a className=" text-white  ">
                Privacy Policy
              </a>

              <a className=" text-white  ">
                Terms
              </a>
            </div>

            <div className="flex items-start justify-center flex-col gap-2">

              <a className=" text-white  ">
                ©Template by RealMehdi
              </a>
              <a className=" text-white   ">
                Built in Framer
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
