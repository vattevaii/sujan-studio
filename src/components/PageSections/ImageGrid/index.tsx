import PlaceHolderImage from "@/components/PlaceHolderImage";
import sanityImageLoader from "@/utils/sanity/imageLoader";
import Image from "next/image";
import { MouseEvent, MouseEventHandler } from "react";

export interface IAppProps {
  images: { url: string; lqip: string }[];
  onSelectImage: (
    img: string,
    imgIdx: number,
    imgPos: [number, number, number, number]
  ) => void;
}
const lgGridItemSize: { [x: number]: string } = {
  0: "border col-span-2 row-span-6",
  1: "border col-span-2 row-span-3 col-start-3 row-start-1",
  2: "border col-span-2 row-span-3 col-start-3 row-start-4",
  3: "border col-span-3 row-span-5 col-start-5 row-start-1",
  4: "border col-span-4 row-span-3 col-start-1 row-start-7",
  5: "border col-span-3 row-span-4 col-start-5 row-start-6",
};
const smGridItemSize: { [x: number]: string } = {
  0: "border col-span-3 row-span-6",
  1: "border col-span-4 row-span-3 col-start-4 row-start-1",
  2: "border col-span-4 row-span-3 col-start-4 row-start-[10]",
  3: "border col-span-3 row-span-3 col-start-1 row-start-[10]",
  4: "border col-span-3 row-span-3 col-start-1 row-start-7",
  5: "border col-span-4 row-span-6 col-start-4 row-start-4",
};
const imgSizes: { [x: number]: string } = {
  0: "aspect-[352/665]",
  1: "aspect-[445/270]",
  2: "aspect-[445/370]",
  3: "aspect-[754/544]",
  4: "aspect-[826/386]",
  5: "aspect-[754/507]",
};
const imgHeights = Object.values(imgSizes).map((item) => {
  //// console.log(item.slice(7, 13));
  return item.slice(8, 13);
});

export default function ImageGrid(props: IAppProps) {
  const selectImage = (
    e: MouseEvent<HTMLImageElement, globalThis.MouseEvent>,
    idx: number
  ) => {
    const bcr = e.currentTarget.getBoundingClientRect();
    props.onSelectImage(e.currentTarget.src, idx, [
      bcr.top,
      bcr.right,
      bcr.bottom,
      bcr.left,
    ]);
  };
  return (
    <div className="isolate z-0">
      <div className="hidden md:grid grid-cols-7 grid-rows-9 gap-4 w-full">
        {props.images.map((image, i) => (
          <div key={i} className={lgGridItemSize[i] + " relative"}>
            <Image
              width="100"
              height="100"
              src={image.url}
              blurDataURL={image.lqip}
              alt=""
              loading="eager"
              className="absolute object-cover h-full w-full min-h-[200px]"
              loader={sanityImageLoader}
              // unoptimized={true}
            />
            <Image
              width="500"
              height="500"
              src={image.url}
              blurDataURL={image.lqip}
              alt=""
              className="relative z-10 object-cover h-full w-full min-h-[200px]"
              onClick={(e) => selectImage(e, i)}
              loader={sanityImageLoader}
              // unoptimized={true}
            />
          </div>
        ))}
      </div>
      <div className="grid md:hidden grid-cols-7 grid-rows-12 gap-4 w-full">
        {props.images.map((image, i) => (
          <div key={i} className={smGridItemSize[i] + " relative isolate"}>
            <Image
              width="100"
              height="100"
              src={image.url}
              blurDataURL={image.lqip}
              alt=""
              loading="eager"
              className="absolute object-cover h-full w-full"
              loader={sanityImageLoader}
              // unoptimized={true}
            />
            <Image
              width="400"
              height="400"
              src={image.url}
              blurDataURL={image.lqip}
              alt=""
              loader={sanityImageLoader}
              className="relative z-10 object-cover h-full w-full"
              onClick={(e) => selectImage(e, i)}
              // unoptimized={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
