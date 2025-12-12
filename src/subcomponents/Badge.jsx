import { Star } from "lucide-react";
import React from "react";

const Badge = () => {
  return (
    <div className="w-[340px] h-[80px] rounded-2xl bg-[#2b413b] p-2 flex gap-4 ">
      <div className="w-[65px]  h-full p-5 rounded-2xl bg-[#344a44]">
        <Star fill="#f2ac83" color="#f2ac83" />
      </div>
      <div className="flex-col gap-3">
        <h1 className="text-neutral-400">2023</h1>
 <h1 className="text-white whitespace-nowrap">Innovative Design Studio</h1>
      </div>
    </div>
  );
};

export default Badge;
