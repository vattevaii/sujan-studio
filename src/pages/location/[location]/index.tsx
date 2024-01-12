import PageBanner from "@/components/PageSections/PageBanner";
import { getAllLocations, getAllSubLocations } from "@/utils/sanity/location";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

interface ILocationPageProps {}
export const getStaticPaths = (async () => {
  const { locations } = await getAllLocations();
  return {
    paths: locations.map((loc) => ({
      params: {
        location: loc.slug,
      },
    })),
    fallback: true, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  //   const res = await fetch("https://api.github.com/repos/vercel/next.js");
  //   const repo = await res.json();
  // console.log("Location Page",context);
  const location = context.params?.location as string;
  // console.log(location);
  if (!location)
    return {
      notFound: true,
    };
  const locationData = await getAllSubLocations(location);
  if (!locationData || locationData.length === 0)
    return {
      notFound: true,
    };
  // console.log(locationData);

  const locations = await getAllLocations();

  // console.log(locationData)
  // console.log(locationData);
  return {
    props: {
      mainLocation: {
        name: locationData[0].locationName,
        slug: locationData[0].slug,
      },
      sublocations: locationData[0].sublocations,
      locations,
    },
    revalidate: 180,
  };
}) satisfies GetStaticProps<{
  locations: any;
  mainLocation: { name: string; slug: string };
  sublocations: { sublocationName: string; slug: string }[];
}>;

const LocationPage: React.FunctionComponent<
  InferGetStaticPropsType<typeof getStaticProps>
> = (props) => {
  const { mainLocation, sublocations } = props;
  const router = useRouter();
  if (router.isFallback) {
    return (
      <>
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
    );
  }
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="f_68tqeL-mLzXjKfyyXJpWikq44fXRXbgmcKhvqKj4s"
        />
        <title>{mainLocation.name + " | Sujan Studio"}</title>
        <meta
          name="description"
          content="Discover Sujan Studio, your trusted source for professional photography services in Adelaide, South Australia, and beyond. We serve various locations, including South Australia, Victoria, New South Wales, and Queensland. Contact us today for captivating moments captured."
        />
      </Head>
      <PageBanner>
        Looking For Photographers&nbsp;& Videographers,
        Near&nbsp;your&nbsp;location?
      </PageBanner>
      <section
        id="locations"
        className="bg-light-grey text-project-100 px-10 xl:px-16 py-20"
      >
        <h2 className="mx-auto w-fit text-21xl lg:text-41xl font-semibold pb-20">
          By Locations | {mainLocation.name}
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(max(300px,calc(100px+13vw)),1fr))] gap-5 text-project-200 text-5xl">
          {sublocations?.map((loc) => (
            <Link
              key={loc.slug}
              href={"/location/" + mainLocation.slug + "/" + loc.slug}
              className="hover:underline"
            >
              {loc.sublocationName}&nbsp;
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
              </svg>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default LocationPage;
