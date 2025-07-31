import Image from "next/image";
import Logo from '@/shared/assets/imgs/Logo.webp'
import Link from "next/link";

export default function ButtonHome(){
    return (
        <Link className="HeaderButtonsWp" href={'/'}>
            <Image
            src={Logo}
            alt={'LogoImgs'}
            width={100}
            height={100}
            />
        </Link>
    )
}