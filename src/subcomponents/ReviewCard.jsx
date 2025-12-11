import { MoveRight } from "lucide-react";
import { useState } from "react";
export default function ReviewCard({ avatarUrl, name, designation, review, imgUrl }) {
    const [imgShow, setImgShow] = useState(false);
    return (
        <>
            <div className="bg-[#f6f7e9] w-[300px] h-[500px] text-[#1e3730] rounded-xl px-3 overflow-auto  mb-10 ml-10 flex flex-col items-center justify-between">

                <div className="inter-nav mt-10">
                    {review}
                               </div>
           <div className="overflow-hidden relative mb-2 rounded-xl">
            <img src={imgUrl} alt="" className="rounded-xl"/>
            <div className="absolute top-0 right-3 bg-red-800 mt-2 ">
                <MoveRight/>
            </div>
           </div>

            </div>


        </>
    )
}