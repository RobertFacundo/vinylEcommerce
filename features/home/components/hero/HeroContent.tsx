const HeroContent = () => {
    return (
        <div className="flex flex-col gap-2 md:mt-0 mt-15">
            <p className="text-[#C89268] text-sm font-semibold">VINYLS - CURATED WITH PASSION</p>
            <h1 className="text-8xl mb-6 leading-[1.05] font-[family-name:var(--font-alegreya)] font-semibold">Feel the warmth of <span className="text-[#C89268]">real music.</span></h1>
            <div className="flex flex-col gap-2 mb-8 text-md opacity-80 font-[family-name:var(--font-geist-mono)] tracking-tighter">
                <p>Rediscover the magic of analog sound</p>
                <p>Handpicked records for true music lovers</p>
            </div>
            <button className="py-2 mt-2 px-4 bg-[#dfba9d] w-1/2 rounded-sm hover:opacity-90 transition-all ease-in-out duration-500 shadow-2xl hover:shadow-xl hover:font-medium cursor-pointer font-[family-name:var(--font-geist-mono)]">
                EXPLORE COLLECTION
            </button>
        </div>
    )
};

export default HeroContent;