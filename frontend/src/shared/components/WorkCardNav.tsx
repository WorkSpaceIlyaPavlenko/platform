'use client'

import Image from "next/image"
import { ImgInterface, WorksCardProps } from "../ui/card/type"
import React, {  memo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import ArrowSvg from "@/shared/assets/svg/ArrorSvgV2.svg"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/store/store"
import { createOrToogleModal, modalIntreface } from "@/features/modal/model/modalSlice"
import {  AddOptionalField } from "../utils/type"

const keymodal = 'WorksImgModal' 

type WorkCardImgsProps = AddOptionalField<Pick<WorksCardProps, "imgUrls">, "indx", number>

const WorkCardNav = ({imgUrls ,indx}:WorkCardImgsProps) => {
    
    const dispatch = useDispatch<AppDispatch>()
    const [idx, setIdx] = useState(indx || 0)
    const modalInfo = (status:boolean) => {
        const conf : modalIntreface<{ imgs: ImgInterface[], curIdx: number }> = {
            id: 222,
            name: 'WorksImgModalImgs',
            status,
            priority: 8,
            steps: imgUrls.length,
            more: {
                imgs: imgUrls,
                curIdx: idx
            }
        };
        return conf
    }
    const toggleModal = (modalKey:string, modalConf:modalIntreface) => {
        dispatch(createOrToogleModal({key:modalKey, modal:modalConf}))
    }
    const handleModalClick = () => {
        const conf = modalInfo(true)
        toggleModal(keymodal, conf);
    };
    return (
        <>
            <button className="WorkCardNavBtn Left" 
            onClick={() => {
                setIdx((prev) => (prev - 1 < 0) ? imgUrls.length - 1 : prev - 1 )
                modalInfo(false);
            }}>
                <Image src={ArrowSvg} alt="Arrrow Svg Left" className="ArrowSvg Left"/>
            </button>
            <button className="WorkCardNavBtn Right"
            onClick={() => {
                setIdx(prev => (prev + 1) % imgUrls.length)
                modalInfo(false);
            }}>
                <Image src={ArrowSvg} alt="Arrrow Svg Right" className="ArrowSvg Right"/>
            </button>
             <div className="WorksCardImgsWp" onClick={() => handleModalClick()}>
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
                        priority
                        />
                    </motion.div>
                </AnimatePresence>
             </div>
        </>
    )
}
export default memo(WorkCardNav)