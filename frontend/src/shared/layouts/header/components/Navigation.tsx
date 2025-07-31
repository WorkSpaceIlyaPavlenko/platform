import { NAV_LIST } from "@/shared/CONST";

export default function Navigation(){
    return (
        <nav className="HeaderNavogationWp">
            {NAV_LIST.map(el => 
                <a
                key={el.name + el.targetId} 
                href={`#${el.targetId}`}
                >
                    {el.name}
                </a>
            )}
        </nav>
    )
}