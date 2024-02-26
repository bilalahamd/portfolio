import React, { useState, useEffect } from "react";
import Button from "./Button";
import styled from "styled-components";
import HeroImage from "./images/hero.png";
import { motion } from "framer-motion";
import { TitleAnimation, Fade } from "./Animation/Animation";
import { Link } from "react-router-dom";

const coder = {
  name: "Bilal Ahmad",
  skills: ["React", "Node JS"],
  hardworker: true,
  problemsolver: true,
  hireable: `function() {
      return (
        this.hardworker &&
        this.problemsolver &&
        this.skills.length >= 5
      );
    }
  `,
};

const Hero = () => {
  const [showLayer, setShowLayer] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    setShowLayer(true);
    const timer = setTimeout(() => {
      setIsAdding(true);
    }, 10);

    // Clean up timer
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isAdding && displayedText.length > 0) {
      const timer = setTimeout(() => {
        setDisplayedText((prevText) => prevText.slice(0, -1));
      }, 25);
      return () => clearTimeout(timer);
    }
  }, [displayedText, isAdding]);

  useEffect(() => {
    if (isAdding) {
      const text = ` const coder = {
  name: ${coder.name},
  skills: ${JSON.stringify(coder.skills)},
  hardworker: ${coder.hardworker},
  problemsolver: ${coder.problemsolver},
  hireable: ${coder.hireable},
};`;

      let index = 0;
      const timer = setInterval(() => {
        setDisplayedText((prevText) => {
          return prevText + text[index];
        });
        index++;
        if (index === text.length) {
          setIsAdding(false);
          setTimeout(() => {
            setShowLayer(false);
          }, text.length * 30); // Delay for the same duration as the deletion animation
          clearInterval(timer);
        }
      }, 25);

      return () => clearInterval(timer);
    }
  }, [isAdding]);

  return (
    <StyledHero className="block block--dark block--skewed-left">
      <div className="container grid grid--1x2">
        <Intro className="block__header intro">
          <motion.div variants={TitleAnimation}>
            <h1 className="hero__heading">We Work To Make</h1>
          </motion.div>
          <motion.div variants={TitleAnimation}>
            <h1 className="hero__heading">
              Your <span className="dream">Dream</span>
            </h1>
          </motion.div>
          <motion.div variants={TitleAnimation}>
            <h1 className="hero__heading">Come True</h1>
          </motion.div>
          <motion.div variants={Fade}>
            <p className="hero__tagline">
              I am a full-stack JavaScript Developer
            </p>
            <Link to="/contact">
              <Button title="contact me" />
            </Link>
          </motion.div>
        </Intro>
        <ImageContainer variants={Fade}>
          <Image src={HeroImage} alt="just for decoration" />
          {showLayer && <Overlay />}
        </ImageContainer>
        <CoderInfo variants={Fade}>
          <CoderCode>{displayedText}</CoderCode>
        </CoderInfo>
      </div>
    </StyledHero>
  );
};

export default Hero;

const StyledHero = styled(motion.section)`
  background: #000103;
  position: relative;
  overflow: hidden;
`;

const Intro = styled.header`
  h1 {
    font-size: 4rem;
  }
  span {
    color: #7786a3;
  }
  p {
    margin: 3rem 0 5rem;
    font-size: 2rem;
    color: #b9c3cf;
  }

  @media screen and (min-width: 768px) {
    &.block__header {
      text-align: left;
    }
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  white-space: pre-wrap;
  background-color: black;
  z-index: 10; /* Ensure it's above the image */

  box-shadow: 0px 0px 10px rgba(225, 96, 2, 0.5),
    0px 0px 10px rgba(128, 128, 128, 0.5), 0px 0px 10px rgba(0, 0, 128, 0.5);
`;

const CoderInfo = styled(motion.div)`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  color: white;
  text-align: center;
  padding: 20px; /* Slightly increased for better text wrapping */
  max-width: 80%; /* Adjusted for smaller screens */
  line-height: 1.5;
  font-size: 1rem;

  @media screen and (min-width: 1050px) {
    line-height: 5rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    top: 35%;
    left: 70%;
    line-height: 2rem;
    max-width: 90%; /* Further adjusted for smaller screens */
  }
`;

const CoderCode = styled.pre`
  white-space: pre-wrap;
  text-align: left;
`;
