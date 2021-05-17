import Card from "../Card/Card";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AllMovies = ({ allMovieData, ImgUrl }) => {
  console.log("all", allMovieData);


  return (
    <>
        
      {allMovieData &&
        allMovieData.map((movie, index) => {
          return (
              <Card
                key={index}
                title={movie.title}
                posterImg={ImgUrl + movie.poster_path}
                rating={movie.vote_average}
                releasedData={movie.release_date}
              />
          );
        })} 
    
    </>
  );
};

export default AllMovies;
