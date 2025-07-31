'use client'



type Props = {
    totalStageCount:number
    currentStage:number,
    changeStage:(newStage:number) => void
}
export default function ModalNavigation({totalStageCount, changeStage, currentStage}:Props){
    return (
        <>
            {
                (currentStage != 1) && 
                <button className="ModalNavigationBtn Prev">
                    Лево
                </button>
            }
            {
                (currentStage != totalStageCount) && 
                <button className="ModalNavigationBtn Next">
                    Право
                </button>
            }
            
        </>
    )
}