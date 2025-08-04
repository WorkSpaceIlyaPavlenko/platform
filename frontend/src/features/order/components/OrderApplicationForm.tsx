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

        await new Promise(res => setTimeout(() => {
            
            newStatus = "success"
            setStatus(newStatus)
            reset()
            res("ok");
        }, 3000))

        console.log('Форма отправлена', data)
        await new Promise(res => setTimeout(() => {
            
            newStatus = "none"
            setStatus(newStatus)
            res("ok");
        }, 1000))
        
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
                        <p style={{ color: 'red' }}>{errors.name.message}</p>
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
                        <p style={{ color: 'red' }}>{errors.email.message}</p>
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