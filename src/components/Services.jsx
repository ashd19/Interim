import { CircleStopIcon } from "lucide-react";
import ServiceCard from "../subcomponents/ServiceCard";
import Buttons from "./Buttons";
import { useState } from "react";

export default function Services() {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="w-full min-h-screen relative bg-[#f6f7e9] px-4 py-4  overflow-hidden">

                <h1 className="text-services interServices text-center mt-10 tracking-tight text-[#1e3730]">Services</h1>
                <div className="flex gap-1 absolute top-0 left-1/2 -translate-x-65 translate-y-43 items-center  justify-center">
                    <CircleStopIcon className="w-3 h-3 mb-[0.2rem]" />
                    <h1 className=" text-[#1e3730] text-[0.9rem] font-bold tracking-wide">WHAT WE DO</h1>

                </div>
                <div className="flex flex-col gap-3 mt-10 px-10 mb-20">
                    <div className="flex gap-3">
                        <ServiceCard imgUrl="https://framerusercontent.com/images/oRUk4DWQlowBGueG4Q0N2M4gkwo.png" heading={<>Residential<br />Interior Design</>} text="Tailored design servies for private homes, including room makeovers, new build interiors, and full home renovations." />
                        <ServiceCard imgUrl="https://framerusercontent.com/images/oRUk4DWQlowBGueG4Q0N2M4gkwo.png" heading={<>Residential<br />Interior Design</>} text="Tailored design servies for private homes, including room makeovers, new build interiors, and full home renovations." />
                        <ServiceCard imgUrl="https://framerusercontent.com/images/oRUk4DWQlowBGueG4Q0N2M4gkwo.png" heading={<>Residential<br />Interior Design</>} text="Tailored design servies for private homes, including room makeovers, new build interiors, and full home renovations." />
                        <ServiceCard imgUrl="https://framerusercontent.com/images/oRUk4DWQlowBGueG4Q0N2M4gkwo.png" heading={<>Residential<br />Interior Design</>} text="Tailored design servies for private homes, including room makeovers, new build interiors, and full home renovations." />
                    </div>
                    <div className="flex gap-3">
                        <ServiceCard imgUrl="https://framerusercontent.com/images/oRUk4DWQlowBGueG4Q0N2M4gkwo.png" heading={<>Residential<br />Interior Design</>} text="Tailored design servies for private homes, including room makeovers, new build interiors, and full home renovations." />
                        <ServiceCard imgUrl="https://framerusercontent.com/images/oRUk4DWQlowBGueG4Q0N2M4gkwo.png" heading={<>Residential<br />Interior Design</>} text="Tailored design servies for private homes, including room makeovers, new build interiors, and full home renovations." />
                        <ServiceCard imgUrl="https://framerusercontent.com/images/oRUk4DWQlowBGueG4Q0N2M4gkwo.png" heading={<>Residential<br />Interior Design</>} text="Tailored design servies for private homes, including room makeovers, new build interiors, and full home renovations." />
                        <ServiceCard imgUrl="https://framerusercontent.com/images/oRUk4DWQlowBGueG4Q0N2M4gkwo.png" heading={<>Residential<br />Interior Design</>} text="Tailored design servies for private homes, including room makeovers, new build interiors, and full home renovations." />
                    </div>

                    {/* View all services button , hidden till then! */}

                    <div className="flex justify-center cursor-pointer mt-5 w-full h-[100px] absolute bottom-0 left-0 bg-linear-to-t from-[#f6f7e9] via-[#f6f7e9]/80 to-transparent items-center z-10">
                        {!show && <Buttons title="View All Services" onClick={() => { setShow(!show) }} />}
                    </div>

                    <div>

                        {show && <div className="flex gap-3">
                            <ServiceCard imgUrl="https://framerusercontent.com/images/oRUk4DWQlowBGueG4Q0N2M4gkwo.png" heading={<>Residential<br />Interior Design</>} text="Tailored design servies for private homes, including room makeovers, new build interiors, and full home renovations." />
                            <ServiceCard imgUrl="https://framerusercontent.com/images/oRUk4DWQlowBGueG4Q0N2M4gkwo.png" heading={<>Residential<br />Interior Design</>} text="Tailored design servies for private homes, including room makeovers, new build interiors, and full home renovations." />
                            <ServiceCard imgUrl="https://framerusercontent.com/images/oRUk4DWQlowBGueG4Q0N2M4gkwo.png" heading={<>Residential<br />Interior Design</>} text="Tailored design servies for private homes, including room makeovers, new build interiors, and full home renovations." />
                            <ServiceCard imgUrl="https://framerusercontent.com/images/oRUk4DWQlowBGueG4Q0N2M4gkwo.png" heading={<>Residential<br />Interior Design</>} text="Tailored design servies for private homes, including room makeovers, new build interiors, and full home renovations." />
                        </div>
                        }
                        { }
                    </div>

                </div>

            </div>
        </>
    )
}
