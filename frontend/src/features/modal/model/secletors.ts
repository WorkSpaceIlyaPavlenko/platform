import { RootState } from "@/store/store"
import { modalIntreface } from "./modalSlice"

export const selectModalByKey = (st:RootState, keyModal:string, name:string): boolean => {

    return (st.modal[keyModal]?.status && st.modal[keyModal]?.name == name) ?? false
}
export const getTargetModalConf = (st:RootState , keyModal:string) :modalIntreface<any> => {
    const m = st.modal[keyModal];
    if(m){
        return m
    }else return { status: false }
    
}