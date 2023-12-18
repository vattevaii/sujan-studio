import React, {
  EventHandler,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = {};
type SliderData = {
  activeIdx: number;
  prevIdx: number;
  nextIdx: number;
  slideCount: number;
  loop: boolean;
  next: () => void;
  prev: () => void;
  showSlider: (idx: number) => void;
  setSlideCount: (idx: number) => void;
};
function checkVisible(elm: Element) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
const SliderContext = createContext<SliderData | null>(null);
export const SliderProvider = ({
  children,
  autoplay = false,
  autoplayDuration = 2.5,
  loop = true,
  activeIdx: active = 0,
}: PropsWithChildren<{
  autoplay?: boolean;
  autoplayDuration?: number;
  loop?: boolean;
  activeIdx?: number;
}>) => {
  const [activeIdx, setActive] = useState(active);
  const [prevIdx, setPrev] = useState(-1);
  const [nextIdx, setNext] = useState(1);
  const [slideCount, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const next = () => {
    setActive((curr) => {
      setPrev(curr);
      setNext(curr + 2);
      return curr + 1;
    });
  };
  const prev = () => {
    setActive((curr) => {
      setPrev(curr - 2);
      setNext(curr);
      return curr - 1;
    });
  };
  const showSlider = useCallback((idx: number) => {
    setActive(idx);
    setPrev(idx - 1);
    setNext(idx + 1);
  }, []);
  const setSlideCount = (idx: number) => {
    setCount(idx);
  };
  useEffect(() => {
    if (activeIdx === -1) {
      if (loop) showSlider(slideCount - 1);
      else showSlider(0);
    }
    if (activeIdx === slideCount) {
      if (loop) showSlider(0);
      else showSlider(slideCount - 1);
    }
  }, [activeIdx, showSlider, slideCount]);
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (autoplay)
      interval = setInterval(() => {
        next();
      }, autoplayDuration * 1000);
    if (!autoplay && interval !== null) clearInterval(interval);
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, autoplayDuration]);

  useEffect(() => {
    const keypressEvent: (this:Document, e:KeyboardEvent) => void = (ev) => {
      // console.log("key Pressed inside slider")
      if(autoplay) return;
      if(!checkVisible(ref.current!)) return;
      switch (ev.key) {
        case "ArrowLeft":
          prev();
          break;
        case "ArrowRight":
          next();
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", keypressEvent);
    return () => {
      document.removeEventListener("keydown", keypressEvent);
    };
  }, [prev, next]);
  return (
    <SliderContext.Provider
      value={{
        activeIdx,
        prevIdx,
        nextIdx,
        slideCount,
        loop,
        setSlideCount,
        next,
        prev,
        showSlider,
      }}
    >
      <div className="relative h-full" ref={ref}>{children}</div>
    </SliderContext.Provider>
  );
};
const useSliderContext = () => {
  const sliderData = useContext(SliderContext);
  if (sliderData === null)
    throw new Error(
      "Hello. if you are seeing this error you are using the component incorrectly."
    );
  return sliderData;
};

export const Slider = ({ children }: { children: React.ReactNode[] }) => {
  const slides: React.ReactNode[] = children;
  const clonedSlides = [slides[slides.length - 1], ...slides, slides[0]];
  const { activeIdx, next, nextIdx, prev, prevIdx, showSlider, setSlideCount } =
    useSliderContext();
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
        {clonedSlides.map((child, idx) => (
          <div
            key={idx - 1}
            className={
              "absolute flex justify-center items-center h-full w-full transition-transform duration-300"
            }
            style={{
              transform: `translateX(${(idx - activeIdx - 1) * 100}%)`,
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </>
  );
};

export const SliderNavigation = () => {
  const { activeIdx, next, nextIdx, prev, prevIdx, showSlider } =
    useSliderContext();
  return (
    <div className="flex gap-3">
      <button
        onClick={prev}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Prev
      </button>
      <button
        onClick={next}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Next
      </button>
      <p className="text-black text-xl">
        &nbsp;{prevIdx}&nbsp;{activeIdx}&nbsp;{nextIdx}&nbsp;
      </p>
    </div>
  );
};

export const SliderPrev = () => {
  const { prev, activeIdx, loop } = useSliderContext();
  // wrap prev in a function to prevent event bubbling
  const wrapPrev: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    prev();
  };
  return (
    <button
      className="absolute top-1/2 left-5 -translate-y-1/2 rotate-180 w-10 h-10 opacity-75 hover:opacity-100 disabled:bg-gray-800 disabled:opacity-25 rounded-full"
      onClick={wrapPrev}
      disabled={activeIdx === 0 && !loop}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
        <g filter="url(#a)">
          <rect
            width={50}
            height={50}
            fill="#B7B7B7"
            fillOpacity={0.21}
            rx={25}
          />
        </g>
        <g stroke="#fff" strokeWidth={2}>
          <line x1={20} y1={15} x2={30} y2={25} />
          <line x1={30} y1={25} x2={20} y2={35} />
        </g>
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
  );
};

export const SliderNext = () => {
  const { next, activeIdx, slideCount, loop } = useSliderContext();
  const wrapNext: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    next();
  };
  return (
    <button
      className="absolute top-1/2 right-5 -translate-y-1/2 w-10 h-10 opacity-75 hover:opacity-100 disabled:bg-gray-800 disabled:opacity-25 rounded-full"
      onClick={wrapNext}
      disabled={!loop && activeIdx === slideCount - 1}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
        <g filter="url(#a)">
          <rect
            width={50}
            height={50}
            fill="#B7B7B7"
            fillOpacity={0.21}
            rx={25}
          />
        </g>
        <g stroke="#fff" strokeWidth={2}>
          <line x1={20} y1={15} x2={30} y2={25} />
          <line x1={30} y1={25} x2={20} y2={35} />
        </g>
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
  );
};

export const SliderPagination = ({}) => {
  const { slideCount, activeIdx } = useSliderContext();
  const dots = new Array(slideCount).fill(0);
  return (
    <>
      {dots.map((i, idx) => (
        <div
          key={idx}
          className={
            (activeIdx === idx ? "w-5" : "w-2") +
            " h-2 rounded-md bg-light-grey transition-[width]"
          }
        />
      ))}
    </>
  );
};
