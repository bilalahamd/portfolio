import React from "react";
import Line from "./Line";
import styled from "styled-components";
import { motion } from "framer-motion";
import skillAnimation, { LineAnimation } from "./Animation/Animation";
const Skills = ({ title, description }) => {
  return (
    <StyledSkills>
      <StyledResume>
        <Question>
          <h1>
            <motion.div
              variants={LineAnimation}
              animate="show"
              initial="hidden"
            >
              <Line text="Skills" />
            </motion.div>
          </h1>
        </Question>
        <ExperienceAnswer>
          <Answer>
            <h1>Css/Html</h1>
            <LevelWrapper>
              <Level variants={skillAnimation("85%", "#B1C9F5")}>
                <p>90%</p>
              </Level>
            </LevelWrapper>
          </Answer>
          <Answer>
            <h1>Bootstrap</h1>
            <LevelWrapper>
              <Level variants={skillAnimation("60%", "#7910F2")}>
                <p>60%</p>
              </Level>
            </LevelWrapper>
          </Answer>
          <Answer>
            <h1>React JS</h1>
            <LevelWrapper>
              <Level variants={skillAnimation("75%", "#5ED3F3")}>
                <p>75%</p>
              </Level>
            </LevelWrapper>
          </Answer>
          <Answer>
            <h1>TypeScript</h1>
            <LevelWrapper>
              <Level variants={skillAnimation("75%", "#2D79C7")}>
                <p>50%</p>
              </Level>
            </LevelWrapper>
          </Answer>
          <Answer>
            <h1>Node Js</h1>
            <LevelWrapper>
              <Level variants={skillAnimation("70%", "#152F10")}>
                <p>70%</p>
              </Level>
            </LevelWrapper>
          </Answer>
          <Answer>
            <h1>Next Js</h1>
            <LevelWrapper>
              <Level variants={skillAnimation("70%", "#666666")}>
                <p>80%</p>
              </Level>
            </LevelWrapper>
          </Answer>
          <Answer>
            <h1>Mongo DB</h1>
            <LevelWrapper>
              <Level variants={skillAnimation("50%", "#118D4D")}>
                <p>50%</p>
              </Level>
            </LevelWrapper>
          </Answer>
          <Answer>
            <h1>Version Control System/Git</h1>
            <LevelWrapper>
              <Level variants={skillAnimation("30%", "#E94E31")}>
                <p>30%</p>
              </Level>
            </LevelWrapper>
          </Answer>
        </ExperienceAnswer>
      </StyledResume>
    </StyledSkills>
  );
};

export default Skills;

const StyledSkills = styled(motion.div)`
  margin-bottom: 0;
`;
const StyledResume = styled.div`
  display: grid;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    gap: 6rem;
    grid-template-columns: 30% 70%;
  }
`;

const Question = styled.div`
  h1 {
    margin-bottom: 0;
    font-size: 4rem;
  }
`;
const Answer = styled.div`
  margin-bottom: 5rem;
  h1 {
    margin-bottom: 0;
    font-size: 3rem;
    color: #7786a3;
  }
  p {
    margin: 0;
    font-size: 1.6rem;
    color: #f7f8f8;
  }
`;

const ExperienceAnswer = styled.div`
  display: flex;
  flex-direction: column;
`;
const LevelWrapper = styled.div`
  height: 15px;
  background: #353434;
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 1rem;
  }
`;
const Level = styled(motion.div)`
  height: 15px;
  background: #353434;
  position: relative;
  z-index: 1;
`;
