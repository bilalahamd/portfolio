import React from "react";
import Line from "./Line";
import styled from "styled-components";

const Experience = ({ title, description }) => {
  return (
    <Education className="education">
      <StyledResume>
        <Question>
          <h1>
            <Line text="Experience" />
          </h1>
        </Question>
        <ExperienceAnswer>
          <Answer>
            <h1>Bright Vision Soft</h1>
            <p>Full-Stack JavaScript Developer• 2022-2023</p>
          </Answer>
          <Answer>
            <h1>Mexil Software Solutions</h1>
            <p>Front-End Web Developer• 2021 2022</p>
          </Answer>
        </ExperienceAnswer>
      </StyledResume>
    </Education>
  );
};

export default Experience;

const Education = styled.div`
  margin-bottom: 4rem;
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
    display: inline-block; /* Ensure inline-block to make line width fit the text */
  }
`;

const Answer = styled.div`
  margin-bottom: 6rem;
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
