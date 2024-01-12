import sanityImageLoader from "@/utils/sanity/imageLoader";
import Image from "next/image";
import * as React from "react";

interface IFamilyPortraitsPhotoItemProps {
  imageSrc: string;
  name: string;
}

const FamilyPortraitsPhotoItem: React.FunctionComponent<
  IFamilyPortraitsPhotoItemProps & React.HTMLProps<HTMLDivElement>
> = ({ imageSrc, name, className, ...props }) => {
  if (!imageSrc) return <></>;
  return (
    <div className={"h-full " + className} {...props}>
      <Image
        className="h-full object-cover"
        src={imageSrc}
        loader={sanityImageLoader}
        alt=""
        width={500}
        height={500}
      ></Image>
    </div>
  );
};

export default FamilyPortraitsPhotoItem;
