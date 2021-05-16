import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  width: 9rem;
  height:12.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.1);
  margin: 4px;
  padding: 2px;
  transition: 0.3s;
  position: relative;
  background-color:rgb(37, 47, 47);
 
  
 
  &:hover {
    transform: scale(1.1);
    box-shadow: 0.3rem 0.3rem 0.9rem rgba(0, 0, 0, 0.1);
    opacity: 0.85;
    cursor: pointer;
  }
`;

export const StyledMovieRating = styled.div`
  background-color: #f4bd2c;
  border-radius: 100px;
  padding: 0 7px;
  line-height: 18px;
  font-weight: bold;
  color: #000;
  font-size: 12px;
  display: inline;
  position: absolute;
  top: 2%;
  right: 3%;
  
`;

export const StyledMovieTitle = styled.p`
  font-size: 0.7rem;
  font-weight: bold;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-align:center;
  margin: 0;
  box-sizing:border-box;
  color:white;
  letter-spacing: 1px;
  text-overflow:ellipsis;
  overflow:hidden;
  white-space:nowrap;
  align-items:center
`;

export const StyledMovieYear = styled.p`
  font-size: 0.7rem;
  margin: 0;
  font-style: italic;
  font-weight: bolder;
  position: absolute;
  bottom: 16%;
  left: 4%;
  background-color: #fff;
  border-radius:5px;
  padding:2px;
  opacity:0.7;
  text-align:center;
`;

export const StyledMovieImg = styled.img`
  width: inherit;
  height: 86%;
  border-radius: 4px;
  position: relative;
`;
