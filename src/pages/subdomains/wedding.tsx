import ImageSliderWrap from "@/components/ImageSliderWrap";
import ReviewSlider from "@/components/PageSections/UserReviews/ReviewSlider";
import SBanner from "@/components/subdomains/SBanner";
import SFlatNav from "@/components/subdomains/SFlatNav";
import SLatestBlogs from "@/components/subdomains/SLatestBlogs";
import STopBar from "@/components/subdomains/TopBar";
import WeddingPhotoItem from "@/components/subdomains/WeddingPhotoItem";
import SText from "@/components/subdomains/text/STextTitle";
import sanityImageLoader from "@/utils/sanity/imageLoader";
import { getImages } from "@/utils/sanity/imageStore";
import { getAllLocations } from "@/utils/sanity/location";
import { getPageContent } from "@/utils/sanity/pageContent";
import { getAllPosts } from "@/utils/sanity/posts";
import { getAllReviews } from "@/utils/sanity/reviews";
import { PortableText, toPlainText } from "@portabletext/react";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface IWeddingSubDomainProps {}

const WeddingSubDomain: React.FunctionComponent<
  IWeddingSubDomainProps & InferGetStaticPropsType<typeof getStaticProps>
> = (props) => {
  // console.log(props);
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
      <div className="relative">
        <Link href={"/"} className="absolute top-5 left-10 z-10 h-20 w-auto hidden md:block">
          <Image
            alt="Back to sujan studio"
            src={"/jpegs/logo-light.png"}
            className="h-full w-auto"
            priority
            width={100}
            height={80}
          />
        </Link>
        <SBanner
          service={props.pageContent.bannerText}
          bannerImg={props.pageContent.image}
          blurDataURL={props.pageContent.blurDataImage}
          getEstimateLink="/book-us?needs=photography&purpose=personal&step=3&exactNeed=Wedding"
        >
          {props.pageContent.bannerSubTitle}
        </SBanner>
      </div>
      <SFlatNav />
      <section className="text-center bg-darkbg text-light-grey py-6 px-[10vw]">
        <SText.Title>{props.pageContent.pageTitle}</SText.Title>
        <SText.Sub className="">
          {props.pageContent.pageSubTitle}
        </SText.Sub>
        <hr className="border-light-grey opacity-40 my-10" />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(calc(200px+10vw),1fr))] gap-5 place-items-center">
          {props.featured.map((item, idx) => (
            <ImageSliderWrap key={idx} images={item.images}>
              <WeddingPhotoItem
                key={idx}
                imageSrc={item.mainImage}
                bride={item.brideName}
                groom={item.groomName}
                date={new Date(item.date).toLocaleDateString("en-au", {
                  dateStyle: "long",
                })}
              />
            </ImageSliderWrap>
          ))}
        </div>
      </section>
      <section className=" py-6 bg-light-grey text-project-100 px-[10vw]">
        <SText.Title>{props.pageContent.textBlocks[0].blockTitle}</SText.Title>
        <div className="grid gap-2">
          <div className="row-start-2 lg:row-start-1 col-start-1 grid gap-3">
            <SText.Sub className="text-project-200">
              <PortableText value={props.pageContent.textBlocks[0].text} />
            </SText.Sub>
            <Link
              href={"/book-us?needs=photography&purpose=personal&step=3&exactNeed=Wedding"}
              className="mx-auto text-center lg:mx-0 bg-project-100 border-2 border-project-100 text-light-grey p-2 min-w-[150px] w-min flex items-center justify-center"
            >
              Book Us Now
            </Link>
          </div>
          <div className="h-full col-start-1 lg:col-start-2">
            <Image
              src={props.pageContent.textBlocks[0].relatedImages[0]}
              loader={sanityImageLoader}
              alt=""
              width="500"
              height="500"
              className="h-full w-full max-h-72 object-cover"
            />
          </div>
        </div>
      </section>
      <ReviewSlider reviews={props.reviews} />
      <SLatestBlogs posts={props.blogs} className="px-4 lg:px-8 " />
    </>
  );
};

export const getStaticProps = async function () {
  const reviews = await getAllReviews();
  const locations = await getAllLocations();
  const images = await getImages("wedding");
  const pageContent = await getPageContent("subdomain/wedding");
  // console.log(pageContent);
  //   console.log(images);
  const blogs = await getAllPosts();
  return {
    props: { blogs, reviews, locations, featured: images, pageContent },
    revalidate: 3600,
  };
};

export default WeddingSubDomain;
