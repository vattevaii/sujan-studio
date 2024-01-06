import ImageSliderWrap from "@/components/ImageSliderWrap";
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
import { getPageContent } from "@/utils/sanity/pageContent";
import { getAllPosts } from "@/utils/sanity/posts";
import { getAllReviews } from "@/utils/sanity/reviews";
import { PortableText } from "@portabletext/react";
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
      <SFlatNav logo />
      <SBanner
        service={props.pageContent.bannerText}
        bannerImg={props.pageContent.image}
        blurDataURL={props.pageContent.blurDataImage}
        getEstimateLink="/book-us"
      >
        {props.pageContent.bannerSubTitle}
      </SBanner>
      <section className="grid py-6 bg-light-grey text-project-100 px-[10vw] gap-2">
        <SText.Title className="text-center">
          {props.pageContent.textBlocks[0].blockTitle}
        </SText.Title>
        <div className="grid gap-3">
          <div className="row-start-2 lg:row-start-1 lg:col-start-2">
            <SText.Sub className="text-project-200">
              <PortableText value={props.pageContent.textBlocks[0].text} />
            </SText.Sub>
            <div className="flex flex-wrap gap-5 text-21xl justify-between py-5">
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
          <div className="h-full w-full col-start-1 row-start-1 max-h-48 lg:max-h-max">
            <Image
              src={"/jpegs/RealEstate.jpg"}
              alt=""
              width="500"
              height="500"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="text-center bg-darkbg text-light-grey py-6 px-[10vw]">
        <SText.Title>{props.pageContent.pageTitle}</SText.Title>
        <SText.Sub className="">
          {props.pageContent.pageSubTitle}
        </SText.Sub>
        <hr className="border-light-grey opacity-40 my-10" />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(calc(200px+10vw),1fr))] gap-5 place-items-center">
          {props.featured.map((item, idx) => (
            <ImageSliderWrap key={idx} images={item.images}>
              <RealEstatePhotoItem
                key={idx}
                imageSrc={item.mainImage}
                name={item.name}
              />
            </ImageSliderWrap>
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

      <SLatestBlogs posts={props.blogs} className="px-4 lg:px-8 " />
      <ReviewSlider reviews={props.reviews} />
    </>
  );
};

export const getStaticProps = async function () {
  const reviews = await getAllReviews();
  const locations = await getAllLocations();
  const images = await getImages("realEstate");
  // console.log(images)
  const pageContent = await getPageContent("subdomain/real-estate");
  const blogs = await getAllPosts();
  return {
    props: { blogs, reviews, locations, featured: images, pageContent },
    revalidate: 3600,
  };
};

export default RealEstateSubDomain;
