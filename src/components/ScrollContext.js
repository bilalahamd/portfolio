// ScrollContext.js
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const value = {
    activeSectionIndex,
    setActiveSectionIndex,
  };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};

export const ScrollSection = ({ index, children }) => {
  const ref = useRef();
  const { setActiveSectionIndex } = useScroll();

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSectionIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [index, setActiveSectionIndex]);

  return <div ref={ref}>{children}</div>;
};
