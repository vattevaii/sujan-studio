import Banner from "@/components/PageSections/Banner/Banner";
import PageBanner from "@/components/PageSections/PageBanner";
import { getAllLocations } from "@/utils/sanity/location";
import { getPageContent } from "@/utils/sanity/pageContent";
import { PortableText } from "@portabletext/react";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";

export const getStaticProps = async () => {
  const locations = await getAllLocations();
  const pageContent = await getPageContent("estimate-form-submitted");
  return {
    props: { locations, pageContent },
  };
};

interface IEstimateFormSubmittedProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const EstimateFormSubmitted: React.FunctionComponent<
  IEstimateFormSubmittedProps
> = (props) => {
  const router = useRouter();
  console.log(router.query);
  const exactNeed = (router.query.exactNeed ?? "") as string;
  const need = (router.query.need ?? "") as string;
  const formatText = (text: string | undefined) =>
    text ? text[0].toUpperCase() + text.slice(1) : "";
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="f_68tqeL-mLzXjKfyyXJpWikq44fXRXbgmcKhvqKj4s"
        />
        <title>Thank you | Sujan Studio</title>
        <meta
          name="description"
          content="Discover Sujan Studio, your trusted source for professional photography services in Adelaide, South Australia, and beyond. We serve various locations, including South Australia, Victoria, New South Wales, and Queensland. Contact us today for captivating moments captured."
        />
      </Head>
      <section>
        <PageBanner
          image={props.pageContent.image}
          blurDataURL={props.pageContent.blurDataImage}
          fullScreen
        >
          <span className="text-1.1em">
            <PortableText value={props.pageContent.bannerText} />
          </span>
          <span>
            {props.pageContent.bannerSubTitle
              .replace("$exactNeed", formatText(exactNeed))
              .replace("$need", formatText(need))}
          </span>
        </PageBanner>
      </section>
    </>
  );
};

export default EstimateFormSubmitted;
