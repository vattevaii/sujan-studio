import React, { PropsWithChildren, createContext, useCallback, useContext, useEffect, useState } from 'react'

type Props = {}
type SliderData = {
    activeIdx: number;
    prevIdx: number;
    nextIdx: number;
    slideCount: number;
    next: () => void;
    prev: () => void;
    showSlider: (idx: number) => void;
    setSlideCount: (idx: number) => void;
}
const SliderContext = createContext<SliderData | null>(null)
export const SliderProvider = ({ children, autoplay = false, autoplayDuration = 2.5 }: PropsWithChildren<{ autoplay?: boolean, autoplayDuration?: number }>) => {
    const [activeIdx, setActive] = useState(0);
    const [prevIdx, setPrev] = useState(-1);
    const [nextIdx, setNext] = useState(1);
    const [slideCount, setCount] = useState(0);
    const next = () => {
        setActive((curr) => {
            setPrev(curr);
            setNext(curr + 2);
            return curr + 1
        });
    }
    const prev = () => {
        setActive((curr) => {
            setPrev(curr - 2);
            setNext(curr);
            return curr - 1;
        });
    }
    const showSlider = useCallback((idx: number) => {
        setActive(idx);
        setPrev(idx - 1);
        setNext(idx + 1);
    }, [])
    const setSlideCount = (idx: number) => {
        setCount(idx);
    }
    useEffect(() => {
        if (activeIdx === -1) {
            showSlider(slideCount - 1)
        }
        if (activeIdx === slideCount) {
            showSlider(0)
        }
    }, [activeIdx, showSlider, slideCount])
    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (autoplay) interval = setInterval(() => {
            next()
        }, autoplayDuration * 1000);
        if(!autoplay && interval !== null) clearInterval(interval);
        return () => {
            if(interval) clearInterval(interval);
        }
    }, [autoplay, autoplayDuration])
    return <SliderContext.Provider value={{ activeIdx, prevIdx, nextIdx, slideCount, setSlideCount, next, prev, showSlider }}>
        <div className="relative h-full">
            {children}
        </div>
    </SliderContext.Provider>
}
const useSliderContext = () => {
    const sliderData = useContext(SliderContext);
    if (sliderData === null) throw new Error("Hello. if you arre seeing this error you are using the component incorrectly.");
    return sliderData;
}

export const Slider = ({ children }: { children: React.ReactNode[] }) => {
    const slides: React.ReactNode[] = children;
    const clonedSlides = [slides[slides.length - 1], ...slides, slides[0]]
    const { activeIdx, next, nextIdx, prev, prevIdx, showSlider, setSlideCount } = useSliderContext();
    // const style = index == indexSelected
    //     ? `transform: translate(${380 * (index + difference)}px) scale(0.9)`
    //     : `transform: translate(${280 * (index + difference)
    //     }px) scale(0.4);cursor:pointer;`
    useEffect(() => {
        setSlideCount(slides.length);
    }, [setSlideCount, slides.length]);
    return (

        <>
            <div className="relative h-full">
                {clonedSlides.map((child, idx) =>
                    <div key={idx - 1} className={"absolute grid place-items-center h-full w-full transition-transform duration-300"}
                        style={{
                            transform: `translateX(${(idx - activeIdx - 1) * 100}%)`
                        }}>
                        {child}
                    </div>
                )}
            </div>

        </>
    )
}

export const SliderNavigation = () => {
    const { activeIdx, next, nextIdx, prev, prevIdx, showSlider } = useSliderContext();
    return <div className='flex gap-3'>
        <button onClick={prev} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Prev</button>
        <button onClick={next} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Next</button>
        <p className='text-black text-xl'>&nbsp;{prevIdx}&nbsp;{activeIdx}&nbsp;{nextIdx}&nbsp;</p>
    </div>
}

export const SliderPrev = () => {
    const { prev } = useSliderContext();
    return <button className='absolute top-1/2 left-5 -translate-y-1/2 w-10 h-10' onClick={prev}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox='0 0 50 50'
            fill="none"
        >
            <g filter="url(#a)">
                <rect width={50} height={50} fill="#B7B7B7" fillOpacity={0.21} rx={25} />
            </g>
            <path
                className='group-hover:animate-arrow-move'
                fill="#fff"
                d="M19.154 18v2.308h9.911L18 31.373 19.627 33l11.065-11.065v9.911H33V18H19.154Z"
            />
            <defs>
                <filter
                    id="a"
                    width={90}
                    height={90}
                    x={-20}
                    y={-20}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation={10} />
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_141_216"
                    />
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_141_216"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    </button>
}

export const SliderNext = () => {
    const { next } = useSliderContext();
    return <button className='absolute top-1/2 right-5 -translate-y-1/2 w-10 h-10' onClick={next}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox='0 0 50 50'
            fill="none"
        >
            <g filter="url(#a)">
                <rect width={50} height={50} fill="#B7B7B7" fillOpacity={0.21} rx={25} />
            </g>
            <path
                className='group-hover:animate-arrow-move'
                fill="#fff"
                d="M19.154 18v2.308h9.911L18 31.373 19.627 33l11.065-11.065v9.911H33V18H19.154Z"
            />
            <defs>
                <filter
                    id="a"
                    width={90}
                    height={90}
                    x={-20}
                    y={-20}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation={10} />
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_141_216"
                    />
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_141_216"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    </button>
}

export const SliderPagination = ({ }) => {
    const { slideCount, activeIdx } = useSliderContext();
    const dots = new Array(slideCount).fill(0);
    return <>
        {dots.map((i, idx) => <div key={idx} className={(activeIdx === idx ? "w-5" : "w-2") + " h-2 rounded-md bg-light-grey transition-[width]"} />)}
    </>
}