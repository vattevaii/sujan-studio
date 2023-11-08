import React, { useState } from 'react'
import MobileNavPanel from './MovileNavPanel'
import NavPanel from './NavPanel'

type Props = {}

export default function Navbar({ }: Props) {
    return (
        <>
            <MobileNavPanel className='fixed top-0 left-0 z-10 lg:hidden' />
            <NavPanel className='sticky top-0 h-screen hidden w-0 lg:w-auto lg:flex' />
        </>
    )
}