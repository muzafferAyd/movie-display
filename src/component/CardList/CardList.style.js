import styled from "styled-components";

export const StyledCardList = styled.div`
  display: inline-block;
  flex-wrap:wrap;
  margin: auto;
  height: auto;
  align-content: center;
  margin-left:35px;
   @media (max-width: 800px) {
     display:inline;
     flex-direction:row;
  } 
`;

export const StyledCardTitle = styled.h2`
  color: #0f0b1a;
  display: block;
`;
