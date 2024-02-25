import React from "react";
import { styled } from "styled-components";
const Button = ({ title, certificate }) => {
  return <StyledButton className={certificate}>{title}</StyledButton>;
};

export default Button;
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
