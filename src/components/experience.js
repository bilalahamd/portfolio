// import React from "react";
// import Line from "./Line";
// import styled from "styled-components";

// const Experience = ({ title, description }) => {
//   return (
//     <Education className="education">
//       <StyledResume>
//         <Question>
//           <h1>Experience</h1>
//           <Line />
//         </Question>
//         <ExperienceAnswer>
//           <Answer>
//             <h1>MR WEB-EXPERT</h1>
//             <p>Team Member && React Specialist• April 2020 - november 2021 </p>
//           </Answer>
//           <Answer>
//             <h1>Data Entry Spacilist</h1>
//             <p>Inayat health Center Battagram• feb 2022 - oct 2023</p>
//           </Answer>
//         </ExperienceAnswer>
//       </StyledResume>
//     </Education>
//   );
// };

// export default Experience;
// const Education = styled.div`
//   margin-bottom: 10rem;
// `;
// const StyledResume = styled.div`
//   display: grid;
//   gap: 2rem;

//   @media screen and (min-width: 758px) {
//     grid-template-columns: 30% 70%;
//   }
// `;

// const Question = styled.div`
//   h1 {
//     margin-bottom: 0;
//     font-size: 4rem;
//   }
// `;
// const Answer = styled.div`
//   margin-bottom: 6rem;
//   h1 {
//     margin-bottom: 0;
//     font-size: 3rem;
//     color: #7786a3;
//   }
//   p {
//     margin: 0;
//     font-size: 1.6rem;
//     color: #f7f8f8;
//   }
// `;
// const ExperienceAnswer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// Experience.jsx
// Experience.jsx
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
            <h1>MR WEB-EXPERT</h1>
            <p>Team Member && React Specialist• April 2020 - November 2021</p>
          </Answer>
          <Answer>
            <h1>Data Entry Spacilist</h1>
            <p>Inayat health Center Battagram• Feb 2022 - Oct 2023</p>
          </Answer>
        </ExperienceAnswer>
      </StyledResume>
    </Education>
  );
};

export default Experience;

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
