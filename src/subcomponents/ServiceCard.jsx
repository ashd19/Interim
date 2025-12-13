export default function ServiceCard({ imgUrl, heading, text }) {
    return (
        <>
            <a href="#">

                <div className="w-[320px] h-[380px] bg-[#fefff2] transiton-transform duration-600 ease-in hover:bg-[#f6f7e9] rounded-xl px-4 py-4 flex flex-col justify-start  ">
                    <img src={imgUrl} alt="" height={100} width={120} />
                    <h1 className="mt-10 inter text-2xl  text-[#1e3730]">{heading}</h1>
                    <p className="mt-3 inter-nav">{text}</p>
                </div>
            </a>
        </>
    )
}