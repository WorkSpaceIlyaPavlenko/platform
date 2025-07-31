import './index.css'
import ThemeButton from './ui/ThemButton'
import BtnChangeLn from './ui/ButtoСhangeLn'

import LoginButton from './ui/LoginButton'
import Navigation from './components/Navigation'
import ButtonHome from './ui/ButtonHome'

export default function Header(){

    return(
        <header className='HeaderWp'>
            <ButtonHome/>
            <Navigation/>
            <div className='HeaderGroupLoginAndToogles'>
                <div className='heaedrsTooglesWp'>
                    <ThemeButton/>
                    <BtnChangeLn/>
                </div>
                <LoginButton/>
            </div>
        </header>
    )
}