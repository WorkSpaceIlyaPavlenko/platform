'use client'

// import Image from 'next/image'
import '../index.css'
import CrossSvg from '@/shared/assets/svg/CrossSvg.svg'

type Props = {
    closeModal:() => void
}
export default function BtnModalClose({closeModal}:Props){
    return (
        <button className="ModalCloseBtn" onClick={() => closeModal()}>
            <CrossSvg className='ModalCloseBtnSvg'/>
            {/* <Image
            src={CrossSvg}
            alt={'ModalWindowClose'}
            className='ModalCloseBtnSvg'
            /> */}
        </button>
    )
}