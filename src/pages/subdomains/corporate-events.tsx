import ImageSliderWrap from "@/components/ImageSliderWrap";
import ReviewSlider from "@/components/PageSections/UserReviews/ReviewSlider";
import CorporateEventsPhotoItem from "@/components/subdomains/CorporateEventsPhotoItem";
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

interface ICorporateEventsSubDomainProps {}

const CorporateEventsSubDomain: React.FunctionComponent<
  ICorporateEventsSubDomainProps &
    InferGetStaticPropsType<typeof getStaticProps>
> = (props) => {
  const clients = props.locations.siteSettings[0].clients;
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
      <STopBar service="CorporateEvents" />
      <SFlatNav logo />
      <SBanner
        service={props.pageContent.bannerText}
        bannerImg={props.pageContent.image}
        blurDataURL={props.pageContent.blurDataImage}
        getEstimateLink="/book-us"
      >
        {props.pageContent.bannerSubTitle}
      </SBanner>
      <section className="grid bg-light-grey text-project-100 px-[10vw] py-10 gap-6">
        <SText.Title className="text-center">
          {props.pageContent.textBlocks[0].blockTitle}
        </SText.Title>
        <div className="">
          <SText.Sub className="text-project-200">
            <PortableText value={props.pageContent.textBlocks[0].text} />
          </SText.Sub>
        </div>
        <div className="h-full row-start-2 aspect-[6/2]">
          <Image
            src={"/jpegs/CoorporateEvents.jpg"}
            alt=""
            width="500"
            height="500"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-wrap justify-around gap-x-12 bg-gradient-to-b from-divider to-transparent rounded-lg min-h-12 lg:min-h-20">
          {clients?.map((item, idx) => (
            <Image key={idx} alt="" src={item.logo} width="500" height="500" title={item.name} className="h-12 lg:h-20 w-auto"/>
          ))}
        </div>
      </section>
      <section className="text-center bg-darkbg text-light-grey py-6 px-[10vw]">
        <SText.Title>{props.pageContent.pageTitle}</SText.Title>
        <SText.Sub className="">{props.pageContent.pageSubTitle}</SText.Sub>
        <hr className="border-light-grey opacity-40 my-10" />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(calc(200px+10vw),1fr))] gap-5 place-items-center">
          {props.featured.map((item, idx) => (
            <ImageSliderWrap key={idx} images={item.images}>
              <CorporateEventsPhotoItem
                key={idx}
                imageSrc={item.mainImage}
                name={item.name}
              />
            </ImageSliderWrap>
          ))}
          {/* <CorporateEventsPhotoItem
            imageSrc="/jpegs/CoorporateEvents.jpg"
            name="Project Name"
          />
          <CorporateEventsPhotoItem
            imageSrc="/jpegs/CoorporateEvents.jpg"
            name="Project Name"
          />
          <CorporateEventsPhotoItem
            imageSrc="/jpegs/CoorporateEvents.jpg"
            name="Project Name"
          />
          <CorporateEventsPhotoItem
            imageSrc="/jpegs/CoorporateEvents.jpg"
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
  const images = await getImages("corporateEvents");
  const pageContent = await getPageContent("subdomain/corporate-events");
  const blogs = await getAllPosts();
  return {
    props: { blogs, reviews, locations, featured: images, pageContent },
    revalidate: 3600,
  };
};

export default CorporateEventsSubDomain;
