import { CircleStopIcon } from "lucide-react";
export default function Services() {
    return (
        <>
            <div className="w-full h-screen relative bg-[#f6f7e9]">

                <h1 className="text-services interServices text-center mt-15 tracking-tight text-[#1e3730]">Services</h1>
                <div className="flex gap-1 absolute top-0 left-1/2 -translate-x-65 translate-y-26 items-center  justify-center">
                    <CircleStopIcon className="w-3 h-3 mb-[0.2rem]" />
                    <h1 className=" text-[#1e3730] text-[0.9rem] font-bold tracking-wide">WHAT WE DO</h1>

                </div>
            </div>
        </>
    )
}