export default function ProjectCard({firstButton, secondButton, imgurl , heading ,text}) {
    return (
        <>
            <div className="w-[1200px] h-[420px] rounded-xl p-5 bg-[#f6f7e9] flex ">
            <div className="flex gap-2 items-start ">
                <button className="px-1 py-1 uppercase rounded-lg h-[30px] w-[100px] border border-[#1e3730]   text-[#1e3730] inter-nav text-[0.8rem] ">{secondButton}</button>
                <button className="px-1 py-1 uppercase rounded-lg h-[30px] w-[100px] border border-[#1e3730]   text-[#1e3730] inter-nav text-[0.8rem] ">{firstButton}</button>
            </div>
            </div>
        </>
    )
}