import Image, { ImageLoader, ImageProps } from "next/image";
import React from "react";

type Props = {};
const imageLoader: ImageLoader = ({ width }) => {
  const h = Math.floor(Math.random() * 10) * 100
  return `https://placekitten.com/${width}/${h}`;
};

export default function PlaceHolderImage(props: ImageProps) {
  return <Image loader={imageLoader} {...props} />;
}
