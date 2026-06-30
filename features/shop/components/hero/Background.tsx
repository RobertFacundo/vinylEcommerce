import Image from "next/image";
import HeroImage from '@/shared/assets/images/shop/heroShopCover.jpg'

const Background = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Image src={HeroImage} alt="hero image" fill className="object-cover object-bottom" priority />
        </div>
    )
};

export default Background;