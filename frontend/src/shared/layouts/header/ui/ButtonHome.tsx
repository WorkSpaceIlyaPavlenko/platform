import Image from "next/image";
import { LogoImg } from "@/shared/assets/imgs/import";
import Link from "next/link";

export default function ButtonHome(){
    return (
        <Link className="HeaderButtonsWp MobailBtn" href={'/'}>
            <Image
            src={LogoImg}
            alt={'LogoImgs'}
            className="HeaderButtonsLogo"
            />
        </Link>
    )
}