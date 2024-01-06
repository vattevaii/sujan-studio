import { LocationItem } from "@/components/LocationCard";
import ImageGrid from "@/components/PageSections/ImageGrid";
import PageBanner from "@/components/PageSections/PageBanner";
import ImageSlider, {
  ImageSliderOptions,
} from "@/components/Slider/ImageSlider";
import { getSubdomainLink } from "@/utils/getSubdomainLink";
import { getPortfolio } from "@/utils/sanity/imageStore";
import { getAllLocations } from "@/utils/sanity/location";
import { getPageContent } from "@/utils/sanity/pageContent";
import { PortableText } from "@portabletext/react";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NewWebsite = ({
  pageContent,
  portfolioImages,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [openModal, setOpenModal] = useState(false);
  const [imageSliderOptions, setImgSliderOptions] =
    useState<ImageSliderOptions>({
      currentCategory: portfolioImages[0].title,
      images: portfolioImages[0].images,
      index: 0,
    });
  const openImageModal = (
    title: string,
    img: string,
    idx: number,
    imgPos: [number, number, number, number]
  ) => {
    const allImgs = portfolioImages.find((img) => img.title === title)!.images;
    // // console.log(allImgs, portfolioImages, title);
    setImgSliderOptions({
      images: allImgs,
      currentCategory: title,
      index: idx,
    });
    setOpenModal(true);
  };
  return (
    <>
      {openModal ? (
        <ImageSlider
          options={imageSliderOptions}
          onClose={() => setOpenModal(false)}
        />
      ) : (
        <></>
      )}
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
      <PageBanner
        image={pageContent.image}
        blurDataURL={pageContent.blurDataImage}
      >
        <PortableText value={pageContent.bannerText} />
      </PageBanner>
      {portfolioImages.map((item, idx) => (
        <section key={idx}>
          <div className="text-project-100 bg-light-grey px-4 lg:px-8 flex justify-between items-center">
            <h2 className="py-[0.4em] lg:py-[0.2em] text-5xl md:text-21xl xl:text-41xl font-bold">
              {item.title}
            </h2>
            <Link
              href={item.link}
              className="font-normal hover:underline text-xl md:text-5xl xl:text-[30px]"
            >
              <span className="hidden md:inline px-2">View More</span>
              <svg
                className="inline w-2 h-2 md:w-3 xl:w-4 md:h-3 xl:h-4"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.15385 0.5V2.80769H11.0654L0 13.8731L1.62692 15.5L12.6923 4.43462V14.3462H15V0.5H1.15385Z"
                  fill="#000815"
                />
              </svg>
            </Link>
          </div>
          <ImageGrid
            images={item.images.slice(0, 6)}
            onSelectImage={(img, imgIdx, imgPos) =>
              openImageModal(item.title, img, imgIdx, imgPos)
            }
          />
        </section>
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const locations = await getAllLocations();
  const portfolio = await getPortfolio();
  const items: { [x: string]: number } = {};
  const relatedImages: { [x: string]: string[] } = {};
  const portfolioImages: { title: string; link: string; images: string[] }[] =
    [];
  const pageContent = await getPageContent("portfolio");
  portfolio.forEach((item) => {
    if (!(item.title in items)) {
      items[item.title] = portfolioImages.length;
      relatedImages[item.title] = [];
      portfolioImages.push({
        title: item.title,
        link: getSubdomainLink(item.title),
        images: [],
      });
    }
    const idx = items[item.title];
    portfolioImages[idx].images.push(item.mainImage);
    if (item.images)
      relatedImages[item.title] = [
        ...relatedImages[item.title],
        ...item.images,
      ];
    else console.log(item);
  });
  portfolioImages.forEach((item) => {
    item.images = [...item.images, ...relatedImages[item.title]];
  });
  // const portfolioImages = portfolio.map((item) => ({
  //   title: item.title[0].toUpperCase() + item.title.slice(1) + " Photography",
  //   images:[item.mainImage, ...item.images],
  // }))
  return {
    props: {
      pageContent,
      portfolioImages,
      locations,
    },
    revalidate: 3600,
  };
};

export default NewWebsite;
