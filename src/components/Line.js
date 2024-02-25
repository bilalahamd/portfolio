// import React from "react";
// import { styled } from "styled-components";
// const Line = ({ text }) => {
//   return <StyledLine>{text}</StyledLine>;
// };

// export default Line;
// const StyledLine = styled.div`
//   height: 6px;
//   background-color: red;
// `;

// Line.jsx
import React from "react";
import styled from "styled-components";

const Line = ({ text }) => {
  return <StyledLine>{text}</StyledLine>;
};

const StyledLine = styled.div`
  position: relative;
  display: inline-block;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;

    left: 0;
    width: 100%;
    height: 6px;
    background-color: #7786a3;
  }
`;

export default Line;
