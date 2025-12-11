import { CircleStopIcon } from "lucide-react";
import ReviewCard from "../subcomponents/ReviewCard";
import { motion } from "motion/react";
export default function Reviews() {
    motion;
    return (
        <>
            <div className="w-full min-h-screen relative">
                <h1 className="text-[14rem] interServices  mt-10 tracking-tight text-left ml-10 text-[#1e3730]">Reviews</h1>
                <div className="flex gap-1 absolute top-0 left-0  translate-x-48 translate-y-25 items-center  justify-center">
                    <CircleStopIcon className="w-3 h-3 mb-[0.2rem]" />
                    <h1 className=" text-[#1e3730] text-[0.9rem] font-bold tracking-wide">CLIENTS WORDS</h1>
                </div>

<div className="flex shrink-0 overflow-hidden w-full">
    
                    <motion.div
                        animate={{
                            x: '-50%',
                        }}
                        transition={ { ease: "linear", duration: 25 , repeat:Infinity  }}
    
                        className="flex gap-3 shrink-0   ">
                        <ReviewCard imgUrl={'https://framerusercontent.com/images/RmuI2pxfTjlOuiW99H1cZ6zZY08.jpg'} review={'Interim is a great company. They are always there when you need them.Their ability to listen and understand your needs is exceptional.'} />
                        <ReviewCard imgUrl={'https://framerusercontent.com/images/RmuI2pxfTjlOuiW99H1cZ6zZY08.jpg'} review={'Interim is a great company. They are always there when you need them.Their ability to listen and understand your needs is exceptional.'} />
                        <ReviewCard imgUrl={'https://framerusercontent.com/images/RmuI2pxfTjlOuiW99H1cZ6zZY08.jpg'} review={'Interim is a great company. They are always there when you need them.Their ability to listen and understand your needs is exceptional.'} />
                        <ReviewCard imgUrl={'https://framerusercontent.com/images/RmuI2pxfTjlOuiW99H1cZ6zZY08.jpg'} review={'Interim is a great company. They are always there when you need them.Their ability to listen and understand your needs is exceptional.'} />
                        <ReviewCard imgUrl={'https://framerusercontent.com/images/RmuI2pxfTjlOuiW99H1cZ6zZY08.jpg'} review={'Interim is a great company. They are always there when you need them.Their ability to listen and understand your needs is exceptional.'} />
                        <ReviewCard imgUrl={'https://framerusercontent.com/images/RmuI2pxfTjlOuiW99H1cZ6zZY08.jpg'} review={'Interim is a great company. They are always there when you need them.Their ability to listen and understand your needs is exceptional.'} />
                        <ReviewCard imgUrl={'https://framerusercontent.com/images/RmuI2pxfTjlOuiW99H1cZ6zZY08.jpg'} review={'Interim is a great company. They are always there when you need them.Their ability to listen and understand your needs is exceptional.'} />
                        <ReviewCard imgUrl={'https://framerusercontent.com/images/RmuI2pxfTjlOuiW99H1cZ6zZY08.jpg'} review={'Interim is a great company. They are always there when you need them.Their ability to listen and understand your needs is exceptional.'} />
    
                    </motion.div>
</div>

            </div>

        </>
    )
}   
