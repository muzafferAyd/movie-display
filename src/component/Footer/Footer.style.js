import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 4rem;
  margin: 0;
  padding: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  font-size: 1rem;
  background: #0f0b1a;
  justify-content: space-evenly;
  position: fixed;
  color: #bdbdbd;
   @media (max-width: 960px) {
    height: 3rem;
    background: #0f0b1a;
  } 
`;

export const Copyright = styled.div`
  margin: 0.5rem;
  display: flex;
  align-items: baseline;
  svg {
    padding-right: 10px;
  }
`;
export const SocialMedia = styled.div`
  margin: 0.5rem;
  display: flex;
  flex-direction: row-reverse;
`;
export const SocialIcon = styled.div`
  margin: 0.5rem;
`;

export const MiniLogo = styled.div``;
