import PlaceHolderImage from "@/components/PlaceHolderImage";
import { MouseEventHandler } from "react";

export interface IAppProps {
  images: [string, string, string, string, string, string];
  onSelectImage: () => void;
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
  console.log(item.slice(7, 13));
  return item.slice(7, 13);
});

export default function ImageGrid(props: IAppProps) {
  const selectImage: MouseEventHandler<HTMLImageElement> = (e) => {
    const bcr = e.currentTarget.getBoundingClientRect();
    return [bcr.top, bcr.right, bcr.bottom, bcr.left];
  };
  return (
    <div className="">
      <div className="hidden md:grid grid-cols-7 grid-rows-9 gap-4 w-full">
        {props.images.map((image, i) => (
          <div key={i} className={lgGridItemSize[i] + " "}>
            <PlaceHolderImage
              width="500"
              height="500"
              src={image}
              alt=""
              className="object-cover h-full w-full"
            />
          </div>
        ))}
      </div>
      <div className="grid md:hidden grid-cols-7 grid-rows-12 gap-4 w-full">
        {props.images.map((image, i) => (
          <div key={i} className={smGridItemSize[i] + " "}>
            <PlaceHolderImage
              width="500"
              height="500"
              src={image}
              alt=""
              className="object-cover h-full w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
