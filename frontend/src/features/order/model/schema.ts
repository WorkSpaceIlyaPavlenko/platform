import z from "zod";




export const OrderApplicationSchema = z.object({
    name:z.string().min(1,{message:'Поле не может быть пустым'}),
    email:z.email({message:'Неверный формат почты'}),
    telegramm:z.string().optional().nullable(),
    comment:z.string().optional().nullable()
})
export type OrderApplication = z.infer<typeof OrderApplicationSchema>

