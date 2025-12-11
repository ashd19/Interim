import { ArrowRight } from "lucide-react";

const Buttons = ({title }) => {
  return (
    <div className="flex gap-1 items-center ">
      <div className="bg-[#15372b] text-white text-center font-semibold rounded-2xl  py-3  w-[150px] inter-nav">
        {title}
      </div>
      <div className="p-2 w-[50px] h-[50px] bg-[#f3ad84] rounded-xl flex items-center justify-center">
        <ArrowRight color="#4b5a54" />
      </div>
    </div>
  );
};

export default Buttons;
