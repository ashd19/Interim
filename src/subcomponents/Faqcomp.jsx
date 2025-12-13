import { Plus } from "lucide-react";
import React from "react";
//  changing the bg whilehover with framer ?
const Faqcomp = ({ text , show }) => {  
  let deg;
  if(show){
    const deg = 45;
  }
  else{
    deg=0;
  }
  return (
    <div className="rounded-xl cursor-pointer w-[650px] h-20 p-4 flex justify-between items-center bg-[#f6f7e9] group transition ease-in duration-1000">
      <h1 className="text-xl  text-[#1d332c] inter-nav">{text}</h1>
      <div className="bg-[#fefff2] group-hover:bg-orange-400/50 rounded-full w-[50px] h-[50px] flex items-center justify-center">
        <Plus 
        // if show prop is true then rotate otherwise not ( just pass the prop ... )
        className={`rotate-${deg}`}
        />
      </div>
    </div>
  );
};

export default Faqcomp;


