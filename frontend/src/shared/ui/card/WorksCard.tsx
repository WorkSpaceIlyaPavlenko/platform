import { WorksCardProps } from "./type";
import './style.css'
import Image from "next/image";

export default function WorksCard({name, descr, imgUrls}:WorksCardProps){
    return (
        <article className="StageCardWp WorksCardFlexSize">
            <div className="ServiceCardHaederWp">
                <h4 className="ServiceCardHeading">{name}</h4>
                <p className="ServiceCardText">{descr}</p>
            </div>
            <div className="WorksCardImgsWp">
                {imgUrls.map((img) => (
                    <Image
                    key={img.id}
                    src={img.url}
                    alt={descr+''+img.url}
                    className="WorksCardImg"
                    />
                ))}
            </div>
        </article>
    )
}