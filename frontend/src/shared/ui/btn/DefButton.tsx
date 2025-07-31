'use client'

import { DefButtonProps } from "./type"
import './style.css'
export default function DefButton({action, nameAction, children}:DefButtonProps){
    return (
        <button className="DefButtonWp" onClick={() => action()}>
            {children}
            <p className="DefButtonText" >{nameAction}</p>
        </button>
    )
}