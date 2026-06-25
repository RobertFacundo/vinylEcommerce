import Image from "next/image";

type HandpickedCardProps = {
    title: string,
    band: string,
    cover: string
}

const HandpickedCard = ({ title, band, cover }: HandpickedCardProps) => {
    console.log(cover)
    return (
        <div className="flex flex-col bg-[#eccfb884] rounded-sm transition-all ease-in-out duration-800 hover:scale-105">
            <Image src={cover} alt={title} className="w-full h-auto rounded-sm"  width={500}
    height={500}/>
            <div className="flex flex-row gap-2 justify-between px-3 py-4 items-center">
                <h3 className="font-[family-name:var(--font-geist-mono)] tracking-tight text-sm font-medium">{title}</h3>
                <p>{band}</p>
                <span>Price</span>
            </div>
        </div>
    );
};

export default HandpickedCard;