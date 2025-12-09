import { Plus } from "lucide-react";

function Card({ number, heading, text }) {
  return (
    <div>
      <div className="py-5 px-5 bg-[#f6f7e9] w-[450px] h-[420px] flex flex-col gap-[100px] justify-between rounded-xl">
        <div className="flex">
          <div className="text-8xl font-medium text-[#1d332c] text-card">{number}</div>
          <Plus
            color="#f2ac83"
            className="mt-5 -ml-3"
            height={70}
            width={70}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="intercard text-3xl">{heading}</h1>
          <p className="inter-nav mt-2">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
