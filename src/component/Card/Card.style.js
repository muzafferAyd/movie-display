import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  width: 9.5rem;
  height: 13.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: 0.18rem 0.12rem 0.62rem rgba(0, 0, 0, 0.1);
  margin: 5px;
  padding: 2px;
  transition: 0.2s;
  position: relative;
  background-color: #2d2c42;
  float: left;
  //rgb(37, 47, 47);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.1);
    opacity: 0.85;
    cursor: pointer;
  }
`;

export const StyledMovieRating = styled.div`
  background-color: #f4bd2c;
  border-radius: 100px;
  padding: 0 8px;
  line-height: 18px;
  font-weight: bold;
  color: #000;
  font-size: 12px;
  display: inline;
  position: absolute;
  top: 2%;
  right: 3%;
  min-width: 0.7rem;
  text-align: center;
`;

export const StyledMovieTitle = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  font-family: "Roboto Condensed", sans-serif;
  text-align: center;
  margin: 0;
  box-sizing: border-box;
  color: white;
  letter-spacing: 1px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  align-items: center;
`;

export const StyledMovieYear = styled.p`
  font-size: 0.8rem;
  margin: 0;
  font-style: italic;
  font-weight: bolder;
  position: absolute;
  bottom: 16%;
  left: 4%;
  background-color: #fff;
  border-radius: 5px;
  padding: 2px;
  text-align: center;
`;

export const StyledMovieImg = styled.img`
  width: inherit;
  height: 86%;
  border-radius: 4px;
  position: relative;
`;
