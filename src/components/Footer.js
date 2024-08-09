import React from "react";
// import Logo from "./images/logo.svg";
import Logo from "./Logo";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <StyledFooter className="block block--dark">
      <StyledGrid className="container">
        <Brand>
          <ClickableLogo to="/">
            <BrandLogo>
              <Logo />
              <h3>Bilal Ahmad</h3>
            </BrandLogo>
          </ClickableLogo>

          {/* <img src={Logo} alt="" /> */}

          <p>&copy; 2023 Bilal Ahmad | Crafted with ❤️</p>
        </Brand>
        <SocialIcons>
          <Icons>
            <Anchor
              href="https://www.facebook.com/bilal14396"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledFontAwesomeIcon icon={faFacebook} size="2x" />
            </Anchor>
            <Anchor
              href="https://www.instagram.com/bilal14396/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledFontAwesomeIcon icon={faInstagram} size="2x" />
            </Anchor>
            <Anchor href="https://wa.me/+966536640375" target="_blank">
              <StyledFontAwesomeIcon icon={faWhatsapp} size="2x" />
            </Anchor>
            <Anchor
              href="https://www.linkedin.com/in/bilal-ahmad-b662a3185/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledFontAwesomeIcon icon={faLinkedin} size="2x" />
            </Anchor>
          </Icons>
          <p>Let's Get Social: Follow Us</p>
        </SocialIcons>
      </StyledGrid>
    </StyledFooter>
  );
};

export default Footer;
const StyledFooter = styled.footer``;
const StyledGrid = styled.div`
  display: grid;
  gap: 8rem 2rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 60% 40%;
  }
`;
const Brand = styled.div`
  text-align: center;

  p {
    font-size: 2.1rem;
    color: white;
    opacity: 0.3;
  }
  @media screen and (min-width: 768px) {
    text-align: left;
    p {
      margin-left: 7rem;
    }
  }
`;
const BrandLogo = styled.div`
  display: flex;

  h3 {
    margin-top: 2rem;
    font-size: 2rem;
    color: white;
  }
`;
const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    text-align: center;
    margin-top: 3rem;
    font-size: 2.1rem;
    color: white;
    opacity: 0.3;
  }
  @media screen and (min-width: 768px) {
    p {
      margin-top: 0;
    }
  }
`;
const ClickableLogo = styled(Link)`
  display: grid;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;
const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Anchor = styled.a`
  color: inherit; /* Inherit the color from the parent */
  text-decoration: none;
  &:hover {
    color: #b9c3cf;
  }
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  /* Adjust the margin value to reduce the space between icons */
`;
