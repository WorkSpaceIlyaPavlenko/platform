'use client'

import { ORDER_APPLICATION_VARIANTS } from "@/shared/CONST"
import { updateModalProps } from "@/widgets/ServiceBlock"
// import Image from "next/image"
import Link from "next/link"

type Props = {
    handleApllication:(item:updateModalProps) => void
    changeStage:() => void
    closeModal: () => void
}

export default function SeclectTypeForAppclication({handleApllication, changeStage,closeModal}:Props){
    return (
        <div className="SeclectTypeForAppclicationWp">
        <h5 className="ModalTextHeading">Выберите удобный способ оформления заказа</h5>
        <div className="SeclectTypeForAppclicationBtnsWp">
            {ORDER_APPLICATION_VARIANTS.map(item => {
                // if(item.getResult === 'telegram') 
                //     return( <button className="SeclectTypeForAppclicationBtn"
                //     style={{backgroundColor:item.backGround}} 
                //     key={item.getResult}
                //     onClick={() => {
                //         handleApllication({typeService:item.getResult});
                //         changeStage();
                //     }}
                //     >
                //         <Image
                //         src={item.icon}
                //         alt="SvgIcon"
                //         className="SeclectTypeForAppclicationSvg"
                //         />
                //         {item.name}
                //     </button>)
                // else return 
                    return <Link 
                    className="SeclectTypeForAppclicationBtn"
                    style={{backgroundColor:item.backGround}} 
                    key={item.getResult}
                    href={item.endpoint || ''}
                    target={item.getResult ==='telegram' ? '_blank' : ''}
                    onClick={() => {
                        handleApllication({typeService:item.getResult});
                        changeStage();
                        closeModal();
                    }}
                    >
                        {/* <Image
                        src={item.icon}
                        alt="SvgIcon"
                        className="SeclectTypeForAppclicationSvg"
                        /> */}
                        {item.name}
                    </Link>
            })}
        </div>
        </div>
    ) 
}