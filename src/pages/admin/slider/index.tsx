import ImageSlider from "@/components/Slider/ImageSlider";
import withDevCheck from "@/components/test/withDevCheck";
import * as React from "react";

export interface ISliderProps {}

function Slider(props: ISliderProps) {
  return (
    <ImageSlider
      options={{
        currentCategory: "",
        images: [
          "https://placekitten.com/200/500",
          "https://placekitten.com/400/500",
          "https://placekitten.com/300/500",
          "https://placekitten.com/200/500",
          "https://placekitten.com/400/500",
          "https://placekitten.com/300/500",
          "https://placekitten.com/200/500",
          "https://placekitten.com/400/500",
          "https://placekitten.com/300/500",
          "https://placekitten.com/200/500",
          "https://placekitten.com/400/500",
          "https://placekitten.com/300/500",
        ],
        index: 0,
      }}
    />
  );
}

export default withDevCheck(Slider);