export default function BlogCard({ imgurl, tag, date, timeToRead, heading, }) {
    return (
        <>
            <a href="#">

                <div className="bg-[#fefff2] rounded-xl px-3   w-[680px] h-[290px] group overflow-hidden">
                    <div className="flex gap-2">
                        <div className="w-[260px] h-[260px] mt-4 overflow-hidden rounded-xl">
                            <img src={imgurl} alt="" className="w-full h-full object-cover   rounded-xl transition-transform duration-700 ease-in group-hover:scale-110 " />
                        </div>
                    </div>
                </div>
            </a>

            {/* 
            // ZOOM EFFECT VERSION (Requested Revision)
            <div className="bg-[#fefff2] rounded-xl px-3   w-[700px] h-[290px] group cursor-pointer overflow-hidden mt-10">
                <div className="flex gap-2">
                    <div className="w-[280px] h-[260px] mt-4 overflow-hidden rounded-xl">
                        <img 
                            src={imgurl} 
                            alt="" 
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
                        />
                    </div>
                </div>
            </div> 
            */}
        </>
    )
}