import MotionAppear from "@/shared/components/MotionApper";
import { STAGES_LIST } from "@/shared/CONST";
import StageCard from "@/shared/ui/card/StageCard";


export default function StagesBlock(){
    return (
        <section id='Stages'>
            <MotionAppear classCss="container">

                <h3 className='sectionHeading'>Этапы</h3>
                
                {STAGES_LIST.map(stage => (
                    <StageCard 
                    key={stage.name + stage.imgUrl}
                    name={stage.name}
                    descr={stage.descr}
                    imgUrl={stage.imgUrl}
                    dopImg={stage.dopImg}
                    />
                ))}
            
            </MotionAppear>
        </section>
    )
}