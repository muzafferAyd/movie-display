import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavList = styled.div`
  width: 100%;
  height: 4rem;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 1rem;
  background: #0f0b1a;
  position: sticky;
  top:0;
  z-index:1;
`;
export const Logo = styled.a`
  color: yellow;
  align-items: center;
  margin: 1rem;
  cursor: pointer;
  font-size: 2rem;
  flex-grow: 1;
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 1rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  list-style: none;

  @media (max-width: 960px) {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    width: 20%;
    border-top: 1px solid white;
    position: absolute;
    opacity: 1;
  }
`;

export const NavLi = styled.li`
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
    width: 6rem;
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 1rem;
  position: relative;
`;
