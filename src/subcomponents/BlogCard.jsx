export default function BlogCard({ imgurl, tag, date, timeToRead, heading, }) {
    return (
        <>
            <a href="#">

                <div className="bg-[#fefff2] rounded-xl px-3   w-[680px] h-[290px] group overflow-hidden">
                    <div className="flex gap-2">
                        <div className="w-[260px] h-[260px] mt-4 overflow-hidden rounded-xl">
                            <img src={imgurl} alt="" className="w-full h-full object-cover   rounded-xl transition-transform duration-700 ease-in group-hover:scale-110 " />
                        </div>
                <div className="flex flex-col justify-start">
                    <div className="flex">
                        <div className="rounded-full w-fit px-3 py-1 h-[25px] bg-[#f3ad84] mt-7 ml-1 inter-nav text-[#1d332c] text-[0.7rem] font-semibold uppercase">{tag}</div>
                    </div>
                </div>
                    </div>
                </div>
            </a>

        </>
    )
}