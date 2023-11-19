import Image, { ImageLoader, ImageProps } from 'next/image'
import React from 'react'

type Props = {}
const imageLoader:ImageLoader = ({ width }) => {
    return `http://placekitten.com/${width}/${width}`
}

export default function PlaceHolderImage(props: ImageProps) {
    return (
        <Image loader={imageLoader} {...props} />
    )
}