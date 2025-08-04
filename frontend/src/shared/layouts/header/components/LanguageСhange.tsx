import { ReactNode } from "react"

type LanguageСhangePorps = {
    children:() => ReactNode
} 
export default function LanguageСhange({children}:LanguageСhangePorps){


    
    return (<>{children()}</>)
}