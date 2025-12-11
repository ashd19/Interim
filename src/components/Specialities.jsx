
import { ArrowRight } from "lucide-react";
export default function Specialities() {
    return (
        <div>
            <div className="flex gap-2 h-screen ">
                <div className="relative  ">
                    <img src="https://framerusercontent.com/images/KGTXISgxyxmkCq256EXQwsbnNto.jpg" alt="" className="w-[620px] h-[640px] object-cover rounded-xl" />

                    <div className="absolute bottom-0 left-0 -translate-y-26  w-full px-2">
                        <div className="w-full  rounded-xl backdrop-blur-md bg-black/10 px-3 py-4 ">
                                <h1 className="text-white inter-nav leading-none  text-[2.5rem]  whitespace-nowrap">Our speciality lies in transforming <br />spaces into harmonious <br />environments</h1>
                                <p className="text-white inter-nav leading-normal text-[1rem] mt-5">
                                    Our craft, a delicate dance of light and shadow, seeks to conjure spaces that echo with the whispers of timeless elegance and bespoke charm.
                                </p>
                                {/* button */}
                                <div className="flex gap-1 items-center mt-10">
                                    <div className="text-[#15372b] bg-white text-center font-semibold rounded-2xl  py-3  w-[150px] inter-nav">
                                        Start a Project
                                    </div>
                                    <div className="p-2 w-[50px] h-[50px] bg-[#f3ad84] rounded-xl flex items-center justify-center">
                                        <ArrowRight color="#4b5a54" />
                                    </div>
                                </div>
                            </div>
                    </div>

                </div>

            </div>
        </div>
    );
}