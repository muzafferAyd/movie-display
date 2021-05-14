import React from 'react'
import {StyledCardWrapper, StyledText} from './Card.style'




const Card = (prop) => {
    return (
        <StyledCardWrapper>
            <StyledText>{prop.title}</StyledText>
        </StyledCardWrapper>
    )
}

export default Card;