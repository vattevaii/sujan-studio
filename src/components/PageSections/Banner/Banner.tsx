import Image from "next/image";
import React from "react";
import BannerTypewriter, {
  BannerTypeWriterProps,
} from "./components/BannerTypewriter";
import BannerCountUpTo from "./components/BannerCountUpto";
import { getPageContent } from "@/utils/sanity/pageContent";
import sanityImageLoader from "@/utils/sanity/imageLoader";

export type BannerProps = {
  typewriter: BannerTypeWriterProps;
} & Awaited<ReturnType<typeof getPageContent>>;

export default function Banner({ typewriter, ...props }: BannerProps) {
  return (
    <section id="banner" className="relative banner">
      <Image
        priority={true}
        width={5000}
        height={4000}
        className="absolute top-0 -z-[1] w-full h-full object-cover"
        alt=""
        src={props.image?.length ? props.image : "/jpegs/mainSection.jpg"}
        blurDataURL={props.blurDataImage}
        loader={sanityImageLoader}
      />
      <div className="absolute top-0 -z-[1] w-full h-full bg-project-100 opacity-70"></div>
      <div className="flex flex-col w-full min-h-screen px-[5vw] py-[1vh] lg:px-[100px] lg:py-[10px]">
        <div className="flex-1 flex flex-col justify-center text-41xl lg:text-61xl xl:text-111xl translate-y-7">
          <h1>
            <BannerTypewriter {...typewriter} />
            <b> is Everything.</b>
          </h1>
          <b>We Deliver.</b>
        </div>
        <div className="bottom-5 flex flex-col sm:flex-row  items-stretch gap-2 sm:gap-4 lg:gap-[40px] text-21xl lg:text-41xl xl:text-61xl w-max">
          <div className="flex flex-col items-start justify-end w-max">
            <BannerCountUpTo count={14} duration={0.5} />
            <div className="text-xl leading-[30px] uppercase font-medium font-raleway opacity-[0.5]">
              <p className="m-0">{`years of `}</p>
              <p className="m-0">Visual Excellence</p>
            </div>
          </div>
          <hr className="h-auto w-[125%] sm:w-0 border-l border-divider" />
          <div className="flex flex-col items-start justify-end w-max">
            <BannerCountUpTo
              count={500}
              start={400}
              duration={1.5}
              append="+"
            />
            <div className="text-xl leading-[30px] uppercase font-medium font-raleway opacity-[0.5]">
              <p className="m-0">Happy</p>
              <p className="m-0">Customers</p>
            </div>
          </div>
          <hr className="h-auto w-[125%] sm:w-0 border-l border-divider" />
          <div className="flex flex-col items-start justify-end w-max">
            <BannerCountUpTo count={5} duration={1} append="+" />
            <div className="text-xl leading-[30px] uppercase font-medium font-raleway opacity-[0.5]">
              <p className="m-0">Photography</p>
              <p className="m-0">Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
