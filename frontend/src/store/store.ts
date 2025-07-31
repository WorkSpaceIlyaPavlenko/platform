import baseApi from "@/shared/api/baseApi";
import { configureStore } from "@reduxjs/toolkit";
import { slices } from "./import";
import orderCreateAllpicationSlice from "@/features/order/model/orderSlice";
import modelSlice from "@/features/modal/model/modalSlice";

// const slicesReducers = Object.fromEntries(
//     Object.values(slices).map((slice) => [ slice.name, slice.reducer])
// );

export const makeStore = () => {
    return configureStore({
        reducer:{
            [baseApi.reducerPath]: baseApi.reducer,
            order:orderCreateAllpicationSlice.reducer,
            modal:modelSlice.reducer
        },
        middleware:(getDefaultMiddleware) => getDefaultMiddleware({

        }).concat(baseApi.middleware)
    })
}
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']