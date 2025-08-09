import { WorksCardProps } from "./type";
import './style.css'
import Image from "next/image";
import InnerButtonRound from "../btn/InnerBtnRound";
import ArrowSvg from '@/shared/assets/svg/ArrowSvg.svg'
import WorkCardNav from "@/shared/components/WorkCardNav";

export default function WorksCard({name, descr, imgUrls, link}:WorksCardProps){
    return (
        <article className="StageCardWp WorksCardFlexSize">
            <div className="ServiceCardHaederWp">
                <h4 className="ServiceCardHeading WorksCardTheading">{name}</h4>
                <p className="ServiceCardText WorksCardTextSize">{descr}</p>
            </div>
            <WorkCardNav imgUrls={imgUrls}/>
            {
                link && link?.length > 0 && 
                <a href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="DefButtonWp WorksCardBtnWp"
                >
                    <InnerButtonRound>
                        <Image
                        src={ArrowSvg}
                        alt="ArrowSvg"
                        width={41}
                        height={20}
                        className="ServiceCardSvg WorksBlockPostiton"
                        />
                    </InnerButtonRound>
                    <p className="DefButtonText">Посмотреть</p>
                </a>
            }
        </article>
    )
}