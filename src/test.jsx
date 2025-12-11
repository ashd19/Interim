import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ firstButton, secondButton, imgurl, heading, text }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-[1300px] h-[420px] rounded-xl p-5 bg-[#f6f7e9] flex relative cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex gap-2 items-start ">
                <button className="px-1 py-1 uppercase rounded-lg h-[30px] w-[100px] border border-[#1e3730]   text-[#1e3730] inter-nav text-[0.8rem] ">{secondButton}</button>
                <button className="px-1 py-1 uppercase rounded-lg h-[30px] w-[100px] border border-[#1e3730]   text-[#1e3730] inter-nav text-[0.8rem] ">{firstButton}</button>
            </div>

            <div className="h-full ml-10 relative overflow-hidden rounded-xl w-[350px]">
                <img src={imgurl} alt="" className="w-full h-full object-cover" />

                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm"
                        >
                            <div className="bg-[#f2ac83] p-4 rounded-full">
                                <ArrowUpRight className="text-[#1d332c] w-8 h-8" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="flex flex-col items-start justify-between -ml-[150px]">
                <h1 className="inter  text-[#1e3730] text-[1.8rem] leading-none">{heading}</h1>
                <p className="inter-nav text-[#1e3730]  leading-none">{text}</p>
            </div>
        </div>
    )
}
