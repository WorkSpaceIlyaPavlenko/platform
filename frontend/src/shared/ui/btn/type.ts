import { ReactNode } from "react";

export interface DefButtonProps{
    action: () => void;
    nameAction:string;
    children?:ReactNode;
}