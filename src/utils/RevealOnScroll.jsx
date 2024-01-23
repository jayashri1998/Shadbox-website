import { useEffect, useRef, useState } from "react";

 const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollbarObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      scrollbarObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        scrollbarObserver.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ opacity: isVisible ? 1 : 0 }} // Directly setting opacity based on the state
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
