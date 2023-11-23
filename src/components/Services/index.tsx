import useIntersectionObserver from "@/packages/use-intersection-observer";
import Image from "next/image";
import React, { useState } from "react";

export type ServiceItem = {
  src: string;
  text: string;
  href: string;
};
type Props = { services: ServiceItem[] };

function Service({ service }: { service: ServiceItem }) {
  const [visibleImg, setVisibleImg] = useState(false);
  const handleOnScreen = () => {
    setTimeout(() => {
      // console.log("Image is visible on screen")
      setVisibleImg(true);
    }, 1);
  };
  const itemRef = useIntersectionObserver<HTMLDivElement>({
    handleIntersect: handleOnScreen,
    threshold: 1,
  });
  return (
    <div
      ref={itemRef}
      className="w-full relative text-[30px] md:text-21xl xl:text-41xl"
    >
      <div
        className="absolute z-[1] group py-[1em] pointer-coarse:px-5 flex flex-col pointer-coarse:flex-row 
            items-center pointer-coarse:items-end justify-between pointer-coarse:justify-between
            bg-overlay-from pointer-coarse:bg-transparent pointer-coarse:bg-gradient-to-t pointer-coarse:from-slate-900 pointer-coarse:to-transparent pointer-coarse:to-[3%]
            top-0 left-0 pointer-fine:cursor-pointer w-full h-full pointer-fine:backdrop-blur-[1px]
            transition-opacity duration-[500ms] opacity-0 pointer-coarse:opacity-100 hover:opacity-100 active:opacity-100 focus:opacity-100 focus-within:opacity-100"
      >
        <h3 className="delay-250 duration-300 transition-transform translate-y-6 pointer-coarse:translate-y-0 group-hover:translate-y-0">
          {service.text}
        </h3>
        <button
          className="relative h-12 lg:h-20 w-auto pointer-coarse:translate-y-3/4"
          aria-label={`Click to reveal more information about ${service.text} photography service`}
        >
          <div className="absolute whitespace-nowrap -left-full -top-7 text-xs invisible group-focus-within:visible bg-divider">
            Learn more about {service.text} photography services.
          </div>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_30_323)">
              <rect
                width="120"
                height="120"
                rx="60"
                fill="#B7B7B7"
                fillOpacity="0.21"
              />
            </g>
            <path
              className="group-hover:animate-arrow-move"
              d="M50 48V52H67.18L48 71.18L50.82 74L70 54.82V72H74V48H50Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_b_30_323"
                x="-20"
                y="-20"
                width="160"
                height="160"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="5" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="120" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_30_323"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_30_323"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
      </div>
      <Image
        width={30}
        height={30}
        sizes={"100px"}
        className="w-full h-auto object-cover"
        alt=""
        src={service.src}
      />
      <Image
        width={500}
        height={300}
        sizes="(max-width:560px)100vw,50vw"
        className={
          (visibleImg ? "" : "hidden") +
          " absolute z-0 top-0 left-0 w-full h-auto object-cover"
        }
        alt=""
        src={service.src}
      />
    </div>
  );
}

export default function Services({ services }: Props) {
  return (
    <>
      <h2 className="absolute h-0">Our Services</h2>
      {services.map((service, idx) => (
        <Service key={idx} service={service} />
      ))}
    </>
  );
}
