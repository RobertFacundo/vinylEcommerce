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
            <div className="flex flex-col transition-all ease-in-out duration-800 bg-white/70 hover:scale-105 shadow-lg hover:shadow-sm md:w-full w-[250px] rounded-b-md  rounded-tr-md">
                <div className="relative w-fit flex ">
                    <Image src={cover} alt={title} className="w-auto h-auto z-10 " width={500}
                        height={300} />
                    <Image src={Vinyl} className="absolute right-[-35px] top-1/2 -translate-y-1/2 w-[35px] h-[230px] pr-1 z-0" alt="vinilo" />
                </div>
                <div className="flex flex-col w-[250px] px-3 py-3 items-start rounded-b-md ">
                    <h3 className="line-clamp-1 font-[family-name:var(--font-geist-mono)] tracking-tight text-sm md:text-lg font-semibold">{title}</h3>
                    <p className="text-xs font-[family-name:var(--font-geist-mono)] font-[family-name:var(--font-alegreya)] text-[#C89268] font-semibold tracking-tighter">{band}</p>
                    <span className="font-light font-[family-name:var(--font-geist-mono)] tracking-wide ">${price}</span>
                </div>
            </div>
    );
};

export default HandpickedCard;