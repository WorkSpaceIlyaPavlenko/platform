import { ReactNode } from "react"
import { modalIntreface } from "./model/modalSlice"
import { updateModalProps } from "@/widgets/ServiceBlock"

export type OrderApplicationProps = {
    children:(
        // stage:number,
        // onClick:(newStage:number) => void,
        
        action:(modalKey:string, modalConf:modalIntreface) => void
    ) => ReactNode,
    handleApllication:(item:updateModalProps) => void,
    name:string
} 