import { ArrowRight } from "lucide-react";

const Buttons = ({ title, onClick, redirectUrl }) => {
  const content = (
    <div className="flex gap-1 items-center group w-fit group-hover:gap-0" onClick={onClick}>
      <div className="bg-[#15372b] text-white text-center font-semibold rounded-2xl py-3 w-[150px] inter-nav group-hover:-mr-0.5 transition-all duration-300 ease-in group-hover:rounded-br-none">
        {title}
      </div>
      <div className="p-2 w-[50px] h-[50px] bg-[#f3ad84] rounded-xl flex items-center mb-px justify-center group-hover:-ml-0.5 transition-all duration-300 ease-in group-hover:rounded-bl-none">
        <ArrowRight color="#4b5a54" />
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
