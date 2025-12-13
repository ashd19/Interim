import { CircleStopIcon } from 'lucide-react';
import BlogCard from '../subcomponents/BlogCard';
export default function Blogs() {
  return (
    <>
      <div className=" bg-[#f7f6e9] relative min-h-screen w-full  pt-1 pb-1">

        <h1 className="md:text-[13rem] text-[9rem]  interServices text-center  tracking-tight text-[#1e3730]   ">Blogs</h1>
        <div className="flex gap-1 absolute top-0 left-1/2 -translate-x-13w md:translate-y-24 translate-y-16 items-center  justify-center">
          <CircleStopIcon className="w-3 h-3 mb-[0.1rem]" />
          <h1 className=" text-[#1e3730] text-[0.9rem] font-bold tracking-wide uppercase">articles and insights</h1>

        </div>

        <div className='px-10 grid md:grid-cols-2  md:grid-rows-2  grid-cols-1 grid-rows-4 gap-4 mb-20'>
          <BlogCard imgurl={"https://framerusercontent.com/images/vONJRcDiOdig242Q3TiVm6E4.jpg?scale-down-to=512"} tag={"TIPS"} date={"Jun 6, 2024"} timeToRead={"5"} heading={<>5 Creative Tips for Adding Personality to <br /> Your Space </>} />
          <BlogCard imgurl={"https://framerusercontent.com/images/vONJRcDiOdig242Q3TiVm6E4.jpg?scale-down-to=512"} tag={"TIPS"} date={"Jun 6, 2024"} timeToRead={"5"} heading={<>5 Creative Tips for Adding Personality to <br /> Your Space </>} />
          <BlogCard imgurl={"https://framerusercontent.com/images/vONJRcDiOdig242Q3TiVm6E4.jpg?scale-down-to=512"} tag={"TIPS"} date={"Jun 6, 2024"} timeToRead={"5"} heading={<>5 Creative Tips for Adding Personality to <br /> Your Space </>} />
          <BlogCard imgurl={"https://framerusercontent.com/images/vONJRcDiOdig242Q3TiVm6E4.jpg?scale-down-to=512"} tag={"TIPS"} date={"Jun 6, 2024"} timeToRead={"5"} heading={<>5 Creative Tips for Adding Personality to <br /> Your Space </>} />

        </div>

      </div>
    </>
  )
}