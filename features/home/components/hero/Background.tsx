import HeroImage from '@/shared/assets/images/home/heroImage1.png';
import Image from 'next/image';

const Background = () => {
    return (
            <Image src={HeroImage} alt='hero image' fill className='object-cover'/>
    )
};

export default Background;