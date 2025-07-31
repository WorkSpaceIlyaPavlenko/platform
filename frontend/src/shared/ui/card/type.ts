import { StaticImageData } from "next/image";

export interface StageCardProps{
    name:string;
    descr:string;
    imgUrl:StaticImageData;
}
export interface ServiceCardProps extends StageCardProps{
    action:() => void;
}
export interface ImgInterface{
    url:StaticImageData
    id:string
}
export interface WorksCardProps{
    name:string
    descr:string
    imgUrls:ImgInterface[]
}