// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ArrowRight, CircleStopIcon } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// export default function Specialities() {
//     const container = useRef(null);
//     const rightCol = useRef(null);

//     useGSAP(() => {
//         gsap.to(rightCol.current, {
//             y: -285,
//             ease: "none",
//             scrollTrigger: {
//                 trigger: container.current,
//                 start: "top top",
//                 end: "+=900",
//                 scrub: true,
//                 pin: true,
//             }
//         });
//     }, { scope: container });

//     return (
//         <div ref={container} className="specialities-container w-full min-h-screen bg-[#fefff2] overflow-hidden">
//             <div className="flex gap-5 h-full items-center">
//                 <div className="relative ">
//                     <img src="https://framerusercontent.com/images/KGTXISgxyxmkCq256EXQwsbnNto.jpg" alt="" className="w-[620px] h-[640px] mb-50 object-cover rounded-xl" />

//                     <div className="absolute bottom-1/2 left-0 translate-y-50 w-full px-2">
//                         <div className="w-full rounded-xl backdrop-blur-md bg-black/10 px-3 py-4">
//                             <h1 className="text-white inter-nav leading-none text-[2.5rem] whitespace-nowrap">Our speciality lies in transforming <br />spaces into harmonious <br />environments</h1>
//                             <p className="text-white inter-nav leading-normal text-[1rem] mt-5">
//                                 Our craft, a delicate dance of light and shadow, seeks to conjure spaces that echo with the whispers of timeless elegance and bespoke charm.
//                             </p>
//                             {/* button */}
//                             <div className="flex gap-1 items-center mt-10">
//                                 <div className="text-[#15372b] bg-white text-center font-semibold rounded-2xl py-3 w-[150px] inter-nav">
//                                     Start a Project
//                                 </div>
//                                 <div className="p-2 w-[50px] h-[50px] bg-[#f3ad84] rounded-xl flex items-center justify-center">
//                                     <ArrowRight color="#4b5a54" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div ref={rightCol} className="second flex flex-col mt-20 justify-start min-h-screen items-start h-fit">
//                     <div className="flex gap-1 items-center justify-center">
//                         <CircleStopIcon className="w-3 h-3 mb-[0.2rem]" />
//                         <h1 className="text-[#1e3730] text-[0.9rem] font-bold tracking-wide uppercase">our specialities</h1>
//                     </div>
//                     <div className="inter text-[#1e3730]">
//                         <h1 className="whitespace-nowrap text-5xl mt-2">Why you'll love working with <br />Interim</h1>
//                     </div>
//                     <div className="rounded-xl w-[700px] h-fit bg-[#f6f7e9] p-4 mt-5 text-[#1e3730] inter-nav">
//                         <p>"Design is more than just aesthetics; it's a reflection of the soul and a journey towards creating timeless spaces that resonate with individuality and purpose. At Interim, we strive to craft environments that not only captivate the eye but also inspire the mind and nurture the spirit."</p>
//                         <div className="flex gap-5 mt-5">
//                             <div>
//                                 <img src="https://framerusercontent.com/images/XDcRjEJ0HdfRgvjaqQFTeR8Bsk.jpg?scale-down-to=1024" alt="" className="w-[70px] h-[70px] rounded-xl" />
//                             </div>
//                             <div className="flex flex-col -ml-2 mt-1">
//                                 <h1 className="inter-nav text-[1.2rem]">Real Mehdi</h1>
//                                 <h1 className="text-[#495853] inter-nav">Founder,Interim Design Studio</h1>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="box bg-[#1e3730] h-[550px] w-[700px] rounded-xl mt-2">
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }