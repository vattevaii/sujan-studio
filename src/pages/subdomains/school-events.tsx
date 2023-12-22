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

interface ISchoolEventsSubDomainProps {}

const SchoolEventsSubDomain: React.FunctionComponent<
  ISchoolEventsSubDomainProps &
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
      <STopBar service="SchoolEvents" />
      <SFlatNav />
      <SBanner service="SchoolEvents" bannerImg="/jpegs/mainSection.jpg" />
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
        <div className="h-full row-start-2 aspect-[8/2]">
          <Image
            src={"/jpegs/CoorporateEvents.jpg"}
            alt=""
            width="500"
            height="500"
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          {new Array(10).fill("/jpegs/CoorporateEvents.jpg").map(item => <Image alt="" src={item} width="50" height="50" />)}
        </div>
      </section>
      <section className="text-center text-light-grey py-6 px-[10vw]">
        <SText.Title>Our Featured Works</SText.Title>
        <SText.Sub className="text-project-200">
          Lorem ipsum dolor sit amet consectetur. Ultrices justo sit duis
          egestas.
        </SText.Sub>
        <hr className="border-light-grey opacity-40 my-10" />
        <div className="grid grid-cols-2 md:grid-cols-4 place-items-center">
          <SchoolEventsPhotoItem
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
          />
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
  return {
    props: { reviews, locations },
  };
};

export default SchoolEventsSubDomain;
