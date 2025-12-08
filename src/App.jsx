import Client from "./components/Client";
import Footer from "./components/Footer";
import Pacakages from "./components/Pacakages";
import Awards from "./components/Awards";
import Faq from "./components/Faq";

import { Mail, Phone } from "lucide-react";
const App = () => {
  return (
    <div className="relative h-screen">
      <div className="bg-[#fefff2] p-10 ">
        <Awards />
        <Pacakages />
        <Client />
        <Faq />
        <Footer />
      </div>
      <div className="absolute bottom-0 right-0 flex flex-col justify-end items-center  fixed gap-2 z-999">
        <div className="bg-neutral-200 text-[#1d332c] ml-[60px] text-sm font-bold w-fit h-fit p-2  rounded-xl  mr-[10px]  flex gap-2">
          <Mail height={18} width={18} className="font-bold" color="#f2ac83" />
          <h1 className="whitespace-nowrap">Free Quote</h1>
        </div>
        <div className="bg-neutral-200 text-[#1d332c] font-bold w-fit p-2   rounded-xl h-[40px] mr-[10px]  flex gap-2">
          <Phone color="#f2ac83" />
          <h1 className="whitespace-nowrap">+1 555 123 4567</h1>
        </div>
        <div className="bg-white text-[#1d332c] w-fit p-2 mb-2 ring-2 ring-neutral-200   rounded-xl h-[40px] mr-[10px]  flex gap-2">
          <Phone color="#f2ac83" />
          <a className="whitespace-nowrap">Made in Framer</a>
        </div>
      </div>
    </div>
  );
};

export default App;
