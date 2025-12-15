import Buttons from "./Buttons";
import { Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const Landing = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -1300]);

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Mathews R",
      review: [
        "I was so happy with the final result.The team was professional and delivered on time.The design was unique and beautiful.",
      ],
      stars: 5,
    },
    {
      id: 2,
      name: "Samantha",
      review: [
        "Interim has been a game-changer for our business.Their ability to blend modern design with sustainable practices has been invaluable.",
      ],
      stars: 4,
    },
    {
      id: 3,
      name: "Tony M",
      review: [
        "The custom furniture design exceeded", "our expectations.Each piece is a work of art.The design is unique and beautiful.",
      ],
      stars: 5,
    },
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const currentReview = reviews[currentReviewIndex];

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="w-full">
        <div className="mt-35 mb-15 md:mb-0">
          <h1 className="md:text-hero md:leading-30 leading-none whitespace-nowrap text-[4.3rem]  text-[#1d332c] inter-nav tracking-tight">
            Your Ideas,
            <br />
            <div className="flex md:flex-row md:tracking-none tracking-tight flex-col md:text-card text-[3.9rem] ">Our Creative <span className="satisfy-regular md:ml-6">Twist</span></div>

          </h1>
        </div>
        <div className="flex md:flex-row flex-col gap-5 mt-5 items-center justify-between ">
          <div className="mb-8 md:mb-0 ">
            <div className="flex flex-col gap-5">
              <div className="flex gap-1 ">
                {Array.from({ length: currentReview.stars }).map((_, index) => (
                  <Star key={index} color="#f2ac83" fill="#f2ac83" />
                ))}
              </div>
              <p className="inter-nav text-[#1d332c]">
                <span>"</span>
                {currentReview.review
                  .join(" ")
                  .split(/\s+/)
                  .reduce((acc, word, index) => {
                    if (index % 6 === 0 && index !== 0) {
                      acc.push(<br key={`br-${index}`} />);
                    }
                    acc.push(word + " ");
                    return acc;
                  }, [])}
                <span>"</span><span className="inter-nav text-[#1d332c] font-semibold">
                  - {currentReview.name}
                </span>
              </p>


            </div>
            <div className="flex gap-3 mt-10">
              {reviews.map((_, index) => (
                <div
                  key={index}
                  className={`w-[25px] h-[4px] rounded-2xl border transition-colors ${index === currentReviewIndex ? "bg-[#1d332c]" : "bg-[#f6f7e9]"
                    }`}
                ></div>
              ))}
            </div>
          </div>
          <div className="p-5 bg-[#f6f7e9] w-[400px] h-full rounded-xl  ">
            <p className="text-[#4b5a54] inter-nav text-xl">
              With a commitment to sustainability and innovative solutions where
              we craft beautiful, functional spaces that stand the test of time.
            </p>
            <div className="mt-4">
              <Buttons title={"Buy Template"} />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        style={isMobile ? {} : { y, marginBottom: y }}
        className="vid md:mt-50 mt-15 "
        data-scroll
        data-scroll-speed="0.6"
      >
        <video
          src="https://framerusercontent.com/assets/mSsTg3IQcSmGsgmBbKnv84RbHUw.mp4"
          loop
          playsInline
          muted
          autoPlay
          preload="auto"
          className="w-full h-full object-cover rounded-xl shadow-top-only "
        ></video>
      </motion.div>
    </div>
  );
};

export default Landing;
