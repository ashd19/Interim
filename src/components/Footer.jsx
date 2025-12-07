import { useState } from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Twitch,
  Youtube,
  Linkedin,
} from "lucide-react";
const Footer = () => {
  const [current, setCurrent] = useState("white")
  return (
    <div className="">
      <div className="bg-[#1e3730] text-white min-h-screen  w-full py-3  flex flex-col ">
        <div className="px-10 ">
          <div className="flex items-center   gap-60">
            <div className="flex flex-col">
              {/* icon grid  */}
              <div className="uppercase grid grid-rows-2 grid-cols-3   gap-x-4 mt-10 ">
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
                    onMouseEnter={() => setCurrent("#f2ac83")}
                    onMouseLeave={() => setCurrent("white")}
                    className="bg-[#2b413b]  text-white flex flex-col h-[130px] w-[190px] hover:h-[110px] hover:w-[170px] duration-2000 transition ease in items-center justify-center mb-3  border-2 border-none rounded-xl gap-3 "
                  >
                    <div>
                      <Icon color={current} />
                    </div>
                    <h1 className="">{name}</h1>
                  </div>
                ))}
              </div>
              <h1 className="mt-3">Subscribe to the newsletter</h1>
              <input
                type="text"
                placeholder="jane@framer.com"
                className="focus:border  focus:border-blue-600 bg-[#2b413b] p-3 rounded-lg mt-2"
              />
              <button className="cursor-pointer hover:text-white hover:bg-orange-400/80 submitButton bg-[#f2ac83] text-center text-[#1e3730] h-full w-[610px] font-medium mt-3 rounded-lg py-2">
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
          <h1 className="relative text-[#f2ac83] mr-8 text-[24vw] font-extrabold tracking-tighter font-sans">
            interim
            <div
              className="h-0.5 w-[1200px] ml-25 bg-neutral-500/90
           bottom-0   -translate-y-20 "
            />
          </h1>
          <div className="flex gap-90 px-20 absolute bottom-0 -translate-y-11  ">
            <div className="flex gap-5 ml-15 ">
              <h1>Privacy Policy</h1>
              <h1>Terms</h1>
            </div>
            <div className="flex gap-5 ml-40">
              <h1>©Template by RealMehdi</h1>
              <h1 className="ml-4">Built in Framer</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
