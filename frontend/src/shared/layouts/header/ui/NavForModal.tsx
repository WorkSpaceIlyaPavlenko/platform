import { NAV_LIST } from "@/shared/CONST";
import Image from "next/image";
import ArrowSvg from '@/shared/assets/svg/ArrowSvg.svg'

type NavForModalProps = {
    tooggleModal: () => void
}
export default function NavForModal({tooggleModal}:NavForModalProps){
    return (
        <>
        {NAV_LIST.map(el => (
            <a
                key={el.name + el.targetId + 'ModalMob'} 
                href={`#${el.targetId}`}
                className="NavForModalLink"
                onClick={() => tooggleModal()}
                >
                    <div className="NavForModalRoundWp">
                        <Image
                        src={ArrowSvg}
                        alt="ArrowSvg"
                        width={41}
                        height={20}
                        className="WorksBlockPostiton"
                        />
                    </div>
                    {el.name}
                </a>
        ))}
        </>
    )
}