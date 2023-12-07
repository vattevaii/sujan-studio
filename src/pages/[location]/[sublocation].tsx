import { LocationItem } from "@/components/LocationCard";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface ILocationPageProps {}
export const getStaticPaths = (async () => {
  const sublocations = [
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
  ];
  const mainLocations = [
    "South Australia",
    "Victoria",
    "New South Wales",
    "Queensland",
  ];
  return {
    paths: mainLocations.flatMap((i) => {
      return sublocations.map((s) => ({
        params: {
          location: i.toLowerCase().split(" ").join("-"),
          sublocation: s.toLowerCase().split(" ").join("-"),
        },
      }));
    }),
    fallback: true, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  //   const res = await fetch("https://api.github.com/repos/vercel/next.js");
  //   const repo = await res.json();
  const location = context.params?.location as string;
  const sublocation = context.params?.sublocation as string;
  if (!location && !sublocation)
    return {
      notFound: true,
    };
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
        className="bg-light-grey text-project-100 px-10 xl:px-16 py-20"
      >
        <h2 className="mx-auto w-fit text-21xl lg:text-41xl font-semibold pb-20">
          By Locations|{mainLocation}
        </h2>
      </section>
    </>
  );
};

export default LocationPage;
