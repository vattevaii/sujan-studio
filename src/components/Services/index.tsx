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
        <div className='absolute group py-[1em] flex flex-col items-center justify-between bg-overlay-from top-0 left-0 z-10 cursor-pointer w-full h-full transition-opacity duration-[500ms] opacity-0 hover:opacity-100 active:opacity-100 focus:opacity-100 focus-within:opacity-100'>
            <h3 className='delay-250 duration-300 transition-transform translate-y-6 group-hover:translate-y-0'>{service.text}</h3>
            <button className='relative h-16 lg:h-20 w-auto' aria-label={`Click to reveal more information about ${service.text} photography service`}>
                <div className="absolute whitespace-nowrap -left-full -top-7 text-xs invisible group-focus-within:visible bg-divider">Learn more about {service.text} photography services.</div>
                <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_b_30_323)">
                        <rect width="120" height="120" rx="60" fill="#B7B7B7" fillOpacity="0.21" />
                    </g>
                    <path className='group-hover:animate-arrow-move' d="M50 48V52H67.18L48 71.18L50.82 74L70 54.82V72H74V48H50Z" fill="white" />
                    <defs>
                        <filter id="filter0_b_30_323" x="-20" y="-20" width="160" height="160" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="5" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="120" />
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_30_323" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_30_323" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </button>
        </div>
        <Image width={500} height={300} sizes="50vw" className="invisible w-full h-auto object-cover" alt="" src="/jpegs/Service.jpg" />
        <Image width={500} height={300} sizes="50vw" className="absolute top-0 left-0 w-full h-auto object-cover" alt="" src="/jpegs/Service.jpg" />
    </div>
}

export default function Services({ services }: Props) {
    return (<>
        <h2 className="absolute h-0">Our Services</h2>
        {services.map((service, idx) => <Service key={idx} service={service} />)}
    </>)
}