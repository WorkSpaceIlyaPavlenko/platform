import Image from "next/image";
import { DevelopServiceList, dopImgs } from "@/shared/CONST";
import Head from 'next/head'
import './style.css'
import { ReplaceKey } from "@/shared/utils/type";


export default function StageCard({ name, descr, imgUrl, dopImg }:ReplaceKey<DevelopServiceList, "imgsFigures", "dopImg", dopImgs>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": name,
        "description": descr,
        "provider": {
            "@type": "Organization",
            "name": "Cubro"
        },
        "serviceType": "Разработка сайтов",
        "areaServed": {
            "@type": "Country",
            "name": "Россия"
        },
        "image": imgUrl.src
    }

    return (
        <>
            <Head>
                {/* <title>{name} | Этап разработки | Cubro</title> */}
                <meta name="description" content={descr} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>

            <article
                className="StageCardWp"
                itemScope
                itemType="https://schema.org/Service"
            >
                <Image
                    src={imgUrl}
                    alt={`Этап: ${name}`}
                    className="StageCardImg ImgNoEvent"
                    blurDataURL={imgUrl.blurDataURL}
                    itemProp="image"
                    priority
                />
                <Image
                    src={dopImg.imgUrl}
                    alt={`Этап маленькая картинка: 
                    ${Array.isArray(dopImg.class) ? dopImg.class[0] :dopImg.class}}`}
                    className={Array.isArray(dopImg.class) ? dopImg.class[0] :dopImg.class}
                    blurDataURL={dopImg.imgUrl.blurDataURL}
                    itemProp="image"
                    style={{userSelect:'none', pointerEvents:"none", filter:"brightness(70%)"}}
                />

                <div className="ServiceCardHaederWp">
                    <h4 className="ServiceCardHeading" itemProp="name">{name}</h4>
                    <meta itemProp="serviceType" content="Разработка сайтов" />
                    <meta itemProp="provider" content="Cubro" />
                    <p className="ServiceCardText" itemProp="description">{descr}</p>
                </div>
            </article>
        </>
    )
}
