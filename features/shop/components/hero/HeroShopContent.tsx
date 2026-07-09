const HeroShopContent = () => {
    return (
        <div className="flex flex-col min-h-[70vh] items-start px-6 md:px-12 justify-center gap-8">
            <div className="flex md:flex-row flex-col text-white/90 md:gap-2 gap-6 mb-8 opacity-80 font-[family-name:var(--font-geist-mono)] tracking-tighter justify-center items-center">
                <h1 className="h1 md:text-6xl text-2xl md:w-1/2 w-full">Discover timeless records for every music lover</h1>
                <p className="p md:text-lg text-sm text-white/70">Explore our collection of vinyls... <br />from classic albums to modern gems</p>
            </div>
        </div>
    )
};

export default HeroShopContent;