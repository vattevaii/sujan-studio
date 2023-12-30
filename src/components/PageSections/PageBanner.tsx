import Image from "next/image";
import * as React from "react";

interface IPageBannerProps {
  image?: string;
}

const PageBanner: React.FunctionComponent<
  React.PropsWithChildren<IPageBannerProps>
> = ({ image, children }) => {
  return (
    <section id="banner" className="relative banner">
      <Image
        priority={true}
        width={1000}
        height={400}
        className="absolute top-0 -z-[1] w-full h-full object-cover"
        alt=""
        src={image??"/jpegs/mainSection.jpg"}
      />
      <div className="absolute top-0 -z-[1] w-full h-full bg-project-100 opacity-70" />
      <div className="flex flex-col items-center min-h-[50vh] w-full px-[5vw] py-[1vh] lg:px-[100px] lg:py-[10px]">
        <div className="flex-1 flex flex-col justify-center text-21xl font-source-sans-3 font-bold lg:text-41xl text-center">
          <h1 className="text-light-grey">{children}</h1>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
