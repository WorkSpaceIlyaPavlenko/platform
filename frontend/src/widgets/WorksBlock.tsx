import { WORKS_DATA } from "@/shared/CONST";
import WorksCard from "@/shared/ui/card/WorksCard";

export default function WorksBlock(){
    return (
        <section id="Works" className="container no-wrap">
            <h3 className='sectionHeading'>Наши работы</h3>
            <div className="WorksBlockCardWp">
                {WORKS_DATA.map(work => (
                    <WorksCard 
                    key={work.name+work.descr}
                    name={work.name}
                    descr={work.descr}
                    imgUrls={work.imgUrls}
                    />
                ))}
            </div>
            
        </section>
    )
}