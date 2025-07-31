import ServiceBlock from "@/widgets/ServiceBlock";
import StagesBlock from "@/widgets/StagesBlock";
import './globals.css'
import ApplicationFormBlock from "@/widgets/ApplicationFormBlock";
import WorksBlock from "@/widgets/WorksBlock";

export default function Main() {
  return (
    <main className="flex-trap">
        <ServiceBlock/>
        <StagesBlock/>
        <ApplicationFormBlock/>
        <WorksBlock/>
    </main>
  );
}
