export default function ProjectCard({ firstButton, secondButton, imgurl, heading, text }) {
    return (
        <>
            <div className="md:w-[1300px] md:h-[420px] h-full rounded-xl p-5 bg-[#f6f7e9] flex  md:flex-row flex-col gap-10">
                <div className="flex gap-2 items-start ">
                    <button className="px-1 py-1 uppercase rounded-lg h-[30px] w-[100px] border border-[#1e3730]   text-[#1e3730] inter-nav text-[0.8rem] ">{secondButton}</button>
                    <button className="px-1 py-1 uppercase rounded-lg h-[30px] w-[100px] border border-[#1e3730]   text-[#1e3730] inter-nav text-[0.8rem] ">{firstButton}</button>
                </div>
                <div className="w-full h-full md:ml-10 ">
                    <img src={imgurl} alt="" className="rounded-xl w-[350px] h-full object-cover" />
                </div>
                <div className="flex flex-col items-start justify-between md:-ml-[150px]">
                    <p className="inter-nav text-[#1e3730]  leading-none">{text}</p>
                    <h1 className="inter  text-[#1e3730] text-[1.8rem] leading-none">{heading}</h1>
                </div>
            </div>
        </>
    )
}

/**
 * 
 */