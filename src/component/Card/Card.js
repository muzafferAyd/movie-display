import React from "react";
import {useHistory} from "react-router-dom"
import {
  StyledCardWrapper,
  StyledMovieTitle,
  StyledMovieImg,
  StyledMovieRating,
  StyledMovieYear,
} from "./Card.style";

const Card = ({ title, posterImg, rating, releasedData , id}) => {
  const history = useHistory();
  return (
    <StyledCardWrapper onClick={()=>history.push(`/detail/${id}`)}>
      <StyledMovieImg src={posterImg}></StyledMovieImg>
      <StyledMovieTitle>{title}</StyledMovieTitle>
      <StyledMovieRating>{rating}</StyledMovieRating>
      <StyledMovieYear>{releasedData.slice(0, 4)}</StyledMovieYear>
    </StyledCardWrapper>
  );
};

export default Card;
