import Image from 'next/image'
import React from 'react'

type Props = {
    data: {
        title: string, imageSrc: string, description: string,
    }
}

export default function ChooseUsCard({ data }: Props) {
    return (
        <div className='grid max-w-sm items-start text-left grid-rows-[60px_1fr]'>
            <h3 className='self-center col-start-2 font-medium text-xl'>{data.title}</h3>
            <div className='self-end col-start-1 row-start-1 w-[90px]'>
                <Image className='w-[50px] h-[50px]' width={50} height={50} src={data.imageSrc} alt='' />
            </div>
            <p className='col-start-2 row-start-2 text-base text-project-200'>{data.description}</p>
        </div>
    )
}