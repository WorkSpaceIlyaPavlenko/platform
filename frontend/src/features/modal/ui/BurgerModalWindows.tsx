'use client'
import NavForModal from "@/shared/layouts/header/ui/NavForModal"
import ThemeButton from "@/shared/layouts/header/ui/ThemButton"
import BtnChangeLn from '@/shared/layouts/header/ui/ButtoСhangeLn'
import { modalIntreface } from "../model/modalSlice"
import Image from "next/image"
import CrossSvg from "@/shared/assets/svg/CrossSvg.svg"
import { AnimatePresence} from "framer-motion"

type BurgerModalWindowsProps = {
    toggleWindow:() => void,
    closeModal:() => void,
    isActive:boolean,
    modalConf:modalIntreface
}
export default function BurgerModalWindows({ closeModal ,isActive, modalConf}:BurgerModalWindowsProps){
    return (
        <>
        <AnimatePresence mode="wait">
        {isActive && <div className="BurgerModalWindowsWp" style={{zIndex:modalConf.priority}}>
            <button className="BurgerModalWindowsBtnClose" onClick={() => closeModal()}>
                 <Image
                    src={CrossSvg}
                    alt={'CrossSvg'}
                    className="WorksImgModalBtnSvg"
                    />
            </button>
            <div className="BurgerModalWindowsNavWp">
                <NavForModal tooggleModal={() => closeModal()}/>
            </div>
            <div className="BurgerModalWindowsButtonWp">
                <ThemeButton/>
                <BtnChangeLn/>
            </div>
        </div>}
        </AnimatePresence>
        </>
        
    )
}