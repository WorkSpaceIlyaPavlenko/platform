'use client'
import Image from "next/image";
import ToggleThemeWp from "../components/ToggleThemeWp"
import ThemeSvg from '@/shared/layouts/header/assets/ThemeSvg.svg'
import ThemeSvgL from '@/shared/layouts/header/assets/ThemeSvgLight.svg'
import { useEffect, useState } from 'react';

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <ToggleThemeWp>
      {(theme, toggleTheme) => (
        <button className="ThemeButtonWp" onClick={toggleTheme} aria-label="Toggle theme">
          {/* Пока не смонтировались — показываем нейтральный плейсхолдер,
             чтобы HTML совпал на сервере и клиенте */}
          {!mounted ? (
            <span style={{ display: 'inline-block', width: 31, height: 31 }} />
          ) : theme === 'dark' ? (
            <Image src={ThemeSvg} alt="Theme icon" width={31} height={31} />
          ) : (
            <Image src={ThemeSvgL} alt="Theme icon" width={31} height={31} />
          )}
        </button>
      )}
    </ToggleThemeWp>
  );
}