'use client'

import { useOrderApplicForm } from "../hooks/useOrderApplicForm"
import { OrderApplication } from "../model/schema"
import '../index.css'
import { useState } from "react"
import Image from "next/image"
import SvgSucc from '@/shared/assets/svg/SuccessSvg.svg'
import WaitSvg from '@/shared/assets/svg/WaitSvg.svg'
import CrossSvg from '@/shared/assets/svg/CrossSvg.svg'


type StusType = 'pending' | 'none' | 'failed' | 'success'


export default function OrderApplicationForm(){
    
    const {register, handleSubmit, reset, formState:{errors}} = useOrderApplicForm()
    const [status, setStatus] = useState('none')


    const handleForm = async (data:OrderApplication) => {
        var newStatus:StusType = 'pending';
        
        setStatus(newStatus)

        try {
            const res = await fetch("http://localhost:7070/api/telegram/form", {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if (!res.ok) throw new Error("Request failed")

            newStatus = "success"
            setStatus(newStatus)
            reset()
            } catch (err) {
            newStatus = "failed"
            setStatus(newStatus)
            }finally{
                setTimeout(() => {
                    newStatus = "none"
                    setStatus(newStatus)
                },3000) 
            }


        
    }
    return (
        <>
            {
                status != 'none' && (
                    <div className="OrderApplicationFormStatutBoxWp">
                        {status === 'pending' ? <Image
                        src={WaitSvg}
                        alt="WaitSvg"
                        className="OrderApplicationFormStatutBoxWpSvgSize WaitSvgAnim"
                        /> : status === "success" ? <Image
                        src={SvgSucc}
                        alt="SvgCucc"
                        className="OrderApplicationFormStatutBoxWpSvgSize"
                        /> : <Image
                        src={CrossSvg}
                        alt="CrossSvg"
                        className="OrderApplicationFormStatutBoxWpSvgSize"
                        />}
                    </div>
                )
            }
            <form
            className="OrderApplicationFormWp"  
            onSubmit={handleSubmit(handleForm)}>
                <h5 className="OrderApplicationFormHeaing">Есть вопросы, напиши нам !</h5>

                <div className="OrderApplicationFormInputWp">
                    <p className="OrderApplicationFormInputText">Как вас зовут</p>
                    <input
                    id="name"
                    {...register('name')}
                    className="OrderApplicationFormInput"
                    type="text" />
                    {errors.name && 
                        <p style={{ color: 'red' }} className="OrderApplicationFormInputTextError">{errors.name.message}</p>
                    }
                </div>

                <div className="OrderApplicationFormInputWp">
                    <p className="OrderApplicationFormInputText">Ваш email</p>
                    <input 
                    id="email"
                    {...register('email')}
                    className="OrderApplicationFormInput" 
                    type="text" />
                    {errors.email && 
                        <p style={{ color: 'red' }} className="OrderApplicationFormInputTextError">{errors.email.message}</p>
                    }
                </div>

                <div className="OrderApplicationFormInputWp">
                    <p className="OrderApplicationFormInputText">Мессенджер для связи</p>
                    <input 
                    id="telegramm"
                    {...register('telegramm')}
                    className="OrderApplicationFormInput" 
                    type="text" />
                </div>

                <div className="OrderApplicationFormInputWp">
                    <p className="OrderApplicationFormInputText">Сообщение</p>
                    <textarea 
                    id="comment" 
                    {...register('comment')}
                    className="OrderApplicationFormInput"
                    />
                </div>

                <button className="DefButtonWp"  id="OrderApplicationFormBtnSubmit" type="submit">
                    <p className="DefButtonText" >Отправить</p>
                </button>

            </form>
        </>
    )
}