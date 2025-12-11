import Buttons from "./Buttons";
import { Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const Landing = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -1300]);

  const reviews = [
    {
      id: 1,
      name: "Mathews R",
      review: "I was so happy with the final result. The team was professional and delivered on time.",
      stars: 5,
    },
    {
      id: 2,
      name: "Samantha",
      review: "Interim has been a game-changer for our business.Their ability to blend modern design with sustainable practices has been invaluable.",
      stars: 4,
    },
    {
      id: 3,
      name: "Tony M",
      review: "The custom furniture design exceeded our expectations.Each piece is a work of art.",
      stars: 5,
    }
  ]


  return (
    <div>
      <div className="w-full">
        <div className="mt-35">
          <h1 className="text-hero leading-30 text-[#1d332c] inter-nav tracking-tight">
            Your Ideas,
            <br />
            Our Creative <span className="satisfy-regular">Twist</span>
          </h1>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div>
            {/* show based on index  */}
            {reviews.map(({ id, name, review, stars }) => (
              <div key={id} className="flex flex-col gap-5">
                <div className="flex gap-1">
                  {Array.from({ length: stars }).map((_, index) => (
                    <Star key={index} color="#f2ac83" />
                  ))}
                </div>
              </div>

            ))}
          </div>
          <div className="p-5 bg-[#f6f7e9] w-[400px] h-full rounded-xl ">
            <p className="text-[#4b5a54] inter-nav text-xl">
              With a commitment to sustainability and innovative solutions where
              we craft beautiful, functional spaces that stand the test of time.
            </p>
            <div className="mt-4">
              <Buttons title={'Buy Template'}/>
            </div>
          </div>
        </div>
      </div>
      <motion.div style={{ y, marginBottom: y }} className="vid  mt-50 " data-scroll data-scroll-speed="0.6">
        <video
          src="https://framerusercontent.com/assets/mSsTg3IQcSmGsgmBbKnv84RbHUw.mp4"
          loop
          playsInline
          muted
          preload="auto"
          className="w-full h-full object-cover rounded-xl shadow-top-only shadb     w-white"
        ></video>
      </motion.div>
    </div >
  );
};

export default Landing;
