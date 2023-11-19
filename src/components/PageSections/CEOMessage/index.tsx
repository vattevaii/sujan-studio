import Image from 'next/image'
import React, { HTMLAttributes } from 'react'

type Props = {}

export default function CEOMessage({ className = "" }: Props & HTMLAttributes<HTMLDivElement>) {
    return (
        <section className={className + " ceo-talk px-10 lg:px-0 grid gap-y-5 grid-rows-[min-content_auto] lg:flex-row bg-light-grey text-project-100 min-h-screen pb-6"}>
            <div className='relative row-start-1 overflow-clip lg:py-0 lg:p-0 max-h-fit'>
                <h2 className="relative text-center lg:text-left z-0 lg:pl-16 lg:pr-20 text-11xl md:text-21xl lg:text-21xl xl:text-41xl font-semibold capitalize">
                    Capturing Life&apos;s Moments with Heart and Expertise: A Message from Our CEO
                </h2>
            </div>
            <div className="row-start-3 lg:row-start-2 lg:pl-16 lg:pr-20 text-base md:text-xl lg:text-2xl font-raleway text-project-200">
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
            <div className='row-start-2 lg:row-start-1 lg:row-span-2 lg:col-start-2 -col-end-1 mx-auto w-fit sm:w-min lg:w-full h-full min-w-[50%]'>
                <div className="aspect-[35/42]">
                    <Image
                        width="400"
                        height="800"
                        src="/jpegs/Sujan.jpg"
                        alt="CEO Picture"
                        className="w-full lg:h-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}