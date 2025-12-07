import { CircleStop } from "lucide-react";
import Badge from "../subcomponents/Badge";

export default function Awards() {
  return (
    <div className="w-full h-screen  relative overflow-hidden flex flex-col  bg-[#1f3831] rounded-xl">
      <div className="flex absolute top-0 left-0 translate-x-110 translate-y-25  ">
        <div>
          <CircleStop
            height={12}
            width={12}
            color="#f2ac83"
            className="mt-0.5 mr-1"
          />
        </div>
        <h1 className="text-[#f2ac83] font-light text-sm">
          RECOGNITIONS WE GOT
        </h1>
      </div>
      <h1 className=" ml-85 mt-5    text-[14vw] tracking-tighter text-[#fcfdee] font-semibold">
        Awards
      </h1>

      <div className="flex flex-col gap-3">
        <div className="ml-[200px] flex gap-4">
          <Badge />
          <Badge />
          <Badge />
        </div>
        <div className="flex gap-4 ml-[340px]">
          <Badge />
          <Badge />
        </div>
        <div className="flex gap-4 ml-[500px]">
          <Badge />
        </div>
      </div>
    </div>
  );
}
