export default function ServiceCard({ imgUrl, heading, text }) {
  return (
    <>
      <div
        className="
          w-[320px] h-[380px] bg-[#fefff2] rounded-xl px-4 py-4 flex flex-col justify-start 
          hover:bg-[#f6f7e9] 
          transition-all duration-500 ease-in-out
        "
      >
        <img src={imgUrl} alt="" height={100} width={120} />
        <h1 className="mt-10 inter text-2xl text-[#1e3730]">{heading}</h1>
        <p className="mt-3 inter-nav">{text}</p>
      </div>
    </>
  );
}
