import styled from "styled-components";

export const StyledJumbotron = styled.div`
  height: 8rem;
  /* background-color: #f8ceec;
  background-image: linear-gradient(315deg, #f8ceec 0%, #a88beb 74%); */
  background-color: #5de6de;
  background-image: linear-gradient(315deg, #5de6de 0%, #b58ecc 74%);
  box-sizing: border-box;
  font-weight: bold;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: #ffffff;
  margin-bottom: 1rem;
  display: flex;

  @media (max-width: 960px) {
    width: 100%;

  }
  @media (max-width: 768px) {
    width: 100%;


  }
`;

export const StyledJumbotronTitle = styled.h1`
  color: rgb(37, 47, 47);
  @media (max-width: 960px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
