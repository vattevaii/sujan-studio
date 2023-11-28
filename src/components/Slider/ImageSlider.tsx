import * as React from "react";
import {
  SliderProvider,
  Slider,
  SliderPrev,
  SliderNext,
  SliderPagination,
} from "./Slider";
import Image from "next/image";

export type ImageSliderOptions = {
  currentCategory: string;
  images: string[];
  index: number;
};

interface IImageSliderProps {
  options: ImageSliderOptions;
  onClose?: () => void;
}

const ImageSlider: React.FunctionComponent<IImageSliderProps> = ({
  options,
  onClose,
}) => {
  const items = options.images.map((src, idx) => (
    <div
      key={idx}
      className="relative text-center text-xl lg:text-11xl h-full w-full flex items-center justify-center"
    >
      <Image
        width={30}
        height={30}
        className="w-11/12 lg:w-auto h-auto max-h-full lg:h-full -z-[1] object-contain mx-auto"
        alt=""
        src={src}
        unoptimized={src.startsWith("http")}
      />
    </div>
  ));
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-10" onClick={onClose}>
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-70"></div>
      <SliderProvider autoplay={false}>
        <div className="h-[90vh] lg:h-full overflow-hidden py-16 lg:mx-64">
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
  );
};

export default ImageSlider;
