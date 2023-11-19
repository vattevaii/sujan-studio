import { Slider, SliderNext, SliderPagination, SliderPrev, SliderProvider } from "@/components/Slider/Slider"
import Image from "next/image"

type Props = {}
export default function NewPage({ }: Props) {
    const Item = () => <div className="relative text-center text-xl lg:text-11xl h-full">
        <Image width={30} height={30} className="absolute top-0 w-full h-full -z-[1] object-cover" alt="" src="/jpegs/mainSection.jpg" />
        <div className="flex flex-col items-center justify-center h-full">
            <article className="p-8 md:p-20 flex flex-col-reverse gap-5 md:gap-10 items-center" aria-label='Review by Caitlyn Mathews from Company Name'>
                <div className="flex flex-row items-center justify-start gap-[20px] text-md lg:text-5xl font-raleway">
                    <Image width={20} height={20} className="w-16 h-16 bg-black rounded-[100px] object-cover" alt="" src="/jpegs/WeddingItem.jpg" />
                    <div className="flex flex-col items-start justify-start gap-[10px]">
                        <div className="font-medium">Caitlyn Mathews</div>
                        <div className="text-xs lg:text-base">Company Name</div>
                    </div>
                </div>
                <p className="font-medium inline-block">&quot;Sujan Studio delivered stunning photos that captured the essence&nbsp;of&nbsp;our&nbsp;moments. <wbr /> We&apos;re&nbsp;thrilled&nbsp;with&nbsp;their&nbsp;work!&quot;</p>
            </article>
        </div>
    </div>
    return (
        <SliderProvider>
            <div className="h-[50vh] overflow-hidden bg-light-grey">
                <Slider>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </Slider>
            </div>
            {/* <SliderNavigation /> */}
            <SliderPrev />
            <SliderNext />
            <div className="absolute bottom-0 flex gap-2 -translate-x-1/2 left-1/2 p-5">
                <SliderPagination />
            </div>
        </SliderProvider>
    )
}

export function getServerSideProps() {
    return {
        notFound: true
    }
}