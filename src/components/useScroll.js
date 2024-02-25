// import React from "react";
// import { useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// export const useScroll = () => {
//   const controls = useAnimation();
//   const [element, view] = useInView();
//   if (view) {
//     controls.start("show");
//   } else {
//     controls.start("hidden");
//   }
//   return [element, controls];
// };

import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useScroll = (variants, threshold = 0.5) => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold });

  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [view, controls]);

  return [element, controls];
};

export default useScroll;
