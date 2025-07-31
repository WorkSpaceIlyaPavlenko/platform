import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface modalIntreface<T = any>{
    id?:number
    name?:string
    steps?:number
    status:boolean
    priority?:number
    more?:T
}

export interface modalSlocwInitialSate{
    [modalKey:string]:modalIntreface
    
}

const modalLimit = 10;
const initialState : modalSlocwInitialSate = {}

const modelSlice = createSlice({
    name:'modelSlice',
    initialState,
    reducers:{
        createOrToogleModal:(st, ac :PayloadAction<{key:string; modal:modalIntreface}>) => {
            if(Object.hasOwn(st, ac.payload.key)){
                st[ac.payload.key] = ac.payload.modal;
            }else{
                st[ac.payload.key] = ac.payload.modal;
            }
        },
        closeTargetModal:(st,ac :PayloadAction<{key:string}>) => {
            if(Object.hasOwn(st, ac.payload.key))
                delete st[ac.payload.key]
        }
    }
})

export const {createOrToogleModal,closeTargetModal} = modelSlice.actions
export default modelSlice