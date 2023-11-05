import React, { HTMLAttributes } from 'react'
import SvgIcon from './SvgIcon'
import svgs from '@/constants/svgs'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const NavItem = ({ name, icon }: { name?: string, icon: { src: string, alt: string } }) => {
    return <Link href="#" className="flex flex-row items-center p-2.5 gap-[10px] transition-[filter] duration-200 hover:filter hover:contrast-200" aria-label={icon.alt}>
        <SvgIcon
            width={30}
            height={30}
            src={icon.src}
            priority={true}
            alt={""}
            className="relative w-5 h-5 overflow-hidden shrink-0"
        />
        {name ? <span className="relative leading-[20px] font-medium">{name}</span> : <span className='absolute h-0 invisible'>{icon.alt}</span>}
    </Link>
}

export default function NavPanel({ className = "" }: HTMLAttributes<HTMLElement>) {
    return (
        <aside className={className + " bg-project-100 sticky py-[30px] px-[31px] flex flex-col items-center justify-start gap-[30px] text-base font-raleway"}>
            <a href="#" className="brand-logo w-[3/4]">
                <Image width="300" height="300"
                    priority={true}
                    className="relative w-full h-auto overflow-hidden shrink-0"
                    src={svgs.brandSvgs.logo.src}
                    alt={svgs.brandSvgs.logo.alt}
                />
            </a>
            <nav className="flex flex-col items-start justify-start gap-[40px]">
                <ul className="flex flex-col items-start justify-start gap-[10px]">
                    <li>
                        <NavItem name="Our Portfolio" icon={svgs.navSvgs.portfolio} />
                    </li>
                    <li>
                        <NavItem name="Our Story" icon={svgs.navSvgs.story} />
                    </li>
                    <li>
                        <NavItem name="Our News" icon={svgs.navSvgs.news} />
                    </li>
                    <li>
                        <NavItem name="Packages" icon={svgs.navSvgs.packages} />
                    </li>
                    <li>
                        <NavItem name="Book A Photographer" icon={svgs.navSvgs.book} />
                    </li>
                    <li>
                        <NavItem name="Contact Us" icon={svgs.navSvgs.message} />
                    </li>
                    <li>
                        <NavItem name="My Shop" icon={svgs.navSvgs.shop} />
                    </li>
                </ul>
                <hr className="border-t border-divider w-full" />
                <ul className="flex flex-col items-start justify-start gap-[10px]">
                    <li>
                        <NavItem name="Login/Register" icon={svgs.actionsSvg.auth} />
                    </li>
                    <li>
                        <NavItem name="Search" icon={svgs.actionsSvg.search} />
                    </li>
                    <li>
                        <NavItem name="Cart" icon={svgs.actionsSvg.shop} />
                    </li>
                </ul>
                <hr className="border-t border-divider w-full" />
                <div className='social-icons flex justify-between'>
                    <NavItem icon={svgs.mediaSvgs.facebook} />
                    <NavItem icon={svgs.mediaSvgs.instagram} />
                    <NavItem icon={svgs.mediaSvgs.linkedin} />
                    <NavItem icon={svgs.mediaSvgs.youtube} />
                </div>
            </nav >
        </aside >

    )
}