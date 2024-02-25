import React, { useEffect } from "react";
import { styled } from "styled-components";
import Personal from "./images/testimonial.jpg";
import { motion } from "framer-motion";
import useScroll from "./useScroll";
import ScrollTop from "./ScrollTop";
import { Fade, PageAnimation } from "./Animation/Animation";

const About = () => {
  const [element, controls] = useScroll(Fade, 0.1);

  return (
    <motion.section
      className="block "
      variants={PageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <StyledAbout
        variants={Fade}
        ref={element}
        initial="hidden"
        animate={controls}
        className="container grid grid--1x2"
      >
        <Image src={Personal} alt="decoration" />
        <article>
          <h1>About Me</h1>
          <p>
            Hello! My name is <span>"Bilal Ahmad"</span> and I'm a full-stack
            javascript as well as Php developer I have Excellent knowledge of
            pure javascript(including es5 , es6 and es7 standards) HTML5 , CSS3
            and various libraries and tools:Node.js , React.js , Redux ,
            Express.js , Webpack , twitter Bootstrap , SAAS/SCSS , Styled
            Components and many more. And also Experience in development on
            Node.js and php backend. I also have a good understanding about
            MongoDb and mySql. So <span>"Hire me!"</span> I would like to work
            in your company.....
            <br />
            thank you!
          </p>
        </article>
      </StyledAbout>
      <ScrollTop />
    </motion.section>
  );
};

export default About;
const StyledAbout = styled(motion.div)`
  gap: 6rem 3rem;
  h1 {
    margin-bottom: 0;
    font-size: 4rem;
    color: #7786a3;
  }
  p {
    text-indent: 19rem;
    text-align: justify;
    margin-top: 0;
  }
  span {
    color: #7786a3;
  }
`;
const Image = styled.img`
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5), inset 0 1px rgba(255, 255, 255, 0.3),
    inset 0 10px rgba(255, 255, 255, 0.2),
    inset 0 10px 20px rgba(255, 255, 255, 0.25),
    inset 0 -15px 30px rgba(0, 0, 0, 0.3);
  -o-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5),
    inset 0 1px rgba(255, 255, 255, 0.3), inset 0 10px rgba(255, 255, 255, 0.2),
    inset 0 10px 20px rgba(255, 255, 255, 0.25),
    inset 0 -15px 30px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5),
    inset 0 1px rgba(255, 255, 255, 0.3), inset 0 10px rgba(255, 255, 255, 0.2),
    inset 0 10px 20px rgba(255, 255, 255, 0.25),
    inset 0 -15px 30px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5),
    inset 0 1px rgba(255, 255, 255, 0.3), inset 0 10px rgba(255, 255, 255, 0.2),
    inset 0 10px 20px rgba(255, 255, 255, 0.25),
    inset 0 -15px 30px rgba(0, 0, 0, 0.3);
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    /* width: 100%; */
  }
`;
