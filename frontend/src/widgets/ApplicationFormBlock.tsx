import OrderApplicationForm from "@/features/order/components/OrderApplicationForm";
import Image from "next/image";
import ApplicationImg from '@/shared/assets/imgs/any/ApplicationImg.webp'
import ApplicationImgDop from '@/shared/assets/imgs/any/AppliacitonBlock.webp'

export default function ApplicationFormBlock(){
    return (
        <section id="Connection" className="container">
            <h3 className='sectionHeading'>Обратная связь</h3>
            <div className="ApplicationFormBlockWp">
                <OrderApplicationForm/>
                <div className="ApplicationFormBlockBackImgsWpp">
                    <Image
                    src={ApplicationImg}
                    alt={'Фото: ApplicationFormImg'}
                    className="ApplicationFormBlockImage"
                    blurDataURL={ApplicationImg.blurDataURL}
                    priority
                    />
                    <Image
                    src={ApplicationImgDop}
                    alt={"Дополниеильное фото"}
                    className="ApplicationFormBlockImageDop"
                    blurDataURL={ApplicationImgDop.blurDataURL}
                    />
                </div>
                
            </div>
        </section>
    )
}