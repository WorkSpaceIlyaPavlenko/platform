// import { AppDispatch, RootState } from "@/store/store";
// import { useDispatch } from "react-redux";
// import { createOrToogleModal, modalIntreface } from "../model/modalSlice";
// import { getTargetModalConf } from "../model/secletors";
// import { useSelector } from "react-redux";

// const dispatch = useDispatch<AppDispatch>()
// type ModalUpdate = Partial<modalIntreface>
// export const createModalConfiguration = (keyModal:string, conf:ModalUpdate):modalIntreface => {
//         const currentModalConf =  useSelector((st:RootState) => getTargetModalConf(st, keyModal))
//         if(!currentModalConf.status){
            
//         }
//         const createConf = {...conf};
//     return conf
// }
// export const modalNav = () => {

// }
// export const toggleModal = (keyModal:string, conf:modalIntreface) => {
//     dispatch(createOrToogleModal({key:keyModal, modal:createModalConfiguration(conf)}))
// }

