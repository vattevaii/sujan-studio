import * as React from "react";
import {
  SliderProvider,
  Slider,
  SliderPrev,
  SliderNext,
  SliderPagination,
} from "./Slider";
import Image from "next/image";
import { urlForImage } from "@/utils/imageUrlBuilder";
import sanityImageLoader from "@/utils/sanity/imageLoader";

export type ImageSliderOptions = {
  currentCategory: string;
  images: string[];
  index: number;
};

interface IImageSliderProps {
  options: ImageSliderOptions;
  onClose?: (e:any) => void;
}

const ImageSlider: React.FunctionComponent<IImageSliderProps> = ({
  options,
  onClose,
}) => {
  const closeModal = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose?.(e);
  };
  React.useEffect(() => {
    document.addEventListener("keydown", closeModal);
    return () => {
      document.removeEventListener("keydown", closeModal);
    };
  });
  const items = options.images.map((src, idx) => (
    <div
      key={idx}
      className="isolate z-20 relative text-center text-xl lg:text-11xl h-full w-full flex items-center justify-center"
    >
      <Image
        width={100}
        height={100}
        className="absolute w-11/12 lg:w-auto h-auto max-h-full max-w-full lg:h-full -z-[1] object-contain mx-auto"
        alt=""
        src={src}
        loading="eager"
        loader={sanityImageLoader}
        // unoptimized={src.startsWith("http")}
      />
      <Image
        width={1500}
        height={1500}
        className="w-11/12 lg:w-auto h-auto max-h-full max-w-full lg:h-full -z-[1] object-contain mx-auto"
        alt=""
        src={src}
        loader={sanityImageLoader}
        // unoptimized={src.startsWith("http")}
      />
    </div>
  ));
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-10"
      onClick={onClose}
    >
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-70"></div>
      <div className="absolute w-full h-full lg:w-3/4 -translate-x-1/2 left-1/2 top-0">
        <SliderProvider autoplay={false} loop={false} activeIdx={options.index}>
          <div className="h-[90vh] lg:h-full overflow-hidden py-8 lg:mx-20">
            <Slider>{items}</Slider>
          </div>
          {/* <SliderNavigation /> */}
          <div className="relative w-32 m-auto  lg:static ">
            <SliderPrev />
            <SliderNext />
          </div>
          {/* <div className="absolute bottom-0 flex gap-2 -translate-x-1/2 left-1/2 p-5">
            <SliderPagination />
          </div> */}
        </SliderProvider>
      </div>
    </div>
  );
};

export default ImageSlider;
