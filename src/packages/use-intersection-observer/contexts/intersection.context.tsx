import { PropsWithChildren, createContext, useRef } from "react";

const IntersectionContext = createContext<IntersectionState | null>(null);

function IntersectionProvider({ children }: PropsWithChildren) {
  const intersectionItemsMap = useRef<IntersectItemsMap>(
    new Map<Element, IntersectionObserverData>(),
  );
  const observerMap = useRef<ObserversMap>(
    new Map<string | number, IntersectionObserver>(),
  );
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      // 
      if (entry.isIntersecting) {
        // 
        const options = intersectionItemsMap.current?.get(entry.target);
        if (options) {
          options.handleIntersect();
          if (options.unobserveOn === "intersect")
            removeIntersctionItem(entry.target);
        }
      }
    });
  };
  const getIntersectionObserver: (threshold: number) => IntersectionObserver = (
    threshold,
  ) => {
    const mappable_threshold = threshold.toFixed(2);
    const observer = observerMap.current.get(mappable_threshold);
    if (observer) return observer;
    const observer2 = new IntersectionObserver(handleIntersection, {
      threshold: Number(mappable_threshold),
    });
    observerMap.current.set(mappable_threshold, observer2);
    return observer2;
  };

  const addIntersctionItem = (
    item: Element,
    observerData: IntersectionObserverData,
  ) => {
    intersectionItemsMap.current?.set(item, observerData);
    const observer2 = getIntersectionObserver(observerData.threshold);
    observer2.observe(item);
    // 
  };
  const removeIntersctionItem = (item: Element) => {
    const options = intersectionItemsMap.current?.get(item);
    if (options) {
      const observer = getIntersectionObserver(options.threshold);
      observer.unobserve(item);
    }
    intersectionItemsMap.current?.delete(item);
    // // console.log("Removed Observed Item. Current Observe stack size:", intersectionItemsMap.current?.size)
  };
  // // console.log("Initialized Observer API")
  return (
    <IntersectionContext.Provider
      value={{ addIntersctionItem, removeIntersctionItem }}
    >
      {children}
    </IntersectionContext.Provider>
  );
}

export { IntersectionProvider, IntersectionContext };
