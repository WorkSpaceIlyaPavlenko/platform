'use client'

import OrderApplication from '@/features/modal/components/OrderApplication'
import { setOrderApplication } from '@/features/order/model/orderSlice';
import {DEVELOP_SRVICE_LIST, DevelopServiceList } from '@/shared/CONST'
import ServiceCard from '@/shared/ui/card/ServiceCard'
import { AppDispatch } from '@/store/store';
import { useDispatch } from 'react-redux';
import './index.css'

export type updateModalProps = {
    typeService?:string;
    clientPhone?:string;
    clientTelegram?:string;
    comment?:string 
}

export default function ServiceBlock(){

    const dispatch = useDispatch<AppDispatch>()

    const updateModal= (item:updateModalProps) => {
        const categoryService = 'develop';
        const data = {
            categoryService,
            ...item
        }
        dispatch(setOrderApplication(data));
    }
    // const handleModal = ((modalKey:string, modalConf:modalIntreface) => action(modalKey,modalConf)) => {
    //     updateModal({});
    //     action(modalKey, modalConf)

    // }

    return (
        <section className='container' id='Services'>
            <h3 className='sectionHeading'>Разработка</h3>
            {DEVELOP_SRVICE_LIST.map((block:DevelopServiceList, index) => (
                <OrderApplication key={block.name + block.descr} 
                handleApllication={(item:updateModalProps) => updateModal(item)} 
                name={block.name}
                >
                    {(action) => (
                        <ServiceCard
                        action={() => {
                            action('applicatonService', {
                                id:index,
                                name:block.name,
                                status:true,
                                priority:3,
                                steps:2
                            }); 
                            updateModal({
                                typeService:block.name
                            })
                        }} 
                        imgUrl={block.imgUrl}
                        name={block.name}
                        descr={block.descr}
                        />
                        
                    )}     
                </OrderApplication>
            ))}
        </section>
    )
}