import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Buttons = ({ title, onClick, redirectUrl, colorSwap = false }) => {
  // const [colorSwap, setColorSwap] = useState(false);
  const content = (
    <div className="flex gap-1 items-center group w-fit group-hover:gap-0" onClick={onClick}>
      <div className={`${colorSwap ? "bg-[#f3ad84] text-[#15372b]" : "bg-[#15372b] text-white"} text-center font-semibold rounded-2xl py-3 w-[150px] inter-nav group-hover:-mr-0.5 transition-all duration-300 ease-in group-hover:rounded-br-none`}>
        {title}
      </div>
      <div className={`${colorSwap ? "bg-[#15372b]" : "bg-[#f3ad84]"} p-2 w-[50px] h-[50px] rounded-xl flex items-center mb-0.5 justify-center group-hover:-ml-0.5 transition-all duration-300 ease-in group-hover:rounded-bl-none`}>
        <ArrowRight color={colorSwap ? "#f3ad84" : "#4b5a54"} />
      </div>
    </div>
  );

  return redirectUrl ? (
    <a href={redirectUrl}>{content}</a>
  ) : (
    <div className="cursor-pointer">{content}</div>
  );
};

export default Buttons;
