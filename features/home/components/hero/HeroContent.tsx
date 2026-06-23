const HeroContent = () => {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-[#C89268] text-lg font-semibold mb-5">VINYLS - CURATED WITH PASSION</p>
            <h1 className="text-[66px] mb-6 leading-[1.05]">Feel the warmth of <span className="text-[#C89268]">real music.</span></h1>
            <div className="flex flex-col gap-2 mb-8 text-md opacity-80">
                <p>Rediscover the magic of analog sound</p>
                <p>Handpicked records for true music lovers</p>
            </div>
            <button className="py-3 mt-2 px-4 bg-[#dfba9d] w-1/2 rounded-sm hover:opacity-90 transition shadow-2xl hover:shadow-xl transition-shadow cursor-pointer">
                EXPLORE COLLECTION
            </button>
        </div>
    )
};

export default HeroContent;