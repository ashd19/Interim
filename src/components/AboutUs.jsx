import { CircleStop } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="">
      <div className="w-full h-screen flex gap-[100px] items-start mt-10 justify-center">
        <div className="flex gap-1 items-center justify-center ">
          <CircleStop height={15} width={15} />
          <h1 className="tracking-tight whitespace-nowrap font-semibold">
            About Us
          </h1>
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl tracking-wider font- inter-nav  text-[#1d332c]">
            <span className="ml-10"></span>Founded in 2010, our studio started
            as a small team <br /> of design enthusiasts with big dreams. At
            Interim, we're not just <br /> about creating beautiful spaces –
            we're about crafting stories <br /> and making dreams come true! Our
            passionate team of <br /> design enthusiasts loves turning ordinary
            rooms into <br /> extraordinary experiences, blending creativity
            with a touch of <br /> whimsy.{" "}
          </h1>
          <div className="flex">
            <h1 className="inter tracking-wide">KNOW MORE </h1>
          </div>
          {/*  */}
        </div>
        {/* <div className="flex gap-1 items-center ">
          <CircleStop height={15} width={15} />
          <h1 className="tracking-tight whitespace-nowrap font-semibold">
            BY THE NUMBERS
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
