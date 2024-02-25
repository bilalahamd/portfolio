import React from "react";
import styled from "styled-components";
import Music from "./images/music.png";
import Ecomerece from "./images/ecomercemain.png";
import Shop from "./images/shop.png";
import { PageAnimation, Fade } from "./Animation/Animation";
import useScroll from "./useScroll";
import { motion } from "framer-motion";
import ScrollTop from "./ScrollTop";
import { Link } from "react-router-dom";

const Work = () => {
  const musiceAppUrl = "https://nostalgic-heyrovsky-1a06cc.netlify.app/";
  const ecomerceAppUrl = "https://hidden-plateau-33922.herokuapp.com/";
  const shopAppUrl = "https://boiling-badlands-01609.herokuapp.com/";
  const [element, controls] = useScroll(Fade, 0.1);
  return (
    <motion.div
      variants={PageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <motion.div
        variants={Fade}
        ref={element}
        initial="hidden"
        animate={controls}
      >
        <StyledGrid className="block block--dark">
          <div className="container">
            <FirstRow>
              <SingleColumn>
                <Link to={shopAppUrl} target="_blank">
                  <img src={Shop} alt="First Row Image" />
                </Link>
              </SingleColumn>
            </FirstRow>
            <SecondRow>
              <Column>
                <Link to={musiceAppUrl} target="_blank">
                  <img src={Music} alt="Second Row First Column Image" />
                </Link>
              </Column>
              <Column>
                <Link to={ecomerceAppUrl} target="_blank">
                  <img src={Ecomerece} alt="Second Row Second Column Image" />
                </Link>
              </Column>
            </SecondRow>
          </div>
        </StyledGrid>
      </motion.div>
      <ScrollTop />
    </motion.div>
  );
};
export default Work;

const StyledGrid = styled(motion.div)`
  display: flex;

  flex-direction: column;

  height: auto;
`;

const FirstRow = styled.div`
  flex: 1;
  display: flex;
  max-height: 70vh; /* Adjust as needed */

  position: relative;
`;
const Container = styled.div``;

const SecondRow = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const SingleColumn = styled.div`
  padding: 20px;
  flex: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Column = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  max-height: 70vh;

  img {
    width: 100%;

    object-fit: cover;
  }
`;
