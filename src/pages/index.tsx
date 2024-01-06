import ChooseUsCard from "@/components/Cards/ChooseUsCard";
import WhatWeDoCard from "@/components/Cards/WhatWeDoCard";
import LocationCard, { LocationItem } from "@/components/LocationCard";
import Services, { ServiceItem } from "@/components/Services";
import { SimpleCardProps } from "@/components/SimpleCard";
import svgs from "@/constants/svgs";
import ActionButtons from "@/modules/CallToAction/ActionButtons";
import { measureTextWidth } from "@/utils/measureTextWidth";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner, { BannerProps } from "@/components/PageSections/Banner/Banner";
import ReviewSlider, {
  ReviewItem,
} from "@/components/PageSections/UserReviews/ReviewSlider";
import Navbar from "@/components/Navbar.tsx/Navbar";
import CEOMessage from "@/components/PageSections/CEOMessage";
import { getAllLocations } from "@/utils/sanity/location";
import { getAllReviews } from "@/utils/sanity/reviews";
import { getPageContent } from "@/utils/sanity/pageContent";

const NewWebsite = ({
  services,
  locations,
  pageContent,
  chooseUsData,
  whatWeDoData,
  bannerData,
  reviews,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="f_68tqeL-mLzXjKfyyXJpWikq44fXRXbgmcKhvqKj4s"
        />
        <title>
          Professional Photography Services in Adelaide & Beyond | Sujan Studio
        </title>
        <meta
          name="description"
          content="Discover Sujan Studio, your trusted source for professional photography services in Adelaide, South Australia, and beyond. We serve various locations, including South Australia, Victoria, New South Wales, and Queensland. Contact us today for captivating moments captured."
        />
      </Head>

      <Banner {...bannerData} />
      <section className="services relative overflow-x-hidden grid grid-cols-1 min-[560px]:grid-cols-2 md:grid-cols-3 grid-rows-2">
        <Services services={services} />
      </section>
      <section className="choose-us bg-light-grey py-12 md:py-16 lg:py-20">
        <div className="flex flex-col items-center justify-start gap-4 md:gap-8 xl:gap-16 text-center text-project-100 p-4 md:p-8">
          <h2 className="font-semibold text-21xl lg:text-41xl leading-[1]">
            Why Choose Us?
          </h2>
          <hr className="w-[80%] border-t border-divider" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-16 3xl:gap-28">
            {chooseUsData.map((data, idx) => (
              <ChooseUsCard key={idx} data={data} />
            ))}
          </div>
        </div>
      </section>
      <section className="reviews">
        <ReviewSlider reviews={reviews} className="h-64 md:h-72 lg:h-96" />
      </section>
      <section className="what-we-do bg-light-grey py-12 md:py-16 lg:py-20">
        <div className="flex flex-col items-center justify-start gap-4 lg:gap-8 xl:gap-16 text-center text-project-100 p-4 md:p-8">
          <h2 className="font-semibold text-21xl lg:text-41xl leading-[1]">
            What We Do?
          </h2>
          <hr className="w-[80%] border-t border-divider" />
          <div className="grid  w-full xl:w-[85%] justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {whatWeDoData.map((data, idx) => (
              <WhatWeDoCard key={idx} data={data} />
            ))}
          </div>
        </div>
      </section>
      <CEOMessage data={pageContent.textBlocks[0]} />
    </>
  );
};

export const getStaticProps = async () => {
  const bannerTextItems = ["Audience", "Image", "Video"];
  const bannerD = await getPageContent("homepage");
  const banner: BannerProps & typeof bannerD = {
    typewriter: {
      items: bannerTextItems,
      itemsWidth: measureTextWidth(bannerTextItems),
    },
    ...bannerD,
  };
  const locations = await getAllLocations();
  const reviews = await getAllReviews();
  const pageContent = await getPageContent("homepage");
  return {
    props: {
      pageContent,
      services: [
        {
          href: process.env.NEXT_PUBLIC_REALESTATE_SUBDOMAIN ?? "/",
          src: "/jpegs/RealEstate.jpg",
          text: "Real State",
        },
        {
          href: process.env.NEXT_PUBLIC_WEDDING_SUBDOMAIN ?? "/",
          src: "/jpegs/Weddings.jpg",
          text: "Weddings",
        },
        {
          href: process.env.NEXT_PUBLIC_SCHOOL_SUBDOMAIN ?? "/",
          src: "/jpegs/SchoolEvents.png",
          text: "School & Events",
        },
        {
          href: process.env.NEXT_PUBLIC_FAMILY_SUBDOMAIN ?? "/",
          src: "/jpegs/FamilyAndEvents.jpg",
          text: "Family and Events",
        },
        {
          href: process.env.NEXT_PUBLIC_COORPORATE_SUBDOMAIN ?? "/",
          src: "/jpegs/CoorporateEvents.jpg",
          text: "Corporate Events",
        },
        {
          href: "/",
          src: "/jpegs/Others.png",
          text: "Others",
        },
      ],
      chooseUsData: [
        {
          title: "Industry Experts",
          description:
            "Our team comprises industry experts with years of experience and a deep understanding of the field, ensuring top-notch quality in every project.",
          imageSrc: svgs.chooseUsSvg.industryExpert.src,
        },
        {
          title: "24/7 Support",
          description:
            "Our dedicated support team is available round the clock to assist you, addressing any concerns or questions whenever you need them.",
          imageSrc: svgs.chooseUsSvg["24/7"].src,
        },
        {
          title: "Award Winning",
          description:
            "Our work speaks for itself, having received recognition and awards for excellence in our industry.",
          imageSrc: svgs.chooseUsSvg.awardWinning.src,
        },
        {
          title: "Guaranteed Works",
          description:
            "We stand by our work with a guarantee, ensuring that you receive results that meet or exceed your expectations.",
          imageSrc: svgs.chooseUsSvg.guaranteedWorks.src,
        },
        {
          title: "Best Price",
          description:
            "We offer competitive pricing without compromising on quality, so you can get the best value for your investment.",
          imageSrc: svgs.chooseUsSvg.bestPrice.src,
        },
        {
          title: "Free Consultation",
          description:
            "We provide a free consultation to understand your needs and tailor our services to meet your specific requirements.",
          imageSrc: svgs.chooseUsSvg.freeConsultation.src,
        },
      ],
      whatWeDoData: [
        {
          title: "Weddings & Events",
          description:
            "Your love story is one of a kind – let our wedding photography service capture the magic and romance of your special day, creating timeless memories that will last a lifetime.",
          imageSrc: "/jpegs/WeddingItem.jpg",
        },
        {
          title: "Commercials & Real Estate",
          description:
            "Visuals are everything in today’s world of business - let our commercial photography service help you stand out from the crowd with captivating images that tell your brand’s story and elevate your marketing to the next level.",
          imageSrc: "/jpegs/RealStateItem.jpg",
        },
        {
          title: "Business & Corporate",
          description:
            "We capture the essence and personality of your brand, creating images that showcase your team, facilities, products, and services in a way that exudes professionalism, quality, and success.",
          imageSrc: "/jpegs/BusinessItem.jpg",
        },
        {
          title: "Automotives & Rendering",
          description:
            "Our automotive photography service is dedicated to capturing the sleek lines, impressive features, and unique character of your ride, creating images that will make you fall in love with it all over again.",
          imageSrc: "/jpegs/CarItem.jpg",
        },
        {
          title: "Product & Fashion",
          description:
            "Our product photography service is all about capturing the essence and beauty of your merchandise, creating images that will make them irresistible to customers and help drive your sales to the next level.",
          imageSrc: "/jpegs/ProductItem.jpg",
        },
        {
          title: "Family & Portraits",
          description:
            "Family is where life begins and love never ends – our family photography service is dedicated to capturing those precious moments that you will cherish for a lifetime.",
          imageSrc: "/jpegs/FamilyItem.jpg",
        },
      ],
      locations,
      reviews,
      bannerData: banner,
    },
    revalidate: 3600,
  };
};

export default NewWebsite;
