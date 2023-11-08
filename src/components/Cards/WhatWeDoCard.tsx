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
                <div className='aspect-[350/200] lg:aspect-[366/400] rounded-md'>
                    <Image width="366" alt="" height="460" src={data.imageSrc} className='invisible h-full w-auto object-cover rounded-[inherit]' />
                    <Image width="366" alt="" height="460" src={data.imageSrc} className='absolute top-0 left-0 h-full w-auto object-cover rounded-[inherit]' />
                </div>
                <div className="absolute flex flex-col justify-center items-center gap-2 md:gap-4 text-lg md:text-xl font-raleway text-light-grey pointer-coarse:hidden group py-[1em] left-0 top-0 w-full h-full bg-overlay-from transition-opacity duration-300 opacity-0 hover:opacity-100 backdrop-blur-[1px]">
                    {/* <div className="blurred-bg absolute w-full h-full bg-overlay-from blur-3xl" /> */}
                    <button className='h-16 w-16 text-overlay-from'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                            fill="none"
                        >
                            <g filter="url(#a)">
                                <rect width={50} height={50} fill="#B7B7B7" fillOpacity={0.21} rx={25} />
                            </g>
                            <path
                                className='group-hover:animate-arrow-move'
                                fill="#fff"
                                d="M19.154 18v2.308h9.911L18 31.373 19.627 33l11.065-11.065v9.911H33V18H19.154Z"
                            />
                            <defs>
                                <filter
                                    id="a"
                                    width={90}
                                    height={90}
                                    x={-20}
                                    y={-20}
                                    colorInterpolationFilters="sRGB"
                                    filterUnits="userSpaceOnUse"
                                >
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation={10} />
                                    <feComposite
                                        in2="SourceAlpha"
                                        operator="in"
                                        result="effect1_backgroundBlur_141_216"
                                    />
                                    <feBlend
                                        in="SourceGraphic"
                                        in2="effect1_backgroundBlur_141_216"
                                        result="shape"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </button>
                    <p>Get Estimate</p>
                </div>
            </div>
        </div>
    )
}