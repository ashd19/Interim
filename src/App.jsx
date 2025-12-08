import Client from "./components/Client";
import Footer from "./components/Footer";
import Pacakages from "./components/Pacakages";
import Awards from "./components/Awards";
import { Mail } from "lucide-react";
const App = () => {
  return (
    <div className="relative">
      <div className="bg-white p-10 ">
        <Awards />
        <Pacakages />
        <Client />
        <Footer />
      </div>
      <div className="absolute bottom-0 right-0 flex flex-col justify-end items-center  gap-2 z-999">
        <div className="text-[#1d332c] w-[100px] h-[10px] flex gap-2">
          <Mail />
          <h1>Free Quote</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
