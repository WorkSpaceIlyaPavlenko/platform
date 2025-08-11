'use client'

// import Image from "next/image"
import UserLogin from "../components/UserLogin"
import LoginSvg from '@/shared/layouts/header/assets/LoginSvg.svg'
import Link from "next/link"

export default function LoginButton(){
    return (
        <UserLogin>
            {() => (
            
                <Link className="HeaderButtonsWp" href={'/'}>
                    <LoginSvg className="LoginSvg" />
                    {/* <Image
                    src={LoginSvg}
                    alt={'LoginSvg'}
                    width={40}
                    height={40}
                     /> */}
                </Link>
            )}
        </UserLogin>
    )
}