import BannerCountUpTo from "@/components/PageSections/Banner/components/BannerCountUpto";
import ReviewSlider from "@/components/PageSections/UserReviews/ReviewSlider";
import RealEstatePhotoItem from "@/components/subdomains/RealEstatePhotoItem";
import SBanner from "@/components/subdomains/SBanner";
import SFlatNav from "@/components/subdomains/SFlatNav";
import SLatestBlogs from "@/components/subdomains/SLatestBlogs";
import STopBar from "@/components/subdomains/TopBar";
import SText from "@/components/subdomains/text/STextTitle";
import { getImages } from "@/utils/sanity/imageStore";
import { getAllLocations } from "@/utils/sanity/location";
import { getAllReviews } from "@/utils/sanity/reviews";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import * as React from "react";

interface IRealEstateSubDomainProps {}

const RealEstateSubDomain: React.FunctionComponent<
  IRealEstateSubDomainProps & InferGetStaticPropsType<typeof getStaticProps>
> = (props) => {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="f_68tqeL-mLzXjKfyyXJpWikq44fXRXbgmcKhvqKj4s"
        />
        <title>Portfolio | Sujan Studio</title>
        <meta
          name="description"
          content="Discover Sujan Studio, your trusted source for professional photography services in Adelaide, South Australia, and beyond. We serve various locations, including South Australia, Victoria, New South Wales, and Queensland. Contact us today for captivating moments captured."
        />
      </Head>
      <STopBar service="RealEstate" />
      <SFlatNav />
      <SBanner service="Real Estate" bannerImg="/jpegs/mainSection.jpg" />
      <section className="grid py-6 bg-light-grey text-project-100 px-[10vw] gap-2">
        <SText.Title className="text-center">
          Learn about our experience
        </SText.Title>
        <div className="grid gap-3">
          <div className=" col-start-2">
            <SText.Sub className="text-project-200">
              Lorem ipsum dolor sit amet consectetur. Ultrices justo sit duis
              egestas. Et sagittis egestas in porttitor lectus nec sollicitudin
              neque eget. Quam nisl eget euismod feugiat posuere porttitor.
              Neque laoreet congue egestas eu porttitor tempus. Ac condimentum
              sed consequat eu massa pretium sed nisl. Cursus sagittis est sed
              tortor. Turpis arcu pharetra aliquam a ac faucibus. Diam molestie
              cursus quis libero lorem ultricies. Id sit bibendum posuere ut
              amet ullamcorper. Massa bibendum laoreet sagittis senectus eget
              enim sapien urna duis. Lorem ipsum dolor sit amet consectetur.
              Ultrices justo sit duis egestas. Et sagittis egestas in porttitor
              lectus nec sollicitudin neque eget. Quam nisl eget euismod feugiat
              posuere porttitor. Neque laoreet congue egestas eu porttitor
              tempus.
            </SText.Sub>
            <div className="flex gap-5 text-21xl justify-between py-5">
              <div className="flex flex-wrap flex-col items-start justify-end w-max">
                <BannerCountUpTo count={14} duration={0.5} />
                <div className="text-lg leading-[30px] uppercase font-medium font-raleway opacity-[0.5]">
                  <p className="m-0">{`years of `}</p>
                  <p className="m-0">Visual Excellence</p>
                </div>
              </div>
              <hr className="h-auto w-[125%] sm:w-0 border-l border-divider" />
              <div className="flex flex-col items-start justify-end w-max">
                <BannerCountUpTo
                  count={500}
                  start={400}
                  duration={1.5}
                  append="+"
                />
                <div className="text-lg leading-[30px] uppercase font-medium font-raleway opacity-[0.5]">
                  <p className="m-0">Happy</p>
                  <p className="m-0">Customers</p>
                </div>
              </div>
              <hr className="h-auto w-[125%] sm:w-0 border-l border-divider" />
              <div className="flex flex-col items-start justify-end w-max">
                <BannerCountUpTo count={5} duration={1} append="+" />
                <div className="text-lg leading-[30px] uppercase font-medium font-raleway opacity-[0.5]">
                  <p className="m-0">Photography</p>
                  <p className="m-0">Awards</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full col-start-1 row-start-1">
            <Image
              src={"/jpegs/RealEstate.jpg"}
              alt=""
              width="500"
              height="500"
              className="h-full w-auto"
            />
          </div>
        </div>
      </section>
      <section className="text-center text-light-grey py-6 px-[10vw]">
        <SText.Title>Our Real Estate Works</SText.Title>
        <SText.Sub className="text-project-200">
          Lorem ipsum dolor sit amet consectetur. Ultrices justo sit duis
          egestas.
        </SText.Sub>
        <hr className="border-light-grey opacity-40 my-10" />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(calc(200px+10vw),1fr))] gap-5 place-items-center">
          {props.featured.map((item, idx) => (
            <RealEstatePhotoItem
              key={idx}
              imageSrc={item.mainImage}
              name={item.name}
            />
          ))}
          {/* <RealEstatePhotoItem
            imageSrc="/jpegs/RealEstate.jpg"
            name="Project Name"
          />
          <RealEstatePhotoItem
            imageSrc="/jpegs/CoorporateEvents.jpg"
            name="Project Name"
          />
          <RealEstatePhotoItem
            imageSrc="/jpegs/RealEstate.jpg"
            name="Project Name"
          />
          <RealEstatePhotoItem
            imageSrc="/jpegs/RealEstate.jpg"
            name="Project Name"
          /> */}
        </div>
      </section>

      <SLatestBlogs className="px-4 lg:px-8 " />
      <ReviewSlider reviews={props.reviews} />
    </>
  );
};

export const getStaticProps = async function () {
  const reviews = await getAllReviews();
  const locations = await getAllLocations();
  const images = await getImages("realEstate");
  // console.log(images)
  return {
    props: { reviews, locations, featured: images },
    revalidate: 3600,
  };
};

export default RealEstateSubDomain;
