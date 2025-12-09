import React from "react";
import Buttons from "./Buttons";

const Landing = () => {
  return (
    <div>
      <div className="w-full h-screen ">
        <div className="mt-35">
          <h1 className="text-hero leading-30 text-[#1d332c] inter-nav tracking-tight">
            Your Ideas,
            <br />
            Our Creative <span className="satisfy-regular">Twist</span>
          </h1>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div></div>
          <div className="p-5 bg-[#f6f7e9] w-[400px] h-full rounded-xl ">
            <p className="text-[#4b5a54] inter-nav text-xl">
              With a commitment to sustainability and innovative solutions where
              we craft beautiful, functional spaces that stand the test of time.
            </p>
            <div className="mt-4">
              <Buttons />
            </div>
          </div>
        </div>
      </div>
      <div className="vid ">
        <video
          src="https://framerusercontent.com/assets/mSsTg3IQcSmGsgmBbKnv84RbHUw.mp4"
          loop
          playsInline
          muted
          preload="auto"
          className="w-full h-full object-cover rounded-xl"
        ></video>
      </div>
    </div>
  );
};

export default Landing;
