import React from 'react'
import {StyledCardWrapper, StyledText, StyledMovieImg} from './Card.style'




const Card = ({title, posterImg}) => {
    return (
        <StyledCardWrapper>
            <StyledMovieImg src={posterImg}></StyledMovieImg>
            <StyledText>{title}</StyledText>
        </StyledCardWrapper>
    )
}

export default Card;