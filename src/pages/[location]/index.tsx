import { LocationItem } from "@/components/LocationCard";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface ILocationPageProps {}
export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          location: "south-australia",
        },
      }, // See the "paths" section below
      {
        params: {
          location: "victoria",
        },
      }, // See the "paths" section below
      {
        params: {
          location: "new-south-wales",
        },
      }, // See the "paths" section below
      {
        params: {
          location: "queensland",
        },
      }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  //   const res = await fetch("https://api.github.com/repos/vercel/next.js");
  //   const repo = await res.json();
  const location = context.params?.location as string;
  if (!location)
    return {
      notFound: true,
    };
  return {
    props: {
      mainLocation: location
        .split("-")
        .reduce((p, c) => p + " " + c[0].toUpperCase() + c.slice(1), ""),
      sublocations: [
        "Sydney",
        "Melbourne",
        "Brisbane",
        "Perth",
        "Adelaide",
        "Gold Coast",
        "Newcastle",
        "Canberra",
        "Sunshine Coast",
        "Wollongong",
        "Hobart",
        "Geelong",
        "Townsville",
        "Cairns",
        "Darwin",
        "Toowoomba",
        "Ballarat",
        "Bendigo",
        "Albury-Wodonga",
        "Launceston",
        "Mackay",
        "Rockhampton",
        "Bunbury",
        "Coffs Harbour",
        "Wagga Wagga",
        "Hervey Bay",
        "Mildura",
        "Shepparton",
        "Gladstone",
        "Tamworth",
      ],
      locations: [
        {
          locationName: "South Australia",
          address: "97 Marian Road",
          city: "Firle, South Australia",
          postalCode: "5070",
          phoneNumber: "08-7092-3531",
        },
        {
          locationName: "Victoria",
          address: "178 Boundary Road",
          city: "Pasco Vale, Vic",
          postalCode: "3044",
          phoneNumber: "08-8427-1817",
        },
        {
          locationName: "New South Wales",
          address: "5/34-36 Princes Hwy",
          city: "Kogarah NSW",
          postalCode: "2217",
          phoneNumber: "08-8427-1817",
        },
        {
          locationName: "Queensland",
          address: "195 Days Road",
          city: "Grange QLD",
          postalCode: "4051",
          phoneNumber: "08-8427-1817",
        },
      ],
    },
  };
}) satisfies GetStaticProps<{
  locations: LocationItem[];
  mainLocation: string;
  sublocations: string[];
}>;

const LocationPage: React.FunctionComponent<
  InferGetStaticPropsType<typeof getStaticProps>
> = (props) => {
  const { locations, mainLocation, sublocations } = props;
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="f_68tqeL-mLzXjKfyyXJpWikq44fXRXbgmcKhvqKj4s"
        />
        <title>{mainLocation} | Sujan Studio</title>
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
              <b>
                Looking For Photographers&nbsp;& Videographers,
                Near&nbsp;your&nbsp;location?
              </b>
            </h1>
          </div>
        </div>
      </section>
      <section
        id="locations"
        className="bg-light-grey text-project-100 px-10 xl:px-16 py-20"
      >
        <h2 className="mx-auto w-fit text-21xl lg:text-41xl font-semibold pb-20">
          By Locations|{mainLocation}
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(max(300px,calc(100px+13vw)),1fr))] gap-5 text-project-200 text-5xl">
          {sublocations.map((loc) => (
            <Link href={"/"} className="hover:underline">
              {loc}{" "}
              <svg
                className="w-4 h-4 lg:w-6 lg:h-6 inline"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.7486 19.4999C4.93859 19.4999 5.12859 19.4299 5.27859 19.2799L19.2786 5.27994C19.5686 4.98994 19.5686 4.50994 19.2786 4.21994C18.9886 3.92994 18.5086 3.92994 18.2186 4.21994L4.2186 18.2199C3.9286 18.5099 3.9286 18.9899 4.2186 19.2799C4.3686 19.4299 4.5586 19.4999 4.7486 19.4999Z"
                  fill="#435269"
                />
                <path
                  d="M18.75 15.77C19.16 15.77 19.5 15.43 19.5 15.02V4.75C19.5 4.34 19.16 4 18.75 4H8.48C8.07 4 7.73 4.34 7.73 4.75C7.73 5.16 8.07 5.5 8.48 5.5H18V15.02C18 15.43 18.34 15.77 18.75 15.77Z"
                  fill="#435269"
                />
              </svg>{" "}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default LocationPage;
