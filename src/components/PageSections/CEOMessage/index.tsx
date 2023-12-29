import sanityImageLoader from "@/utils/sanity/imageLoader";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React, { HTMLAttributes } from "react";
import { TypedObject } from "sanity";

type Props = {
  data: {
    blockTitle: string;
    relatedImages: string[];
    text: TypedObject | TypedObject[];
  };
};

export default function CEOMessage({
  className = "",
  data: content,
}: Props & HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={
        className +
        " ceo-talk px-10 lg:px-0 grid gap-y-5 grid-rows-[min-content_auto] lg:flex-row bg-light-grey text-project-100 min-h-screen pb-6"
      }
    >
      <div className="relative row-start-1 overflow-clip lg:py-0 lg:p-0 max-h-fit">
        <h2 className="relative text-center lg:text-left z-0 lg:pl-16 lg:pr-20 text-11xl md:text-21xl lg:text-21xl xl:text-41xl font-semibold capitalize">
          {content.blockTitle}
        </h2>
      </div>
      <div className="row-start-3 lg:row-start-2 lg:pl-16 lg:pr-20 text-base md:text-xl lg:text-2xl font-raleway text-project-200">
        <PortableText value={content.text} />
      </div>
      <div className="row-start-2 lg:row-start-1 lg:row-span-2 lg:col-start-2 -col-end-1 mx-auto w-fit sm:w-min lg:w-full h-full min-w-[50%]">
        <div className="aspect-[35/42]">
          <Image
            width="400"
            height="800"
            src={content.relatedImages[0]}
            loader={sanityImageLoader}
            alt="CEO Picture"
            className="w-full lg:h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
