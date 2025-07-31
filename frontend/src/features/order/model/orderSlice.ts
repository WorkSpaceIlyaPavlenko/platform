import { createSlice } from "@reduxjs/toolkit";


export interface orderAppIntreface{
    categoryService:string;   //develop, disayn, seo
    typeService:string;
    clientPhone:string;
    clientTelegram:string;
    comment:string;
}

const initialStaterOderApplication : orderAppIntreface = {
    categoryService:'',
    typeService:'',
    clientPhone:'',
    clientTelegram:'',
    comment:''
}

const orderCreateAllpicationSlice  = createSlice({
    name:'orderCreateAllpicationSlice',
    initialState:initialStaterOderApplication,
    reducers:{
        setOrderApplication:(st, ac) => {
            return { ...st, ...ac.payload };
        }
    }
})

export const {setOrderApplication} = orderCreateAllpicationSlice.actions
export default orderCreateAllpicationSlice