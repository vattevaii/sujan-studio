import {
  SliderProvider,
  Slider,
  SliderPrev,
  SliderNext,
  SliderPagination,
} from "@/components/Slider/Slider";
import Image from "next/image";
import React, { HTMLAttributes, useState } from "react";

type Props = { reviews: ReviewItem[] } & HTMLAttributes<HTMLElement>;
export type ReviewItem = {
  bg: string;
  author: string;
  authorSrc: string;
  company: string;
  reviewText: string;
};
export default function ReviewSlider({ className = "", reviews }: Props) {
  const [mouseIn, setMouseIn] = useState(false);
  
  if (!reviews || reviews.length === 0) return <></>;
  const items = reviews.map(
    ({ author, authorSrc, bg, company, reviewText }, idx) => (
      <div
        key={idx}
        className="relative text-center text-xl lg:text-11xl h-full w-full"
      >
        <Image
          width={30}
          height={30}
          className="absolute top-0 w-full h-full -z-[1] object-cover"
          alt=""
          src={bg ?? ""}
        />
        <div className="flex flex-col items-center justify-center h-full">
          <article
            className="p-8 md:p-20 flex flex-col-reverse gap-5 lg:gap-10 items-center justify-center h-full"
            aria-label={`Review by ${author} from ${company}`}
          >
            <div className="flex flex-row items-center justify-start gap-[20px] text-md lg:text-5xl font-raleway">
              <Image
                width={20}
                height={20}
                className="w-16 h-16 bg-black rounded-[100px] object-cover"
                alt=""
                src={authorSrc ?? ""}
              />
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="font-medium">{author}</div>
                <div className="text-xs lg:text-base">{company}</div>
              </div>
            </div>
            <p className="font-medium inline-block">
              &quot;Sujan Studio delivered stunning photos that captured the
              essence&nbsp;of&nbsp;our&nbsp;moments. <wbr />{" "}
              We&apos;re&nbsp;thrilled&nbsp;with&nbsp;their&nbsp;work!&quot;
            </p>
          </article>
        </div>
      </div>
    )
  );
  return (
    <div
      className={className.length ? className : "h-64 md:h-72 lg:h-96"}
      onMouseEnter={() => setMouseIn(true)}
      onMouseLeave={() => setMouseIn(false)}
    >
      <SliderProvider autoplay={!mouseIn}>
        <div className="h-full overflow-hidden bg-project-200">
          <Slider>{items}</Slider>
        </div>
        {/* <SliderNavigation /> */}
        {reviews.length === 1 ? (
          <></>
        ) : (
          <>
            <div
              className={
                (mouseIn ? "opacity-100" : "opacity-0") + " transition-opacity"
              }
            >
              <SliderPrev />
              <SliderNext />
            </div>
            <div className="absolute bottom-0 flex gap-2 -translate-x-1/2 left-1/2 p-5">
              <SliderPagination />
            </div>
          </>
        )}
      </SliderProvider>
    </div>
  );
}
