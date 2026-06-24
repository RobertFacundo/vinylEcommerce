import { StaticImageData } from "next/image";
import RockClassicCover from '@/shared/assets/images/home/category1.jpg'
import JazzEssentials from '@/shared/assets/images/home/category2.jpg'
import HipHopLegends from '@/shared/assets/images/home/category3.jpg'
import ElectronicCover from '@/shared/assets/images/home/category5.png'

export type CategoriesSectionDataType = {
    cover: StaticImageData,
    title: string
}

export const CategoriesSectionData: CategoriesSectionDataType[] = [
    { cover: RockClassicCover, title: "Rock Classics" },
    { cover: JazzEssentials, title: "Jazz Essentials" },
    { cover: HipHopLegends, title: "Hip-Hop Legends" },
    { cover: ElectronicCover, title: "Electronic" }
];