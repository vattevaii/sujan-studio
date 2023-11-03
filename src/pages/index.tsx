import LocationCard, { LocationItem } from '@/components/LocationCard';
import NavPanel from '@/components/NavPanel';
import Services from '@/components/Services';
import SimpleCard, { SimpleCardProps } from '@/components/SimpleCard';
import SvgIcon from '@/components/SvgIcon';
import svgs from '@/constants/svgs';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';

const NewWebsite = ({ locations, chooseUsData, whatWeDoData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <div className="flex relative w-full text-left text-41xl text-light-grey font-source-sans-3 overflow-hidden">
        <NavPanel className='sticky top-0 h-screen collapse lg:visible' />
        <main className="content relative flex-1">
          <section className='relative banner'>
            <Image loading='eager' width={8000} height={1000} className="absolute top-0 -z-[1] w-full h-screen object-cover" alt="" src="/jpegs/mainSection.jpg" />
            <div className="flex flex-col w-full h-screen px-[5vw] py-[1vh] lg:px-[100px] lg:py-[10px]">
              <div className="flex-1 flex flex-col justify-center lg:text-61xl xl:text-111xl">
                <h1>
                  <b>Image</b>
                  <span className="font-extralight">|</span>
                  <b> is Everything,</b>
                </h1>
                <b >We Deliver.</b>
              </div>
              <div className="absolute bottom-5 flex flex-row items-stretch justify-start gap-[10px] lg:gap-[40px] text-21xl lg:text-41xl xl:text-61xl">
                <div className="flex flex-col items-start justify-end">
                  <b className="leading-[1.2em]">14</b>
                  <div className="text-xl leading-[30px] uppercase font-medium font-raleway opacity-[0.5]">
                    <p className="m-0">{`years of `}</p>
                    <p className="m-0">Visual Excellence</p>
                  </div>
                </div>
                <hr className='h-auto border-l border-divider' />
                <div className="flex flex-col items-start justify-end">
                  <b className="leading-[1.2em]">100+</b>
                  <div className="text-xl leading-[30px] uppercase font-medium font-raleway opacity-[0.5]">
                    <p className="m-0">Happy</p>
                    <p className="m-0">Customers</p>
                  </div>
                </div>
                <hr className='h-auto border-l border-divider' />
                <div className="flex flex-col items-start justify-end">
                  <b className="leading-[1.2em]">5+</b>
                  <div className="text-xl leading-[30px] uppercase font-medium font-raleway opacity-[0.5]">
                    <p className="m-0">Design</p>
                    <p className="m-0">Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='relative services grid grid-cols-2 grid-rows-2'>
            <Services services={[{ href: "/", src: "/", text: "Real State" }, { href: "/", src: "/", text: "Real State" }, { href: "/", src: "/", text: "Real State" }, { href: "/", src: "/", text: "Real State" },]} />
          </section>
          <section className="choose-us bg-light-grey">
            <div className="flex flex-col items-center justify-start gap-4 md:gap-8 text-center text-project-100 p-4 md:p-8">
              <div className="font-semibold text-21xl lg:text-41xl">Why Choose Us?</div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                {chooseUsData.map((data, idx) => <SimpleCard key={idx} {...data} />)}
              </div>
            </div>
          </section>
          <section className="reviews">
            <div className="relative text-center text-11xl">
              <Image width={30} height={30} className="absolute top-0 w-full h-full -z-[1] object-cover" alt="" src="/jpegs/mainSection.jpg" />
              <div className="flex flex-col items-center justify-start">
                <div className="p-[5rem] flex flex-col items-center">
                  <p className="font-medium inline-block">&quot;Sujan Studio delivered stunning photos that captured the essence&nbsp;of&nbsp;our&nbsp;moments. <wbr /> We&apos;re&nbsp;thrilled&nbsp;with&nbsp;their&nbsp;work!&quot;</p>
                  <div className="flex flex-row items-center justify-start gap-[20px] text-5xl font-raleway">
                    <Image width={20} height={20} className="w-16 h-16 bg-black rounded-[100px] object-cover" alt="" src="/jpegs/Service.jpg" />
                    <div className="flex flex-col items-start justify-start gap-[10px]">
                      <div className="font-medium">Caitlyn Mathews</div>
                      <div className="text-base">Company Name</div>
                    </div>
                  </div>
                </div>
                <div className="py-4 flex flex-row items-start justify-start gap-[10px]">
                  <div className="relative rounded-[50%] bg-light-grey w-2.5 h-2.5 opacity-[0.2]" />
                  <div className="relative rounded-[50%] bg-light-grey w-2.5 h-2.5 opacity-[0.2]" />
                  <div className="relative rounded-[50%] bg-light-grey w-2.5 h-2.5 opacity-[0.2]" />
                  <div className="relative rounded-3xs bg-light-grey h-2.5 opacity-[0.5]" />
                  <div className="relative rounded-[50%] bg-light-grey w-2.5 h-2.5 opacity-[0.2]" />
                  <div className="relative rounded-[50%] bg-light-grey w-2.5 h-2.5 opacity-[0.2]" />
                  <div className="relative rounded-[50%] bg-light-grey w-2.5 h-2.5 opacity-[0.2]" />
                </div>
              </div>
            </div>
          </section>


          <section className="what-we-do bg-light-grey py-12 md:py-16 lg:py-20">
            <div className="flex flex-col items-center justify-start gap-4 md:gap-8 text-center text-project-100 p-4 md:p-8">
              <div className="text-center text-project-100 mb-8 md:mb-12">
                <h2 className="font-semibold text-21xl lg:text-41xl">What We Do?</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                {whatWeDoData.map((data, idx) => <SimpleCard key={idx} {...data} />)}
              </div>
            </div>
          </section>
          <section className="ceo-talk flex flex-col-reverse lg:flex-row bg-light-grey py-8 md:py-12 lg:py-16">
            <article className="lg:w-1/2 text-project-100">
              <div className='relative overflow-clip py-10 lg:p-0'>
                <Image
                  width="400"
                  height="800"

                  src="/jpegs/Service.jpg"
                  alt=""
                  className="absolute lg:invisible top-0 w-full h-auto -z-1 object-cover"
                />
                <h2 className="relative z-0 pl-16 pr-20 text-11xl md:text-21xl lg:text-21xl xl:text-41xl font-semibold capitalize">
                  Capturing Life&apos;s Moments with Heart and Expertise: A Message from Our CEO
                </h2>
              </div>
              <div className="pl-16 pr-20 text-base md:text-xl lg:text-2xl font-raleway text-project-200">
                <p>
                  As the CEO of Sujan Studio, I understand that choosing the right
                  photographer can be a daunting task, but I assure you that we are here
                  to make your decision an easy one. Our team of experienced photographers
                  are passionate about creating breathtaking images that tell your unique
                  story. Whether it&lbquo;s your wedding day, a special family moment, or a
                  corporate event, we pride ourselves on capturing those perfect shots
                  that will be cherished for a lifetime.
                </p>
                <p>&nbsp;</p>
                <p>
                  But it&lbquo;s not just our technical expertise that sets us apart. At Sujan
                  Studio, we understand that photography is about more than just taking
                  pictures - it&lbquo;s about capturing emotions, memories, and experiences.
                  That&lbquo;s why we take the time to get to know our clients, to understand
                  their vision and to create a comfortable and relaxed environment where
                  those natural and authentic moments can shine.
                </p>
                <p>&nbsp;</p>
                <p>
                  Located in the heart of Adelaide, we offer a range of photography
                  services tailored to your specific needs. From our stunning studio space
                  to on-location shoots, we have the expertise and equipment to create
                  beautiful images that exceed your expectations.
                </p>
              </div>
            </article>
            <aside className='lg:w-1/2'>
              <Image
                width="400"
                height="800"

                src="/jpegs/Service.jpg"
                alt="CEO Picture"
                className="w-full hidden lg:block h-80 lg:w-auto lg:h-full object-cover"
              />
            </aside>
          </section>
        </main>
      </div>
      <section className="footer bg-black text-white px-4 lg:px-12 py-8 md:py-12 lg:py-16">
        <div className=" text-left md:gap-4 lg:gap-0 lg:justify-between">
          <div className="mb-6 flex flex-col md:flex-row items-start md:items-end">
            <h2 className='text-21xl  w-1/2 font-semibold xl:text-61xl'>
              <span className="underline">Let&apos;s talk</span> and create an&nbsp;awesome&nbsp;Memory.
            </h2>
            <div className="flex-grow"></div>
            <div className="flex leading-[2.7em] items-center gap-2 text-xl md:text-5xl font-raleway">
              <p className="relative text-xl xl:text-5xl">sujanstudio@gmail.com</p>
              <Image
                width={40}
                height={40}
                src={svgs.brandSvgs.logo.src}
                alt="Arrow Icon"
                className="w-6 h-6 overflow-hidden"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {locations?.map((location, idx) => <LocationCard key={idx} locationData={location} />)}
          </div>
        </div>
      </section>
      <div className="text-sm leading-[1.5em] font-medium font-raleway opacity-[0.5] py-8">
        <p className='mx-auto w-fit'>© 2023 Sujan Studio. All rights reserved</p>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{ locations: LocationItem[], chooseUsData: SimpleCardProps[], whatWeDoData: SimpleCardProps[] }> = () => {
  return {
    props: {
      chooseUsData: [
        {
          title: 'Industry Experts',
          description: 'Our team comprises industry experts with years of experience and a deep understanding of the field, ensuring top-notch quality in every project.',
          imageSrc: svgs.navSvgs.portfolio.src,
        },
        {
          title: '24/7 Support',
          description: 'Our dedicated support team is available round the clock to assist you, addressing any concerns or questions whenever you need them.',
          imageSrc: svgs.navSvgs.portfolio.src,
        },
        {
          title: 'Award Winning',
          description: 'Our work speaks for itself, having received recognition and awards for excellence in our industry.',
          imageSrc: svgs.navSvgs.portfolio.src,
        },
        {
          title: 'Guaranteed Works',
          description: 'We stand by our work with a guarantee, ensuring that you receive results that meet or exceed your expectations.',
          imageSrc: svgs.navSvgs.portfolio.src,
        },
        {
          title: 'Best Price',
          description: 'We offer competitive pricing without compromising on quality, so you can get the best value for your investment.',
          imageSrc: svgs.navSvgs.portfolio.src,
        },
        {
          title: 'Free Consultation',
          description: 'We provide a free consultation to understand your needs and tailor our services to meet your specific requirements.',
          imageSrc: svgs.navSvgs.portfolio.src,
        },
      ],
      whatWeDoData: [
        {
          title: 'Weddings & Events',
          description: 'Your love story is one of a kind – let our wedding photography service capture the magic and romance of your special day, creating timeless memories that will last a lifetime.',
          imageSrc: svgs.navSvgs.portfolio.src,
        },
        {
          title: 'Commercials & Real Estate',
          description: 'Visuals are everything in today’s world of business - let our commercial photography service help you stand out from the crowd with captivating images that tell your brand’s story and elevate your marketing to the next level.',
          imageSrc: svgs.navSvgs.portfolio.src,
        },
        {
          title: 'Business & Corporate',
          description: 'We capture the essence and personality of your brand, creating images that showcase your team, facilities, products, and services in a way that exudes professionalism, quality, and success.',
          imageSrc: svgs.navSvgs.portfolio.src,
        },
        {
          title: 'Automotives & Rendering',
          description: 'Our automotive photography service is dedicated to capturing the sleek lines, impressive features, and unique character of your ride, creating images that will make you fall in love with it all over again.',
          imageSrc: svgs.navSvgs.portfolio.src,
        },
        {
          title: 'Product & Fashion',
          description: 'Our product photography service is all about capturing the essence and beauty of your merchandise, creating images that will make them irresistible to customers and help drive your sales to the next level.',
          imageSrc: svgs.navSvgs.portfolio.src,
        },
        {
          title: 'Family & Portraits',
          description: 'Family is where life begins and love never ends – our family photography service is dedicated to capturing those precious moments that you will cherish for a lifetime.',
          imageSrc: svgs.navSvgs.portfolio.src,
        },
      ],
      locations: [
        {
          locationName: 'South Australia',
          address: '97 Marian Road',
          city: 'Firle, South Australia',
          postalCode: '5070',
          phoneNumber: '08-7092-3531',
        },
        {
          locationName: 'Victoria',
          address: '178 Boundary Road',
          city: 'Pasco Vale, Vic',
          postalCode: '3044',
          phoneNumber: '08-8427-1817',
        },
        {
          locationName: 'New South Wales',
          address: '5/34-36 Princes Hwy',
          city: 'Kogarah NSW',
          postalCode: '2217',
          phoneNumber: '08-8427-1817',
        },
        {
          locationName: 'Queensland',
          address: '195 Days Road',
          city: 'Grange QLD',
          postalCode: '4051',
          phoneNumber: '08-8427-1817',
        },
      ]
    }
  }
}

export default NewWebsite;
