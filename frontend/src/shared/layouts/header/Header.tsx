'use client'
import './index.css'
import ThemeButton from './ui/ThemButton'
import BtnChangeLn from './ui/ButtoСhangeLn'

import LoginButton from './ui/LoginButton'
import Navigation from './components/Navigation'
import ButtonHome from './ui/ButtonHome'
import { useEffect, useRef, useState } from 'react'
import BurrgerBtn from './components/BurrgerBtn'
import BurgerModal from '@/features/modal/components/BurgerModal'
import BurgerModalWindows from '@/features/modal/ui/BurgerModalWindows'


export default function Header(){
    const [show, setShow] = useState<boolean>(true);
    const scrollOffset = useRef(0);
    useEffect(() => {
        scrollOffset.current = window.scrollY;
        const calculateScroll = () => {
            var currentScroll = window.scrollY;
            if (
                currentScroll > scrollOffset.current &&
                currentScroll - scrollOffset.current > 100
            ) {
                scrollOffset.current = currentScroll;
                setShow((prev) => prev = false);
            } else if (
                currentScroll < scrollOffset.current &&
                scrollOffset.current - currentScroll > 50
            ) {
                scrollOffset.current = currentScroll;
                setShow((prev) => prev = true);
            }
        };

        window.addEventListener('scroll', calculateScroll);
        return () => window.removeEventListener('scroll', calculateScroll);
    }, []);

    return(
        <>
        <header className={`HeaderWp ${!show ?  'HeaderWpHidden' : ''}`}>
            <ButtonHome/>
            <Navigation/>
            <div className='HeaderGroupLoginAndToogles'>
                <div className='heaedrsTooglesWp'>
                    <ThemeButton/>
                    <BtnChangeLn/>
                </div>
                <LoginButton/>
                
            </div>
            <BurgerModal>
                {(toggleModal) => (
                    <BurrgerBtn toggleModal={() => toggleModal()}/>
                )}
            </BurgerModal>
        </header>
        <BurgerModal>
            {(toggleModal, closeModal , isActive, modalConf) => (
                <BurgerModalWindows 
                toggleWindow={() => toggleModal()}
                closeModal={() => closeModal()}
                isActive={isActive}
                modalConf={modalConf}
                />
            )}
        </BurgerModal>
        </>
    )
}