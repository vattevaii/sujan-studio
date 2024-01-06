import { LocationItem } from "@/components/LocationCard";
import CEOMessage from "@/components/PageSections/CEOMessage";
import PageBanner from "@/components/PageSections/PageBanner";
import ReviewSlider, {
  ReviewItem,
} from "@/components/PageSections/UserReviews/ReviewSlider";
import PlaceHolderImage from "@/components/PlaceHolderImage";
import sanityImageLoader from "@/utils/sanity/imageLoader";
import { getAllLocations } from "@/utils/sanity/location";
import { getPageContent } from "@/utils/sanity/pageContent";
import { getAllReviews } from "@/utils/sanity/reviews";
import { PortableText } from "@portabletext/react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";

type Props = {};

export default function OurStory({
  reviews,
  pageContent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="f_68tqeL-mLzXjKfyyXJpWikq44fXRXbgmcKhvqKj4s"
        />
        <title>Our Story | Sujan Studio</title>
        <meta
          name="description"
          content="Discover Sujan Studio, your trusted source for professional photography services in Adelaide, South Australia, and beyond. We serve various locations, including South Australia, Victoria, New South Wales, and Queensland. Contact us today for captivating moments captured."
        />
      </Head>
      <PageBanner
        image={pageContent.image}
        blurDataURL={pageContent.blurDataImage}
      >
        <PortableText value={pageContent.bannerText} />
      </PageBanner>
      <section className="our-story bg-light-grey">
        <h2 className="text-21xl lg:text-41xl text-project-100 text-center font-semibold pt-16 pb-14 lg:pt-28 lg:pb-24">
          {pageContent.pageTitle}
        </h2>
        <div className="grid text-project-200 text-md md:text-xl lg:text-5xl px-4 lg:px-20 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-10 lg:gap-x-16 lg:gap-y-11 pb-16 lg:pb-32">
          <div className="md:col-span-2 lg:col-span-1 xl:col-span-2">
            <PortableText value={pageContent.textBlocks[0].text} />
          </div>
          <div className="row-start-4 md:row-start-3 md:col-start-2 lg:row-start-4 lg:col-start-1 xl:row-start-3 xl:col-start-2">
            <PortableText value={pageContent.textBlocks[1].text} />
          </div>
          <div className="flex row-start-2 col-start-1 row-span-1 md:row-span-1 md:row-start-2 lg:row-span-1 xl:row-span-2 xl:row-start-2 aspect-square h-full w-full max-h-72 md:h-full lg:max-h-72 xl:h-full ">
            <Image
              className="object-cover md:h-[70vh] lg:h-auto xl:h-[70vh] w-full"
              width="700"
              height="700"
              src={pageContent.textBlocks[0].relatedImages[0]}
              loader={sanityImageLoader}
              alt={" Image "}
            />
          </div>
          <div className="flex row-start-3 col-start-1 md:row-start-2 md:col-start-2 lg:row-start-3 lg:col-start-1 xl:row-start-2 xl:col-start-2 aspect-[2/1] h-56 md:h-full lg:h-56 xl:h-full w-full">
            <Image
              className="object-cover h-full w-full"
              width="700"
              height="350"
              src={pageContent.textBlocks[0].relatedImages[1]}
              loader={sanityImageLoader}
              alt={" Image "}
            />
          </div>
        </div>
      </section>
      <section className="reviews">
        <ReviewSlider reviews={reviews} className="h-64 md:h-72 lg:h-96" />
      </section>
      <CEOMessage data={pageContent.textBlocks[2]} className="py-12" />
    </>
  );
}

export const getStaticProps = async () => {
  const locations = await getAllLocations();
  const reviews = await getAllReviews();
  const pageContent = await getPageContent("our-story");
  return {
    props: {
      pageContent,
      locations,
      reviews,
    },
  };
};
