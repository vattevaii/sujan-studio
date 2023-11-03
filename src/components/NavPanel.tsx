import React, { HTMLAttributes } from 'react'
import SvgIcon from './SvgIcon'
import svgs from '@/constants/svgs'

type Props = {}

const NavItem = ({ name, icon }: { name: string, icon: { src: string, alt: string } }) => {
    return <li>
        <a href="#" className="flex flex-row items-center justify-center p-2.5 gap-[10px]">
            <SvgIcon
                src={icon.src}
                alt={icon.alt}
                className="relative w-5 h-5 overflow-hidden shrink-0"
            />
            <span className="relative leading-[20px] font-medium">{name}</span>
        </a>
    </li>
}

export default function NavPanel({className = ""}: HTMLAttributes<HTMLElement>) {
    return (
        <aside className={className + " bg-project-100 sticky py-[30px] px-[31px] flex flex-col items-center justify-start gap-[30px] text-base font-raleway"}>
            <a href="#" className="brand-logo">
                <SvgIcon
                    src={svgs.brandSvgs.logo.src}
                    alt={svgs.brandSvgs.logo.alt}
                    className="relative w-10 h-10 overflow-hidden shrink-0"
                />
            </a>
            <nav className="flex flex-col items-start justify-start gap-[40px]">
                <ul className="flex flex-col items-start justify-start gap-[10px]">
                    <NavItem name="Our Portfolio" icon={svgs.navSvgs.portfolio} />
                    <NavItem name="Our Story" icon={svgs.navSvgs.story} />
                    <NavItem name="Our News" icon={svgs.navSvgs.news} />
                    <NavItem name="Packages" icon={svgs.navSvgs.packages} />
                    <NavItem name="Book A Photographer" icon={svgs.navSvgs.book} />
                    <NavItem name="Contact Us" icon={svgs.navSvgs.message} />
                    <NavItem name="My Shop" icon={svgs.navSvgs.shop} /></ul>
                <hr className="border-t border-divider w-full" />
                <ul className="flex flex-col items-start justify-start gap-[10px]">
                    <NavItem name="Login/Register" icon={svgs.actionsSvg.auth} />
                    <NavItem name="Search" icon={svgs.actionsSvg.search} />
                    <NavItem name="Cart" icon={svgs.actionsSvg.shop} />
                </ul>
                <hr className="border-t border-divider w-full" />
                <div className='social-icons flex gap-4'>
                    <a href="#"><SvgIcon className='w-5 h-5 overflow-hidden shrink-0' src={svgs.mediaSvgs.facebook.src} alt='Facebook Icon' /></a>
                    <a href="#"><SvgIcon className='w-5 h-5 overflow-hidden shrink-0' src={svgs.mediaSvgs.instagram.src} alt='Instagram Icon' /></a>
                    <a href="#"><SvgIcon className='w-5 h-5 overflow-hidden shrink-0' src={svgs.mediaSvgs.linkedin.src} alt='LinkedIn Icon' /></a>
                    <a href="#"><SvgIcon className='w-5 h-5 overflow-hidden shrink-0' src={svgs.mediaSvgs.youtube.src} alt='YouTube Icon' /></a>
                </div>
            </nav>
        </aside>

    )
}