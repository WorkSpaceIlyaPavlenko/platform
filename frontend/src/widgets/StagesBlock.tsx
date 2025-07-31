import { STAGES_LIST } from "@/shared/CONST";
import StageCard from "@/shared/ui/card/StageCard";


export default function StagesBlock(){
    return (
        <section className='container' id='Stages'>
            <h3 className='sectionHeading'>Этапы</h3>
            {STAGES_LIST.map(stage => (
                <StageCard 
                key={stage.name + stage.imgUrl}
                name={stage.name}
                descr={stage.descr}
                imgUrl={stage.imgUrl}
                />
            ))}
        </section>
    )
}