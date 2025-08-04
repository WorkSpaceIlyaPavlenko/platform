import Image from "next/image";
import { LogoImg } from "@/shared/assets/imgs/import";
import Link from "next/link";

export default function ButtonHome(){
    return (
        <Link className="HeaderButtonsWp" href={'/'}>
            <Image
            src={LogoImg}
            alt={'LogoImgs'}
            width={100}
            height={100}
            />
        </Link>
    )
}