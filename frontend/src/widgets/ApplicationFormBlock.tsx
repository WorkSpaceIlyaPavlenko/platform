import OrderApplicationForm from "@/features/order/components/OrderApplicationForm";
import Image from "next/image";
import ApplicationImg from '@/shared/assets/imgs/ApplicationImg.webp'

export default function ApplicationFormBlock(){
    return (
        <section id="Connection" className="container">
            <h3 className='sectionHeading'>Обратная связь</h3>
            <div className="ApplicationFormBlockWp">
                <OrderApplicationForm/>
                <Image
                src={ApplicationImg}
                alt={'ApplicationFormImg'}
                className="ApplicationFormBlockImage"
                />
            </div>
        </section>
    )
}