import ReviewSlider from "@/components/PageSections/UserReviews/ReviewSlider";
import InputText from "@/components/input/InputText";
import InputButton from "@/components/input/inputbutton";
import { InputRadioGroup, InputRadioItem } from "@/components/input/inputradio";
import svgs from "@/constants/svgs";
import { getAllLocations } from "@/utils/sanity/location";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import * as React from "react";

export type IAppProps = {} & InferGetStaticPropsType<typeof getStaticProps>;

export default function App(props: IAppProps) {
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
                Have Feedback Or Questions?
                <br /> Drop Us A Line Now.
              </b>
            </h1>
          </div>
        </div>
      </section>
      <section
        id="contact-us-form"
        className="bg-light-grey text-project-100 px-10 xl:px-16 py-5"
      >
        <h2 className="mx-auto w-fit text-21xl lg:text-41xl font-semibold py-5">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-1 xl:grid-cols-[1fr_2fr] gap-5 md:gap-10 lg:gap-5 xl:gap-28">
          <div className="grid h-min gap-5 place-items-center text-center md:text-left md:place-items-start lg:place-items-center lg:text-center xl:text-left xl:place-items-start ">
            <h3 className="text-5xl lg:text-21xl font-semibold">
              We are ready to talk about your project and many more.
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
                hello@hello.com
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
                800-234-567-759
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
                5/34-36 Princes Hwy Kogarah NSW 2217
              </div>
            </div>
          </div>
          <div className="">
            <form className="grid gap-7 text-xl lg:text-5xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-7">
                <div className="flex flex-col justify-between w-full">
                  <label htmlFor="first-name" className="block">
                    First Name
                  </label>
                  <InputText
                    className="w-full"
                    id="first-name"
                    placeholder="your First Name here"
                  />
                </div>
                <div className="flex flex-col justify-between w-full">
                  <label htmlFor="last-name" className="block">
                    Last Name
                  </label>
                  <InputText
                    className="w-full"
                    id="last-name"
                    placeholder="your Last Name here"
                  />
                </div>
                <div className="flex flex-col justify-between w-full">
                  <label htmlFor="e-mail" className="block">
                    Email
                  </label>
                  <InputText
                    className="w-full"
                    id="e-mail"
                    placeholder="your email here"
                  />
                </div>
                <div className="flex flex-col justify-between w-full">
                  <label htmlFor="phone" className="block">
                    Phone Number
                  </label>
                  <InputText
                    className="w-full"
                    id="phone"
                    placeholder="your Phone Number here"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between w-full">
                <p className="block">Select Subject</p>
                <InputRadioGroup
                  name="hello"
                  onChange={(v) => {
                    // console.log(v)
                  }}
                  className="flex justify-between"
                >
                  <label className="flex items-center gap-3">
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
                  </label>
                </InputRadioGroup>
              </div>
              <div className="flex flex-col justify-between w-full">
                <label htmlFor="your-message" className="block">
                  Your Message
                </label>
                <InputText
                  className="w-full"
                  id="your-message"
                  placeholder="your Your Message here"
                />
              </div>
              <div className="flex justify-end">
                <InputButton value="Send Message" className="px-8" />
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
  return {
    props: {
      reviews: [
        {
          bg: "/jpegs/mainSection.jpg",
          author: "Caitlyn Mathews",
          authorSrc: "/jpegs/WeddingItem.jpg",
          company: "Company Name",
          reviewText:
            "&quot;Sujan Studio delivered stunning photos that captured the essence&nbsp;of&nbsp;our&nbsp;moments. <wbr /> We&apos;re&nbsp;thrilled&nbsp;with&nbsp;their&nbsp;work!&quot;",
        },
        {
          bg: "/jpegs/mainSection.jpg",
          author: "Caitlyn Mathews",
          authorSrc: "/jpegs/WeddingItem.jpg",
          company: "Company Name",
          reviewText:
            "&quot;Sujan Studio delivered stunning photos that captured the essence&nbsp;of&nbsp;our&nbsp;moments. <wbr /> We&apos;re&nbsp;thrilled&nbsp;with&nbsp;their&nbsp;work!&quot;",
        },
        {
          bg: "/jpegs/mainSection.jpg",
          author: "Caitlyn Mathews",
          authorSrc: "/jpegs/WeddingItem.jpg",
          company: "Company Name",
          reviewText:
            "&quot;Sujan Studio delivered stunning photos that captured the essence&nbsp;of&nbsp;our&nbsp;moments. <wbr /> We&apos;re&nbsp;thrilled&nbsp;with&nbsp;their&nbsp;work!&quot;",
        },
        {
          bg: "/jpegs/mainSection.jpg",
          author: "Caitlyn Mathews",
          authorSrc: "/jpegs/WeddingItem.jpg",
          company: "Company Name",
          reviewText:
            "&quot;Sujan Studio delivered stunning photos that captured the essence&nbsp;of&nbsp;our&nbsp;moments. <wbr /> We&apos;re&nbsp;thrilled&nbsp;with&nbsp;their&nbsp;work!&quot;",
        },
        {
          bg: "/jpegs/mainSection.jpg",
          author: "Caitlyn Mathews",
          authorSrc: "/jpegs/WeddingItem.jpg",
          company: "Company Name",
          reviewText:
            "&quot;Sujan Studio delivered stunning photos that captured the essence&nbsp;of&nbsp;our&nbsp;moments. <wbr /> We&apos;re&nbsp;thrilled&nbsp;with&nbsp;their&nbsp;work!&quot;",
        },
        {
          bg: "/jpegs/mainSection.jpg",
          author: "Caitlyn Mathews",
          authorSrc: "/jpegs/WeddingItem.jpg",
          company: "Company Name",
          reviewText:
            "&quot;Sujan Studio delivered stunning photos that captured the essence&nbsp;of&nbsp;our&nbsp;moments. <wbr /> We&apos;re&nbsp;thrilled&nbsp;with&nbsp;their&nbsp;work!&quot;",
        },
      ],
      locations,
    },
  };
};
