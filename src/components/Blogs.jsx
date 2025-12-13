import { CircleStopIcon } from 'lucide-react';
import BlogCard from '../subcomponents/BlogCard';
export default function Blogs() {
  return (
    <>
      <div className=" bg-[#f7f6e9] relative min-h-screen w-full mt-20 pt-1 pb-1">

        <h1 className="text-[13rem]  interServices text-center  tracking-tight text-[#1e3730] mt-20 ">Blogs</h1>
        <div className="flex gap-1 absolute top-0 left-1/2 -translate-x-15 translate-y-43 items-center  justify-center">
          <CircleStopIcon className="w-3 h-3 mb-[0.2rem]" />
          <h1 className=" text-[#1e3730] text-[0.9rem] font-bold tracking-wide uppercase">articles and insights</h1>

        </div>

        <div className='px-10 grid grid-cols-2 grid-rows-2  gap-4 mb-20'>
          <BlogCard imgurl={"https://framerusercontent.com/images/vONJRcDiOdig242Q3TiVm6E4.jpg?scale-down-to=512"} tag={"TIPS"} date={"Jun 6, 2024"} timeToRead={"5"} heading={<>5 Creative Tips for Adding Personality to <br /> Your Space </>} />
          <BlogCard imgurl={"https://framerusercontent.com/images/vONJRcDiOdig242Q3TiVm6E4.jpg?scale-down-to=512"} tag={"TIPS"} date={"Jun 6, 2024"} timeToRead={"5"} heading={<>5 Creative Tips for Adding Personality to <br /> Your Space </>} />
          <BlogCard imgurl={"https://framerusercontent.com/images/vONJRcDiOdig242Q3TiVm6E4.jpg?scale-down-to=512"} tag={"TIPS"} date={"Jun 6, 2024"} timeToRead={"5"} heading={<>5 Creative Tips for Adding Personality to <br /> Your Space </>} />
          <BlogCard imgurl={"https://framerusercontent.com/images/vONJRcDiOdig242Q3TiVm6E4.jpg?scale-down-to=512"} tag={"TIPS"} date={"Jun 6, 2024"} timeToRead={"5"} heading={<>5 Creative Tips for Adding Personality to <br /> Your Space </>} />

        </div>

      </div>
    </>
  )
}