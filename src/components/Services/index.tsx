import Image from 'next/image';
import React from 'react'

type Service = {
    src: string,
    text: string,
    href: string
}
type Props = { services: Service[] };

function Service({ service }: { service: Service }) {
    return <div className="w-full relative text-xl md:text-21xl xl:text-41xl">
        <Image width={8000} height={1000} className="invisible w-full h-auto object-cover" alt="" src="/jpegs/Service.jpg" />
        <Image width={8000} height={1000} className="absolute top-0 left-0 w-full h-auto object-cover" alt="" src="/jpegs/Service.jpg" />
        <div className='absolute group py-[1em] flex flex-col items-center justify-between bg-gradient-to-r from-overlay-from to-overlay-to top-0 left-0 z-10 cursor-pointer w-full h-full transition-opacity duration-[500ms] opacity-0 hover:opacity-100'>
            <p className='delay-250 duration-300 transition-transform translate-y-6 group-hover:translate-y-0'>{service.text}</p>
            <button className='h-16 lg:h-20 w-auto group'>
                <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_b_30_323)">
                        <rect width="120" height="120" rx="60" fill="#B7B7B7" fill-opacity="0.21" />
                    </g>
                    <path className='delay-250 duration-300 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2' d="M50 48V52H67.18L48 71.18L50.82 74L70 54.82V72H74V48H50Z" fill="white" />
                    <defs>
                        <filter id="filter0_b_30_323" x="-20" y="-20" width="160" height="160" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="5" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="120" />
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_30_323" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_30_323" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </button>
        </div>
    </div>
}

export default function Services({ services }: Props) {
    return (<>
        {services.map((service, idx) => <Service key={idx} service={service} />)}
    </>)
}