import React from "react";
import Line from "./Line";
import styled from "styled-components";
const Resume = ({ title, description }) => {
  return (
    <Education className="education">
      <StyledResume>
        <Question>
          <h1>
            <Line text="Education" />
          </h1>
        </Question>
        <EducationAnswer>
          <Answer>
            <h1>AGRICULTURE UNIVERSITY PESHAWAR</h1>
            <p>BS Computer Science</p>
          </Answer>
          <Answer>
            <h1>Abacus International Islamabad</h1>
            <p>Nebosh IGC</p>
          </Answer>
        </EducationAnswer>
      </StyledResume>
    </Education>
  );
};

export default Resume;
const Education = styled.div`
  margin-bottom: 10rem;
`;
const StyledResume = styled.div`
  display: grid;
  gap: 2rem;

  @media screen and (min-width: 758px) {
    grid-template-columns: 30% 70%;
  }
`;

const Question = styled.div`
  h1 {
    margin-bottom: 0;
    font-size: 4rem;
    display: inline-block;
  }
`;
const EducationAnswer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Answer = styled.div`
  margin-bottom: 6rem;
  h1 {
    margin-bottom: 0;
    font-size: 3rem;
    color: #7786a3;
    /* margin-top: 6rem; */
  }
  p {
    margin: 0;
    font-size: 1.6rem;
    color: #f7f8f8;
  }
`;
