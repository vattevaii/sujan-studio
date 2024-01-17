import Banner from "@/components/PageSections/Banner/Banner";
import PageBanner from "@/components/PageSections/PageBanner";
import { getAllLocations } from "@/utils/sanity/location";
import { getPageContent } from "@/utils/sanity/pageContent";
import { PortableText } from "@portabletext/react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import * as React from "react";

export const getStaticProps = async () => {
  const locations = await getAllLocations();
  const pageContent = await getPageContent("contact-form-submitted");
  return {
    props: { locations, pageContent },
  };
};

interface IContactFormSubmittedProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const ContactFormSubmitted: React.FunctionComponent<
  IContactFormSubmittedProps
> = (props) => {
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
            // fullScreen
        >
          <span className="text-1.1em">
            <PortableText value={props.pageContent.bannerText} />
          </span>
          <span>{props.pageContent.bannerSubTitle}</span>
        </PageBanner>
      </section>
    </>
  );
};

export default ContactFormSubmitted;
