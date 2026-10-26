import { RefObject, useEffect, useState } from "react";

type Listener = (isIntersecting: boolean) => void;

const listeners = new WeakMap<Element, Listener>();
let observer: IntersectionObserver | undefined;

const observe = (element: Element, listener: Listener) => {
  observer ??= new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) =>
        listeners.get(entry.target)?.(entry.isIntersecting)
      ),
    { rootMargin: "120px" }
  );
  listeners.set(element, listener);
  observer.observe(element);

  return () => {
    observer?.unobserve(element);
    listeners.delete(element);
  };
};

export const useInView = (ref: RefObject<Element>): boolean => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    return observe(element, setInView);
  }, [ref]);

  return inView;
};
