import Image from "next/image";
import DefButton from "../btn/DefButton";
import { ServiceCardProps } from "./type";
import ArrowSvg from '@/shared/assets/svg/ArrowSvg.svg'
import InnerButtonRound from "../btn/InnerBtnRound";
import './style.css'

export default function ServiceCard({action, imgUrl, name, descr}:ServiceCardProps){
    return (
        <article className="ServiceCardWp">
            <Image
            className="ServiceCardBackgroundMainImg"
            src={imgUrl}
            alt={`ServiceImg${name}`}
            />
            <div className="ServiceCardHaederWp">
                <h4 className="ServiceCardHeading">{name}</h4>
                <p className="ServiceCardText">{descr}</p>
            </div>
            <DefButton action={() => action()} nameAction="Заказать">
                <InnerButtonRound>
                    <Image
                    src={ArrowSvg}
                    alt="ArrowSvg"
                    width={41}
                    height={20}
                    />
                </InnerButtonRound>
            </DefButton>
        </article>
    )
}