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
import { getAllReviews } from "@/utils/sanity/reviews";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import * as React from "react";

interface ICorporateEventsSubDomainProps {}

const CorporateEventsSubDomain: React.FunctionComponent<
  ICorporateEventsSubDomainProps &
    InferGetStaticPropsType<typeof getStaticProps>
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
      <STopBar service="CorporateEvents" />
      <SFlatNav />
      <SBanner
        service="Corporate Events"
        bannerImg="/jpegs/mainSection.jpg"
        getEstimateLink="/book-us"
      />
      <section className="grid bg-light-grey text-project-100 px-[10vw] py-10 gap-6">
        <SText.Title className="text-center">
          Why Us For Your Coorporate Events?
        </SText.Title>
        <div className="">
          <SText.Sub className="text-project-200">
            Lorem ipsum dolor sit amet consectetur. Ultrices justo sit duis
            egestas. Et sagittis egestas in porttitor lectus nec sollicitudin
            neque eget. Quam nisl eget euismod feugiat posuere porttitor. Neque
            laoreet congue egestas eu porttitor tempus. Ac condimentum sed
            consequat eu massa pretium sed nisl. Cursus sagittis est sed tortor.
            Turpis arcu pharetra aliquam a ac faucibus. Diam molestie cursus
            quis libero lorem ultricies. Id sit bibendum posuere ut amet
            ullamcorper. Massa bibendum laoreet sagittis senectus eget enim
            sapien urna duis. Lorem ipsum dolor sit amet consectetur. Ultrices
            justo sit duis egestas. Et sagittis egestas in porttitor lectus nec
            sollicitudin neque eget. Quam nisl eget euismod feugiat posuere
            porttitor. Neque laoreet congue egestas eu porttitor tempus.
          </SText.Sub>
        </div>
        <div className="h-full row-start-2 aspect-[6/2]">
          <Image
            src={"/jpegs/CoorporateEvents.jpg"}
            alt=""
            width="500"
            height="500"
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          {new Array(10)
            .fill("/jpegs/CoorporateEvents.jpg")
            .map((item, idx) => (
              <Image key={idx} alt="" src={item} width="50" height="50" />
            ))}
        </div>
      </section>
      <section className="text-center text-light-grey py-6 px-[10vw]">
        <SText.Title>Our Featured Works</SText.Title>
        <SText.Sub className="text-project-200">
          Lorem ipsum dolor sit amet consectetur. Ultrices justo sit duis
          egestas.
        </SText.Sub>
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

      <SLatestBlogs className="px-4 lg:px-8 " />
      <ReviewSlider reviews={props.reviews} />
    </>
  );
};

export const getStaticProps = async function () {
  const reviews = await getAllReviews();
  const locations = await getAllLocations();
  const images = await getImages("corporateEvents");
  return {
    props: { reviews, locations, featured: images },
    revalidate: 3600,
  };
};

export default CorporateEventsSubDomain;
