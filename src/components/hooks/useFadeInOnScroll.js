/**
 * Custom React hook to fade in an element when it scrolls into view.
 * @param {number} threshold - Intersection threshold (default: 0.1)
 * @returns {[React.RefObject, boolean]} - Ref to attach and visibility state
 */
import { useEffect, useRef, useState } from 'react';

const useFadeInOnScroll = (threshold = 0.1) => {
    const ref = useRef(null);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    if (ref.current) observer.unobserve(ref.current);
                }
            },
            { threshold }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) observer.unobserve(ref.current);
            observer.disconnect();
        };
    }, [threshold]);
    return [ref, isVisible];
};

export default useFadeInOnScroll;