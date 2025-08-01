'use client'

import { useOrderApplicForm } from "../hooks/useOrderApplicForm"
import { OrderApplication } from "../model/schema"
import '../index.css'

export default function OrderApplicationForm(){
    
    const {register, handleSubmit, formState:{errors}} = useOrderApplicForm()
    const handleForm = (data:OrderApplication) => {
        console.log('Форма отправлена', data)
    }
    return (
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

        </form>
    )
}