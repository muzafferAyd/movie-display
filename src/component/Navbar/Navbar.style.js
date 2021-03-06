import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavList = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 1rem;
  background: #0f0b1a;
  position: sticky;
  top: 0;
  z-index: 1;
  @media (max-width: 960px) {
    height: 7rem;

  }


`;
export const Logo = styled.a`
  margin: 1rem;
  cursor: pointer;
  font-size: 1rem;
  flex-grow: 1;
  color: white;
  svg {
    background-color: white;
    padding: 3px;
    border-radius: 2px;
    align-items: baseline;
  }

  @media (max-width: 960px) {
  
  justify-items: center;
}
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 5rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  list-style: none;

  @media (max-width: 960px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    position: static;
    opacity: 1;
    text-align:center;
    height:5rem;
    align-items:center;
  }
`;

export const NavLi = styled.li`
  background-color: #0f0b1a;
  margin: 1rem;
  color: white;
  padding: 0.5rem;
  border-bottom: 1rem solid transparent;
  border: 0.1rem solid yellow;
  text-align: center;

  &:hover {
    background-color: #ffdd40;
    transition: width 0.7s ease, background-color 0.5s ease;
    display: block;
  }

  &.active {
    color: red;
  }

  @media (max-width: 960px) {
    width: 100%;
    padding:0;
    margin: 0.4rem;
  }
  @media (max-width: 456) {
    width: 100%;
    padding:0;
    margin: 0.2rem;
    
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 1rem;
  position: relative;
`;
