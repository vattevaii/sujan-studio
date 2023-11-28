import PlaceHolderImage from "@/components/PlaceHolderImage";
import Image, { ImageLoader } from "next/image";
import { MouseEventHandler } from "react";

export interface IAppProps {
  images: [string, string, string, string, string, string];
  show: "lg" | "md";
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
  //console.log(item.slice(8, 13));
  return item.slice(8, 13);
});

export default function SampleImageGrid(props: IAppProps) {
  if (props.show === "lg")
    return (
      <div className="grid grid-cols-7 grid-rows-9 gap-4 w-full">
        {props.images.map((image, i) => (
          <div key={i} className={lgGridItemSize[i] + " "}>
            <Image
              width="500"
              height="500"
              src={image}
              alt={(i + 1).toString()}
              className="object-cover h-full w-full"
              unoptimized={true}
            />
          </div>
        ))}
      </div>
    );
  return (
    <div className="grid grid-cols-7 grid-rows-12 gap-4 w-full">
      {props.images.map((image, i) => (
        <div key={i} className={smGridItemSize[i] + " "}>
          <Image
            width="500"
            height="500"
            src={image}
            alt=""
            className="object-cover h-full w-full"
            unoptimized={true}
          />
        </div>
      ))}
    </div>
  );
}
