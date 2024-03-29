import * as React from "react";
import ImageSlider, { ImageSliderOptions } from "./Slider/ImageSlider";

interface IImageSliderWrapProps {
  images: string[];
}

const ImageSliderWrap: React.FunctionComponent<
  React.PropsWithChildren<IImageSliderWrapProps>
> = (props) => {
  const [openModal, setOpenModal] = React.useState(false);
  const imageSliderOptions = {
    currentCategory: "any",
    images: props.images,
    index: 0,
  };
  return (
    <div
      onClick={() => {
        
        setOpenModal(true);
      }}
    >
      {openModal ? (
        <ImageSlider
          options={imageSliderOptions}
          onClose={(e) => {
            e.stopPropagation();
            
            setOpenModal(false);
          }}
        />
      ) : (
        <></>
      )}
      {props.children}
    </div>
  );
};

export default ImageSliderWrap;
