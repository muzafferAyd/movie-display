import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  width: 150px;
  height: 200px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
  margin: 4px;
  padding: 2px;
  transition: 0.3s;
  position: relative;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0.3rem 0.3rem 0.9rem rgba(0, 0, 0, 0.1);
    opacity: 0.85;
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
  font-size: 0.5rem;
  font-weight: bold;
  font-family: "Avenir Roman", "Helvetica", Helvetica, Arial, sans-serif;
  text-align:center;
  margin-top:2px;
`;

export const StyledMovieYear = styled.p`
  font-size: 0.5rem;
  margin: 0;
  font-style: italic;
  font-weight: bold;
  position: absolute;
  bottom: 16%;
  left: 4%;
  background-color: #fff;
  border-radius:5px;
  padding:2px;
  opacity:0.7;
`;

export const StyledMovieImg = styled.img`
  width: auto;
  height: 86%;
  border-radius: 4px;
  position: relative;
`;
