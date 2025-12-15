
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { CircleStopIcon } from "lucide-react";
import ProjectCard from "../subcomponents/ProjectCard";
import Buttons from "./Buttons";

const projects = [
    {
        firstButton: "RESIDENTIAL",
        secondButton: "SINGLE HOME",
        imgurl: "https://framerusercontent.com/images/YROLmfdQa2zqlwGcAWrlPhNRVk.jpg?scale-down-to=1024",
        heading: <>Costal Harmony <br />Home </>,
        text: "The Coastal Harmony Home project was a comprehensive renovation of a beachside house, transforming it into a serene and stylish retreat that reflects the client's love for the ocean and nature."
    },
    {
        firstButton: "RESIDENTIAL",
        secondButton: "SINGLE HOME",
        imgurl: "https://framerusercontent.com/images/YROLmfdQa2zqlwGcAWrlPhNRVk.jpg?scale-down-to=1024",
        heading: <>Costal Harmony <br />Home </>,
        text: "The Coastal Harmony Home project was a comprehensive renovation of a beachside house, transforming it into a serene and stylish retreat that reflects the client's love for the ocean and nature."
    },
    {
        firstButton: "RESIDENTIAL",
        secondButton: "SINGLE HOME",
        imgurl: "https://framerusercontent.com/images/YROLmfdQa2zqlwGcAWrlPhNRVk.jpg?scale-down-to=1024",
        heading: <>Costal Harmony <br />Home </>,
        text: "The Coastal Harmony Home project was a comprehensive renovation of a beachside house, transforming it into a serene and stylish retreat that reflects the client's love for the ocean and nature."
    },
    {
        firstButton: "RESIDENTIAL",
        secondButton: "SINGLE HOME",
        imgurl: "https://framerusercontent.com/images/YROLmfdQa2zqlwGcAWrlPhNRVk.jpg?scale-down-to=1024",
        heading: <>Costal Harmony <br />Home </>,
        text: "The Coastal Harmony Home project was a comprehensive renovation of a beachside house, transforming it into a serene and stylish retreat that reflects the client's love for the ocean and nature."
    }
];

const Card = ({ i, project, progress, range, targetScale }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
                className="relative flex flex-col items-center justify-center origin-top bg-transparent"
            >
                <ProjectCard {...project} />
            </motion.div>
        </div>
    );
};

export default function Projects() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <div ref={container} className="w-full relative px-4 py-4 ">
            <h1 className="md:text-services text-[6rem] mr-5 interServices  text-center tracking-tight text-[#1e3730]">Projects</h1>
            <div className="flex gap-1 absolute top-0 left-1/2 md:-translate-x-65 md:translate-y-32 translate-y-7 -translate-x-20 items-center justify-center">
                <CircleStopIcon className="w-3 h-3 mb-[0.2rem]" />
                <h1 className="text-[#1e3730] md:text-[0.8rem] text-[0.9rem] font-bold interCard tracking-tight uppercase">Our Portfolio</h1>
            </div>

            <div className="flex flex-col items-center justify-center w-full  ">
                {projects.map((project, i) => {
                    const targetScale = 1 - ((projects.length - 1 - i) * 0.05);
                    return (
                        <Card
                            key={i}
                            i={i}
                            project={project}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>

            <div className="mt-20 flex items-center justify-center">
                <Buttons title="All Projects" />
            </div>
        </div>
    );
}