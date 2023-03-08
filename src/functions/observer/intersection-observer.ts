import { useInView } from "react-intersection-observer";

export const IntersectionObserver = (threshold = 1, triggerOnce = true): [((node?: (Element | null)) => void), boolean] => {
  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: triggerOnce
  })

  return [ref, inView];
};