'use client'

import { ReactNode } from "react"


type UserLoginProps = {
    children:() => ReactNode
}
export default function UserLogin({children}:UserLoginProps){
    //slice loigic
    return (<>{children()}</>)
}