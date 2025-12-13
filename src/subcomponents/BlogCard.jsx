import { ArrowRight } from "lucide-react";
export default function BlogCard({ imgurl, tag, date, timeToRead, heading, }) {
    return (
        <>
            <a href="#">

                <div className="bg-[#fefff2] rounded-xl px-3   w-[720px] h-[290px] group overflow-hidden">
                    <div className="flex gap-3">
                        <div className="w-[260px] h-[260px] mt-4 overflow-hidden rounded-xl">
                            <img src={imgurl} alt="" className="w-full h-full object-cover   rounded-xl transition-transform duration-700 ease-in group-hover:scale-110 " />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div>
                                <div className="flex gap-2 mt-7  items-center justify-start mb-1">
                                    <div className="rounded-full w-fit px-3 py-1 h-[25px] bg-[#f3ad84]  inter-nav text-[#1d332c] text-[0.7rem] font-semibold uppercase">{tag}</div>
                                    <div className="w-[6px]  h-[5px] bg-black rounded-full ">
                                    </div>
                                    <div className="inter-nav text-[0.8rem] tracking-tight whitespace-nowrap text-[#1d332c]">{date}</div>
                                    <div className="w-[6px]  h-[5px] bg-black rounded-full ">
                                    </div>
                                    <div className="inter-nav text-[0.8rem] tracking-tight whitespace-nowrap text-[#1d332c] uppercase">{timeToRead} min read</div>
                                </div>
                                <div>
                                    <h1 className="inter-nav text-[1.4rem] tracking-tight whitespace-nowrap leading-7 text-[#1d332c]">{heading}</h1>
                                </div>
                            </div>

                            <div className="flex rounded-full items-center bg-[#f6f7e9] px-3 py-2 w-[100px] h-[25px]">
                                <h1 className="text-[#1d332c] text-[0.7rem] inter-nav whitespace-nowrap">Read Post</h1>

                                <div className="w-[25px] h-[15px] flex items-center justify-center rounded-full ml-2   bg-[#1e3730]">
                                    <ArrowRight color="white" height={13} width={12} className="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>

        </>
    )
}