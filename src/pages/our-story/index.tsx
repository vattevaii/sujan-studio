import { LocationItem } from '@/components/LocationCard'
import CEOMessage from '@/components/PageSections/CEOMessage'
import ReviewSlider, { ReviewItem } from '@/components/PageSections/UserReviews/ReviewSlider'
import PlaceHolderImage from '@/components/PlaceHolderImage'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function OurStory({ reviews }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <meta name="google-site-verification" content="f_68tqeL-mLzXjKfyyXJpWikq44fXRXbgmcKhvqKj4s" />
                <title>Our Story | Sujan Studio</title>
                <meta name="description" content="Discover Sujan Studio, your trusted source for professional photography services in Adelaide, South Australia, and beyond. We serve various locations, including South Australia, Victoria, New South Wales, and Queensland. Contact us today for captivating moments captured." />
            </Head>
            <section id="banner" className='relative banner'>
                <Image priority={true} width={100} height={400} className="absolute top-0 -z-[1] w-full h-full object-cover" alt="" src="/jpegs/mainSection.jpg" />
                <div className="flex flex-col items-center min-h-[50vh] w-full px-[5vw] py-[1vh] lg:px-[100px] lg:py-[10px]">
                    <div className="flex-1 flex flex-col justify-center text-[50px] font-source-sans-3 font-bold lg:text-41xl">
                        <h1>
                            <b>Elegance is not being noticed,<br /> It&apos;s about being remembered.</b>
                        </h1>
                    </div>
                </div>
            </section>
            <section className='our-story bg-light-grey'>
                <h2 className='text-21xl lg:text-41xl text-project-100 text-center pt-16 pb-14 lg:pt-28 lg:pb-24'>Our Story</h2>
                <div className='grid text-project-200 text-md lg:text-5xl px-4 lg:px-20 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-10 lg:gap-x-16 lg:gap-y-11 pb-16 lg:pb-32'>
                    <div className='md:col-span-2 lg:col-span-1 xl:col-span-2'>
                        We started our photographic journey in the summer of 2009 with a medium format Kodak Camera and since then everything has changed. From BW films to today’s digital era Sujan Studio has produced, reproduced plenty photographic works in and out of Adelaide. This has been quite a journey for all our team.
                        Starting from Adelaide, currently, we are proud to share we are providing photographic service from four major cities of Australia. We can not thank you enough for all the love and support you have provided through all these years. We are truly so happy to be a part of your life and memories. We trust in the quality of creative works and rigorously work for it.
                    </div>
                    <div className='row-start-4 md:row-start-3 md:col-start-2 lg:row-start-4 lg:col-start-1 xl:row-start-3 xl:col-start-2'>
                        Because we’re a family-owned business, we understand that photography can mean different things to each person. That’s why we offer a wide range of services—so you can find the one that fits you best. We help businesses with their branding and marketing campaigns; realtors with listing photos; couples get ready for their big day; and families get the perfect photo album.
                        And it’s all because of our mission: We want to make sure every person who steps through our door gets exactly what they need out of photography. We’ve worked with many different types of clients over the years, but our goal is always the same: to help you create memories that last forever.
                        We are happy to help to add a bit of craft in your memories.
                    </div>
                    <div className='bg-yellow-50 row-start-2 col-start-1 row-span-1 md:row-span-2 md:row-start-2 lg:row-span-1 xl:row-span-2 xl:row-start-2 aspect-square'>
                        <PlaceHolderImage className='object-cover h-full w-full' width="700" height="700" src={"img"} alt={" Image "} />
                    </div>
                    <div className='bg-yellow-50 row-start-3 col-start-1 md:row-start-2 md:col-start-2 lg:row-start-3 lg:col-start-1 xl:row-start-2 xl:col-start-2 aspect-[2/1] min-h-[50px]'>
                        <PlaceHolderImage className='object-cover h-full w-full' width="700" height="700" src={"img"} alt={" Image "} />
                    </div>
                </div>
            </section>
            <section className="reviews">
                <ReviewSlider reviews={reviews} className='h-64 md:h-72 lg:h-96' />
            </section>
            <CEOMessage className='py-12' />
        </>
    )
}

export const getStaticProps: GetStaticProps<{ locations: LocationItem[], reviews: ReviewItem[] }> = () => {
    return {
        props: {
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
            ],
            reviews: [
                {
                    bg: "/jpegs/mainSection.jpg",
                    author: "Caitlyn Mathews",
                    authorSrc: "/jpegs/WeddingItem.jpg",
                    company: "Company Name",
                    reviewText: "&quot;Sujan Studio delivered stunning photos that captured the essence&nbsp;of&nbsp;our&nbsp;moments. <wbr /> We&apos;re&nbsp;thrilled&nbsp;with&nbsp;their&nbsp;work!&quot;"
                },
                {
                    bg: "/jpegs/mainSection.jpg",
                    author: "Caitlyn Mathews",
                    authorSrc: "/jpegs/WeddingItem.jpg",
                    company: "Company Name",
                    reviewText: "&quot;Sujan Studio delivered stunning photos that captured the essence&nbsp;of&nbsp;our&nbsp;moments. <wbr /> We&apos;re&nbsp;thrilled&nbsp;with&nbsp;their&nbsp;work!&quot;"
                },
                {
                    bg: "/jpegs/mainSection.jpg",
                    author: "Caitlyn Mathews",
                    authorSrc: "/jpegs/WeddingItem.jpg",
                    company: "Company Name",
                    reviewText: "&quot;Sujan Studio delivered stunning photos that captured the essence&nbsp;of&nbsp;our&nbsp;moments. <wbr /> We&apos;re&nbsp;thrilled&nbsp;with&nbsp;their&nbsp;work!&quot;"
                },
                {
                    bg: "/jpegs/mainSection.jpg",
                    author: "Caitlyn Mathews",
                    authorSrc: "/jpegs/WeddingItem.jpg",
                    company: "Company Name",
                    reviewText: "&quot;Sujan Studio delivered stunning photos that captured the essence&nbsp;of&nbsp;our&nbsp;moments. <wbr /> We&apos;re&nbsp;thrilled&nbsp;with&nbsp;their&nbsp;work!&quot;"
                },
                {
                    bg: "/jpegs/mainSection.jpg",
                    author: "Caitlyn Mathews",
                    authorSrc: "/jpegs/WeddingItem.jpg",
                    company: "Company Name",
                    reviewText: "&quot;Sujan Studio delivered stunning photos that captured the essence&nbsp;of&nbsp;our&nbsp;moments. <wbr /> We&apos;re&nbsp;thrilled&nbsp;with&nbsp;their&nbsp;work!&quot;"
                },
                {
                    bg: "/jpegs/mainSection.jpg",
                    author: "Caitlyn Mathews",
                    authorSrc: "/jpegs/WeddingItem.jpg",
                    company: "Company Name",
                    reviewText: "&quot;Sujan Studio delivered stunning photos that captured the essence&nbsp;of&nbsp;our&nbsp;moments. <wbr /> We&apos;re&nbsp;thrilled&nbsp;with&nbsp;their&nbsp;work!&quot;"
                },
            ],
        }
    }
}
