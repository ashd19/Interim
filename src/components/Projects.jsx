
import { CircleStopIcon } from "lucide-react";
import ProjectCard from "../subcomponents/ProjectCard";
import Buttons from "./Buttons";
export default function Projects() {
    return (
        <>
            <div className="w-full min-h-screen relative  px-4 py-4  mb-15 overflow-hidden">

                <h1 className="text-services interServices text-center  tracking-tight text-[#1e3730]">Projects</h1>
                <div className="flex gap-1 absolute top-0 left-1/2 -translate-x-65 translate-y-32 items-center  justify-center">
                    <CircleStopIcon className="w-3 h-3 mb-[0.2rem]" />
                    <h1 className=" text-[#1e3730] text-[0.8rem] font-bold interCard tracking-tight uppercase">Our Portfolio</h1>

                </div>
                <div className="flex flex-col gap-3">
                    <ProjectCard firstButton="RESIDENTIAL" secondButton="SINGLE HOME" imgurl="https://framerusercontent.com/images/YROLmfdQa2zqlwGcAWrlPhNRVk.jpg?scale-down-to=1024" heading={<>Costal Harmony <br />Home </>} text="The Coastal Harmony Home project was a comprehensive renovation of a beachside house, transforming it into a serene and stylish retreat that reflects the client's love for the ocean and nature." />
                    <ProjectCard firstButton="RESIDENTIAL" secondButton="SINGLE HOME" imgurl="https://framerusercontent.com/images/YROLmfdQa2zqlwGcAWrlPhNRVk.jpg?scale-down-to=1024" heading={<>Costal Harmony <br />Home </>} text="The Coastal Harmony Home project was a comprehensive renovation of a beachside house, transforming it into a serene and stylish retreat that reflects the client's love for the ocean and nature." />
                    <ProjectCard firstButton="RESIDENTIAL" secondButton="SINGLE HOME" imgurl="https://framerusercontent.com/images/YROLmfdQa2zqlwGcAWrlPhNRVk.jpg?scale-down-to=1024" heading={<>Costal Harmony <br />Home </>} text="The Coastal Harmony Home project was a comprehensive renovation of a beachside house, transforming it into a serene and stylish retreat that reflects the client's love for the ocean and nature." />
                    <ProjectCard firstButton="RESIDENTIAL" secondButton="SINGLE HOME" imgurl="https://framerusercontent.com/images/YROLmfdQa2zqlwGcAWrlPhNRVk.jpg?scale-down-to=1024" heading={<>Costal Harmony <br />Home </>} text="The Coastal Harmony Home project was a comprehensive renovation of a beachside house, transforming it into a serene and stylish retreat that reflects the client's love for the ocean and nature." />
                </div>

                <div className="mt-20 flex items-center justify-center">
                    <Buttons title="All Projects" />
                </div>
            </div>
        </>
    )
}