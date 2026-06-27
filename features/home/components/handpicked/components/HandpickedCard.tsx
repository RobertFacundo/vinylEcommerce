import Image from "next/image";
import Vinyl from '@/shared/assets/images/ui/vinyl.png'

type HandpickedCardProps = {
    title: string,
    band: string,
    cover: string,
    price: number,
}

const HandpickedCard = ({ title, band, cover, price }: HandpickedCardProps) => {
    console.log(cover)
    return (
        <div className="flex flex-col transition-all ease-in-out duration-800 bg-white/70 hover:scale-105 shadow-sm hover:shadow-md md:w-full w-[170px] rounded-b-md  rounded-tr-md">
            <div className="w-full flex ">
                <Image src={cover} alt={title} className="w-auto h-auto " width={500}
                    height={300} />
                <Image src={Vinyl} className="w-full h-[300px] pr-1" alt="vinilo"/>
            </div>
            <div className="flex flex-col w-full px-3 py-3 items-start rounded-b-md ">
                <h3 className="line-clamp-1 font-[family-name:var(--font-geist-mono)] tracking-tight text-sm md:text-lg font-semibold">{title}</h3>
                <p className="text-xs font-[family-name:var(--font-geist-mono)] font-[family-name:var(--font-alegreya)] text-[#C89268] font-semibold tracking-tighter">{band}</p>
                <span className="font-light font-[family-name:var(--font-geist-mono)] tracking-wide ">${price}</span>
            </div>
        </div>
    );
};

export default HandpickedCard;