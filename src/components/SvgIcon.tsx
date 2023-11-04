import Image, { ImageProps } from 'next/image'
import React from 'react'

type Props = {}

export default function SvgIcon({src,className,alt, ...props}: ImageProps) {
  return (
    <object tabIndex={-1} data={src as string} type="image/svg+xml" className={className}>
        <Image src={src} className={className} alt={alt} fill={true} {...props} />
    </object>
  )
}