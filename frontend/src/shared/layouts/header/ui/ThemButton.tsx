'use client'
// import Image from "next/image";
import ToggleThemeWp from "../components/ToggleThemeWp"
// import ThemeSvg from '@/shared/layouts/header/assets/ThemeSvg.svg'
// import ThemeSvgL from '@/shared/layouts/header/assets/ThemeSvgLight.svg'
import ThemeSvg from '@/shared/layouts/header/assets/ThemeSvg.svg'
export default function ThemeButton() {

  return (
    <ToggleThemeWp>
      {(toggleTheme) => (
        <button className="ThemeButtonWp" onClick={toggleTheme} aria-label="Toggle theme">
            <ThemeSvg className='ThemeButtonSvg' />
        </button>
      )}
    </ToggleThemeWp>
  );
}