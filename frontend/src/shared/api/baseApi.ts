import { createApi } from "@reduxjs/toolkit/query";
import { axiosBaseQuery } from "./axiosBaseQuery";



const baseApi = createApi({
    reducerPath:'api',
    baseQuery:axiosBaseQuery({
        baseUrl:'/api'
    }),
    tagTypes:[
        
    ],
    endpoints:() => ({})
})

export default baseApi