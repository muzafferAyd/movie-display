import React from "react";
import { NavList, Logo, NavLi, Menu, StyledLink } from "./Navbar.style";

export default function Navbar() {

    
  return (
    <NavList>
      <Logo  href="/">
         Movie Archive
      </Logo>
      <Menu>
        <NavLi>
          <StyledLink to="/" > MOVIES </StyledLink>
        </NavLi>

        <NavLi>
          <StyledLink to="/about"> ABOUT </StyledLink>
        </NavLi>

      </Menu>
     
      {/* <StyledLink to="/details/602"> HOME </StyledLink> 
              <StyledLink to="/details/601"> HOME </StyledLink> 
              <StyledLink to="/details/600"> HOME </StyledLink>  */}
    </NavList>
  );
}
