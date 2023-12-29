import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import { TypedObject } from "sanity";

interface ISBannerProps {
  service: TypedObject | TypedObject[];
  bannerImg: string;
  getEstimateLink: string;
}

const SBanner: React.FunctionComponent<
  React.PropsWithChildren<ISBannerProps>
> = (props) => {
  const router = useRouter();
  const goToEstimatePage = () => router.push(props.getEstimateLink); //
  return (
    <section id="banner" className="relative banner isolate">
      <Image
        priority={true}
        width={100}
        height={400}
        className="absolute top-0 -z-[1] w-full h-full object-cover"
        alt=""
        src={props.bannerImg ?? "/jpegs/WeddingItem.jpg"}
      />
      <div className="absolute top-0 -z-[1] w-full h-full bg-project-100 opacity-70" />
      <div className="flex flex-col gap-6 content-center justify-center text-light-grey text-center min-h-[calc(80vh)] px-9">
        <div className="text-41xl lg:text-61xl font-semibold">
          <h1>
            <PortableText value={props.service} />
          </h1>
        </div>
        <div className="text-md md:text-xl xl:text-[5xl]">{props.children}</div>
        <div className="pt-2 lg:pt-7">
          <button
            className=" bg-light-grey text-project-100 py-4 px-8 min-w-[150px]"
            onClick={goToEstimatePage}
          >
            Get Estimation
          </button>
        </div>
      </div>
    </section>
  );
};

export default SBanner;
