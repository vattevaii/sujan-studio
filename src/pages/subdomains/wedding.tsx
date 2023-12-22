import ReviewSlider from "@/components/PageSections/UserReviews/ReviewSlider";
import SBanner from "@/components/subdomains/SBanner";
import SFlatNav from "@/components/subdomains/SFlatNav";
import SLatestBlogs from "@/components/subdomains/SLatestBlogs";
import STopBar from "@/components/subdomains/TopBar";
import WeddingPhotoItem from "@/components/subdomains/WeddingPhotoItem";
import SText from "@/components/subdomains/text/STextTitle";
import { getAllLocations } from "@/utils/sanity/location";
import { getAllReviews } from "@/utils/sanity/reviews";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import * as React from "react";

interface IWeddingSubDomainProps {}

const WeddingSubDomain: React.FunctionComponent<
  IWeddingSubDomainProps & InferGetStaticPropsType<typeof getStaticProps>
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
      <STopBar service="Wedding" />
      <SBanner service="Wedding" bannerImg="/jpegs/mainSection.jpg" />
      <SFlatNav />
      <section className="text-center text-light-grey py-6 px-[10vw]">
        <SText.Title>Our Featured Wedding Photography</SText.Title>
        <SText.Sub className="text-project-200">
          Lorem ipsum dolor sit amet consectetur. Ultrices justo sit duis
          egestas.
        </SText.Sub>
        <hr className="border-light-grey opacity-40 my-10" />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(calc(200px+10vw),1fr))] gap-5 place-items-center">
          <WeddingPhotoItem
            imageSrc="/jpegs/RealEstate.jpg"
            bride="Antonio"
            groom="Claire"
            date="19th Jan 2019"
          />
          <WeddingPhotoItem
            imageSrc="/jpegs/Weddings.jpg"
            bride="Antonio"
            groom="Claire"
            date="19th Jan 2019"
          />
          <WeddingPhotoItem
            imageSrc="/jpegs/CoorporateEvents.jpg"
            bride="Antonio"
            groom="Claire"
            date="19th Jan 2019"
          />
          <WeddingPhotoItem
            imageSrc="/jpegs/Weddings.jpg"
            bride="Antonio"
            groom="Claire"
            date="19th Jan 2019"
          />
          <WeddingPhotoItem
            imageSrc="/jpegs/Weddings.jpg"
            bride="Antonio"
            groom="Claire"
            date="19th Jan 2019"
          />
        </div>
      </section>
      <section className="grid py-6 bg-light-grey text-project-100 px-[10vw] gap-2">
        <div className="col-start-1 grid gap-3">
          <SText.Title>Why work with us?</SText.Title>
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
          <button className="bg-project-100 border-2 border-project-100  text-light-grey p-2 min-w-[150px] w-min">
            Book Us Now
          </button>
        </div>
        <div className="h-full col-start-2">
          <Image
            src={"/jpegs/Weddings.jpg"}
            alt=""
            width="500"
            height="500"
            className="h-full w-auto"
          />
        </div>
      </section>
      <ReviewSlider reviews={props.reviews} />
      <SLatestBlogs className="px-4 lg:px-8 " />
    </>
  );
};

export const getStaticProps = async function () {
  const reviews = await getAllReviews();
  const locations = await getAllLocations();
  return {
    props: { reviews, locations },
    revalidate: 3600
  };
};

export default WeddingSubDomain;
