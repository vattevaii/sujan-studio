import { LocationItem } from "@/components/LocationCard";
import ReviewSlider, { ReviewItem } from "@/components/PageSections/UserReviews/ReviewSlider";
import FamilyPortraitsPhotoItem from "@/components/subdomains/FamilyPortraitsPhotoItem";
import SBanner from "@/components/subdomains/SBanner";
import SFlatNav from "@/components/subdomains/SFlatNav";
import STopBar from "@/components/subdomains/TopBar";
import SText from "@/components/subdomains/text/STextTitle";
import { getImages } from "@/utils/sanity/imageStore";
import { getAllLocations } from "@/utils/sanity/location";
import { getAllReviews } from "@/utils/sanity/reviews";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import * as React from "react";

interface IFamilyPortraitsSubDomainProps {}

const FamilyPortraitsSubDomain: React.FunctionComponent<
  IFamilyPortraitsSubDomainProps &
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
      <STopBar service="FamilyPortraits" />
      <SFlatNav />
      <SBanner service="Family Portraits" bannerImg="/jpegs/mainSection.jpg" />
      <section className="grid bg-light-grey text-project-100 px-[5vw] py-10 gap-6">
        <SText.Title className="text-center">
          A trusted photography business, collaborating seamlessly with families
          and individuals to capture cherished moments.
        </SText.Title>
        <div className="grid gap-5 md:gap-10 grid-cols-2 md:grid-cols-3 place-items-center">
          <FamilyPortraitsPhotoItem
            imageSrc="/jpegs/CoorporateEvents.jpg"
            name="Project Name"
          />
          <FamilyPortraitsPhotoItem
            imageSrc="/jpegs/CoorporateEvents.jpg"
            name="Project Name"
          />
          <FamilyPortraitsPhotoItem
          className="hidden md:block"
            imageSrc="/jpegs/CoorporateEvents.jpg"
            name="Project Name"
          />
        </div>
       
      </section>
      <section className="text-center text-light-grey py-6 ">
        <SText.Title>Our Featured Works</SText.Title>
        <SText.Sub className="text-project-200">
          Lorem ipsum dolor sit amet consectetur. Ultrices justo sit duis
          egestas.
        </SText.Sub>
        <hr className="w-5/6 mx-auto border-light-grey opacity-40 my-10" />
        <div className="grid gap-5 grid-cols-2 md:grid-cols-4 place-items-center">
          {props.featured.map((item, idx) => (<FamilyPortraitsPhotoItem
            key={idx}
            imageSrc={item.mainImage}
            name={item.name}
            className={(idx===3 || idx===5)?"row-span-2 w-full":""}
          />))}
          {/* <FamilyPortraitsPhotoItem
            imageSrc="/jpegs/CoorporateEvents.jpg"
            name="Project Name"
          />
          <FamilyPortraitsPhotoItem
            imageSrc="/jpegs/CoorporateEvents.jpg"
            name="Project Name"
          />
          <FamilyPortraitsPhotoItem
            className="row-span-2 w-full"
            imageSrc="/jpegs/CoorporateEvents.jpg"
            name="Project Name"
          />
          <FamilyPortraitsPhotoItem
            imageSrc="/jpegs/CoorporateEvents.jpg"
            name="Project Name"
          />
          <FamilyPortraitsPhotoItem
            className="row-span-2 w-full"
            imageSrc="/jpegs/CoorporateEvents.jpg"
            name="Project Name"
          />
          <FamilyPortraitsPhotoItem
            imageSrc="/jpegs/CoorporateEvents.jpg"
            name="Project Name"
          />
          <FamilyPortraitsPhotoItem
            imageSrc="/jpegs/CoorporateEvents.jpg"
            name="Project Name"
          />
          <FamilyPortraitsPhotoItem
            imageSrc="/jpegs/CoorporateEvents.jpg"
            name="Project Name"
          />

          <FamilyPortraitsPhotoItem
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
  const images = await getImages("familyAndEvents");
  return {
    props: { reviews, locations, featured: images },
    revalidate: 3600
  };
} satisfies GetStaticProps<{
  reviews: ReviewItem[],
  locations: LocationItem[]
}>;

export default FamilyPortraitsSubDomain;
