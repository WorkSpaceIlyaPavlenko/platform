import Image from "next/image";
import { StageCardProps } from "./type";


export default function StageCard({name, descr, imgUrl}:StageCardProps){
    return (
        <article className="StageCardWp">
            <Image
            src={imgUrl}
            alt={name +' '+ descr}
            className="StageCardImg"
            />
            <div className="ServiceCardHaederWp">
                <h4 className="ServiceCardHeading">{name}</h4>
                <p className="ServiceCardText">{descr}</p>
            </div>
        </article>
    )
}