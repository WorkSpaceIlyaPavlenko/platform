'use client'

import Image from "next/image"
import { WorksCardProps } from "../ui/card/type"
import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import ArrowSvg from "@/shared/assets/svg/ArrorSvgV2.svg"

type WorkCardImgsProps = Pick<WorksCardProps, "imgUrls">
const WorkCardNav = React.memo(function({imgUrls}:WorkCardImgsProps){
    const [idx, setIdx] = useState(0)
    return (
        <>
            <button className="WorkCardNavBtn Left" 
            onClick={() => setIdx((prev) => (prev - 1 < 0) ? imgUrls.length - 1 : prev - 1 
            )}>
                <Image src={ArrowSvg} alt="Arrrow Svg Left" className="ArrowSvg Left"/>
            </button>
            <button className="WorkCardNavBtn Right"
            onClick={() => setIdx(prev => (prev + 1) % imgUrls.length)}
            >
                <Image src={ArrowSvg} alt="Arrrow Svg Right" className="ArrowSvg Right"/>
            </button>
             <div className="WorksCardImgsWp">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imgUrls[idx].id}
                        initial={{ opacity: 0,  }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0,  }}
                        transition={{ duration: 0.4 }}
                        className="WorksCardImg"
                    >
                        <Image
                        key={imgUrls[idx].id}
                        src={imgUrls[idx].url}
                        alt={`${imgUrls[idx].url}`}
                        className="WorksCardImg"
                        blurDataURL={imgUrls[idx].url.blurDataURL}
                        />
                    </motion.div>
                </AnimatePresence>
             </div>
        </>
    )
})
export default WorkCardNav