import React from "react";
import {
  StyledCardWrapper,
  StyledMovieTitle,
  StyledMovieImg,
  StyledMovieRating,
  StyledMovieYear,
} from "./Card.style";

const Card = ({ title, posterImg, rating ,releasedData}) => {
  return (
    <StyledCardWrapper>
      <StyledMovieImg src={posterImg}></StyledMovieImg>
      <StyledMovieTitle>{title}</StyledMovieTitle>
      <StyledMovieRating>{rating}</StyledMovieRating>
      <StyledMovieYear>{releasedData.slice(0, 4)}</StyledMovieYear>
    </StyledCardWrapper>
  );
};

export default Card;
