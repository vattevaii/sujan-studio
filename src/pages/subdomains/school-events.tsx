import ReviewSlider from "@/components/PageSections/UserReviews/ReviewSlider";
import SchoolEventsPhotoItem from "@/components/subdomains/SchoolEventsPhotoItem";
import SBanner from "@/components/subdomains/SBanner";
import SFlatNav from "@/components/subdomains/SFlatNav";
import STopBar from "@/components/subdomains/TopBar";
import SText from "@/components/subdomains/text/STextTitle";
import { getAllLocations } from "@/utils/sanity/location";
import { getAllReviews } from "@/utils/sanity/reviews";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import * as React from "react";
import { getImages } from "@/utils/sanity/imageStore";
import ImageSliderWrap from "@/components/ImageSliderWrap";
import { getPageContent } from "@/utils/sanity/pageContent";
import { PortableText } from "@portabletext/react";

interface ISchoolEventsSubDomainProps {}

const SchoolEventsSubDomain: React.FunctionComponent<
  ISchoolEventsSubDomainProps & InferGetStaticPropsType<typeof getStaticProps>
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
      <STopBar service="SchoolEvents" />
      <SFlatNav logo />
      <SBanner
        service={props.pageContent.bannerText}
        bannerImg={props.pageContent.image}
        blurDataURL={props.pageContent.blurDataImage}
        getEstimateLink="book-us?needs=photography&purpose=business&step=3&exactNeed=School+"
      >
        {props.pageContent.bannerSubTitle}
      </SBanner>
      <section className=" bg-light-grey text-project-100 px-[10vw] py-10">
        <SText.Title className="text-center">
          {props.pageContent.textBlocks[0].blockTitle}
        </SText.Title>
        <div className="grid gap-3">
          <div className="row-start-2 lg:row-start-1 lg:col-start-2">
            <SText.Sub className="text-project-200">
              <PortableText value={props.pageContent.textBlocks[0].text} />
            </SText.Sub>
          </div>
          <div className="h-full w-full col-start-1 row-start-1 aspect-video">
            <Image
              src={props.pageContent.textBlocks[0].relatedImages[0]}
              alt=""
              width="500"
              height="500"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-2 flex flex-wrap justify-around gap-x-12 bg-gradient-to-b from-divider to-transparent rounded-lg min-h-12 lg:min-h-20">
            {clients?.map((item, idx) => (
              <Image
                key={idx}
                alt=""
                src={item.logo}
                width="500"
                height="500"
                title={item.name}
                className="w-auto h-12 lg:h-20"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="text-center bg-darkbg text-light-grey py-6 px-[10vw]">
        <SText.Title>{props.pageContent.pageTitle}</SText.Title>
        <SText.Sub className="">{props.pageContent.pageSubTitle}</SText.Sub>
        <hr className="border-light-grey opacity-40 my-10" />
        <div className="grid grid-cols-2 md:grid-cols-4 place-items-center">
          {props.featured.map((item, idx) => (
            <ImageSliderWrap key={idx} images={item.images}>
              <SchoolEventsPhotoItem
                date={item.date}
                imageSrc={item.mainImage}
                name={item.name}
                className={
                  idx === 3 || idx == 4 ? "row-span-2 col-span-2 w-full" : ""
                }
              />
            </ImageSliderWrap>
          ))}
          {/* <SchoolEventsPhotoItem
            date={"19th Dec 2050"}
            imageSrc="/jpegs/CoorporateEvents.jpg"
            name="Project Name"
          />
          <SchoolEventsPhotoItem
            className="row-span-2 col-span-2 w-full"
            date={"19th Dec 2050"}
            imageSrc="/jpegs/CoorporateEvents.jpg"
            name="Project Name"
          />
          <SchoolEventsPhotoItem
            className="row-span-2 col-span-2 w-full"
            date={"19th Dec 2050"}
            imageSrc="/jpegs/CoorporateEvents.jpg"
            name="Project Name"
          />
          <SchoolEventsPhotoItem
            date={"19th Dec 2050"}
            imageSrc="/jpegs/CoorporateEvents.jpg"
            name="Project Name"
          />
          <SchoolEventsPhotoItem
            date={"19th Dec 2050"}
            imageSrc="/jpegs/CoorporateEvents.jpg"
            name="Project Name"
          /> */}
        </div>
      </section>

      {/* <SLatestBlogs className="px-4 lg:px-8 " /> */}
      <ReviewSlider reviews={props.reviews} />
    </>
  );
};

export const getStaticProps = async function () {
  const reviews = await getAllReviews();
  const locations = await getAllLocations();
  const images = await getImages("schoolAndEvents");
  const pageContent = await getPageContent("subdomain/school-events");
  return {
    props: { reviews, locations, featured: images, pageContent },
    revalidate: 3600,
  };
};

export default SchoolEventsSubDomain;
