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
    <div className=" ">
      <div className="bg-[#1e3730] rounded-xl text-white min-h-screen  w-full py-3  flex flex-col ">
        <div className="px-10 ">
          <div className="flex items-center   gap-60">
            <div className="flex flex-col">
              {/* icon grid  */}
              <div className="uppercase grid grid-rows-2 grid-cols-3      gap-x-4 mt-10 ">
                {[
                  { name: "Instagram", component: Instagram },
                  { name: "Facebook", component: Facebook },
                  { name: "Twitch", component: Twitch },
                  { name: "Youtube", component: Youtube },
                  { name: "Linkedin", component: Linkedin },
                  { name: "Twitter", component: Twitter },
                ].map(({ name, component: Icon }, index) => (
                  <motion.div
                    initial={{
                      height: "130px",
                      width: "190px",
                    }}
                    animate={{
                      height: hoveredIndex === index ? "110px" : "130px",
                      width: hoveredIndex === index ? "170px" : "190px",
                    }}
                    transition={{ duration: 1 }}
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="bg-[#2b413b]   text-white flex flex-col h-[130px] w-[190px] hover:h-[110px] hover:w-[170px] duration-2000 transition ease in items-center justify-center mb-3  border-2 border-transparent hover:border-[#f2ac83] rounded-xl gap-3 "
                  >
                    <div className="">
                      <Icon
                        className={
                          hoveredIndex === index
                            ? "text-[#f2ac83]  "
                            : "text-white"
                        }
                      />
                    </div>
                    <h1 className="">{name}</h1>
                  </motion.div>
                ))}
              </div>
              <h1 className="mt-3">Subscribe to the newsletter</h1>
              <input
                type="text"
                placeholder="jane@framer.com"
                className="focus:border  focus:border-blue-600 bg-[#2b413b] p-3 rounded-lg mt-2"
              />
              <button className="cursor-pointer hover:text-white hover:bg-orange-400/80  bg-[#f2ac83] text-center text-[#1e3730] h-full w-[610px] font-medium mt-3 rounded-lg py-2">
                Submit
              </button>
            </div>
            {/* links  */}
            <div className=" flex gap-15 mt-3">
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
        <div className="relative">
          <h1 className="relative text-[#f2ac83] mr-8 text-[30vw] ml-5  tracking-tighter inter">
            interim
            <div
              className="h-0.5 w-[1200px] ml-25 bg-neutral-500/90
           bottom-0   -translate-y-20 "
            />
          </h1>
          <div className="flex gap-90 px-20 absolute bottom-0 -translate-y-11  ">
            <div className="flex gap-5 ml-15 ">
              <a className="hover:underline w-fit cursor-pointer  text-white  transition-300 delay-200 ease-in hover:text-[#f2ac83]">
                Privacy Policy
              </a>
              <a className="hover:underline w-fit cursor-pointer  text-white  transition-300 delay-200 ease-in hover:text-[#f2ac83]">
                Terms
              </a>
            </div>
            <div className="flex gap-5 ml-40">
              <a className="hover:underline w-fit cursor-pointer  text-white  transition-300 delay-200 ease-in hover:text-[#f2ac83]">
                ©Template by RealMehdi
              </a>
              <a className="ml-4 hover:underline w-fit cursor-pointer  text-white  transition-300 delay-200 ease-in hover:text-[#f2ac83]">
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
