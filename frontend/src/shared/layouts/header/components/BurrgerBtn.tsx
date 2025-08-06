'use client'
import Image from "next/image"
import BurrgerSvg from "@/shared/layouts/header/assets/BurgerSvg.svg"


type BurrgerBtnProps = {
    toggleModal: () => void
}

export default function BurrgerBtn({toggleModal}:BurrgerBtnProps){
    return (
        <button className="HeaderButtonsWp NoDes MobailBtn" onClick={() => toggleModal()}>
            <Image
            src={BurrgerSvg}
            alt={'BurrgerSvg'}
            className=""
            />
        </button>
    )
}