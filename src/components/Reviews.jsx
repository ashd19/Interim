import { CircleStopIcon } from "lucide-react";
export default function Reviews() {
    return (
        <>
        <div className="w-full min-h-screen relative">
            <h1 className="text-[14rem] interServices  mt-10 tracking-tight text-left ml-10 text-[#1e3730]">Reviews</h1>
                    <div className="flex gap-1 absolute top-0 left-0  translate-x-48 translate-y-25 items-center  justify-center">
                        <CircleStopIcon className="w-3 h-3 mb-[0.2rem]" />
                        <h1 className=" text-[#1e3730] text-[0.9rem] font-bold tracking-wide">CLIENTS WORDS</h1>
                    </div>
        </div> </>
    )
}   