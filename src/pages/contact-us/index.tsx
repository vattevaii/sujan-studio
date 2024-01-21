import PageBanner from "@/components/PageSections/PageBanner";
import ReviewSlider from "@/components/PageSections/UserReviews/ReviewSlider";
import InputText from "@/components/input/InputText";
import InputButton from "@/components/input/inputbutton";
import { InputRadioGroup, InputRadioItem } from "@/components/input/inputradio";
import svgs from "@/constants/svgs";
import { getAllLocations } from "@/utils/sanity/location";
import { getPageContent } from "@/utils/sanity/pageContent";
import { getAllReviews } from "@/utils/sanity/reviews";
import { ContactFormSchema } from "@/utils/schema/contactUsSchema";
import { PortableText } from "@portabletext/react";
import { useFormik } from "formik";
import { debounce } from "lodash";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";
import UploadFileToSanity from "@/components/input/inputFile";
import InputTextArea from "@/components/input/InputTextArea";
import Link from "next/link";
import ContactUsForm from "@/components/contact-us/ContactUsForm";
import Recaptcha from "@/components/Recaptcha";

export type IAppProps = {} & InferGetStaticPropsType<typeof getStaticProps>;

export default function ContactUsPage(props: IAppProps) {
  const siteSettings = props.locations.siteSettings[0];
  const [successBanner, setSuccessBanner] = React.useState(false);
  const router = useRouter();
  React.useEffect(() => {
    if (router.asPath.indexOf("success") !== -1) {
      setSuccessBanner(true);
    }
  }, [router]);
  // console.log(siteSettings);
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="f_68tqeL-mLzXjKfyyXJpWikq44fXRXbgmcKhvqKj4s"
        />
        <title>Contact Us | Sujan Studio</title>
        <meta
          name="description"
          content="Discover Sujan Studio, your trusted source for professional photography services in Adelaide, South Australia, and beyond. We serve various locations, including South Australia, Victoria, New South Wales, and Queensland. Contact us today for captivating moments captured."
        />
      </Head>
      <PageBanner
        image={props.pageContent.image}
        blurDataURL={props.pageContent.blurDataImage}
      >
        <PortableText value={props.pageContent.bannerText} />
      </PageBanner>
      {successBanner ? (
        <div className="flex justify-center bg-project-200 text-light-grey">
          Form has been successfully submitted!
        </div>
      ) : (
        <></>
      )}
      <section
        id="contact-us-form"
        className="bg-light-grey text-project-100 px-10 xl:px-16 py-5"
      >
        <h2 className="mx-auto w-fit text-21xl lg:text-41xl font-semibold py-5">
          {props.pageContent.pageTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-1 xl:grid-cols-[1fr_2fr] gap-5 md:gap-10 lg:gap-5 xl:gap-28">
          <div className="grid h-min gap-5 place-items-center text-center md:text-left md:place-items-start lg:place-items-center lg:text-center xl:text-left xl:place-items-start ">
            <h3 className="text-5xl lg:text-21xl font-semibold">
              {props.pageContent.pageSubTitle}
            </h3>
            <div className="flex justify-center flex-row md:flex-col lg:flex-row xl:flex-col flex-wrap gap-y-5 gap-x-10">
              <Link
                href={`mailto:${siteSettings.email}`}
                className="flex items-center"
              >
                <span>
                  <Image
                    className="inline-block mr-2 w-5 lg:w-8"
                    height="40"
                    width="40"
                    src={svgs.contactUs.message.src}
                    alt=""
                  />
                </span>{" "}
                {siteSettings.email}
              </Link>
              <Link
                href={`tel:${siteSettings.phoneNumber.replace(/\D/g, "")}`}
                className="flex items-center"
              >
                <span>
                  <Image
                    className="inline-block mr-2 w-5 lg:w-8"
                    height="40"
                    width="40"
                    src={svgs.contactUs.call.src}
                    alt=""
                  />
                </span>{" "}
                {siteSettings.phoneNumber}
              </Link>
              <Link
                href={`tel:${siteSettings.mobileNumber.replace(/\D/g, "")}`}
                className="flex items-center"
              >
                <span>
                  <Image
                    className="inline-block mr-2 w-5 lg:w-8"
                    height="40"
                    width="40"
                    src={svgs.contactUs.call.src}
                    alt=""
                  />
                </span>{" "}
                {siteSettings.mobileNumber}
              </Link>
              <Link
                href={siteSettings.locationLink}
                className="flex items-center"
              >
                <span>
                  <Image
                    className="inline-block mr-2 w-5 lg:w-8"
                    height="40"
                    width="40"
                    src={svgs.contactUs.location.src}
                    alt=""
                  />
                </span>{" "}
                {siteSettings.location}
              </Link>
            </div>
          </div>
          <div className="">
            <Recaptcha.Wrapper>
              <ContactUsForm />
            </Recaptcha.Wrapper>
          </div>
        </div>
      </section>
      <ReviewSlider reviews={props.reviews} className="h-64 md:h-72 lg:h-96" />
      <section
        id="join-vip"
        className="text-project-100 flex flex-col md:flex-row justify-between py-20 px-12 bg-light-grey"
      >
        <div className="flex-1">
          <h3 className="text-21xl max-w-xs font-semibold">
            Join Our Vip Club List Today
          </h3>
        </div>
        <div className="flex-1 flex items-center">
          <div className="inline-flex flex-col justify-between w-full">
            <label htmlFor="mail" className="text-xl lg:text-5xl block">
              Email
            </label>
            <InputText
              className="w-full"
              id="mail"
              placeholder="your email here"
            />
          </div>
          <InputButton value="Send Message" className="inline-block" />
        </div>
      </section>
      <div></div>
    </>
  );
}

export const getStaticProps = async () => {
  const locations = await getAllLocations();
  const reviews = await getAllReviews();
  const pageContent = await getPageContent("contact-us");
  return {
    props: {
      reviews,
      locations,
      pageContent,
    },
    revalidate: 180,
  };
};
