import * as React from "react";
import { HoverImageItem } from "./WeddingPhotoItem";

interface ICorporateEventPhotoItemProps {
  imageSrc: string;
  name: string;
}

const CorporateEventPhotoItem: React.FunctionComponent<
  ICorporateEventPhotoItemProps
> = ({ imageSrc, name, ...props }) => {
  return (
    <HoverImageItem src={imageSrc} alt="" width={500} height={500}>
      <>
        <div className="absolute top-0 left-0 w-full h-full bg-[#000815] opacity-70" />
        <div className="w-full h-full p-5 relative z-10">
          <div className="w-full h-full py-4 flex flex-col justify-between">
            <p className="text-5xl">{name}</p>
            <div>
              <svg
                className="mx-auto opacity-70 hover:opacity-100"
                width="80"
                height="80"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_620_2938)">
                  <rect
                    width="120"
                    height="120"
                    rx="60"
                    fill="#B7B7B7"
                    fill-opacity="0.21"
                  />
                </g>
                <path
                  d="M50 48V52H67.18L48 71.18L50.82 74L70 54.82V72H74V48H50Z"
                  fill="#DCEAFD"
                />
                <defs>
                  <filter
                    id="filter0_b_620_2938"
                    x="-20"
                    y="-20"
                    width="160"
                    height="160"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_620_2938"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_620_2938"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </>
    </HoverImageItem>
  );
};

export default CorporateEventPhotoItem;