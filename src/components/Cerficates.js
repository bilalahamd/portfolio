import React from "react";
import Certifate from "./images/certificates.png";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";

const Certificates = () => {
  return (
    <section className="block block--dark block--skewed-right">
      <Header className="block__header">
        <h1>Certificates</h1>
      </Header>
      <Container className="container grid grid--1x2">
        <img src={Certifate} alt="" />
        <CertificateLink to="/certificates">
          <Button certificate="certificate--btn" title="Certificates" />
        </CertificateLink>
      </Container>
    </section>
  );
};

export default Certificates;
// const Container = styled.div`
//   gap: 2rem;
//   display: grid;
//   grid-template-columns: 70% 30%;

//   img {
//     width: 100%;
//   }

//   @media screen and (min-width: 768px) {
//     /* &.grid {
//       grid-template-columns: 70% 30%;
//     } */
//     img {
//       width: auto;
//       max-width: 800px;
//       justify-self: end;
//     }
//   }
// `;
const Container = styled.div`
  gap: 2rem;
  display: grid;
  grid-template-columns: 100%; /* Change to single column layout by default */

  img {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 70% 30%; /* Switch to two-column layout for larger screens */

    img {
      width: auto;
      max-width: 800px;
      justify-self: end;
    }
  }
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

  &:hover {
    box-shadow: 0px 0px 16px #191919;
    background: #7786a3;
    color: white;
  }
`;
const CertificateLink = styled(Link)`
  display: grid;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;
const Header = styled.header`
  h1 {
    font-size: 5rem;
  }
`;