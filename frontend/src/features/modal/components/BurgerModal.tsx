import { AppDispatch, RootState } from "@/store/store";
import { useDispatch } from "react-redux";
import { closeTargetModal, createOrToogleModal, modalIntreface } from "../model/modalSlice";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { getTargetModalConf, selectModalByKey } from "../model/secletors";



const keyModal = 'header'
const nameModal = 'headerWindows'

type BurgerModalProps = {
    children: (
        toggleModal:() => void,
        closeModal:() =>  void,
        isActive:boolean,
        modalConf:modalIntreface
    ) => ReactNode
}
export default function BurgerModal({children}:BurgerModalProps){
    const dispatch = useDispatch<AppDispatch>()
    
    const modalInfo = (status:boolean) => {
            const conf  = {
                id: 123,
                name: nameModal,
                status,
                priority: 10,
                steps: 1,
            };
            return conf
    }
    const toggleModal = () => {
        dispatch(createOrToogleModal({key:keyModal, modal:modalInfo(true)}))
    }
    const closeModal = () => {
        dispatch(closeTargetModal({key:keyModal}))
    }
    const isActive  = useSelector((st:RootState) => selectModalByKey(st, keyModal, nameModal))
    const modalConf =  useSelector((st:RootState) => getTargetModalConf(st, keyModal))
    return (
        <>
            {children(
                () => toggleModal(),
                () => closeModal(),
                isActive,
                modalConf
            )}
        </>
    )
}