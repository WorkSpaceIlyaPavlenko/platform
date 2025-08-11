'use client'

import { useTheme } from "next-themes"
import { ReactNode} from "react"
type ToggleThemeWpProps = {
    children:(toggle:() => void) => ReactNode
}
export default function ToggleThemeWp({children}:ToggleThemeWpProps){
    const { theme, setTheme } = useTheme()
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark': 'light')
    }
    return(
        <>{children(toggleTheme)}</>
    )
}