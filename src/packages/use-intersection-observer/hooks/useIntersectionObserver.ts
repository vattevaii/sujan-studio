import { useContext, useEffect, useRef } from "react";
import { IntersectionContext } from "../contexts/intersection.context";

const useIntersectionContext = () => {
    const context = useContext(IntersectionContext);
    if (context === null) throw new Error("useIntersectionContext used outside IntersectionContext");
    return context;
}

const useIntersectionObserver = <T extends Element>({ handleIntersect, threshold = 0.5, unobserveOn = "intersect" }: UseIntersectionObserverOptions) => {
    const elementRef = useRef<T | null>(null);
    const { addIntersctionItem, removeIntersctionItem } = useIntersectionContext();
    useEffect(() => {
        // console.log("Intersection Observer Used in Component. Element:", elementRef.current);
        // threshold between 0 and 1
        const th = threshold > 1 ? 1 : threshold < 0 ? 0 : threshold
        if (elementRef.current) addIntersctionItem(elementRef.current, { handleIntersect, threshold, unobserveOn });
        const item = elementRef.current;
        return () => {
            if (item) removeIntersctionItem(item);
        }
    }, [addIntersctionItem, handleIntersect, removeIntersctionItem, elementRef, threshold, unobserveOn])
    return elementRef;
}

export default useIntersectionObserver;