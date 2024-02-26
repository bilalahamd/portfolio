import React from "react";

import { styled } from "styled-components";
import { motion } from "framer-motion";
import { LineAnimation, photoAnimation } from "./Animation/Animation";
import useScroll from "./useScroll";

const Cerficate = ({ id, source, alt }) => {
  const [element, controls] = useScroll(photoAnimation, 0.1);
  return (
    <StyledCertificate>
      <Line
        variants={LineAnimation}
        ref={element}
        animate={controls}
        src={source}
      ></Line>
      <Hide>
        <motion.img
          variants={photoAnimation}
          initial="hidden"
          ref={element}
          animate={controls}
          src={source}
          alt={alt}
        />
      </Hide>
    </StyledCertificate>
  );
};

export default Cerficate;
const StyledCertificate = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  overflow: hidden;

  img {
    width: 100%;

    margin-bottom: 3rem;
  }
  @media screen and (min-width: 768px) {
    img {
      height: 80vh;
    }
  }
`;
const Line = styled(motion.div)`
  height: 0.5rem;
  background: #7786a3;
  margin-bottom: 1rem;
`;
const Hide = styled.div`
  overflow: hidden;
`;
