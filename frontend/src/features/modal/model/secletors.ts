import { RootState } from "@/store/store"
import { modalIntreface } from "./modalSlice"
type ModalMissing  = { status: false };

export const selectModalByKey = (st:RootState, keyModal:string, name:string): boolean => {
    return (st.modal[keyModal]?.status && st.modal[keyModal]?.name == name) ?? false
}
export const getTargetModalConf =<T = unknown>(st:RootState , keyModal:string) :modalIntreface<T> | ModalMissing => {
    const raw = st.modal[keyModal] as modalIntreface<unknown> | undefined;
    if (raw?.status) {
        return { ...(raw as modalIntreface<T>), status: true };
    }
    return { status: false }
    
}