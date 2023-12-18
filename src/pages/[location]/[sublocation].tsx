import { LocationItem } from "@/components/LocationCard";
import ReviewSlider from "@/components/PageSections/UserReviews/ReviewSlider";
import { getAllLocations, getAllSubLocations } from "@/utils/sanity/location";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

interface ILocationPageProps {}
export const getStaticPaths = (async () => {
  const locations = await getAllSubLocations();
  const mapped = locations
    .map((d) => {
      const subLocations = d.sublocations.map((i) => ({
        params: {
          location: d.slug,
          sublocation: i.slug,
        },
      }));
      return subLocations;
    })
    .flat();
  return {
    paths: mapped,
    fallback: true, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  //   const res = await fetch("https://api.github.com/repos/vercel/next.js");
  //   const repo = await res.json();
  // console.log(context);
  const location = context.params?.location as string;
  const sublocation = context.params?.sublocation as string;
  if (!location || !sublocation)
    return {
      notFound: true,
    };
  const locations = await getAllLocations();
  return {
    props: {
      mainLocation: location
        .split("-")
        .reduce((p, c) => p + " " + c[0].toUpperCase() + c.slice(1), ""),
      sublocation: sublocation
        .split("-")
        .reduce((p, c) => p + " " + c[0].toUpperCase() + c.slice(1), ""),
      sublocationData: {
        name: sublocation
          .split("-")
          .reduce((p, c) => p + " " + c[0].toUpperCase() + c.slice(1), ""),
        description: `Sujan Studio is your partner in creating visual narratives that captivate hearts and minds. We don’t just take photographs and videos; we curate moments that resonate.
        Whether it's a milestone event, a business venture, or a personal journey, our mission is to bring your story to life in the most authentic and enchanting way.`,
        pictures: [
          "/jpegs/BusinessItem.jpg",
          "/jpegs/mainSection.jpg",
          "/jpegs/FamilyItem.jpg",
          "/jpegs/Weddings.jpg",
        ],
      },
      reviews: [
        {
          bg: "/jpegs/mainSection.jpg",
          author: "Caitlyn Mathews",
          authorSrc: "/jpegs/WeddingItem.jpg",
          company: "Company Name",
          reviewText:
            "&quot;Sujan Studio delivered stunning photos that captured the essence&nbsp;of&nbsp;our&nbsp;moments. <wbr /> We&apos;re&nbsp;thrilled&nbsp;with&nbsp;their&nbsp;work!&quot;",
        },
        {
          bg: "/jpegs/mainSection.jpg",
          author: "Caitlyn Mathews",
          authorSrc: "/jpegs/WeddingItem.jpg",
          company: "Company Name",
          reviewText:
            "&quot;Sujan Studio delivered stunning photos that captured the essence&nbsp;of&nbsp;our&nbsp;moments. <wbr /> We&apos;re&nbsp;thrilled&nbsp;with&nbsp;their&nbsp;work!&quot;",
        },
        {
          bg: "/jpegs/mainSection.jpg",
          author: "Caitlyn Mathews",
          authorSrc: "/jpegs/WeddingItem.jpg",
          company: "Company Name",
          reviewText:
            "&quot;Sujan Studio delivered stunning photos that captured the essence&nbsp;of&nbsp;our&nbsp;moments. <wbr /> We&apos;re&nbsp;thrilled&nbsp;with&nbsp;their&nbsp;work!&quot;",
        },
        {
          bg: "/jpegs/mainSection.jpg",
          author: "Caitlyn Mathews",
          authorSrc: "/jpegs/WeddingItem.jpg",
          company: "Company Name",
          reviewText:
            "&quot;Sujan Studio delivered stunning photos that captured the essence&nbsp;of&nbsp;our&nbsp;moments. <wbr /> We&apos;re&nbsp;thrilled&nbsp;with&nbsp;their&nbsp;work!&quot;",
        },
        {
          bg: "/jpegs/mainSection.jpg",
          author: "Caitlyn Mathews",
          authorSrc: "/jpegs/WeddingItem.jpg",
          company: "Company Name",
          reviewText:
            "&quot;Sujan Studio delivered stunning photos that captured the essence&nbsp;of&nbsp;our&nbsp;moments. <wbr /> We&apos;re&nbsp;thrilled&nbsp;with&nbsp;their&nbsp;work!&quot;",
        },
        {
          bg: "/jpegs/mainSection.jpg",
          author: "Caitlyn Mathews",
          authorSrc: "/jpegs/WeddingItem.jpg",
          company: "Company Name",
          reviewText:
            "&quot;Sujan Studio delivered stunning photos that captured the essence&nbsp;of&nbsp;our&nbsp;moments. <wbr /> We&apos;re&nbsp;thrilled&nbsp;with&nbsp;their&nbsp;work!&quot;",
        },
      ],
      locations,
    },
  };
}) satisfies GetStaticProps<{
  locations: LocationItem[];
  mainLocation: string;
  sublocation: string;
  sublocationData: {
    name: string;
    description: string;
    pictures: string[];
  };
}>;

const LocationPage: React.FunctionComponent<
  InferGetStaticPropsType<typeof getStaticProps>
> = (props) => {
  const { locations, mainLocation, sublocation, sublocationData } = props;
  const router = useRouter()
  if(router.isFallback){
    return <>
      <Head>
        <meta
          name="google-site-verification"
          content="f_68tqeL-mLzXjKfyyXJpWikq44fXRXbgmcKhvqKj4s"
        />
        <title>{"{mainLocation.name}" + " | Sujan Studio"}</title>
        <meta
          name="description"
          content="Discover Sujan Studio, your trusted source for professional photography services in Adelaide, South Australia, and beyond. We serve various locations, including South Australia, Victoria, New South Wales, and Queensland. Contact us today for captivating moments captured."
        />
      </Head>
    </>
  }
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="f_68tqeL-mLzXjKfyyXJpWikq44fXRXbgmcKhvqKj4s"
        />
        <title>{sublocation + " - " + mainLocation + " | Sujan Studio"}</title>
        <meta
          name="description"
          content="Discover Sujan Studio, your trusted source for professional photography services in Adelaide, South Australia, and beyond. We serve various locations, including South Australia, Victoria, New South Wales, and Queensland. Contact us today for captivating moments captured."
        />
      </Head>
      <section id="banner" className="relative banner text-center">
        <Image
          priority={true}
          width={100}
          height={400}
          className="absolute top-0 -z-[1] w-full h-full object-cover"
          alt=""
          src="/jpegs/mainSection.jpg"
        />
        <div className="flex flex-col items-center min-h-[50vh] w-full px-[5vw] py-[1vh] lg:px-[100px] lg:py-[10px]">
          <div className="flex-1 flex flex-col justify-center text-21xl font-source-sans-3 font-bold lg:text-41xl">
            <h1>
              <b>Find Your Next Photographer Near {sublocation}</b>
            </h1>
          </div>
        </div>
      </section>
      <section
        id="locations"
        className="bg-light-grey text-project-100 px-10 xl:px-16 pt-20 pb-5"
      >
        <h2 className="mx-auto text-center w-fit text-21xl lg:text-41xl font-semibold pb-20">
          Transforming&nbsp;Moments into Timeless&nbsp;Memories –
          Your&nbsp;Vision, Our&nbsp;Expertise.
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <Image
              className="w-full rounded-md"
              width={500}
              height={500}
              src={props.sublocationData.pictures[0]}
              alt=""
            />
          </div>
          <div className="flex flex-col items-end gap-5 text-project-200 text-md md:text-xl xl:text-5xl">
            <p>
              Sujan Studio is your partner in creating visual narratives that
              captivate hearts and minds. We don’t just take photographs and
              videos; we curate moments that resonate. Whether it&apos;s a
              milestone event, a business venture, or a personal journey, our
              mission is to bring your story to life in the most authentic and
              enchanting way.
            </p>
            <Link href="/book-us">
              <button className=" bg-project-100 text-white p-4 w-44">
                Book Us
              </button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            className="w-full rounded-md my-5 max-h-52"
            width={500}
            height={500}
            src={props.sublocationData.pictures[1]}
            alt=""
          />
        </div>
      </section>
      <ReviewSlider reviews={props.reviews} className="h-64 md:h-72 lg:h-96" />
      <section className="bg-light-grey text-project-100 px-10 xl:px-16 pt-20 pb-5">
        <h2 className="mx-auto text-center w-fit text-21xl lg:text-41xl font-semibold pb-20">
          We Bring Dreams Into&nbsp;Reality
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex flex-col items-end gap-5 text-project-200 text-md md:text-xl xl:text-5xl">
            <p>
              Sujan Studio is your partner in creating visual narratives that
              captivate hearts and minds. We don’t just take photographs and
              videos; we curate moments that resonate. Whether it&apos;s a
              milestone event, a business venture, or a personal journey, our
              mission is to bring your story to life in the most authentic and
              enchanting way.
            </p>
          </div>
          <div>
            <Image
              className="w-full rounded-md"
              width={500}
              height={500}
              src={props.sublocationData.pictures[0]}
              alt=""
            />
          </div>
        </div>
        <h2 className="mx-auto text-center w-fit text-21xl lg:text-41xl font-semibold pb-20">
          Moments Captured with Our Exceptional Photography Services
        </h2>
        <div className="flex flex-col sm:flex-row justify-between">
          <div>
            <h2 className="w-fit text-5xl lg:text-21xl font-semibold pb-3">
              Lets start something amazing together.
            </h2>
            <p>
              Our skilled photographers will document every cherished moment,
              creating timeless memories.
            </p>
          </div>
          <Link href="/book-us" className="self-end">
            <button className=" bg-project-100 text-white p-4 w-44">
              Book Us
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default LocationPage;
