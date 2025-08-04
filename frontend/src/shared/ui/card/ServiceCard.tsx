import Image from "next/image";
import DefButton from "../btn/DefButton";
import { ServiceCardProps } from "./type";
import ArrowSvg from '@/shared/assets/svg/ArrowSvg.svg'
import InnerButtonRound from "../btn/InnerBtnRound";
import './style.css'
import Head from "next/head";

export default function ServiceCard({action, imgUrl, name, descr,imgsFigures}:ServiceCardProps){
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": name,
        "description": descr,
        "serviceType": "Разработка сайта",
        "provider": {
            "@type": "Organization",
            "name": "Cubro",
            "url": "https://cubro.ru"
        },
        "image": imgUrl.src
    };

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
        
        
        <article 
        className="ServiceCardWp"
        itemScope
        itemType="https://schema.org/Service"
        >
            <Image
            className="ServiceCardBackgroundMainImg"
            src={imgUrl}
            alt={`Изображение услуги ${name}`}
            blurDataURL={imgUrl.blurDataURL}
            priority
            itemProp="image"
            />
            {imgsFigures?.map(img => (
                <Image
                style={{filter:"brightness(70%)", pointerEvents:"none", userSelect:'none'}}
                key={Array.isArray(img.class) ? img.class[0] : img.class + img.imgUrl}
                src={img.imgUrl}
                className={Array.isArray(img.class) ? img.class[0] : img.class}
                alt={`Фигура для услуги ${Array.isArray(img.class) ? img.class[0] : img.class}`}
                blurDataURL={img.imgUrl.blurDataURL}
                />
            ))}
            <div className="ServiceCardHaederWp">
                <h4 
                className="ServiceCardHeading" 
                itemProp="name">{name}</h4>
                <meta itemProp="serviceType" content="Разработка сайта" />
                <meta itemProp="provider" content="Cubro" />
                <p 
                className="ServiceCardText" 
                itemProp="description">{descr}</p>
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
        </>
    )
}