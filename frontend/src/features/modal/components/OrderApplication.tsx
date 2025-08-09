'use client'
import '../index.css'
import {  useState } from "react"
import { OrderApplicationProps } from '../type'
import { closeTargetModal, createOrToogleModal, modalIntreface } from '../model/modalSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import { getTargetModalConf, selectModalByKey } from '../model/secletors'
import BtnModalClose from '../ui/BtnModalClose'
// import ModalNavigation from '../ui/ModalNavigation'
import SeclectTypeForAppclication from '../ui/SeclectTypeForAppclication'
import { updateModalProps } from '@/widgets/ServiceBlock'
import { setOrderApplication } from '@/features/order/model/orderSlice'

const keymodal = 'applicatonService' 

export default function OrderApplication({children, name}:OrderApplicationProps){
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

    const updateModal= (item:updateModalProps) => {
            const categoryService = 'develop';
            const data = {
                categoryService,
                ...item
            }
            dispatch(setOrderApplication(data));
    }

    

    return (
        <>
            {children(
            (modalKey:string, modalConf:modalIntreface) => toggleModal(modalKey,modalConf),
            (item:updateModalProps) => updateModal(item)
            )}
            {
                isActive && 
                <div className='OrderApplicationModalWrapper' style={{zIndex:modalConf.status ? modalConf.priority : 4}}>
                    <BtnModalClose closeModal={() => closeModal()}/>
                    {
                        stage === 1 && <SeclectTypeForAppclication
                        handleApllication={(item:updateModalProps) => updateModal(item)}
                        changeStage={() => changeStage(stage + 1)}
                        closeModal={() => closeModal()}
                        />
                    }
                </div>
            }
            
        </>
    )
}