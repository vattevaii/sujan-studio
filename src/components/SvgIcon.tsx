import Image, { ImageProps } from 'next/image'
import React from 'react'

type Props = {}

export default function SvgIcon({ src, className, alt, ...props }: ImageProps) {
  return (
    <Image src={src} className={className} alt={alt} {...props} />
  )
}