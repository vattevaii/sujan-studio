import { LocationItem } from "@/components/LocationCard";
import ImageGrid from "@/components/PageSections/ImageGrid";
import PlaceHolderImage from "@/components/PlaceHolderImage";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const NewWebsite = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
      <section id="banner" className="relative banner">
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
                We Capture Beautiful&nbsp;Memories!
                <br /> Explore Our Portfolio For&nbsp;Reference.
              </b>
            </h1>
          </div>
        </div>
      </section>
      {[
        {
          title: "Real State Photography",
          images: [
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
          ],
        },
        {
          title: "Wedding Photography",
          images: [
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
          ],
        },
        {
          title: "Family & Events Photography",
          images: [
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
          ],
        },
        {
          title: "Corporate Events Photography",
          images: [
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
          ],
        },
        {
          title: "School & Events",
          images: [
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
          ],
        },
        {
          title: "Others",
          images: [
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
          ],
        },
      ].map((item, idx) => (
        <section key={idx}>
          <div className="text-project-100 bg-light-grey px-4 lg:px-8 flex justify-between items-center">
            <h2 className="py-[0.4em] lg:py-[0.2em] text-5xl md:text-21xl xl:text-41xl font-bold">
              {item.title}
            </h2>
            <Link
              href="/admin"
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
          {/* @ts-expect-error */}
          <ImageGrid images={item.images} onSelectImage={() => {}} />
        </section>
      ))}

      <section>This is our portfolio.</section>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  locations: LocationItem[];
}> = () => {
  return {
    props: {
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
};

export default NewWebsite;
