import { Plus } from "lucide-react";
import React from "react";

const Faqcomp = ({ text }) => {
  return (
    <div className="rounded-xl w-[600px] h-[80px] p-4 flex justify-between items-center bg-[#f6f7e9]">
      <h1 className="text-xl tracking-tighter  text-[#1d332c]">{text}</h1>
      <div className="bg-[#fefff2] rounded-full w-[50px] h-[50px] flex items-center justify-center">
        <Plus  />
      </div>
    </div>
  );
};

export default Faqcomp;
