import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";

interface ISBannerProps {
  service: string;
  bannerImg: string;
  getEstimateLink: string;
}

const SBanner: React.FunctionComponent<ISBannerProps> = (props) => {
  const router = useRouter();
  const goToEstimatePage = () => router.push(props.getEstimateLink); //
  return (
    <section id="banner" className="relative banner">
      <Image
        priority={true}
        width={100}
        height={400}
        className="absolute top-0 -z-[1] w-full h-full object-cover"
        alt=""
        src="/jpegs/mainSection.jpg"
      />
      <div className="flex flex-col gap-6 content-center justify-center text-light-grey text-center min-h-[calc(80vh)] px-9">
        <div className="text-41xl lg:text-61xl font-semibold">
          <h1>{props.service} Photography By Sujan&nbsp;Studio</h1>
        </div>
        <div className="">
          <p className="text-md md:text-xl xl:text-[5xl]">
            Please fill the form below to receive a quote for your project. Feel
            free to add as much detail as needed.
          </p>
        </div>
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
