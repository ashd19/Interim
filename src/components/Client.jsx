import { motion } from "motion/react";
const Client = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 text-[#1d332c]">
      <h1 className="text-sm">CLIENTS</h1>
      <h1 className="text-5xl inter font-extrabold">Our Beloved Clients</h1>
      <div>
        <motion.div
        
        animate={{
          x:'-100%',
          transition:{
            duration:10,
            ease:'linear',
            repeat:Infinity,
        
          }
        }}
        
        className="flex mb-60 gap-[10px] mt-10 overflow-hidden">
          {[
            {
              image:
                "https://framerusercontent.com/images/ai5aTS5GwmknA02FMovLXZcdo.svg",
              text: "Zephyr",
            },
            {
              image:
                "https://framerusercontent.com/images/l0AIm4dNymLUb8QHxLD7VrW8k0.svg",
              text: "Aurum",
            },
            {
              image:
                "https://framerusercontent.com/images/dRusBk4C6XpzYRnw6QIqpJCec8.svg",
              text: "Vantage",
            },
            {
              image:
                "https://framerusercontent.com/images/JXpKtBJKpHK42NhZlu7pnrdSI8.svg",
              text: "Elysan",
            },
            {
              image:
                "https://framerusercontent.com/images/qgI0hIf34aPuuJedXqVNVWx1gI.svg",
              text: "Lumin",
            },
          ].map(({ image, text }, index) => (
            <div
              key={index}
              className="px-3 py-4 flex w-[320px] rounded-xl h-[80px] bg-[#f3f3ec] justify-center gap-5 items-center "
            >
              <div>
                <img src={image} alt="" />
              </div>
              <div className="text-3xl">|</div>
              <div className="text-[#1d332c] font-bold text-3xl">{text}</div>
            </div>
          ))}
        
        </motion.div>
        <motion.div
        
        animate={{
          x:'-100%',
          transition:{
            duration:10,
            ease:'linear',
            repeat:Infinity,
        
          }
        }}
        
        className="flex mb-60 gap-[10px] overflow-hidden">
          {[
            {
              image:
                "https://framerusercontent.com/images/ai5aTS5GwmknA02FMovLXZcdo.svg",
              text: "Zephyr",
            },
            {
              image:
                "https://framerusercontent.com/images/l0AIm4dNymLUb8QHxLD7VrW8k0.svg",
              text: "Aurum",
            },
            {
              image:
                "https://framerusercontent.com/images/dRusBk4C6XpzYRnw6QIqpJCec8.svg",
              text: "Vantage",
            },
            {
              image:
                "https://framerusercontent.com/images/JXpKtBJKpHK42NhZlu7pnrdSI8.svg",
              text: "Elysan",
            },
            {
              image:
                "https://framerusercontent.com/images/qgI0hIf34aPuuJedXqVNVWx1gI.svg",
              text: "Lumin",
            },
          ].map(({ image, text }, index) => (
            <div
              key={index}
              className="px-3 py-4 flex w-[320px] rounded-xl h-[80px] bg-[#f3f3ec] justify-center gap-5 items-center "
            >
              <div>
                <img src={image} alt="" />
              </div>  
              <div className="text-3xl">|</div>
              <div className="text-[#1d332c] font-bold text-3xl">{text}</div>
            </div>
          ))}
        
        </motion.div>
      </div>
    </div>
  );
};

export default Client;
