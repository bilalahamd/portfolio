import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Resume from "./Resume";
import Experience from "./experience";
import Skills from "./Skill";
import useScroll from "./useScroll";
import { Fade, PageAnimation } from "./Animation/Animation";

import styled from "styled-components";

const FileUrl = "http://localhost:3000/BilalAhmadcv.pdf";
const ResumeParts = () => {
  const [element, controls] = useScroll(Fade, 0.2);
  const downloadCv = (url) => {
    const fileName = url.split("/").pop();
    const cv = document.createElement("a");
    cv.href = url;
    cv.setAttribute("download", fileName);
    document.body.appendChild(cv);
    cv.click();
    cv.remove();
  };
  return (
    <motion.section
      className="block block--dark"
      variants={PageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <motion.div
        variants={Fade}
        initial="hidden"
        ref={element}
        animate={controls}
        className="container"
      >
        <Resume />

        <Experience />
        <Skills />
      </motion.div>
      <SecondRow>
        <StyledButton onClick={() => downloadCv(FileUrl)}>
          Resume <FontAwesomeIcon icon={faCloudArrowDown} />
        </StyledButton>
      </SecondRow>
    </motion.section>
  );
};

export default ResumeParts;
const SecondRow = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: #191919;
  color: white;
  font-size: 3rem;
  box-shadow: 0px 0px 16px #7786a3;
  transition: all ease-in-out 1s;
  margin-top: 2rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 16px #191919;
    background: #7786a3;
    color: white;
  }
`;
