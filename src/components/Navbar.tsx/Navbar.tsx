import React, { useState } from 'react'
import MobileNavPanel from './MovileNavPanel'
import NavPanel from './NavPanel'

type Props = {}

export default function Navbar({ }: Props) {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <>
            <MobileNavPanel openNavbar={() => setNavOpen(true)} className='fixed top-0 left-0 z-10 lg:hidden' />
            <div className={(navOpen?"translate-x-0":"translate-x-[100%]")+" transition-transform duration-300 fixed lg:hidden z-20 top-0 w-screen h-screen"}>
                <button className='absolute top-0 right-0  border m-8 p-5' onClick={()=>setNavOpen(false)}>x</button>
                <NavPanel className=' top-0 right-0 h-full flex w-full' />
            </div>
            <NavPanel className='sticky top-0 h-screen hidden w-0 lg:w-auto lg:flex' />
        </>
    )
}