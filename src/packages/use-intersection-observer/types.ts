type IntersectionState = {
    addIntersctionItem: (item: Element, observerData: IntersectionObserverData) => void;
    removeIntersctionItem: (item: Element) => void;
}

type UseIntersectionObserverOptions = {
    threshold?: number,
    handleIntersect: () => void,
    unobserveOn?: 'intersect'|'never'
}
type IntersectionObserverData = Required<UseIntersectionObserverOptions>

type IntersectItemsMap = Map<Element, IntersectionObserverData>

type ObserversMap = Map<string | number, IntersectionObserver>