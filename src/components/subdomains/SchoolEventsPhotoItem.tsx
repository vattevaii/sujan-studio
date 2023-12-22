import Image, { ImageProps } from "next/image";
import * as React from "react";
import { HoverImageItem } from "./WeddingPhotoItem";

interface ISchoolEventsPhotoItemProps {
  imageSrc: string;
  date: string;
  name: string;
}

const SchoolEventsPhotoItem: React.FunctionComponent<
  ISchoolEventsPhotoItemProps & React.HTMLProps<HTMLDivElement>
> = ({imageSrc,date, name, ...props}) => {
  return (
    <div {...props}>
        <HoverImageItem
          className="object-cover w-full"
          alt=""
          src={imageSrc}
          width={500}
          height={500}
        >
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-[#000815] opacity-70" />
            <div className="w-full h-full p-5 relative z-10 grid place-items-center">
              <div className="grid place-items-center gap-3">
                <p className="font-actays">{date}</p>
                <p className="text-11xl">{name}</p>
              </div>
            </div>
          </>
        </HoverImageItem>
    </div>
  );
};

export default SchoolEventsPhotoItem;
