import Image from 'next/image'
import React from 'react'

type Props = {
    data: { title: string, description: string, imageSrc: string }
}

export default function WhatWeDoCard({ data }: Props) {
    return (
        <div className='grid gap-1 lg:gap-4 grid-rows-[auto_auto_1fr]'
        // className='grid gap-[20px] rounded-xl border border-divider p-5 items-start max-w-xs text-center grid-rows-[auto_auto_1fr]'
        >
            {/* <h3 className='row-start-2 font-medium text-xl'>{data.title}</h3>
                      <div className='row-start-1'>
                        <Image className='w-[50px] h-[50px] mx-auto' width={50} height={50} src={data.imageSrc} alt='' />
                      </div>
                      <p className='text-base text-project-200'>{data.description}</p> */}
            <h3 className='row-start-2 font-medium text-xl'>{data.title}</h3>
            <div className='relative row-start-1 bg-pink-50 rounded-md'>
                <Image width="366" alt="" height="460" src={data.imageSrc} className='invisible max-w-366 h-auto aspect-[350/200] lg:aspect-[366/460] rounded-[inherit]' />
                <Image width="366" alt="" height="460" src={data.imageSrc} className='absolute top-0 left-0 max-w-366 h-auto aspect-[350/200] lg:aspect-[366/460] rounded-[inherit]' />
                <div className="absolute grid place-items-center pointer-coarse:hidden group py-[1em] left-0 top-0 w-full h-full bg-overlay-from transition-opacity duration-300 opacity-0 hover:opacity-100">
                    {/* <div className="blurred-bg absolute w-full h-full bg-overlay-from blur-3xl" /> */}
                    <button className='h-16 w-16 text-overlay-from'>
                        <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_b_30_323)">
                                <rect width="120" height="120" rx="60" fill="currentcolor" fillOpacity="0.21" />
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
            </div>
        </div>
    )
}