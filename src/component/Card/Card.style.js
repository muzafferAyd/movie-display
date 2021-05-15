import styled from "styled-components";

export const StyledCardWrapper = styled.div`
    width : 150px;
    height : 200px;
    border : 1px solid rgba(0,0,0,0.2);
    border-radius : 5px;
    box-shadow : 3px 2px 10px rgba(0,0,0,0.1);
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin:5px
   
`;

export const StyledText = styled.p`
    color:blue;
    font-size:0.65rem;
    margin:0;
`;

export const StyledMovieImg = styled.img`
    width: auto;
    height:80%;
`;