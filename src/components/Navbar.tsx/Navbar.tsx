import React, { useState } from 'react'
import MobileNavPanel from './MovileNavPanel'
import NavPanel from './NavPanel'

type Props = {}

export default function Navbar({ }: Props) {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <>
            <MobileNavPanel openNavbar={() => setNavOpen(true)} className='fixed top-0 left-0 z-10 lg:hidden' />
            <div className={(navOpen ? "translate-x-0" : "translate-x-[100%]") + " transition-transform duration-300 fixed lg:hidden z-20 top-0 w-screen h-screen"}>
                <NavPanel className='absolute top-0 right-0 h-full flex w-full max-w-md' />
                <button className='absolute top-0 right-0 m-8 w-10 h-10 p-3' onClick={() => setNavOpen(false)}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g stroke='#DCEAFD' strokeWidth={2}>
                            <line x1="0" y1="0" x2="24" y2="24"/>
                            <line x1="0" y1="24" x2="24" y2="0"/>
                        </g>
                    </svg>
                </button>
            </div>
            <NavPanel className='sticky top-0 h-screen hidden w-0 lg:w-auto lg:flex' />
        </>
    )
}