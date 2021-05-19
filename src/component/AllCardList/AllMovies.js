import Card from "../Card/Card";
import React from "react";

const AllMovies = ({ allMovieData, ImgUrl }) => {
  return (
    <>
      {allMovieData &&
        allMovieData.map((movie, index) => {
          return (
            <Card
              key={index}
              title={movie.title}
              posterImg={
                movie.poster_path
                  ? ImgUrl + movie.poster_path
                  : "https://via.placeholder.com/150"
              }
              rating={movie.vote_average}
              releasedData={movie.release_date}
              id={movie.id}
            />
          );
        })}
    </>
  );
};

export default AllMovies;
