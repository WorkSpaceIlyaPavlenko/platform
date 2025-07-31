'use client'
import Image from "next/image";
import ToggleThemeWp from "../components/ToggleThemeWp"
import ThemeSvg from '@/shared/layouts/header/assets/ThemeSvg.svg'
import ThemeSvgL from '@/shared/layouts/header/assets/ThemeSvgLight.svg'

export default function ThemeButton({}){
    return(
        <ToggleThemeWp>
            {(theme, toggleTheme) => (
                <button className="ThemeButtonWp" onClick={toggleTheme}>
                    {theme == 'dark' ? 
                        <Image
                        src={ThemeSvg}
                        alt={'ThemeSvg'}
                        width={31}
                        height={31}
                        />:
                        <Image 
                        src={ThemeSvgL}
                        alt={'ThemeSvgL'}
                        width={31}
                        height={31}
                        />
                    }
                    
                    {/* <ThemeSvg className={`${theme  === 'dark' ? 'ThemeButtonDarkSvg' : 'ThemeButtonLightSvg'}`} /> */}
                </button>
            )}
        </ToggleThemeWp>
    )
}