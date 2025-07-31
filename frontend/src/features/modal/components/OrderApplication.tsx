'use client'
import '../index.css'
import { useState } from "react"
import { OrderApplicationProps } from '../type'
import { closeTargetModal, createOrToogleModal, modalIntreface } from '../model/modalSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import { getTargetModalConf, selectModalByKey } from '../model/secletors'
import BtnModalClose from '../ui/BtnModalClose'
import ModalNavigation from '../ui/ModalNavigation'
import SeclectTypeForAppclication from '../ui/SeclectTypeForAppclication'
import { updateModalProps } from '@/widgets/ServiceBlock'

const keymodal = 'applicatonService' 

export default function OrderApplication({children, handleApllication, name}:OrderApplicationProps){
    const [stage, setStage] = useState<number>(1)
    const dispatch = useDispatch<AppDispatch>()

    const isActive  = useSelector((st:RootState) => selectModalByKey(st, keymodal, name))
    const modalConf =  useSelector((st:RootState) => getTargetModalConf(st, keymodal))

    const changeStage = (newStage:number) => {
        if(newStage != stage && newStage > 0 && newStage < 3){
            setStage(newStage)
        }
    }
    const toggleModal = (modalKey:string, modalConf:modalIntreface) => {
        dispatch(createOrToogleModal({key:modalKey, modal:modalConf}))
    }

    const closeModal = () => {
        dispatch(closeTargetModal({key:keymodal}))
        setStage(1)
    }
    return (
        <>
            {children(
            (modalKey:string, modalConf:modalIntreface) => toggleModal(modalKey,modalConf)
            )}
            {
                isActive && 
                <div className='OrderApplicationModalWrapper' style={{zIndex:modalConf.priority}}>
                    <BtnModalClose closeModal={() => closeModal()}/>
                    {
                        stage === 1 && <SeclectTypeForAppclication
                        handleApllication={(item:updateModalProps) => handleApllication(item)}
                        changeStage={() => changeStage(stage + 1)}
                        closeModal={() => closeModal()}
                        />
                    }
                    {
                        stage == 2 && <>
                            Hello suchks
                        </>
                    }
                    
                    {/* <ModalNavigation
                    changeStage={(newStage:number) => changeStage(newStage)}
                    currentStage={stage}
                    totalStageCount={modalConf.steps || 1}
                    /> */}
                </div>
            }
            
        </>
    )
}