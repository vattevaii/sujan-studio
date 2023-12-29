import { Package } from "@/components/Cards/package";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import * as React from "react";
import { client } from "../../../sanity/lib/client";
import { LocationItem } from "@/components/LocationCard";
import { getAllLocations } from "@/utils/sanity/location";
import PageBanner from "@/components/PageSections/PageBanner";
import { getPageContent } from "@/utils/sanity/pageContent";
import { PortableText } from "@portabletext/react";

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
      <PageBanner image={props.pageContent.image}>
        <PortableText value={props.pageContent.bannerText} />
      </PageBanner>
      <section
        id="packages"
        className="bg-light-grey text-project-100 px-10 xl:px-16 pt-20 pb-5"
      >
        <h2 className="mx-auto text-center w-fit text-21xl lg:text-41xl font-semibold pb-5">
          {props.pageContent.pageTitle}
        </h2>
        <p className="mx-auto text-center w-fit text-project-200 text-xl lg:text-5xl pb-20">
          {props.pageContent.pageSubTitle}
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
  const query = `*[_type=="package"]|order(orderRank){name,dollars,privileges,"image":image.asset.url}`;
  const packages: IPackagePageProps[] = await client.fetch(query);
  const locations= await getAllLocations();
  const pageContent = await getPageContent("packages");
  return {
    props: {
      pageContent,
      packages,
      locations,
    },
    revalidate: 3600,
  };
};
export default PackagePage;
