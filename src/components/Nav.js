import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { ScrollProvider } from "./ScrollContext";
const Nav = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <ScrollProvider>
      <Navbar>
        {/* <img src={Logo} alt="logo" /> */}
        <ClickableLogo to="/">
          <BrandLogo>
            <Logo />
            <div>
              <h3>Bilal Ahmad</h3>
            </div>
          </BrandLogo>
        </ClickableLogo>

        <FontAwesomeIcon
          className="nav--toggler"
          onClick={() => setToggler(!toggler)}
          icon={faBars}
          inverse
        />
        <List
          className={`nav--list collapsible--content ${
            toggler ? "collapsible--expended" : ""
          }`}
        >
          <ListItem className="nav__list-item">
            <StyledLink to="/" onClick={() => setToggler(!toggler)}>
              Home
            </StyledLink>
          </ListItem>

          <ListItem className="nav__list-item">
            <StyledLink to="/about" onClick={() => setToggler(!toggler)}>
              About
            </StyledLink>
          </ListItem>

          <ListItem className="nav__list-item">
            <StyledLink to="/work" onClick={() => setToggler(!toggler)}>
              My Work
            </StyledLink>
          </ListItem>
          <ListItem className="nav__list-item">
            <StyledLink to="/resume" onClick={() => setToggler(!toggler)}>
              Resume
            </StyledLink>
          </ListItem>
          <ListItem className="nav__list-item">
            <StyledLink to="/certificates" onClick={() => setToggler(!toggler)}>
              Certificates
            </StyledLink>
          </ListItem>
          <ListItem className="nav__list-item">
            <StyledLink to="/contact" onClick={() => setToggler(!toggler)}>
              Contact
            </StyledLink>
          </ListItem>
        </List>
      </Navbar>
    </ScrollProvider>
  );
};
export default Nav;

//practice

// Rest of the code remains unchanged

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: black;

  align-items: center;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
`;
const BrandLogo = styled.div`
  display: flex;
  align-items: center;

  h3 {
    color: white;
    font-size: 2rem;
    margin: 0;
  }
`;
const ClickableLogo = styled(Link)`
  display: grid;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;
const List = styled.ul`
  list-style: none;
  width: 100%;
  &.collapsible--content {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 1s;
  }
  &.collapsible--expended {
    max-height: 100vh;
    opacity: 1;
  }
  @media (min-width: 768px) {
    &.collapsible--content {
      max-height: 100vh;
      opacity: 1;
    }
  }
`;
const ListItem = styled.li`
  padding: 1rem 2rem;

  border-bottom: 1px solid #222;
  @media screen and (min-width: 768px) {
    border: 0;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;

  color: white;
`;
