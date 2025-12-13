import { CircleStop } from "lucide-react";
import Badge from "../subcomponents/Badge";

export default function Awards() {
  return (
    <div className="w-full min-h-screen py-3 px-2 pr-1 pl-1 relative overflow-hidden flex flex-col  bg-[#1f3831] rounded-xl">
      <div className="flex  absolute top-0 left-0 md:translate-x-115 md:translate-y-35  translate-x-25 translate-y-12 items-center justify-center">
        <div>
          <CircleStop
            height={12}
            width={12}
            color="#f2ac83"
            className="mt-0.5 mr-1"
          />
        </div>
        <h1 className="text-[#f2ac83] md:font-medium font-bold text-[0.8rem]">
          RECOGNITIONS WE GOT
        </h1>
      </div>
      <h1 className="md:ml-85 mt-5  md:block  flex justify-center  items-center md:text-[14vw] text-[5rem] tracking-tighter text-[#fcfdee] font-semibold">
        Awards
      </h1>

      <div className="md:flex hidden flex-col   gap-3">
        <div className="md:ml-[200px] flex md:gap-4">
          <Badge />
          <Badge />
          <Badge />
        </div>
        <div className="flex  md:gap-4 md:ml-[340px]">
          <Badge />
          <Badge />
        </div>
        <div className="flex  md:gap-4 md:ml-[500px]">
          <Badge />
        </div>
      </div>

      <div className="md:hidden  px-2 py-3   grid grid-cols-1 grid-rows-6  gap-3">
        <Badge />
        <Badge />
        <Badge />
        <Badge />
        <Badge />
        <Badge />
      </div>
    </div>
  );
}
