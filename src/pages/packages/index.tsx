import { Package } from "@/components/Cards/package";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import * as React from "react";
import { client } from "../../../sanity/lib/client";

interface IPackagePageProps {}

const PackagePage: React.FunctionComponent<
  IPackagePageProps & InferGetStaticPropsType<typeof getStaticProps>
> = (props) => {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="f_68tqeL-mLzXjKfyyXJpWikq44fXRXbgmcKhvqKj4s"
        />
        <title>Our Packages | Sujan Studio</title>
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
              <b>Our Packages</b>
            </h1>
          </div>
        </div>
      </section>
      <section
        id="packages"
        className="bg-light-grey text-project-100 px-10 xl:px-16 pt-20 pb-5"
      >
        <h2 className="mx-auto text-center w-fit text-21xl lg:text-41xl font-semibold pb-5">
          Get your packages according to&nbsp;your&nbsp;need.
        </h2>
        <p className="mx-auto text-center w-fit text-project-200 text-xl lg:text-5xl pb-20">
          Lorem ipsum dolor sit amet consectetur. Velit turpis ultrices
          malesuada laoreet.
        </p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-5">
          {props.packages.map((item, key) => (
            // @ts-expect-error
            <Package {...item} key={key} />
          ))}
        </div>
      </section>
    </>
  );
};
export const getStaticProps = async () => {
  const query = `*[_type=="package"]{name,dollars,privileges,"image":image.asset.url}`;
  const packages: IPackagePageProps[] = await client.fetch(query);
  console.log(packages);
  return {
    props: {
      packages: packages,
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
export default PackagePage;
