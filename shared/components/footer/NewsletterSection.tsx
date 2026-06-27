import Image from "next/image";
import Vinyl from '@/shared/assets/images/ui/vinyl.png'

const NewsletterSection = () => {
    return (
        <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-10">

            {/* Text */}
            <div className="flex flex-col gap-3 max-w-md">
                <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-alegreya)] font-semibold leading-tight">
                    Stay in the groove.
                </h2>

                <p className="text-sm md:text-md opacity-80 font-[family-name:var(--font-geist-mono)] tracking-tight">
                    Subscribe for news articles, exclusive offers and vinyl recommendations
                </p>
            </div>

            {/* Input */}
            <div className="flex items-center gap-1 w-full md:w-auto">
                <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-2 w-full md:w-[260px] bg-white/70 border border-black/10 rounded-sm text-sm font-[family-name:var(--font-geist-mono)] focus:outline-none"
                />

                <button className="px-4 py-2 bg-[#dfba9d] rounded-sm text-sm font-[family-name:var(--font-geist-mono)] hover:opacity-90 transition cursor-pointer">
                    SUBSCRIBE
                </button>
            </div>
            <Image src={Vinyl} alt="vinilo" width={50} height={30} className="md:rotate-180 hidden md:flex ml-auto" />
        </div>
    )
};

export default NewsletterSection;
