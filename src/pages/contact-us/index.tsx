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

export type IAppProps = {} & InferGetStaticPropsType<typeof getStaticProps>;

export default function ContactUsPage(props: IAppProps) {
  const siteSettings = props.locations.siteSettings[0];
  const [successBanner, setSuccessBanner] = React.useState(false);
  const router = useRouter();
  const submitForm = debounce((d) => {
    fetch("/api/submitcontactus", {
      method: "POST",
      body: JSON.stringify(d),
    }).then((d) => {
      if (d.status === 201) {
        router.push("/contact-us?success=true");
      }
    });
  }, 200);
  const formik = useFormik<{
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    subject: string;
    message: string;
    terms: string;
    files: string[];
  }>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
      terms: "",
      files: [],
    },
    validationSchema: toFormikValidationSchema(ContactFormSchema),
    onSubmit: (values) => {
      submitForm(values);
    },
  });
  React.useEffect(() => {
    if (router.asPath.indexOf("success") !== -1) {
      formik.resetForm();
      setSuccessBanner(true);
    }
  }, [router]);
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
      <PageBanner image={props.pageContent.image}>
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
              <div className="flex items-center">
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
              </div>
              <div className="flex items-center">
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
              </div>
              <div className="flex items-center">
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
              </div>
            </div>
          </div>
          <div className="">
            <form
              className="grid gap-7 text-xl lg:text-5xl"
              onSubmit={(e) => {
                e.preventDefault();
                formik.setTouched({
                  email: true,
                  firstName: true,
                  lastName: true,
                  message: true,
                  phoneNumber: true,
                  subject: true,
                });
                formik.submitForm();
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-7">
                <div className="flex flex-col justify-between w-full">
                  <label htmlFor="first-name" className="block">
                    First Name
                  </label>
                  <p className="text-red-500 text-2xs -mt-2 h-3">
                    {formik.touched.firstName ? formik.errors.firstName : ""}
                  </p>
                  <InputText
                    className="w-full"
                    id="first-name"
                    placeholder="Your First Name here"
                    {...formik.getFieldProps("firstName")}
                  />
                </div>
                <div className="flex flex-col justify-between w-full">
                  <label htmlFor="last-name" className="block">
                    Last Name
                  </label>
                  <p className="text-red-500 text-2xs -mt-2 h-3">
                    {formik.touched.lastName ? formik.errors.lastName : ""}
                  </p>

                  <InputText
                    className="w-full"
                    id="last-name"
                    placeholder="your Last Name here"
                    {...formik.getFieldProps("lastName")}
                  />
                </div>
                <div className="flex flex-col justify-between w-full">
                  <label htmlFor="e-mail" className="block">
                    Email
                  </label>
                  <p className="text-red-500 text-2xs -mt-2 h-3">
                    {formik.touched.email ? formik.errors.email : ""}
                  </p>
                  <InputText
                    className="w-full"
                    id="e-mail"
                    placeholder="your email here"
                    {...formik.getFieldProps("email")}
                  />
                </div>
                <div className="flex flex-col justify-between w-full">
                  <label htmlFor="phone" className="block">
                    Phone Number
                  </label>
                  <p className="text-red-500 text-2xs -mt-2 h-3">
                    {formik.touched.phoneNumber
                      ? formik.errors.phoneNumber
                      : ""}
                  </p>
                  <InputText
                    className="w-full"
                    id="phone"
                    placeholder="your Phone Number here"
                    {...formik.getFieldProps("phoneNumber")}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between w-full">
                <p className="block">Select Subject</p>
                <p className="text-red-500 text-2xs -mt-2 h-3">
                  {formik.touched.subject ? formik.errors.subject : ""}
                </p>
                <InputRadioGroup
                  name="hello"
                  onChange={(v) => {
                    formik.setFieldValue("subject", v);
                  }}
                  value={formik.values.subject}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2 justify-between"
                >
                  {[
                    "Future Project",
                    "Jobs",
                    "Pricing & Package",
                    "Employee",
                    "I'm A Model/Artist",
                    "Feedback",
                    "Other",
                  ].map((v) => {
                    return (
                      <label className="flex items-center gap-3" key={v}>
                        <InputRadioItem value={v} />
                        <span className="text-md lg:text-xl whitespace-nowrap">
                          {v}
                        </span>
                      </label>
                    );
                  })}
                  {/* <label className="flex items-center gap-3">
                    <InputRadioItem value="dog" />
                    <span className="text-md lg:text-xl">Dog</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <InputRadioItem value="cat" />
                    <span className="text-md lg:text-xl">Cat</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <InputRadioItem value="porcupine" />
                    <span className="text-md lg:text-xl">Porcupine</span>
                  </label> */}
                </InputRadioGroup>
              </div>
              <div className="flex flex-col justify-between w-full">
                <label htmlFor="your-message" className="block">
                  Your Message
                </label>
                <p className="text-red-500 text-2xs -mt-2 h-3">
                  {formik.touched.message ? formik.errors.message : ""}
                </p>
                <InputText
                  className="w-full"
                  id="your-message"
                  placeholder="your Your Message here"
                  {...formik.getFieldProps("message")}
                />
              </div>
              <UploadFileToSanity
                addFileRef={(ref: string[]) =>
                  formik.setFieldValue("files", ref)
                }
              />
              <InputRadioGroup
                name="terms"
                onChange={(v) => formik.setFieldValue("terms", v)}
              >
                <label className="flex items-center gap-3">
                  <InputRadioItem value={"accept"} />
                  <span className="text-md lg:text-xl whitespace-nowrap">
                    I accept communication emails & privacy policy
                  </span>
                </label>
              </InputRadioGroup>
              <div className="flex justify-end">
                <InputButton
                  value="Send Message"
                  className="px-8"
                  disabled={!formik.isValid}
                />
              </div>
            </form>
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
    revalidate: 3600,
  };
};
