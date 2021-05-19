import React from "react";
import { NavList, Logo, NavLi, Menu, StyledLink } from "./Navbar.style";
import { ReactComponent as Brand } from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <NavList>
      <Logo href="/">
        <Brand />
      </Logo>

      <Menu>
        <NavLi>
          <StyledLink to="/"> MOVIES </StyledLink>
        </NavLi>

        <NavLi>
          <StyledLink to="/about"> ABOUT </StyledLink>
        </NavLi>
      </Menu>
    </NavList>
  );
}
