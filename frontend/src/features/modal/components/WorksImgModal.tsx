'use client'
import { AppDispatch, RootState } from "@/store/store"

import { useSelector } from "react-redux"
import { getTargetModalConf, selectModalByKey } from "../model/secletors"
import { useDispatch } from "react-redux"
import { closeTargetModal, modalIntreface } from "../model/modalSlice"
import WorkCardNav from "@/shared/components/WorkCardNav"
import CrossSvg from "@/shared/assets/svg/CrossSvg.svg"
// import Image from "next/image"
import { ImgInterface } from "@/shared/ui/card/type"

const keymodal = 'WorksImgModal'
const name = 'WorksImgModalImgs'
export type MorelWorksDataType = {
    
        imgs: ImgInterface[],
        curIdx: number
    
}
export default function WorksImgModal(){
    const dispatch = useDispatch<AppDispatch>()
    const isActive  = useSelector((st:RootState) => selectModalByKey(st, keymodal, name))
    const modalConf : modalIntreface<MorelWorksDataType> =  useSelector((st:RootState) => getTargetModalConf<MorelWorksDataType>(st, keymodal))
    const closeModal = () => {
        dispatch(closeTargetModal({key:keymodal}))
    }
    return (
        <>
        {isActive && <div className="WorksImgModalWp" style={{zIndex:modalConf.priority}} >
            <button className="WorksImgModalBtn" onClick={() => closeModal()}>
                <CrossSvg className='WorksImgModalBtnSvg' />
                {/* <Image
                src={CrossSvg}
                alt={'CrossSvg'}
                className="WorksImgModalBtnSvg"
                /> */}
            </button>
            <WorkCardNav imgUrls={ modalConf.more?.imgs ?? []} indx={ modalConf.more?.curIdx ?? 0} key={'WorksImgModal'}/>
        </div>}
        </>
        
    )
}