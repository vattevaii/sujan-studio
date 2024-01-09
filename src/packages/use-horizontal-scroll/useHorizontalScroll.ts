import { useEffect, useRef } from "react";
function elementInViewport(myElement: HTMLElement) {
  var bounding = myElement.getBoundingClientRect();
  if (
    bounding.top >=
      ((window.innerHeight || document.documentElement.clientHeight) * 1) /
        10 &&
    bounding.bottom <=
      ((window.innerHeight || document.documentElement.clientHeight) * 14) / 15
  ) {
    return true;
  } else {
    return false;
  }
}
function greaterDelta(a: number, b: number) {
  // Remove signs
  const absA = Math.abs(a);
  const absB = Math.abs(b);

  // Compare absolute values
  if (absA > absB) {
    return a;
  } else {
    return b;
  }
}

export default function useHorizontalScroll<T extends HTMLElement>() {
  const horizontalScroll = useRef<T>(null);
  const scrollHorizontally = (delta: number) => {
    horizontalScroll.current?.scrollBy({
      left: delta * 25,
      behavior: "smooth",
    });
  };
  const wheelEventHandler: (this: HTMLElement, ev: WheelEvent) => any = (
    event
  ) => {
    if (
      !horizontalScroll.current ||
      !elementInViewport(horizontalScroll.current)
    ) {
      return;
    }
    const delta = greaterDelta(event.deltaY, event.deltaX);
    scrollHorizontally(delta);
    if (
      horizontalScroll.current?.scrollLeft === 0 ||
      horizontalScroll.current?.scrollLeft ===
        horizontalScroll.current.scrollWidth -
          horizontalScroll.current.clientWidth
    ) {
      return;
    }
    event.preventDefault();
  };
  useEffect(() => {
    horizontalScroll.current?.addEventListener("wheel", wheelEventHandler);
    return () => {
      if (horizontalScroll.current)
        horizontalScroll.current.removeEventListener(
          "wheel",
          wheelEventHandler
        );
    };
  }, []);
  return { ref: horizontalScroll };
}
