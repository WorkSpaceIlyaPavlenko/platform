import { useForm } from "react-hook-form";
import { OrderApplication, OrderApplicationSchema } from "../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export function useOrderApplicForm(initialValues?: Partial<OrderApplication>){
    return useForm<OrderApplication>({
        resolver:zodResolver(OrderApplicationSchema),
        defaultValues:{
            name:'', 
            email:'', 
            telegramm:'', 
            comment:'',
            ...initialValues
        },
        mode:'onBlur'
    })
}