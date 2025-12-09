import { CircleStop } from "lucide-react";
import Card from "../subcomponents/Card";

const AboutUs = () => {
  return (
    <div className="flex flex-col   ">
      <div className="w-full  flex gap-[155px] items-start mt-10 ">
        <div className="flex gap-1 items-center justify-start ">
          <CircleStop height={15} width={15} />
          <h1 className="tracking-tight whitespace-nowrap font-semibold ">
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
        </div>
      </div>

      <div className="flex gap-1 items-center mt-15 ">
        <CircleStop height={15} width={15} className="mb-0.5" />
        <h1 className=" whitespace-nowrap font-semibold text-sm ">
          BY THE NUMBERS
        </h1>
      </div>

      <div className="flex gap-3 mt-5 mb-5">
        <Card
          number={200}
          heading={"Project Completed"}
          text={
            "Over 200 successful projects completed, showcasing our extensive experience and portfolio."
          }
        />
        <Card
          number={15}
          heading={"Years of Expertise"}
          text={
            "With 15 years in the industry, we bring a wealth of knowledge and skill to every project."
          }
        />
        <Card
          number={150}
          heading={"Happy Clients"}
          text={
            "Proudly serving more than 150 satisfied clients who have trusted us with their interior design needs."
          }
        />
      </div>
    </div>
  );
};

export default AboutUs;
